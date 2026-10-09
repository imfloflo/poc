// Contenu de la formation. Les textes peuvent contenir du HTML simple (<b>, <i>, <code>).
window.MODULES = [
{
  id: 1, icon: "🌐", title: "Comprendre les réseaux sociaux et leurs tendances", duration: "3 h",
  intro: "Avant de publier, il faut comprendre où se trouve son audience, comment les plateformes décident de montrer (ou non) un contenu, et ce que les internautes disent déjà de la marque.",
  objectives: [
    "Décrire le rôle et le public de chaque grande plateforme",
    "Expliquer les grands principes des algorithmes de recommandation",
    "Mesurer l'impact des avis et de l'e-réputation sur une marque",
    "Choisir 2 à 3 réseaux prioritaires selon ses objectifs et ses ressources"
  ],
  sections: [
    { h: "Panorama des principaux réseaux", p: ["Chaque réseau a ses usages, son ton et son public. Être partout n'est pas une stratégie : mieux vaut bien tenir deux réseaux que mal en tenir six."],
      table: { head: ["Réseau", "Public & usage", "Idéal pour", "Formats clés"], rows: [
        ["Facebook", "Large, 35 ans et +, groupes locaux", "Communauté locale, service client, publicité ciblée", "Posts, groupes, events, Reels"],
        ["Instagram", "18-44 ans, visuel et lifestyle", "Marque, e-commerce, inspiration", "Reels, carrousels, stories"],
        ["LinkedIn", "Professionnels, B2B", "Marque employeur, leadership d'opinion, leads B2B", "Posts texte, documents PDF, articles, vidéo"],
        ["TikTok", "Gen Z et millennials, découverte", "Notoriété, tendances, social search", "Vidéos courtes, lives"],
        ["YouTube", "Tous âges, recherche et tutoriels", "Contenu durable, pédagogie, SEO vidéo", "Vidéos longues, Shorts"],
        ["X / Threads / Bluesky", "Actualité, conversation", "Veille, relation presse, réactivité", "Textes courts, fils"],
        ["Pinterest", "Inspiration, achat planifié", "Déco, mode, cuisine, DIY", "Épingles, tableaux"],
        ["WhatsApp / Messenger", "Messagerie, relation directe", "Service client, communautés privées", "Chaînes, broadcasts, bots"]
      ]}},
    { h: "Comment fonctionnent les algorithmes", p: ["Les plateformes veulent garder l'utilisateur le plus longtemps possible. Elles classent donc les contenus selon des signaux de pertinence et d'intérêt anticipé."],
      list: [
        "<b>Rétention</b> : durée de visionnage, taux de complétion d'une vidéo, temps passé sur un carrousel.",
        "<b>Interactions à forte valeur</b> : partages et enregistrements pèsent plus que les simples « j'aime » ; les commentaires longs pèsent plus que les emojis.",
        "<b>Pertinence thématique</b> : l'algorithme détecte le sujet (texte, voix, texte à l'écran) et le propose aux personnes qui s'y intéressent, même sans être abonnées (modèle de recommandation sur TikTok, Reels, Shorts).",
        "<b>Relation</b> : sur LinkedIn ou Facebook, les contenus de personnes avec qui l'on interagit sont favorisés.",
        "<b>Fraîcheur et régularité</b> : les premières heures de performance déclenchent (ou non) une diffusion plus large.",
        "<b>Signaux négatifs</b> : masquer, signaler, « pas intéressé », désabonnement. Un contenu trompeur ou du clickbait est pénalisé."
      ]},
    { h: "Tendances à maîtriser", list: [
        "<b>Vidéo courte verticale</b> : format dominant pour la découverte.",
        "<b>Social search</b> : les jeunes cherchent sur TikTok et Instagram comme sur un moteur de recherche. Les mots-clés dans les légendes, sous-titres et textes à l'écran deviennent essentiels.",
        "<b>Authenticité et coulisses</b> : contenus bruts, visages d'employés, preuve sociale, face au flot de contenus générés par IA.",
        "<b>Créateurs et micro-influence</b> : confiance plus forte, coût plus faible, taux d'engagement supérieur aux grandes célébrités.",
        "<b>Social commerce</b> : achat directement dans l'application (TikTok Shop, Instagram Shopping).",
        "<b>Communautés privées</b> : groupes, chaînes de diffusion, newsletters, où l'on contrôle davantage la relation."
      ]},
    { h: "Avis consommateurs et e-réputation", p: ["L'e-réputation est l'image d'une marque telle qu'elle apparaît en ligne : réseaux sociaux, avis Google, Trustpilot, forums, presse, commentaires."],
      list: [
        "Une grande majorité des consommateurs consultent des avis avant d'acheter, et accordent plus de confiance à des pairs qu'à une publicité.",
        "Un avis négatif traité avec professionnalisme peut renforcer la confiance : les lecteurs jugent surtout la réponse.",
        "Les <b>avis Google</b> influencent directement le référencement local et le taux de clic.",
        "Un bad buzz mal géré peut coûter des ventes, des recrutements et de la valeur de marque ; la <b>réactivité</b> et la <b>transparence</b> limitent les dégâts."
      ]},
    { h: "Choisir ses réseaux : la matrice objectif / cible / ressources", p: ["Pour chaque réseau envisagé, posez trois questions :"],
      list: [
        "<b>Ma cible y est-elle ?</b> (âge, usage, profession)",
        "<b>Mon objectif y est-il atteignable ?</b> (notoriété, trafic, leads, service client, recrutement)",
        "<b>Ai-je les ressources ?</b> (temps, compétences vidéo, budget)",
        "Si deux réponses sur trois sont « oui » : le réseau est candidat. Démarrer avec 2 à 3 réseaux maximum."
      ]}
  ],
  examples: [
    { title: "Boulangerie artisanale de quartier", body: "<b>Cible</b> : habitants à 5 km, 25-55 ans. <b>Objectif</b> : faire venir en boutique. <b>Choix</b> : Instagram (Reels de fabrication, stories du jour) + Google Business Profile (avis, horaires, photos) + Facebook (groupe du quartier). TikTok et LinkedIn écartés : peu de pertinence locale, ressources limitées." },
    { title: "Cabinet de conseil RH (B2B)", body: "<b>Cible</b> : DRH de PME. <b>Objectif</b> : leads qualifiés et crédibilité. <b>Choix</b> : LinkedIn (posts d'expertise hebdomadaires, documents PDF, témoignages clients) + newsletter. Instagram écarté." },
    { title: "Marque de cosmétiques bio (B2C)", body: "<b>Cible</b> : 18-35 ans. <b>Objectif</b> : notoriété et ventes en ligne. <b>Choix</b> : TikTok et Instagram Reels (routines, avant/après, UGC), partenariats avec micro-influenceurs, YouTube pour les tutoriels longs." },
    { title: "Exemple de bad buzz maîtrisé", body: "Un restaurant reçoit un avis 1 étoile très virulent. Réponse en moins de 24 h : « Bonjour M. Durand, nous sommes désolés de cette expérience, ce n'est pas notre standard. Nous aimerions comprendre ce qui s'est passé. Pouvez-vous nous écrire à contact@… ? ». Résultat : l'auteur modifie son avis, et les futurs clients voient une marque à l'écoute." }
  ],
  practice: "Réflexion collective : remplissez un tableau d'audit pour votre marque (réseaux présents, fréquence, formats, engagement moyen, 3 derniers avis négatifs et vos réponses). Identifiez les 3 écarts les plus importants entre votre présence actuelle et les attentes de vos clients.",
  quiz: [
    { q: "Selon la plupart des algorithmes de recommandation, quel signal est généralement le plus fort ?", options: ["Le nombre d'abonnés du compte", "La rétention (temps de visionnage, taux de complétion)", "Le nombre de hashtags utilisés", "L'heure exacte de publication"], answer: 1, why: "Les plateformes cherchent à garder l'utilisateur : le temps passé et la complétion sont des signaux dominants." },
    { q: "Quel réseau est le plus adapté à une stratégie de marque employeur B2B ?", options: ["Pinterest", "TikTok", "LinkedIn", "Snapchat"], answer: 2, why: "LinkedIn concentre un public professionnel et les contenus liés au travail et au recrutement." },
    { q: "Qu'est-ce que le « social search » ?", options: ["Rechercher des amis sur un réseau", "Utiliser les réseaux sociaux comme moteur de recherche", "Un outil de publicité de Meta", "La recherche d'influenceurs"], answer: 1, why: "Beaucoup d'internautes cherchent restaurants, tutoriels ou produits directement sur TikTok ou Instagram : les mots-clés comptent." },
    { q: "Face à un avis négatif, quelle attitude est la plus efficace ?", options: ["Le supprimer ou l'ignorer", "Répondre vite, avec empathie, et proposer de continuer en privé", "Répondre en contestant publiquement", "Poster de faux avis positifs"], answer: 1, why: "Les futurs clients jugent la qualité de la réponse. Les faux avis sont illégaux et risqués." },
    { q: "Combien de réseaux faut-il viser au départ ?", options: ["Tous, pour maximiser la portée", "2 à 3, bien choisis selon cible, objectif et ressources", "Un seul, quelle que soit la cible", "Autant que de concurrents"], answer: 1, why: "La régularité et la qualité priment sur la dispersion." },
    { q: "Pourquoi les enregistrements et partages pèsent-ils plus qu'un « j'aime » ?", options: ["Ils sont plus rares", "Ils indiquent une valeur perçue plus forte du contenu", "Ils sont payants", "Ils sont gérés par un autre algorithme"], answer: 1, why: "Enregistrer ou partager signifie « utile » ou « à montrer », un signal de qualité plus fort." }
  ]
},
{
  id: 2, icon: "🧠", title: "Comprendre l'IA pour le community management", duration: "3 h",
  intro: "L'IA générative est devenue un outil de travail quotidien. Pour s'en servir efficacement et sans risque, il faut comprendre ce qu'elle fait réellement, ses limites, le cadre légal, et savoir lui parler.",
  objectives: [
    "Distinguer IA, machine learning, deep learning, LLM et IA générative",
    "Connaître les familles d'outils et leurs usages",
    "Appliquer les règles éthiques et légales (RGPD, droit d'auteur, AI Act)",
    "Construire un prompt structuré et itérer pour l'améliorer"
  ],
  sections: [
    { h: "Les concepts clés", list: [
        "<b>IA</b> : ensemble de techniques permettant à une machine d'accomplir des tâches associées à l'intelligence humaine.",
        "<b>Machine learning</b> : le système apprend à partir de données plutôt que de règles écrites à la main (ex. : filtre anti-spam).",
        "<b>Deep learning</b> : apprentissage par réseaux de neurones profonds (reconnaissance d'images, voix, langage).",
        "<b>NLP / NLU / NLG</b> : traitement, compréhension et génération du langage naturel.",
        "<b>IA générative</b> : produit du contenu nouveau (texte, image, audio, vidéo, code).",
        "<b>LLM (Large Language Model)</b> : modèle de langage entraîné sur d'immenses corpus, qui prédit la suite la plus probable d'un texte. C'est le moteur de ChatGPT, Claude, Gemini, Mistral…",
        "<b>Chatbot</b> : programme qui dialogue avec l'utilisateur, avec règles (scénarios) ou avec un LLM.",
        "<b>Agent IA</b> : système qui enchaîne des actions (chercher, rédiger, publier) avec des outils."
      ]},
    { h: "Ce que l'IA fait bien… et mal", p: ["Un LLM ne « sait » pas : il produit un texte plausible. Il faut donc toujours vérifier."],
      table: { head: ["Points forts", "Limites"], rows: [
        ["Reformuler, résumer, traduire", "Hallucinations : inventer des faits, chiffres ou sources"],
        ["Produire des idées et des variantes rapidement", "Biais issus des données d'entraînement"],
        ["Structurer un plan, un calendrier", "Connaissance limitée à une date, sauf outil de recherche"],
        ["Adapter un ton ou un format", "Style générique si le prompt est vague"],
        ["Analyser de grands volumes de commentaires", "Aucune connaissance de votre marque sans contexte"]
      ]}},
    { h: "Panorama des outils", table: { head: ["Famille", "Exemples", "Usage en community management"], rows: [
        ["Assistants texte", "ChatGPT, Claude, Gemini, Mistral Le Chat, Copilot", "Idées, rédaction, réponses, analyse"],
        ["Recherche sourcée", "Perplexity, Gemini, ChatGPT avec recherche", "Veille, vérification, tendances"],
        ["Image", "Midjourney, GPT Image / DALL·E, Adobe Firefly, Ideogram, Flux", "Visuels, illustrations, déclinaisons"],
        ["Vidéo / avatar", "Runway, Veo, Sora, Kling, HeyGen, Synthesia", "Clips, vidéos explicatives, traductions"],
        ["Audio", "ElevenLabs, outils de transcription", "Voix off, sous-titres, podcasts"],
        ["Design assisté", "Canva Magic Studio, Adobe Express, CapCut", "Montages, mises en forme, sous-titres"],
        ["Automatisation", "Zapier, Make, n8n", "Enchaîner veille, rédaction, validation, publication"]
      ]}, p: ["Les noms et les fonctionnalités évoluent vite : retenez les familles d'usage plutôt que les marques."] },
    { h: "Cadre éthique et légal", list: [
        "<b>RGPD</b> : ne jamais saisir de données personnelles (noms, e-mails, messages privés de clients) dans un outil non validé. Anonymiser avant.",
        "<b>Confidentialité</b> : ne pas coller de documents internes sensibles dans une IA grand public ; vérifier les paramètres (désactiver l'entraînement sur vos données si possible).",
        "<b>Droit d'auteur</b> : la propriété et les droits sur les contenus générés sont encadrés différemment selon les pays ; éviter de copier le style d'un artiste vivant ; vérifier les conditions des outils.",
        "<b>Droit à l'image</b> : ne pas générer ni modifier le visage d'une personne réelle sans son accord.",
        "<b>AI Act européen</b> : obligation de transparence sur certains contenus générés ou truqués (deepfakes) ; les plateformes demandent aussi d'étiqueter les contenus IA réalistes.",
        "<b>Transparence et honnêteté</b> : ne pas simuler de faux avis ou faux témoignages ; indiquer qu'un chatbot est un chatbot.",
        "<b>Responsabilité humaine</b> : la marque reste responsable de ce qui est publié. Toujours relire."
      ]},
    { h: "Construire un bon prompt : la méthode RCTFE", p: ["Un prompt efficace combine cinq éléments :"],
      list: [
        "<b>R</b>ôle : « Tu es community manager senior spécialisé dans la restauration. »",
        "<b>C</b>ontexte : marque, cible, ton, objectif, contraintes.",
        "<b>T</b>âche : ce que l'on attend précisément.",
        "<b>F</b>ormat : liste, tableau, nombre de caractères, nombre de variantes.",
        "<b>E</b>xemples : un ou deux exemples de ce que l'on aime (ou n'aime pas)."
      ],
      p2: ["Ensuite, <b>itérer</b> : demander de raccourcir, de changer de ton, de justifier, de proposer des alternatives. Enfin, <b>sauvegarder</b> les prompts qui fonctionnent dans une bibliothèque."]}
  ],
  examples: [
    { title: "Prompt vague vs prompt structuré", body: "<b>Vague :</b> « Écris un post pour mon restaurant. »<br><br><b>Structuré :</b> <code>Tu es community manager d'un restaurant italien familial à Lyon. Cible : couples et familles 30-50 ans. Ton : chaleureux, un peu d'humour, jamais familier à l'excès. Tâche : écris 3 variantes de post Instagram annonçant notre nouvelle pizza truffe, disponible dès vendredi. Format : 300 caractères max, 1 emoji maximum, une question finale pour inciter aux commentaires, 5 hashtags. N'invente aucun prix.</code>" },
    { title: "Anonymiser avant d'analyser", body: "Mauvais : coller « Mme Martin, 06 12 34 56 78, a écrit que sa commande est arrivée cassée ». Bon : « Une cliente indique que sa commande est arrivée cassée. Propose une réponse empathique et une solution. »" },
    { title: "Itération", body: "Après une première réponse : « Raccourcis à 150 caractères », « Garde l'idée n°2 mais avec un ton plus institutionnel », « Quelles hypothèses as-tu faites ? Liste-les pour que je les vérifie »." },
    { title: "Détecter une hallucination", body: "L'IA cite : « Selon une étude de 2024, 78 % des Français… ». Réflexe : demander la source, la rechercher, ne publier que si elle est vérifiable. Sinon retirer le chiffre." }
  ],
  practice: "Rédigez une charte d'usage de l'IA en 5 règles pour votre équipe (données autorisées, relecture, mentions, outils validés, cas interdits). Puis créez vos 5 premiers prompts maison avec la méthode RCTFE (idée de post, réponse à un avis, reformulation, plan de calendrier, analyse de commentaires).",
  quiz: [
    { q: "Un LLM est avant tout…", options: ["Une base de données de faits vérifiés", "Un modèle qui prédit la suite plausible d'un texte", "Un moteur de recherche", "Un logiciel de retouche d'image"], answer: 1, why: "Il génère du texte plausible, d'où le risque d'erreurs et la nécessité de vérifier." },
    { q: "Que signifie le sigle RGPD dans ce contexte ?", options: ["Une norme de qualité des images", "Le règlement européen sur la protection des données personnelles", "Un format de fichier", "Une licence d'IA"], answer: 1, why: "Il impose de ne pas diffuser de données personnelles sans base légale, y compris vers des outils d'IA." },
    { q: "Quel élément ne fait PAS partie de la méthode RCTFE ?", options: ["Rôle", "Contexte", "Budget", "Format"], answer: 2, why: "RCTFE : Rôle, Contexte, Tâche, Format, Exemples." },
    { q: "Une IA vous donne un chiffre précis sans source. Que faites-vous ?", options: ["Je le publie, l'IA est fiable", "Je vérifie la source ou je retire le chiffre", "Je l'arrondis", "Je demande à l'IA de confirmer sa propre réponse"], answer: 1, why: "Les hallucinations de chiffres sont fréquentes. Seule une source externe vérifiable valide l'information." },
    { q: "Qui est responsable d'un contenu publié avec l'aide d'une IA ?", options: ["L'éditeur de l'outil", "La plateforme", "La marque ou la personne qui publie", "Personne"], answer: 2, why: "La responsabilité éditoriale reste humaine." },
    { q: "Parmi ces pratiques, laquelle est à proscrire ?", options: ["Anonymiser un message client avant analyse", "Étiqueter un visuel IA réaliste", "Générer de faux avis clients positifs", "Relire un texte généré"], answer: 2, why: "Les faux avis sont trompeurs et sanctionnés par la loi et par les plateformes." }
  ]
},
{
  id: 3, icon: "🎯", title: "Définir sa stratégie avec l'IA", duration: "3 h",
  intro: "Une stratégie social media répond à quatre questions : pour qui, pourquoi, où et comment ? L'IA accélère la réflexion, mais ne remplace ni les données réelles ni le jugement stratégique.",
  objectives: [
    "Construire des personas et valider leurs hypothèses",
    "Fixer des objectifs SMART et des KPI",
    "Définir une ligne éditoriale (piliers, ton)",
    "Bâtir un calendrier éditorial réaliste"
  ],
  sections: [
    { h: "Connaître son audience", p: ["Un persona est un portrait type de client : contexte, besoins, freins, réseaux utilisés, vocabulaire. L'IA aide à les formuler, mais doit s'appuyer sur vos données."],
      list: [
        "Sources réelles : statistiques des plateformes (âge, ville, heures d'activité), questions reçues en DM, avis, ventes, entretiens clients.",
        "Demandez à l'IA de structurer ces éléments en personas, puis de proposer des contenus pour chacun.",
        "Faites-lui jouer l'<b>avocat du diable</b> : « Quelles hypothèses de ce persona sont fragiles ? »",
        "Limitez-vous à 2 ou 3 personas utiles."
      ]},
    { h: "Fixer des objectifs et des KPI", p: ["Un objectif SMART est Spécifique, Mesurable, Atteignable, Réaliste, Temporel."],
      table: { head: ["Étape de l'entonnoir", "Objectif", "KPI courants"], rows: [
        ["Visibilité", "Se faire connaître", "Portée, impressions, vues, nouveaux abonnés"],
        ["Engagement", "Créer de l'interaction", "Taux d'engagement, partages, enregistrements, commentaires"],
        ["Conversion", "Générer des actions", "Clics, leads, ventes, inscriptions"],
        ["Fidélisation", "Retenir et recommander", "Avis, UGC, taux de réponse, NPS"]
      ]}},
    { h: "Analyse de la concurrence et benchmark", list: [
        "Choisissez 3 à 5 comptes comparables (concurrents directs, modèles inspirants).",
        "Relevez : fréquence, formats, thèmes, engagement moyen, ton, points faibles.",
        "L'IA peut aider à synthétiser vos relevés et à repérer des angles non exploités, mais elle ne doit pas inventer de chiffres : donnez-lui vos données."
      ]},
    { h: "La ligne éditoriale", p: ["Elle définit <b>de quoi</b> et <b>comment</b> vous parlez."],
      list: [
        "<b>Piliers de contenu</b> (3 à 5) : par ex. expertise, coulisses, preuves clients, actualité, divertissement.",
        "<b>Ton et personnalité</b> : 3 adjectifs (ex. : chaleureux, pédagogue, direct) et ce que vous ne ferez jamais.",
        "<b>Règles de forme</b> : charte graphique, emojis, hashtags, langue, signature.",
        "<b>Ratio</b> : par exemple 40 % éducatif, 30 % inspirant, 20 % preuve sociale, 10 % promotionnel."
      ]},
    { h: "Le calendrier éditorial", list: [
        "Rythme réaliste et tenable (mieux vaut 3 posts par semaine pendant 6 mois que 7 pendant 2 semaines).",
        "Intégrer les temps forts : soldes, fêtes, saisons, événements du secteur, lancements.",
        "Colonnes types : date, réseau, pilier, format, message, visuel, CTA, responsable, statut.",
        "L'IA propose un squelette de calendrier ; vous l'ajustez avec votre connaissance du terrain."
      ]},
    { h: "Professionnaliser son organisation", list: [
        "Définir les rôles : qui crée, qui valide, qui publie, qui répond.",
        "Circuit de validation et délais (ex. validation sous 24 h).",
        "Plan de gestion de crise : seuils d'alerte, porte-parole, messages types.",
        "Revue mensuelle des indicateurs et ajustement."
      ]}
  ],
  examples: [
    { title: "Prompt de création de persona", body: "<code>À partir de ces données réelles : 62 % de nos abonnés sont des femmes de 28 à 42 ans, ville : Nantes, questions les plus fréquentes : livraison et ingrédients, achat principal : box mensuelle à 29 €. Rédige 2 personas (prénom, âge, situation, besoins, freins, réseaux utilisés, questions types, contenus qui lui plaisent). Termine par la liste des hypothèses à vérifier.</code>" },
    { title: "Exemple d'objectif SMART", body: "« Passer de 1 200 à 1 800 abonnés Instagram et obtenir 150 clics vers la boutique par mois d'ici le 31 mars grâce à 3 Reels par semaine. »" },
    { title: "Piliers pour un cabinet comptable", body: "1) Pédagogie fiscale (30 %) · 2) Coulisses du cabinet (20 %) · 3) Témoignages de clients (20 %) · 4) Actualités légales (20 %) · 5) Offres (10 %). Ton : rassurant, clair, sans jargon." },
    { title: "Extrait de calendrier éditorial", body: "<b>Lundi</b> LinkedIn – carrousel « 5 erreurs de facturation » · <b>Mercredi</b> Instagram – Reel coulisses · <b>Vendredi</b> LinkedIn – témoignage client · Semaine 3 : lancement de l'offre « Création d'entreprise »." }
  ],
  practice: "Avec l'IA, créez 2 personas à partir de vos données réelles, formulez 3 objectifs SMART, définissez 4 piliers éditoriaux avec leur ratio, puis générez un calendrier sur 4 semaines que vous corrigez ensuite manuellement.",
  quiz: [
    { q: "Que signifie le « M » de SMART ?", options: ["Motivant", "Mesurable", "Marketing", "Maximal"], answer: 1, why: "Un objectif doit pouvoir être mesuré par un chiffre." },
    { q: "Quelle est la bonne utilisation de l'IA pour créer un persona ?", options: ["L'inventer entièrement à partir de rien", "La construire à partir de vos données réelles puis tester les hypothèses", "Copier le persona d'un concurrent", "Ne pas en créer"], answer: 1, why: "Sans données, le persona est fantaisiste." },
    { q: "Quel KPI relève de l'étape « Engagement » ?", options: ["Les impressions", "Le chiffre d'affaires", "Les enregistrements et commentaires", "Le coût par clic"], answer: 2, why: "Interactions, partages et commentaires mesurent l'engagement." },
    { q: "Qu'est-ce qu'un pilier de contenu ?", options: ["Un format vidéo", "Un grand thème récurrent de la ligne éditoriale", "Un outil de planification", "Un type d'audience"], answer: 1, why: "Les piliers structurent les sujets traités." },
    { q: "Un calendrier éditorial doit être…", options: ["Le plus chargé possible", "Réaliste et tenable dans la durée", "Identique sur tous les réseaux", "Laissé à l'IA sans relecture"], answer: 1, why: "La régularité durable prime sur l'intensité ponctuelle." },
    { q: "Pourquoi demander à l'IA les « hypothèses fragiles » ?", options: ["Pour gagner du temps", "Pour identifier ce qu'il faut valider par des données réelles", "Pour faire plaisir à l'outil", "Ce n'est pas utile"], answer: 1, why: "Cela limite le risque de décisions basées sur des suppositions." }
  ]
},
{
  id: 4, icon: "✍️", title: "Créer des contenus attractifs", duration: "4 h",
  intro: "Un bon contenu attire l'attention en 2 secondes, apporte de la valeur, et donne envie d'agir. L'IA accélère la production, mais l'identité de marque et le jugement restent humains.",
  objectives: [
    "Appliquer les règles juridiques (droit d'auteur, image, mentions)",
    "Rédiger un post efficace pour chaque réseau (AIDA, PAS, storytelling)",
    "Optimiser le référencement social (social SEO)",
    "Produire visuels et vidéos avec les bons outils, dont l'IA"
  ],
  sections: [
    { h: "Règles à respecter", list: [
        "<b>Droit d'auteur</b> : une image, une musique ou un texte trouvé en ligne n'est pas libre de droits par défaut. Utilisez des banques libres (Unsplash, Pexels), la bibliothèque musicale de la plateforme ou des visuels que vous avez créés.",
        "<b>Droit à l'image</b> : autorisation écrite pour toute personne identifiable (clients, salariés).",
        "<b>Publicité et partenariats</b> : mention claire (#collaborationcommerciale, outil « partenariat rémunéré »).",
        "<b>Concours</b> : règlement, mention que le jeu n'est pas affilié à la plateforme."
      ]},
    { h: "Les accroches et les structures de rédaction", list: [
        "<b>AIDA</b> : Attention (accroche), Intérêt (problème ou bénéfice), Désir (preuve, histoire), Action (appel à l'action).",
        "<b>PAS</b> : Problème, Agitation (conséquences), Solution.",
        "<b>Storytelling</b> : situation initiale, obstacle, tournant, résolution, leçon.",
        "<b>Accroches efficaces</b> : chiffre, question, promesse, contradiction, scène vécue. La première ligne décide si le lecteur cliquera sur « voir plus ».",
        "<b>Appel à l'action</b> : un seul, clair (« Enregistrez pour plus tard », « Dites-nous en commentaire »)."
      ]},
    { h: "Écrire pour chaque réseau", table: { head: ["Réseau", "Particularités de rédaction"], rows: [
        ["LinkedIn", "Accroche forte dans les 2 premières lignes, paragraphes courts, retours à la ligne, valeur concrète, 3 hashtags maximum"],
        ["Instagram", "Légende utile avec mots-clés, première ligne accrocheuse, CTA, hashtags ciblés en quantité modérée, alt text"],
        ["TikTok", "Hook dans les 2 premières secondes, texte à l'écran, voix, sous-titres, légende courte avec mots-clés"],
        ["Facebook", "Ton conversationnel, question à la communauté, événements, groupes"],
        ["YouTube", "Titre avec mot-clé, miniature, description structurée, chapitres"],
        ["X / Threads", "Une idée par message, réactivité, fil pour développer"]
      ]}},
    { h: "Social SEO", list: [
        "Placez les mots-clés réellement recherchés dans la légende, la voix, les sous-titres et le texte à l'écran.",
        "Utilisez des noms de fichiers et textes alternatifs descriptifs.",
        "Utilisez les suggestions de recherche de TikTok/Instagram/YouTube comme source d'idées.",
        "Complétez le profil : nom, bio avec mots-clés, localisation, lien."
      ]},
    { h: "Formats à fort impact", list: [
        "<b>Reels / TikTok / Shorts</b> : hook, rythme rapide, sous-titres, boucle finale.",
        "<b>Carrousels</b> : une idée par slide, titre fort en première slide, CTA en dernière.",
        "<b>Stories</b> : sondages, quiz, boîtes à questions, coulisses éphémères.",
        "<b>Lives</b> : annoncer à l'avance, préparer les questions, réutiliser le replay.",
        "<b>UGC</b> (contenus créés par les clients) : demander l'autorisation, créditer."
      ]},
    { h: "L'IA au service de la rédaction", list: [
        "<b>Déclinaison</b> : à partir d'un contenu pilier (article, vidéo), générer posts LinkedIn, carrousel, légendes Instagram, thread.",
        "<b>Variantes</b> : 5 accroches différentes pour tester celles qui performent.",
        "<b>Adaptation de ton</b> : institutionnel, humoristique, pédagogique.",
        "<b>Relecture</b> : correction, clarté, cohérence avec la charte.",
        "<b>Éviter l'effet « IA »</b> : donner des exemples de votre style, interdire les formules creuses (« dans un monde en constante évolution… »), ajouter vos anecdotes réelles."
      ]},
    { h: "Outils de création", table: { head: ["Besoin", "Outils"], rows: [
        ["Visuels et templates", "Canva (Magic Studio), Adobe Express"],
        ["Montage vidéo mobile", "CapCut, Mojo, InShot"],
        ["Sous-titres automatiques", "CapCut, YouTube Studio, outils intégrés des plateformes"],
        ["Détourage, suppression d'objet", "Cleanup.pictures, Canva, Photoshop Express"],
        ["Images génératives", "Adobe Firefly, Midjourney, GPT Image, Ideogram"],
        ["Vidéo générative / avatar", "Runway, Veo, HeyGen"]
      ]}},
    { h: "A/B testing", p: ["Testez une seule variable à la fois (accroche, visuel, heure, CTA), sur des audiences comparables, assez longtemps. Meta, YouTube (miniatures) et les newsletters proposent des tests natifs. Gardez ce qui fonctionne dans une bibliothèque de modèles."]},
    { h: "Automatiser ses prompts", list: [
        "Créez un <b>GPT personnalisé</b> ou un projet avec des instructions persistantes : ton de marque, mots interdits, formats par réseau.",
        "Sauvegardez des prompts modèles avec des champs à remplir : [sujet], [cible], [objectif].",
        "Gardez un exemple de bon post par réseau comme référence de style."
      ]}
  ],
  examples: [
    { title: "Post LinkedIn avec la structure PAS", body: "<b>Accroche :</b> « Votre facture impayée vous coûte plus que vous ne le pensez. »<br><b>Problème :</b> 1 facture sur 4 est payée en retard dans les TPE.<br><b>Agitation :</b> trésorerie tendue, relances chronophages, tensions avec le client.<br><b>Solution :</b> 3 gestes simples : acompte, rappel automatique à J+3, pénalités de retard affichées.<br><b>CTA :</b> « Quel est votre délai de paiement moyen ? Dites-le en commentaire. »" },
    { title: "Carrousel Instagram « 5 erreurs de cuisson du pain »", body: "Slide 1 : titre choc. Slides 2 à 6 : une erreur + sa solution + visuel. Slide 7 : « Enregistrez pour votre prochaine fournée » et rappel de l'atelier du samedi." },
    { title: "Prompt de déclinaison", body: "<code>Voici notre article de blog [coller le texte]. Décline-le en : 1) un post LinkedIn de 900 caractères avec accroche chiffrée, 2) un carrousel de 7 slides (titre + 20 mots par slide), 3) 3 idées de Reels de 20 secondes avec le hook de la première seconde. Ton : pédagogue, simple, sans jargon. Interdits : « dans un monde en constante évolution », « il est essentiel de ».</code>" },
    { title: "Script de Reel de 20 secondes", body: "0-2 s hook : « Vous faites cette erreur avec votre pâte ? » · 2-12 s démonstration en 3 gestes avec sous-titres · 12-18 s résultat avant/après · 18-20 s CTA « Suivez-nous pour la suite » et retour au premier plan pour boucler." }
  ],
  practice: "Choisissez un contenu pilier (article, offre, événement). Avec l'IA, déclinez-le en un post par réseau utilisé, rédigez 5 accroches et testez-en 2. Créez ensuite un visuel dans Canva, une vidéo courte sous-titrée dans CapCut et une illustration générée par IA. Comparez vos versions avec la checklist qualité (accroche, valeur, CTA, droits).",
  quiz: [
    { q: "Que signifie AIDA ?", options: ["Audience, Impact, Données, Action", "Attention, Intérêt, Désir, Action", "Accroche, Image, Durée, Appel", "Analyse, Idée, Diffusion, Audit"], answer: 1, why: "AIDA : Attention, Intérêt, Désir, Action." },
    { q: "Pour le social SEO, où placer les mots-clés ?", options: ["Uniquement dans les hashtags", "Dans la légende, la voix, les sous-titres, le texte à l'écran et la bio", "Nulle part", "Uniquement dans la miniature"], answer: 1, why: "Les plateformes analysent l'ensemble des signaux textuels et audio." },
    { q: "Une image trouvée sur Google Images est…", options: ["Libre de droits", "Utilisable si on cite Google", "À considérer comme protégée sauf licence explicite", "Toujours gratuite"], answer: 2, why: "Sans licence explicite, l'image reste protégée." },
    { q: "Pour éviter qu'un texte ait un « effet IA », il faut…", options: ["Le publier tel quel", "Donner des exemples de votre style, des anecdotes réelles et des interdits", "Augmenter la longueur", "Utiliser plus d'emojis"], answer: 1, why: "Le contexte et des exemples personnels rendent le texte singulier." },
    { q: "Dans un A/B test, il faut idéalement…", options: ["Changer plusieurs éléments en même temps", "Tester une seule variable à la fois", "Tester sans durée définie", "Ne tester que sur un réseau"], answer: 1, why: "Une seule variable permet d'identifier la cause de la différence." },
    { q: "La structure PAS correspond à…", options: ["Problème, Agitation, Solution", "Public, Accroche, Style", "Post, Audience, Suivi", "Plan, Action, Statistiques"], answer: 0, why: "PAS : Problème, Agitation, Solution." },
    { q: "Un contenu sponsorisé doit…", options: ["Rester discret", "Être clairement signalé comme partenariat", "Ne pas mentionner la marque", "Être supprimé après 24 h"], answer: 1, why: "La loi et les plateformes imposent la transparence." }
  ]
},
{
  id: 5, icon: "💬", title: "Gérer ses communautés et modérer", duration: "3 h",
  intro: "Une communauté se construit dans les commentaires et messages autant que dans les publications. La modération protège la marque, les membres, et transforme chaque interaction en occasion de fidéliser.",
  objectives: [
    "Rédiger une charte de comportement et des règles de modération",
    "Reconnaître les profils de commentateurs et adapter la réponse",
    "Répondre aux avis positifs et négatifs",
    "Utiliser l'IA et la modération automatique avec discernement"
  ],
  sections: [
    { h: "La charte de comportement", p: ["Elle précise ce qui est accepté ou non sur vos espaces. Publiez-la dans la bio, un post épinglé ou la description du groupe."],
      list: [
        "Respect : pas d'insultes, de discriminations, de harcèlement.",
        "Pas de spam, de publicité non autorisée, de liens douteux.",
        "Pas de données personnelles (téléphone, adresse) dans les commentaires.",
        "Les conséquences : masquage, avertissement, blocage, signalement.",
        "Les délais de réponse annoncés (ex. : « Nous répondons du lundi au vendredi, sous 24 h »)."
      ]},
    { h: "Typologie des comportements", table: { head: ["Profil", "Signal", "Réponse adaptée"], rows: [
        ["Fan / ambassadeur", "Commentaire enthousiaste, partage", "Remercier, personnaliser, mettre en avant (avec accord)"],
        ["Curieux", "Question simple", "Répondre vite, clairement, avec un lien utile"],
        ["Client mécontent", "Critique sur un problème réel", "Reconnaître, s'excuser, proposer une solution, continuer en privé"],
        ["Critique constructif", "Avis argumenté", "Remercier, expliquer, indiquer les évolutions"],
        ["Troll", "Provocation, hors sujet", "Ne pas alimenter ; une réponse factuelle ou masquer selon la charte"],
        ["Spammeur / bot", "Liens, offres douteuses", "Supprimer, bloquer, signaler"],
        ["Haineux / harceleur", "Insultes, menaces", "Masquer, signaler, bloquer, conserver des preuves, escalader si menaces"]
      ]}},
    { h: "La méthode de réponse en 4 temps : ÉCOUTER", list: [
        "<b>É</b>couter : reformuler le problème pour montrer qu'on a compris.",
        "<b>C</b>ompatir : reconnaître l'émotion sans se justifier.",
        "<b>O</b>ffrir une solution ou une suite concrète.",
        "<b>U</b>ne ouverture : proposer de poursuivre en privé, remercier."
      ]},
    { h: "Avis Google et sites de notation", list: [
        "Répondre à <b>tous</b> les avis, positifs comme négatifs, idéalement sous 48 h.",
        "Personnaliser (prénom, détail cité) plutôt que copier-coller.",
        "Ne jamais divulguer d'information personnelle du client dans une réponse publique.",
        "Signaler les avis faux ou contraires aux règles de la plateforme.",
        "Encourager les clients satisfaits à laisser un avis (QR code, e-mail après achat), sans pression ni contrepartie."
      ]},
    { h: "Modération automatique et outils", list: [
        "<b>Filtres natifs</b> : mots interdits, commentaires offensants masqués automatiquement, restrictions de comptes (Meta, TikTok, YouTube).",
        "<b>Boîte de réception unifiée</b> : Meta Business Suite, Agorapulse, Hootsuite, Sprout Social, pour centraliser commentaires et messages.",
        "<b>Réponses enregistrées</b> et étiquettes pour gagner du temps.",
        "<b>L'IA</b> peut proposer des brouillons de réponse, classifier les messages (question, plainte, spam) et détecter le ton. Elle ne doit pas répondre seule aux situations sensibles."
      ]},
    { h: "Gestion de crise", list: [
        "<b>Détecter</b> : alertes de veille, pic de messages négatifs.",
        "<b>Évaluer</b> : gravité, source, risque pour la marque.",
        "<b>Activer</b> la cellule de crise, désigner un porte-parole.",
        "<b>Répondre</b> avec un message factuel, transparent, sans polémique ; suspendre les publications programmées non adaptées.",
        "<b>Débriefer</b> : documenter, ajuster les processus."
      ]}
  ],
  examples: [
    { title: "Réponse à un client mécontent (méthode ÉCOUTER)", body: "<b>Commentaire :</b> « Livraison en retard de 10 jours, personne ne répond ! »<br><b>Réponse :</b> « Bonjour Camille, 10 jours de retard sans réponse, nous comprenons votre agacement et nous sommes désolés. Nous recherchons votre colis dès maintenant. Pouvez-vous nous envoyer votre numéro de commande en message privé pour que nous reglions cela aujourd'hui ? Merci de votre patience. »" },
    { title: "Réponse à un avis positif", body: "« Merci beaucoup Julien ! Ravis que la formule du midi vous ait plu. Notre chef passera le mot à l'équipe du dessert 😊 À très vite ! »" },
    { title: "Troll", body: "<b>Commentaire :</b> « Votre marque est une arnaque. »<br><b>Réponse factuelle (une seule fois) :</b> « Bonjour, nous n'avons pas trouvé de commande à votre nom. Si vous avez rencontré un problème, écrivez-nous en message privé. » En cas d'insultes répétées : masquer selon la charte." },
    { title: "Prompt de réponse assistée", body: "<code>Tu es community manager de [marque], ton chaleureux et professionnel. Voici un commentaire client (anonymisé) : [texte]. Rédige une réponse publique de 300 caractères maximum selon la méthode ÉCOUTER, sans promesse de remboursement, avec invitation à continuer en message privé. Propose ensuite une version plus courte.</code>" }
  ],
  practice: "À partir de 6 commentaires réels (ou fournis par le formateur), identifiez le profil, choisissez la réponse adaptée, demandez un brouillon à l'IA puis corrigez-le. Rédigez ensuite votre charte de modération en 8 lignes et une liste de 10 mots à filtrer.",
  quiz: [
    { q: "Quelle est la meilleure réaction face à un client mécontent ?", options: ["Supprimer le commentaire", "Reconnaître, s'excuser, proposer une solution et continuer en privé", "Contester publiquement", "Ne pas répondre"], answer: 1, why: "Une réponse empathique et rapide limite l'impact et montre le sérieux de la marque." },
    { q: "Pour un troll, il est recommandé de…", options: ["Entrer dans la polémique", "Ne pas alimenter, rester factuel, masquer selon la charte", "Publier un message vengeur", "Le signaler à la police systématiquement"], answer: 1, why: "L'objectif du troll est la réaction : évitez d'y répondre émotionnellement." },
    { q: "L'IA peut-elle répondre seule aux commentaires sensibles ?", options: ["Oui, elle est rapide", "Non : brouillons seulement, validation humaine", "Oui si on la paramètre bien", "Oui pour les plaintes graves"], answer: 1, why: "Les situations sensibles exigent le jugement humain." },
    { q: "Dans une réponse publique à un avis, on doit…", options: ["Citer les données personnelles du client", "Éviter les données personnelles et proposer un échange privé", "Copier-coller la même réponse partout", "Ignorer les avis positifs"], answer: 1, why: "Confidentialité et personnalisation sont essentielles." },
    { q: "À quoi sert la charte de comportement ?", options: ["À faire joli", "À définir les règles et les sanctions sur les espaces de la marque", "À remplacer les conditions générales", "À augmenter les likes"], answer: 1, why: "Elle sert de cadre justifiant les actions de modération." },
    { q: "Quel élément ne fait pas partie d'une bonne réponse à une crise ?", options: ["Transparence", "Message factuel", "Porte-parole désigné", "Supprimer tous les commentaires critiques"], answer: 3, why: "Supprimer massivement les critiques aggrave la crise (effet Streisand)." }
  ]
},
{
  id: 6, icon: "🗓️", title: "Organisation et outils de community management", duration: "3 h",
  intro: "Un community manager efficace est avant tout organisé : planification, centralisation des messages, mesure et reporting. Les outils professionnels font gagner plusieurs heures par semaine.",
  objectives: [
    "Programmer ses publications avec les outils natifs et professionnels",
    "Comparer et choisir un outil de community management",
    "Suivre ses indicateurs et produire un rapport",
    "Utiliser l'IA pour analyser les performances"
  ],
  sections: [
    { h: "Gagner du temps avec la programmation", list: [
        "<b>Batching</b> : produire les contenus par lots (une demi-journée par semaine ou par mois) puis les programmer.",
        "<b>Outils natifs</b> : Meta Business Suite (Facebook + Instagram), LinkedIn, TikTok Studio, YouTube Studio.",
        "<b>Meilleurs horaires</b> : partir des statistiques de votre audience, pas de recommandations génériques.",
        "<b>Garder de la place pour le temps réel</b> : actualité, réponses, opportunités."
      ]},
    { h: "Les solutions professionnelles", table: { head: ["Outil", "Points forts", "Pour qui"], rows: [
        ["Hootsuite", "Multi-réseaux, équipe, veille intégrée", "Agences, grandes équipes"],
        ["Agorapulse", "Boîte de réception unifiée, modération, rapports", "PME et agences"],
        ["Metricool", "Prix accessible, analytics, planification, publicité", "Indépendants, PME"],
        ["Buffer", "Simplicité, bon rapport qualité-prix", "Freelances, petites structures"],
        ["Later", "Planification visuelle Instagram/TikTok", "Marques visuelles, créateurs"],
        ["Sprout Social", "Analytics approfondis, collaboration", "Entreprises"],
        ["Swello", "Solution française, outils de veille", "PME et collectivités"]
      ]}, p: ["Critères de choix : réseaux supportés, nombre d'utilisateurs, circuit de validation, boîte de réception, rapports, prix, RGPD, essais gratuits. Testez 2 outils sur le même mois avant de choisir."] },
    { h: "Organiser le workflow d'équipe", list: [
        "Un tableau de suivi (Notion, Trello, Airtable, Google Sheets) : idée → rédaction → création visuelle → validation → programmation → publié.",
        "Des modèles de brief pour les contenus (objectif, cible, message, CTA, deadline).",
        "Une bibliothèque de médias nommée de façon cohérente.",
        "Des accès sécurisés : gestionnaire de mots de passe, authentification à deux facteurs, rôles différenciés."
      ]},
    { h: "Mesurer et piloter", table: { head: ["Indicateur", "Définition", "Usage"], rows: [
        ["Portée", "Personnes uniques touchées", "Visibilité"],
        ["Impressions", "Nombre d'affichages", "Fréquence d'exposition"],
        ["Taux d'engagement", "Interactions ÷ portée (ou abonnés)", "Qualité de l'audience"],
        ["Taux de clic (CTR)", "Clics ÷ impressions", "Efficacité du CTA"],
        ["Taux de complétion vidéo", "Part de la vidéo regardée", "Qualité du hook et du rythme"],
        ["Croissance de l'audience", "Nouveaux abonnés nets", "Attractivité"],
        ["Conversions", "Ventes ou leads attribués", "Impact business"]
      ]}, p: ["Utilisez des liens suivis (UTM) pour relier les réseaux au trafic dans Google Analytics."]},
    { h: "Le rapport mensuel", list: [
        "1 page : chiffres clés, évolution vs mois précédent, 3 meilleurs contenus, 3 enseignements, actions du mois suivant.",
        "Visualisations simples : courbes de tendance, histogrammes.",
        "L'IA peut résumer un export de statistiques, repérer les contenus gagnants et proposer des hypothèses, à condition de lui fournir les vrais chiffres et de vérifier ses conclusions."
      ]}
  ],
  examples: [
    { title: "Routine hebdomadaire d'un community manager", body: "<b>Lundi</b> : revue des stats, ajustement du planning. <b>Mardi</b> : batching de création. <b>Mercredi</b> : programmation. <b>Quotidien</b> : 2 créneaux de 20 min pour répondre. <b>Vendredi</b> : veille et idées de la semaine suivante." },
    { title: "Lien UTM", body: "<code>https://boutique.fr/box?utm_source=instagram&utm_medium=social&utm_campaign=lancement_mars</code> permet de voir dans Google Analytics que le trafic vient de la campagne Instagram de mars." },
    { title: "Prompt d'analyse de statistiques", body: "<code>Voici l'export de nos 30 derniers posts Instagram [tableau]. Identifie les 3 formats les plus performants selon le taux d'engagement, les 3 moins performants, les jours/heures les plus efficaces. Propose 5 hypothèses à tester le mois prochain et signale clairement ce qui relève de l'hypothèse et ce qui relève des données.</code>" },
    { title: "Choisir un outil", body: "Agence avec 8 clients et 3 personnes : besoin de validation par client, rapports en marque blanche, boîte de réception partagée. Choix probable : Agorapulse ou Hootsuite. Indépendant avec 1 client : Metricool ou Buffer." }
  ],
  practice: "Créez un compte d'essai sur un outil (Metricool, Buffer ou autre), connectez un compte de test, programmez deux semaines de posts avec des horaires issus de vos statistiques. Construisez ensuite un modèle de rapport mensuel d'une page.",
  quiz: [
    { q: "Qu'est-ce que le batching ?", options: ["Publier toutes les heures", "Produire les contenus par lots puis les programmer", "Supprimer les anciens posts", "Un type de publicité"], answer: 1, why: "Le batching regroupe les tâches similaires pour gagner en efficacité." },
    { q: "Comment calcule-t-on un taux d'engagement ?", options: ["Interactions ÷ portée (ou abonnés)", "Abonnés ÷ impressions", "Clics × impressions", "Nombre de posts ÷ jours"], answer: 0, why: "C'est le rapport entre les interactions et l'audience de référence." },
    { q: "À quoi servent les paramètres UTM ?", options: ["À programmer les posts", "À suivre l'origine du trafic dans les outils d'analyse", "À modérer", "À créer des visuels"], answer: 1, why: "Ils étiquettent les liens pour identifier la source, le média et la campagne." },
    { q: "Pour choisir les meilleurs horaires de publication, il faut…", options: ["Suivre un article générique", "Utiliser les statistiques de sa propre audience", "Publier la nuit", "Copier un concurrent"], answer: 1, why: "L'audience de chaque compte a ses habitudes." },
    { q: "Utiliser l'IA pour analyser des statistiques nécessite…", options: ["De lui fournir les vrais chiffres et de vérifier ses conclusions", "De lui demander d'inventer les chiffres manquants", "De ne pas lui donner de données", "De publier directement ses conclusions"], answer: 0, why: "L'IA analyse ce qu'on lui donne ; elle peut se tromper en interprétation." },
    { q: "Un rapport mensuel efficace contient…", options: ["Tous les chiffres possibles", "Chiffres clés, meilleurs contenus, enseignements et actions", "Uniquement des captures d'écran", "Uniquement le nombre d'abonnés"], answer: 1, why: "Le rapport doit mener à la décision." }
  ]
},
{
  id: 7, icon: "🔎", title: "Veille et e-réputation avec l'IA", duration: "3 h",
  intro: "La veille permet de savoir ce que l'on dit de la marque, de ses concurrents et de son secteur, avant que cela ne devienne un problème ou une opportunité manquée.",
  objectives: [
    "Définir un périmètre de veille et choisir ses outils",
    "Utiliser les opérateurs booléens pour affiner les recherches",
    "Repérer les sujets tendance",
    "Analyser des sentiments avec un LLM et en connaître les limites"
  ],
  sections: [
    { h: "Définir son périmètre de veille", list: [
        "<b>Marque</b> : nom, variantes, fautes d'orthographe courantes, produits, dirigeants.",
        "<b>Concurrents</b> : lancements, campagnes, avis clients.",
        "<b>Secteur</b> : actualités, réglementation, innovations.",
        "<b>Influenceurs et prescripteurs</b> : journalistes, créateurs de contenu, associations.",
        "<b>Sujets sensibles</b> : risques de crise, controverses du secteur."
      ]},
    { h: "Les outils", table: { head: ["Type", "Exemples", "Remarque"], rows: [
        ["Gratuits", "Google Alerts, Talkwalker Alerts, Feedly, Google Trends", "Idéal pour démarrer"],
        ["Social listening", "Brand24, Mention, Meltwater, Digimind, Talkwalker", "Analyse de sentiment, volumes, alertes"],
        ["Tendances", "AnswerThePublic, Google Trends, tendances natives TikTok et Instagram", "Idées de contenu"],
        ["Recherche sourcée IA", "Perplexity, Gemini, ChatGPT avec recherche", "À croiser avec les sources"],
        ["Base de connaissances", "NotebookLM, projets ChatGPT/Claude", "Interroger ses propres documents"]
      ]}},
    { h: "Les opérateurs booléens", p: ["Ils permettent de préciser les recherches sur Google, LinkedIn et d'autres moteurs."],
      table: { head: ["Opérateur", "Rôle", "Exemple"], rows: [
        ["\"guillemets\"", "Expression exacte", "\"community manager\""],
        ["AND", "Les deux termes", "marketing AND IA"],
        ["OR", "L'un ou l'autre", "\"réseaux sociaux\" OR \"social media\""],
        ["NOT ou -", "Exclure", "formation -gratuite"],
        ["( )", "Grouper", "(Instagram OR TikTok) AND tendance"],
        ["site:", "Limiter à un site", "site:linkedin.com/in \"community manager\" Lyon"],
        ["intitle:", "Dans le titre", "intitle:avis \"nom de la marque\""],
        ["filetype:", "Type de document", "filetype:pdf \"baromètre social media\""]
      ]}},
    { h: "Analyse de sentiments", list: [
        "Un LLM peut classer des commentaires en positifs, neutres, négatifs, et en thèmes (livraison, prix, qualité, service).",
        "Plus utile qu'un simple score : demander les <b>thèmes récurrents</b> et des <b>verbatims représentatifs</b>.",
        "Limites : l'ironie, les sous-entendus, l'argot et les langues mélangées sont mal détectés ; vérifiez un échantillon manuellement.",
        "Pour de gros volumes, des modèles spécialisés existent (BERT multilingue, CamemBERT en français) ou des outils de social listening avec analyse intégrée.",
        "Anonymisez les données avant tout traitement."
      ]},
    { h: "Créer un référentiel de travail", list: [
        "Rassemblez vos documents clés : charte, ton de marque, FAQ, offres, calendrier, exemples de réponses.",
        "Chargez-les dans un projet d'assistant (ou NotebookLM) pour obtenir des réponses cohérentes avec vos documents.",
        "Mettez-le à jour régulièrement."
      ]},
    { h: "Rythme de la veille", list: [
        "Alertes automatiques quotidiennes pour les mots-clés critiques.",
        "Revue hebdomadaire de 30 à 45 minutes : synthèse en 10 lignes.",
        "Alerte immédiate au-delà d'un seuil (ex. : 20 mentions négatives en 2 heures)."
      ]}
  ],
  examples: [
    { title: "Requêtes booléennes pour une marque de chaussures « Pasaline »", body: "<code>\"Pasaline\" AND (avis OR retour OR problème OR arnaque) -emploi</code><br><code>site:reddit.com \"Pasaline\"</code><br><code>(\"chaussures vegan\" OR \"chaussures éthiques\") AND (France OR Belgique) -amazon</code>" },
    { title: "Identifier des profils sur LinkedIn", body: "<code>site:linkedin.com/in (\"responsable communication\" OR \"chargé de communication\") AND (Nantes OR Rennes) AND \"collectivité\"</code>" },
    { title: "Prompt d'analyse de sentiments", body: "<code>Voici 40 commentaires clients anonymisés [texte]. Pour chacun : sentiment (positif/neutre/négatif) et thème (livraison, prix, qualité, service, autre). Fais ensuite un tableau de synthèse avec le pourcentage par thème, les 3 irritants principaux, et 2 verbatims représentatifs par irritant. Signale les commentaires ambigus ou ironiques.</code>" },
    { title: "Exemple de synthèse hebdomadaire", body: "<b>Marque</b> : 112 mentions (+18 %), 71 % positives. <b>Alerte</b> : 9 plaintes sur un retard de livraison, ville de Lille. <b>Concurrent</b> : lancement d'une offre étudiante. <b>Tendance</b> : le format « une journée avec… » progresse sur TikTok. <b>Actions</b> : message d'excuse aux clients concernés, Reel « coulisses de l'entrepôt »." }
  ],
  practice: "Définissez votre périmètre de veille (10 mots-clés), créez 3 alertes gratuites, écrivez 5 requêtes booléennes pour Google et LinkedIn, puis analysez avec un LLM un échantillon de 30 commentaires anonymisés. Rédigez une synthèse d'une page.",
  quiz: [
    { q: "Quel opérateur permet d'exclure un mot ?", options: ["OR", "NOT ou le signe moins", "site:", "AND"], answer: 1, why: "NOT ou « - » exclut un terme de la recherche." },
    { q: "Que fait la requête site:linkedin.com/in \"community manager\" ?", options: ["Cherche tous les sites sur le community management", "Cherche des profils LinkedIn contenant cette expression", "Cherche des vidéos", "Cherche uniquement des offres d'emploi"], answer: 1, why: "site: restreint la recherche au domaine indiqué, ici les profils LinkedIn." },
    { q: "Principale limite d'une analyse de sentiments par IA ?", options: ["Elle est trop lente", "Elle détecte mal l'ironie et le contexte", "Elle est interdite", "Elle ne gère pas le français"], answer: 1, why: "Ironie, sous-entendus et argot restent difficiles." },
    { q: "Quel outil est une solution gratuite de départ pour la veille ?", options: ["Meltwater", "Google Alerts", "Digimind", "Sprout Social"], answer: 1, why: "Google Alerts est gratuit et simple à configurer." },
    { q: "Avant d'analyser des commentaires avec une IA, il faut…", options: ["Les anonymiser", "Les traduire en anglais", "Les supprimer du réseau", "Les publier"], answer: 0, why: "Le RGPD impose de protéger les données personnelles." },
    { q: "Qu'est-ce qu'un référentiel de travail dans un assistant IA ?", options: ["Un document officiel de l'État", "Un ensemble de vos documents de marque utilisé comme base de réponses", "Un abonnement payant", "Un mot de passe"], answer: 1, why: "Il permet à l'IA de répondre dans votre contexte et selon votre ton." }
  ]
},
{
  id: 8, icon: "🎨", title: "Créer et automatiser ses contenus avec l'IA", duration: "3 h",
  intro: "Texte, image, vidéo, voix : l'IA permet de produire plus vite et de décliner à grande échelle. L'enjeu est de garder une identité de marque forte et un contrôle qualité humain.",
  objectives: [
    "Rédiger des prompts d'image précis et cohérents avec la marque",
    "Produire des vidéos et voix off assistées par IA",
    "Mettre en place une chaîne de production semi-automatisée",
    "Appliquer une checklist qualité et légale avant publication"
  ],
  sections: [
    { h: "Texte : mémoire de marque et briefs permanents", list: [
        "Rédigez un <b>brief de marque</b> de 1 page : mission, ton, vocabulaire, interdits, exemples.",
        "Enregistrez-le dans des instructions personnalisées ou un projet pour ne pas le répéter.",
        "Demandez systématiquement plusieurs variantes puis combinez le meilleur de chacune."
      ]},
    { h: "Images : l'art du prompt visuel", p: ["Un bon prompt d'image décrit : <b>sujet + action + décor + style + lumière + cadrage + ambiance + format</b>."],
      list: [
        "Exemple de style : photographie éditoriale, illustration vectorielle plate, aquarelle, 3D douce.",
        "Cohérence de marque : fournissez palette (codes hex), références, image de style quand l'outil le permet.",
        "Retouche : suppression d'arrière-plan, extension d'image, remplacement d'objet (inpainting).",
        "Vérifiez : mains, texte dans l'image, logos, détails incohérents.",
        "Ne reproduisez pas de visage réel ni de marque tierce sans droit."
      ]},
    { h: "Vidéo et audio", list: [
        "<b>Repurposing</b> : transformer un webinaire ou un live en 5 à 10 clips courts avec sous-titres.",
        "<b>Avatars et voix off</b> : HeyGen, Synthesia, ElevenLabs pour des vidéos pédagogiques ou multilingues. Annoncez-le si le rendu est réaliste.",
        "<b>Vidéo générative</b> : Runway, Veo, Sora, Kling pour des séquences d'ambiance ou des B-roll courts.",
        "<b>Sous-titres et traduction</b> : CapCut, YouTube Studio ; relisez toujours les sous-titres."
      ]},
    { h: "Chaîne de production semi-automatisée", p: ["Exemple de pipeline :"],
      list: [
        "1. <b>Idée</b> : veille ou calendrier éditorial.",
        "2. <b>Texte</b> : l'IA rédige avec le brief de marque.",
        "3. <b>Visuel</b> : génération ou gabarit Canva rempli.",
        "4. <b>Validation humaine</b> : relecture et approbation.",
        "5. <b>Programmation</b> : outil de planification.",
        "6. <b>Mesure</b> : retour des statistiques vers l'étape 1."
      ],
      p2: ["Automatisable avec Zapier, Make ou n8n : par exemple, une ligne ajoutée dans un tableur déclenche la rédaction par l'IA et crée un brouillon dans l'outil de planification."]},
    { h: "Contrôle qualité avant publication", list: [
        "☐ Les faits, chiffres et noms sont exacts.",
        "☐ Le ton correspond à la marque.",
        "☐ Aucun droit tiers violé (image, musique, logo, visage).",
        "☐ Aucune donnée personnelle ou confidentielle.",
        "☐ Contenu réaliste généré par IA correctement signalé si nécessaire.",
        "☐ Orthographe, accessibilité (sous-titres, alt text, contraste).",
        "☐ Un appel à l'action clair."
      ]},
    { h: "Devenir un « prompt artist »", list: [
        "Itérez : changez un seul paramètre à la fois et notez ce qui marche.",
        "Constituez une bibliothèque de prompts et de résultats de référence.",
        "Apprenez le vocabulaire visuel (focale, éclairage, composition) : il améliore vos résultats."
      ]}
  ],
  examples: [
    { title: "Prompt d'image", body: "<code>Photographie éditoriale d'une boulangère souriante sortant des baguettes du four, boulangerie artisanale lumineuse, lumière chaude du matin, plan américain, profondeur de champ faible, palette crème et terracotta, ambiance chaleureuse, format carré 1:1, sans texte ni logo.</code>" },
    { title: "Illustration de marque", body: "<code>Illustration vectorielle plate, une famille faisant du vélo, palette : #1F6F5C, #F2C94C, #F7F3E9, trait épais arrondi, fond uni, style cohérent avec une marque d'assurance bienveillante, aucune personne réelle.</code>" },
    { title: "Pipeline Zapier / Make", body: "Google Sheets (nouvelle ligne : sujet + cible) → ChatGPT (rédaction du post avec le brief de marque) → Canva (gabarit rempli) → Outil de planification (brouillon) → notification Slack pour validation humaine." },
    { title: "Repurposing d'un webinaire de 45 minutes", body: "Transcription automatique → l'IA identifie 8 moments forts → CapCut découpe en clips de 30 à 45 s avec sous-titres → 3 clips pour TikTok/Reels, 2 pour LinkedIn, 1 extrait audio pour un podcast, 1 article de blog résumé." }
  ],
  practice: "Produisez une série de 3 posts liés (frise ou mini-campagne) : texte avec brief de marque, 3 illustrations cohérentes générées par IA, une vidéo courte sous-titrée. Passez la checklist qualité et corrigez ce qui ne passe pas.",
  quiz: [
    { q: "Quels éléments un bon prompt d'image contient-il ?", options: ["Un seul mot-clé", "Sujet, décor, style, lumière, cadrage, format", "Uniquement le style", "Le nom d'un artiste vivant"], answer: 1, why: "Plus le prompt est précis sur la composition et le style, plus le résultat est maîtrisé." },
    { q: "Que signifie « repurposing » ?", options: ["Supprimer un contenu", "Transformer un contenu existant en plusieurs formats", "Racheter un outil", "Traduire un compte"], answer: 1, why: "On réutilise un contenu long en plusieurs contenus courts adaptés." },
    { q: "Dans une chaîne automatisée, la validation humaine est…", options: ["Inutile", "Indispensable avant publication", "Seulement pour les images", "Réservée aux crises"], answer: 1, why: "La responsabilité éditoriale impose un contrôle avant publication." },
    { q: "Quel contrôle est important sur une image générée ?", options: ["Vérifier les détails incohérents (mains, texte, logos)", "Rien, elles sont parfaites", "Augmenter la saturation", "La publier en 4K"], answer: 0, why: "Les modèles produisent encore des erreurs visuelles." },
    { q: "Un avatar IA très réaliste présentant un produit doit…", options: ["Être caché", "Être signalé comme généré par IA lorsque le rendu est réaliste", "Utiliser le visage d'un acteur connu", "Être utilisé sans mention"], answer: 1, why: "La transparence est exigée par les plateformes et le cadre réglementaire européen." },
    { q: "Quel outil permet d'automatiser des enchaînements d'actions ?", options: ["Zapier, Make, n8n", "Excel uniquement", "Un scanner", "Un navigateur"], answer: 0, why: "Ces plateformes connectent des applications et déclenchent des actions automatiques." }
  ]
},
{
  id: 9, icon: "🤖", title: "Interagir avec ses followers : chatbots et agents IA", duration: "3 h",
  intro: "Les chatbots et automatisations peuvent répondre immédiatement, qualifier des contacts et libérer du temps. Bien conçus, ils améliorent l'expérience ; mal conçus, ils frustrent.",
  objectives: [
    "Identifier les cas d'usage pertinents d'un chatbot",
    "Choisir un outil adapté à son niveau technique",
    "Concevoir un scénario de conversation avec transfert à un humain",
    "Respecter transparence et RGPD"
  ],
  sections: [
    { h: "Cas d'usage", list: [
        "<b>FAQ</b> : horaires, livraison, retours, tarifs.",
        "<b>Qualification de leads</b> : poser 3 questions puis transmettre au commercial.",
        "<b>Prise de rendez-vous</b> ou réservation.",
        "<b>Distribution de ressources</b> : un commentaire « GUIDE » déclenche l'envoi d'un guide en message privé.",
        "<b>Support de premier niveau</b> avec escalade vers un conseiller."
      ]},
    { h: "Deux grandes familles", table: { head: ["Type", "Fonctionnement", "Avantages", "Limites"], rows: [
        ["À règles (scénarios)", "Arbres de décision, boutons, mots-clés", "Prévisible, simple, contrôlé", "Rigide"],
        ["Basé sur LLM", "Comprend le langage libre, utilise votre base de connaissances", "Flexible, naturel", "Risque d'erreurs : cadrage et tests indispensables"],
        ["Hybride", "Scénario + IA pour les questions libres", "Équilibre contrôle et souplesse", "Plus complexe à paramétrer"]
      ]}},
    { h: "Outils", table: { head: ["Outil", "Niveau", "Usage"], rows: [
        ["ManyChat", "Débutant", "Automatisations Instagram, Messenger, WhatsApp, déclencheurs par mot-clé"],
        ["Botpress, Voiceflow", "Intermédiaire", "Conception de chatbots multicanaux avec IA"],
        ["Dialogflow", "Intermédiaire à avancé", "Compréhension de l'intention, intégrations Google"],
        ["Chatbase et assistants sur base documentaire", "Débutant", "Chatbot basé sur vos documents et votre site"],
        ["GPTs / assistants personnalisés", "Débutant", "Prototypage et usage interne"],
        ["Zapier, Make, n8n + webhooks", "Intermédiaire", "Connecter chatbot, CRM, tableur, e-mail"]
      ]}},
    { h: "Concevoir un scénario", list: [
        "<b>Objectif unique</b> par scénario (ex. : prendre un rendez-vous).",
        "<b>Message d'accueil</b> : présenter le bot, dire ce qu'il sait faire.",
        "<b>Boutons de choix</b> pour guider.",
        "<b>Cas d'erreur</b> : « Je n'ai pas compris, souhaitez-vous parler à un conseiller ? »",
        "<b>Transfert humain</b> à tout moment, avec horaires et délai annoncés.",
        "<b>Ton de marque</b> cohérent avec le reste de la communication.",
        "<b>Tests</b> avec de vrais utilisateurs, puis amélioration continue à partir des conversations."
      ]},
    { h: "Connexions et webhooks", p: ["Un <b>webhook</b> est un message automatique envoyé par une application à une autre quand un événement se produit (nouveau message, nouveau lead). Il permet par exemple d'envoyer un lead qualifié vers un CRM ou un tableur, ou de faire appel à un modèle d'IA pour rédiger une réponse."],
      list: [
        "Les plateformes imposent leurs règles : la messagerie automatisée est limitée dans le temps après le dernier message de l'utilisateur et exige son consentement.",
        "Utilisez les connexions officielles (API Meta, WhatsApp Business) plutôt que des contournements."
      ]},
    { h: "Transparence et RGPD", list: [
        "Indiquer clairement que l'interlocuteur est un assistant automatisé.",
        "Informer sur l'usage des données et obtenir le consentement lorsque c'est nécessaire.",
        "Permettre de joindre un humain et de se désinscrire.",
        "Ne collecter que les données nécessaires ; durée de conservation limitée."
      ]}
  ],
  examples: [
    { title: "Automatisation « commentaire → message privé »", body: "Post Instagram : « Commentez GUIDE pour recevoir notre guide gratuit ». ManyChat détecte le mot-clé, répond publiquement « Envoyé en message privé ! », puis envoie le lien du guide en DM avec une question : « Quel est votre principal objectif ? » (3 boutons). Les réponses alimentent un tableur." },
    { title: "Arbre de conversation d'une pizzeria", body: "Accueil → [Voir le menu] [Réserver une table] [Horaires] [Parler à quelqu'un]. « Réserver » : nombre de personnes → date → heure → téléphone → confirmation. Si saisie non comprise deux fois : transfert à l'équipe." },
    { title: "Message d'accueil transparent", body: "« Bonjour ! Je suis l'assistant virtuel de Maison Lila. Je peux vous aider pour vos commandes, nos horaires et nos retours. Pour parler à un conseiller, tapez « humain ». Vos données sont traitées selon notre politique de confidentialité. »" },
    { title: "Instructions pour un chatbot basé sur LLM", body: "<code>Tu es l'assistant de [marque]. Réponds uniquement à partir des documents fournis. Si l'information est absente, dis-le et propose de contacter l'équipe. Ton : chaleureux, phrases courtes, vouvoiement. N'invente jamais de prix ni de délais. Propose un conseiller humain en cas de plainte, de remboursement ou de colère du client.</code>" }
  ],
  practice: "Concevez un squelette de chatbot pour votre structure : objectif, message d'accueil, 4 boutons, 5 questions fréquentes avec réponses, scénario d'erreur, transfert humain. Construisez-le dans l'outil choisi (ManyChat, Botpress, Voiceflow…) et testez-le avec un collègue.",
  quiz: [
    { q: "Quel est l'intérêt d'un chatbot « hybride » ?", options: ["Il est toujours gratuit", "Il combine scénarios contrôlés et compréhension libre par IA", "Il fonctionne sans internet", "Il remplace les humains"], answer: 1, why: "L'hybride équilibre contrôle et flexibilité." },
    { q: "Qu'est-ce qu'un webhook ?", options: ["Un virus", "Un message automatique entre applications lors d'un événement", "Un hashtag", "Un type de vidéo"], answer: 1, why: "Il déclenche des actions dans d'autres outils (CRM, tableur, e-mail)." },
    { q: "Un chatbot doit toujours…", options: ["Se faire passer pour un humain", "Indiquer qu'il est automatisé et permettre de joindre un humain", "Collecter le plus de données possible", "Répondre même sans connaître la réponse"], answer: 1, why: "Transparence et possibilité de recours humain sont indispensables." },
    { q: "Quel est le risque principal d'un chatbot basé sur un LLM ?", options: ["Il est trop lent", "Il peut inventer des réponses", "Il ne comprend pas le français", "Il n'existe pas d'outils"], answer: 1, why: "D'où l'importance de limiter ses réponses à une base de connaissances et de tester." },
    { q: "Dans le scénario « commentez GUIDE », que fait l'outil ?", options: ["Supprime le commentaire", "Détecte le mot-clé et envoie un message privé", "Publie un nouveau post", "Bloque l'utilisateur"], answer: 1, why: "C'est un déclencheur par mot-clé suivi d'une réponse automatique." },
    { q: "Pour un client très en colère, le bot doit…", options: ["Continuer son script", "Transférer à un conseiller", "Ignorer le message", "Proposer une promotion automatique"], answer: 1, why: "Les situations sensibles doivent être traitées par un humain." }
  ]
},
{
  id: 10, icon: "⚙️", title: "Usages avancés : agents, API et automatisation", duration: "3 h",
  intro: "Au-delà des assistants conversationnels, on peut connecter l'IA à des outils pour traiter des volumes de contenus et enchaîner des tâches. Cela demande une gouvernance claire et de la prudence.",
  objectives: [
    "Distinguer assistant, automatisation et agent",
    "Construire un workflow no-code avec validation humaine",
    "Comprendre ce que permettent les API de modèles d'IA",
    "Connaître les limites de l'automatisation de la publication (CGU, sécurité, coûts)"
  ],
  sections: [
    { h: "Trois niveaux d'automatisation", table: { head: ["Niveau", "Description", "Exemple"], rows: [
        ["Assistant", "Vous demandez, il répond", "Rédiger 3 variantes d'un post"],
        ["Automatisation", "Un déclencheur lance une suite d'actions fixes", "Nouvelle ligne dans un tableur → brouillon de post"],
        ["Agent", "Le système choisit les étapes et les outils pour atteindre un objectif", "Veille du jour → sélection des sujets → rédaction → proposition à valider"]
      ]}},
    { h: "Workflows no-code : Zapier, Make, n8n", list: [
        "<b>Déclencheur</b> (trigger) : nouveau message, nouvelle ligne, date, nouvel article RSS.",
        "<b>Actions</b> : appeler un modèle d'IA, créer un brouillon, envoyer un e-mail ou une notification.",
        "<b>Filtres et conditions</b> : par exemple, ne traiter que les messages négatifs.",
        "<b>Validation humaine</b> : étape d'approbation par message ou e-mail avant toute publication.",
        "<b>n8n</b> peut être auto-hébergé, ce qui aide pour la maîtrise des données."
      ]},
    { h: "Utiliser les API de modèles", p: ["Une API permet à un programme ou à un outil no-code d'appeler directement un modèle (OpenAI, Anthropic, Mistral, Google) pour traiter des volumes importants."],
      list: [
        "<b>Cas d'usage</b> : classifier 5 000 commentaires, générer 200 descriptions produits, résumer chaque jour les mentions de la marque.",
        "<b>Paramètres utiles</b> : consigne système (comportement), température (créativité), sortie structurée (JSON, tableau).",
        "<b>Coûts</b> : facturés au volume de texte traité ; estimer avant de lancer, fixer des plafonds.",
        "<b>Sécurité</b> : clés d'API secrètes, jamais dans un document partagé ; accès limités.",
        "<b>Contrôle</b> : échantillonner et relire les sorties ; journaliser."
      ]},
    { h: "RPA et automatisation d'interface", list: [
        "<b>RPA (Robotic Process Automation)</b> : un robot reproduit des clics et saisies dans une interface (outils comme UiPath, Power Automate, Playwright).",
        "Utile pour des tâches répétitives sans API : exporter un rapport, remplir un tableau.",
        "<b>Attention</b> : l'automatisation de comptes de réseaux sociaux (likes, abonnements, commentaires automatiques, faux profils) est généralement interdite par les conditions d'utilisation et peut entraîner la suspension du compte. Préférez les API officielles et les outils de planification autorisés.",
        "Ne jamais simuler des interactions pour gonfler artificiellement des statistiques."
      ]},
    { h: "Gouvernance", list: [
        "<b>Humain dans la boucle</b> pour tout contenu public et toute réponse sensible.",
        "<b>Traçabilité</b> : qui a validé quoi, quelle version du prompt, quel modèle.",
        "<b>Sécurité des accès</b> : comptes dédiés, rôles, double authentification, révocation.",
        "<b>Protection des données</b> : minimisation, anonymisation, contrats avec les fournisseurs.",
        "<b>Plan de repli</b> : bouton d'arrêt d'urgence, procédure en cas de publication erronée.",
        "<b>Mesure</b> : temps gagné, qualité, erreurs, coût, impact sur l'engagement."
      ]}
  ],
  examples: [
    { title: "Workflow de veille quotidienne (Make ou n8n)", body: "Tous les matins à 7 h : lecture des flux RSS et alertes → l'IA classe et résume les 10 actualités les plus pertinentes → envoi d'un e-mail de synthèse à l'équipe avec 3 idées de posts → l'équipe valide dans un tableur." },
    { title: "Classification de commentaires via API", body: "Entrée : export CSV de 3 000 commentaires. Consigne : « Classe chaque commentaire : thème, sentiment, urgence (0-2). Réponds en JSON. » Sortie : tableau trié, les urgences 2 envoyées en alerte au responsable." },
    { title: "Création de messages avec validation", body: "Une ligne « sujet, cible, ton » dans Google Sheets → l'IA génère le post → un brouillon est créé dans l'outil de planification → notification Slack « À valider » → publication uniquement après un clic d'approbation." },
    { title: "Ce qu'il ne faut pas faire", body: "Un robot qui commente automatiquement sous les posts de concurrents avec des messages générés, ou like des milliers de publications : contraire aux règles des plateformes, risque de blocage, atteinte à l'image de marque." }
  ],
  practice: "Construisez dans Zapier, Make ou n8n un workflow : ligne de tableur → rédaction par l'IA → brouillon enregistré → notification de validation humaine. Simulez la création de 3 messages et documentez le processus : qui valide, quelles données, quel coût estimé, quel plan d'arrêt d'urgence.",
  quiz: [
    { q: "Quelle est la différence entre une automatisation et un agent ?", options: ["Aucune", "L'automatisation suit des étapes fixes, l'agent choisit ses étapes", "L'agent est toujours moins cher", "L'automatisation utilise l'IA, pas l'agent"], answer: 1, why: "Un agent décide des actions pour atteindre un objectif ; une automatisation exécute un enchaînement prédéfini." },
    { q: "Pourquoi garder une validation humaine dans un workflow ?", options: ["Pour ralentir", "Pour éviter de publier une erreur ou un contenu inapproprié", "C'est obligatoire techniquement", "Pour contourner les CGU"], answer: 1, why: "L'IA peut se tromper : l'humain reste responsable de la publication." },
    { q: "Comment protéger une clé d'API ?", options: ["La publier dans l'équipe", "La garder secrète et limiter les accès", "L'écrire dans le post", "La partager par message public"], answer: 1, why: "Une clé exposée peut être utilisée par d'autres à vos frais." },
    { q: "L'automatisation de likes et de commentaires sur les réseaux est…", options: ["Recommandée", "Généralement interdite par les conditions d'utilisation", "Obligatoire", "Réservée aux grandes marques"], answer: 1, why: "Ces pratiques risquent la suspension du compte." },
    { q: "Avant de lancer un traitement de milliers de textes via API, il faut…", options: ["Rien", "Estimer le coût, tester sur un échantillon, fixer un plafond", "Désactiver la sécurité", "Utiliser une seule requête"], answer: 1, why: "Le coût dépend du volume et les erreurs sont plus faciles à corriger sur un échantillon." },
    { q: "Que fait un déclencheur (trigger) dans un workflow ?", options: ["Il termine le workflow", "Il lance le workflow quand un événement survient", "Il supprime les données", "Il crée un compte"], answer: 1, why: "Ex. : nouvelle ligne dans un tableur, nouveau message ou horaire précis." }
  ]
}
];
