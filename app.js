(function () {
  const MODS = window.MODULES;
  const PASS = 0.7;
  const KEY = "formation-cm-ia-v1";
  const $ = (s) => document.querySelector(s);
  const content = $("#content");
  const sidebar = $("#sidebar");

  // --- état (localStorage) ---
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function save(st) { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} }
  let state = load();
  state.quiz = state.quiz || {};      // { id: { best, total, passed } }
  state.practice = state.practice || {}; // { id: true }

  const passed = (id) => !!(state.quiz[id] && state.quiz[id].passed);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function updateGlobal() {
    const n = MODS.filter((m) => passed(m.id)).length;
    const pct = Math.round((n / MODS.length) * 100);
    $("#globalBar").style.width = pct + "%";
    $("#globalLabel").textContent = pct + " % (" + n + "/" + MODS.length + ")";
  }

  function renderSidebar(activeId) {
    sidebar.innerHTML = '<div class="side-title">Parcours</div>' +
      MODS.map((m) => `<a href="#/m/${m.id}/cours" class="${passed(m.id) ? "done" : ""} ${m.id === activeId ? "active" : ""}">
        <span class="num">${passed(m.id) ? "✓" : m.id}</span><span>${esc(m.title)}</span></a>`).join("");
  }

  // --- rendu du contenu ---
  function renderTable(t) {
    return `<div class="table-wrap"><table><thead><tr>${t.head.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>` +
      t.rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("") + "</tbody></table></div>";
  }
  function renderSection(s) {
    let h = `<h2>${s.h}</h2>`;
    (s.p || []).forEach((p) => (h += `<p>${p}</p>`));
    if (s.list) h += "<ul>" + s.list.map((l) => `<li>${l}</li>`).join("") + "</ul>";
    if (s.table) h += renderTable(s.table);
    (s.p2 || []).forEach((p) => (h += `<p>${p}</p>`));
    return h;
  }

  function home() {
    renderSidebar(null);
    const n = MODS.filter((m) => passed(m.id)).length;
    const total = MODS.reduce((a, m) => a + parseInt(m.duration), 0);
    content.innerHTML = `
      <section class="hero">
        <h1>Réseaux sociaux, Community Management & IA</h1>
        <p>${MODS.length} modules, environ ${total} h de contenu. Pour chaque module : un cours détaillé, des exemples concrets, un exercice pratique et un questionnaire pour valider vos acquis.</p>
        <a class="btn" href="#/m/${nextModule()}/cours">${n ? "Continuer la formation" : "Commencer la formation"}</a>
      </section>
      <h2 style="margin-top:0">Les modules</h2>
      <div class="grid">${MODS.map((m) => {
        const q = state.quiz[m.id];
        return `<a class="card module-card" href="#/m/${m.id}/cours">
          <span class="ico">${m.icon}</span>
          <span class="meta">Module ${m.id} · ${m.duration}</span>
          <h3>${esc(m.title)}</h3>
          <span>${passed(m.id) ? `<span class="badge ok">Validé · ${q.best}/${q.total}</span>` : q ? `<span class="badge todo">À retenter · meilleur ${q.best}/${q.total}</span>` : '<span class="badge">Non commencé</span>'}</span>
        </a>`;
      }).join("")}</div>
      ${n === MODS.length ? '<div class="result pass"><strong>🎉 Formation terminée</strong>Vous avez validé tous les modules. Bravo !</div>' : ""}
      <p class="footer-note">Votre progression est enregistrée dans ce navigateur. <button class="btn ghost" id="reset" style="padding:4px 10px;font-size:.85rem">Réinitialiser</button></p>`;
    $("#reset").onclick = () => {
      if (confirm("Effacer toute votre progression ?")) { state = { quiz: {}, practice: {} }; save(state); route(); }
    };
  }

  function nextModule() {
    const m = MODS.find((x) => !passed(x.id));
    return m ? m.id : 1;
  }

  function moduleView(id, tab) {
    const m = MODS.find((x) => x.id === id);
    if (!m) return home();
    renderSidebar(id);
    const tabs = [["cours", "📖 Cours"], ["exemples", "💡 Exemples"], ["exercice", "🛠️ Exercice"], ["quiz", "✅ Questionnaire"]];
    if (!tabs.some((t) => t[0] === tab)) tab = "cours";
    let body = "";
    if (tab === "cours") {
      body = `<div class="objectives"><h3>Objectifs</h3><ul>${m.objectives.map((o) => `<li>${o}</li>`).join("")}</ul></div>` +
        m.sections.map(renderSection).join("");
    } else if (tab === "exemples") {
      body = `<p class="lead">Exemples concrets à adapter à votre contexte.</p>` +
        m.examples.map((e) => `<article class="card example"><h3>${e.title}</h3><div>${e.body}</div></article>`).join("");
    } else if (tab === "exercice") {
      body = `<div class="practice"><h3>Travaux pratiques</h3><p>${m.practice}</p>
        <label><input type="checkbox" id="pdone" ${state.practice[id] ? "checked" : ""}> J'ai réalisé cet exercice</label></div>`;
    } else {
      body = quizHtml(m);
    }
    const prev = MODS.find((x) => x.id === id - 1), next = MODS.find((x) => x.id === id + 1);
    content.innerHTML = `
      <a href="#/" class="meta">← Tous les modules</a>
      <p class="meta" style="margin-bottom:0">Module ${m.id} sur ${MODS.length} · ${m.duration}</p>
      <h1>${m.icon} ${esc(m.title)}</h1>
      <p class="lead">${m.intro}</p>
      <div class="tabs">${tabs.map((t) => `<a href="#/m/${id}/${t[0]}" class="${t[0] === tab ? "active" : ""}">${t[1]}</a>`).join("")}</div>
      ${body}
      <div class="nav-bottom">
        ${prev ? `<a class="btn ghost" href="#/m/${prev.id}/cours">← Module ${prev.id}</a>` : "<span></span>"}
        ${next ? `<a class="btn" href="#/m/${next.id}/cours">Module ${next.id} →</a>` : '<a class="btn" href="#/">Terminer</a>'}
      </div>`;
    if (tab === "exercice") {
      $("#pdone").onchange = (e) => { state.practice[id] = e.target.checked; save(state); };
    }
    if (tab === "quiz") bindQuiz(m);
  }

  // --- questionnaire ---
  function quizHtml(m) {
    const prev = state.quiz[m.id];
    return `<p class="lead">${m.quiz.length} questions · ${Math.round(PASS * 100)} % de bonnes réponses pour valider.
      ${prev ? `<br>Meilleur score : <b>${prev.best}/${prev.total}</b> ${prev.passed ? "(validé)" : ""}` : ""}</p>
      <form id="quizForm">${m.quiz.map((q, i) => `
        <fieldset class="q" style="border:1px solid var(--line)"><legend class="meta">Question ${i + 1}/${m.quiz.length}</legend>
          <h3>${q.q}</h3>
          ${q.options.map((o, j) => `<label class="opt" data-q="${i}" data-o="${j}"><input type="radio" name="q${i}" value="${j}"><span>${o}</span></label>`).join("")}
          <div class="why" id="why${i}" hidden></div>
        </fieldset>`).join("")}
        <div id="quizResult"></div>
        <button class="btn" type="submit" id="quizSubmit">Valider mes réponses</button>
      </form>`;
  }

  function bindQuiz(m) {
    const form = $("#quizForm");
    form.onsubmit = (e) => {
      e.preventDefault();
      let score = 0, unanswered = 0;
      m.quiz.forEach((q, i) => {
        const chosen = form.querySelector(`input[name=q${i}]:checked`);
        if (!chosen) unanswered++;
      });
      if (unanswered && !confirm(unanswered + " question(s) sans réponse. Valider quand même ?")) return;
      m.quiz.forEach((q, i) => {
        const chosen = form.querySelector(`input[name=q${i}]:checked`);
        const val = chosen ? Number(chosen.value) : -1;
        if (val === q.answer) score++;
        form.querySelectorAll(`.opt[data-q="${i}"]`).forEach((lab) => {
          const o = Number(lab.dataset.o);
          if (o === q.answer) lab.classList.add("right");
          else if (o === val) lab.classList.add("wrong");
          lab.querySelector("input").disabled = true;
        });
        const why = $("#why" + i);
        why.hidden = false;
        why.innerHTML = (val === q.answer ? "✅ Bonne réponse. " : "❌ " + (val === -1 ? "Pas de réponse. " : "Ce n'est pas la bonne réponse. ")) + q.why;
      });
      const total = m.quiz.length, ok = score / total >= PASS;
      const prev = state.quiz[m.id] || { best: 0, passed: false };
      state.quiz[m.id] = { best: Math.max(prev.best, score), total, passed: prev.passed || ok };
      save(state); updateGlobal(); renderSidebar(m.id);
      const res = $("#quizResult");
      res.className = "result " + (ok ? "pass" : "fail");
      res.innerHTML = `<strong>${score} / ${total}</strong>${ok ? "Module validé, bravo !" : "Relisez le cours et réessayez, vous y êtes presque."}`;
      res.scrollIntoView({ behavior: "smooth", block: "center" });
      const btn = $("#quizSubmit");
      btn.textContent = "Refaire le questionnaire";
      btn.type = "button";
      btn.onclick = () => moduleView(m.id, "quiz");
    };
  }

  // --- routage ---
  function route() {
    const h = location.hash.replace(/^#\/?/, "");
    const parts = h.split("/");
    if (parts[0] === "m" && parts[1]) moduleView(Number(parts[1]), parts[2]);
    else home();
    updateGlobal();
    sidebar.classList.remove("open");
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);
  $("#menuBtn").onclick = () => sidebar.classList.toggle("open");
  route();
})();
