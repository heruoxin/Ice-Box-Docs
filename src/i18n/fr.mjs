export default {
  meta: {
    siteName: "Ice Box",
    brandHtml: "Ice Box",
    titleSep: " | ",
    homeTitle: "Ice Box : congelez les applications Android que vous utilisez rarement, avec ou sans root",
    homeDescription: "Ice Box est un congélateur d'applications pour Android. Les applications congelées ne peuvent pas tourner en arrière-plan et disparaissent de l'écran d'accueil jusqu'à ce que vous les décongeliez d'un seul appui. Fonctionne avec root, Device Owner, Débogage sans fil, Shizuku et plus encore.",
    appDescription: "Ice Box est un congélateur d'applications pour Android. Les applications congelées ne peuvent pas tourner en arrière-plan et restent masquées de l'écran d'accueil jusqu'à leur décongélation. Fonctionne avec root et avec plusieurs modes sans root.",
    featureList: ["Congeler et décongeler les applications en un appui", "Congélation auto à l'extinction de l'écran", "Raccourcis sur l'écran d'accueil qui décongèlent et ouvrent les applications", "Onglets multiples", "Thèmes et packs d'icônes", "Verrouillage par empreinte et code PIN", "Congélation des applications système préinstallées", "Modes de fonctionnement avec et sans root", "SDK ouvert"],
    ogAlt: "Ice Box : mettez au congélateur les applications que vous utilisez rarement",
  },
  nav: {
    main: "Navigation principale",
    home: "Accueil",
    download: "Télécharger",
    language: "Choisir la langue",
    skip: "Aller au contenu",
    breadcrumb: "Fil d'Ariane",
  },
  pages: { home: "Accueil" },
  common: {
    stillStuckPre: "Toujours bloqué ? Consultez la ",
    stillStuckPost: ", ou écrivez-nous avec « Commentaires » dans Ice Box.",
    viewGuide: "Voir le guide",
    copy: "Copier",
    copied: "Copié",
    copyLink: "Copier le lien",
    updated: "Mis à jour : {date}",
    onThisPage: "Sur cette page",
    related: "Articles connexes",
  },
  footer: {
    "copyright": "© {year} Ice Box",
    "links": "Liens du site"
  },
  home: {
    "title": [
      "Congelez les applis",
      "peu utilisées"
    ],
    "lead": [
      "Les applications congelées sont rangées dans Ice Box.",
      "Masquées du système, et incapables de tourner en arrière-plan."
    ],
    "market": "",
    "auto": {
      "title": [
        "Un appui pour ouvrir.",
        "Verrouillez pour recongeler."
      ],
      "lead": [
        "Appuyez sur une application congelée : elle s'ouvre aussitôt.",
        "Avec la Congélation auto, elle retourne dans la boîte dès que vous verrouillez l'écran."
      ],
      "link": "À propos de la Congélation auto"
    },
    "modes": {
      "title": [
        "Fonctionne",
        "sans root"
      ],
      "lead": [
        "Device Owner, Débogage sans fil ou Shizuku. À vous de choisir."
      ],
      "link": "Comparer tous les modes",
      "items": [
        {
          "id": "deviceOwner",
          "line": "Une seule configuration avec un ordinateur. Résiste aux redémarrages."
        },
        {
          "id": "wireless",
          "line": "Configuration sur le téléphone lui-même. Pas besoin d'ordinateur."
        },
        {
          "id": "shizuku",
          "line": "Vous utilisez déjà Shizuku ? Il suffit d'accorder l'accès."
        }
      ]
    },
    "help": {
      "title": "Aide",
      "more": "Toutes les questions",
      "items": [
        {
          "q": "Comment le configurer sans root ?",
          "a": "Avec un ordinateur, utilisez l'[activateur en un clic](/guide/activator/) pour configurer une seule fois le mode Device Owner, qui continue ensuite de fonctionner. Sur Android 11 et versions ultérieures, le [Débogage sans fil](/guide/wireless-debugging/) fonctionne directement sur le téléphone."
        },
        {
          "q": "Les applications congelées envoient-elles encore des notifications ?",
          "a": "Une application congelée ne peut pas s'exécuter, elle ne reçoit donc pas ses propres messages push. Sur certains téléphones, le service push du système peut encore afficher des notifications, que vous pouvez désactiver dans les paramètres du système."
        },
        {
          "q": "Comment mettre à jour une application congelée ?",
          "a": "Décongelez-la dans Ice Box, mettez-la à jour, puis congelez-la de nouveau."
        },
        {
          "q": "Le message « Cet appareil est géré » est-il normal ?",
          "a": "Oui, c'est le fonctionnement normal du mode Device Owner. Vous pouvez modifier le nom affiché dans le « Laboratoire » d'Ice Box."
        },
        {
          "q": "Comment désinstaller Ice Box ?",
          "a": "Décongelez d'abord tout, puis appuyez sur « Désinstaller » dans les paramètres d'Ice Box. En mode Device Owner, ne le désinstallez pas depuis l'écran d'accueil."
        },
        {
          "q": "Nouveau téléphone : comment restaurer mon achat ?",
          "a": "Appuyez sur « J'ai déjà acheté » sur l'écran d'achat. Les achats Google Play nécessitent la version Google Play ; les autres canaux utilisent votre numéro de commande. Consultez le [guide d'achat](/purchase/)."
        }
      ]
    },
    "closing": {
      "title": [
        "Votre téléphone,",
        "comme au premier jour"
      ]
      ,"note": "Dix ans de développement, et plus de 5 millions de téléchargements sur Google Play."
    }
  },
  phone: {
    "names": {
      "map": "Cartes",
      "camera": "Photo",
      "music": "Musique",
      "video": "Vidéo",
      "shop": "Achats",
      "food": "Repas",
      "game": "Jeux",
      "news": "Actus",
      "chat": "Chat",
      "ride": "Taxi",
      "travel": "Voyages",
      "fit": "Sport"
    },
    "tabs": [
      "Quotidien",
      "Outils",
      "Jeux"
    ],
    "date": "mercredi 21 octobre",
    "toastFrozen": "Congélation terminée",
    "toastDefrosted": "Décongélation terminée",
    "power": "Bouton marche/arrêt",
    "back": "Retour"
  },
  modes: {
    root: { name: "Mode root", desc: "Pour les téléphones rootés. Accordez l'accès root à Ice Box, et c'est tout.", note: "", extra: "" },
    deviceOwner: { name: "Mode Device Owner", desc: "Sans root. Une seule activation avec un ordinateur, et ça continue de fonctionner après les redémarrages et les mises à jour du système.", note: "Les comptes du téléphone doivent être supprimés temporairement", extra: "" },
    wireless: { name: "Mode Débogage sans fil", desc: "Sans root ni ordinateur. Activez le débogage sans fil et saisissez le code d'association dans la notification d'Ice Box.", note: "", extra: "" },
    adb: { name: "Mode ADB", desc: "Sans root, et sans supprimer les comptes. Lancez l'activateur ou une commande ADB sur un ordinateur.", note: "", extra: "" },
    shizuku: { name: "Mode Shizuku", desc: "Vous utilisez déjà Shizuku ou Sui ? Passez Ice Box en mode Shizuku, et c'est prêt.", note: "", extra: "" },
    qr: { name: "Configuration par code QR", desc: "Configurez le mode Device Owner sans ordinateur. Nécessite d'abord une réinitialisation d'usine.", note: "Réinitialisation d'usine requise", extra: "Réinitialisation d'usine requise" },
  },
  modeTable: { mode: "Mode de fonctionnement", root: "Sans root", pc: "Sans ordinateur", reboot: "Résiste aux redémarrages", android: "Version d'Android", note: "Remarques", yes: "Oui", no: "Non" },
  finder: {
    "root": {
      "q": "Votre téléphone est-il rooté ?",
      "yes": "Oui",
      "no": "Non"
    },
    "pc": {
      "q": "Avez-vous un ordinateur ?",
      "yes": "Oui",
      "no": "Non"
    },
    "android": {
      "q": "Version d'Android",
      "new": "11 ou ultérieure",
      "old": "10 ou antérieure"
    },
    "result": "Nous vous conseillons"
  },
  guideGroups: {
    activate: "Guides de configuration",
    tips: "Astuces",
    trouble: "Dépannage",
    purchase: "Achat et paiement",
  },
  search: {
    placeholder: "Rechercher dans l'aide, par exemple : Device Owner, raccourcis",
    empty: "Aucun résultat. Essayez un autre mot-clé.",
  },
  download: {
    play: "Pour les téléphones avec les services Google. Les achats se font et sont vérifiés via Google Play",
    coolapkName: "CoolApk",
    coolapk: "Recherchez Ice Box (冰箱) dans l'application CoolApk",
    apkName: "Fichier APK",
    apk: "Téléchargez directement le dernier programme d'installation",
    activator: "Télécharger l'activateur pour Windows",
    webActivator: "Ouvrir l'activateur web",
  },
  themes: {
    sakura: "Rose Sakura",
    clearBlue: "Bleu limpide",
    matcha: "Vert matcha",
    panda: "Panda",
    dazzleRed: "Rouge éclatant",
    amoled: "Noir AMOLED",
    clearRed: "Rouge limpide",
    clearGreen: "Vert limpide",
    softPink: "Rose tendre",
    import: "Importer dans Ice Box",
  },
  alerts: { note: "Remarque", tip: "Astuce", important: "Important", warning: "Avertissement", caution: "Attention" },
  special: {
    theme: {
      title: "Thème Ice Box",
      lead: "Quelqu'un a partagé un thème Ice Box avec vous. Ouvrez ce lien sur un téléphone où Ice Box est installé pour le prévisualiser et l'importer.",
      open: "Ouvrir dans Ice Box",
      copy: "Copier le lien",
      note: "Vous n'avez pas encore Ice Box ?",
      download: "Télécharger Ice Box",
      gallery: "Voir d'autres thèmes",
      invalid: "Impossible de lire ce lien de thème. Vérifiez que le lien est complet.",
      manual: "Le lien ne s'ouvre pas ? Copiez-le, puis appuyez sur « Importer depuis le presse-papiers » dans les paramètres d'Ice Box.",
      restore: "Vous changez d'avis ? Dans les paramètres d'Ice Box, ouvrez « Thème et disposition » et rétablissez le thème par défaut depuis le menu.",
    },
    list: {
      title: "Liste de congélation partagée",
      lead: "Quelqu'un a partagé une liste d'applications préinstallées congelables. Ouvrez ce lien sur un téléphone où Ice Box est installé. Ice Box affiche les applications de la liste qui peuvent être congelées, et les congèle après votre confirmation.",
      open: "Ouvrir dans Ice Box",
      copy: "Copier le lien",
      note: "Vous n'avez pas encore Ice Box ?",
      download: "Télécharger Ice Box",
      manual: "Le lien ne s'ouvre pas ? Copiez-le, puis appuyez sur « Importer depuis le presse-papiers » dans les paramètres d'Ice Box.",
      invalid: "Ce lien ne contient aucun identifiant de liste. Vérifiez que le lien est complet.",
    },
    notFound: {
      title: "Page introuvable",
      lead: "Cette page a peut-être été déplacée ou supprimée. Vous pouvez continuer ici :",
      home: "Accueil",
      guide: "Centre d'aide",
      faq: "FAQ",
      download: "Télécharger Ice Box",
    },
  },
  langHint: { text: "Cette page existe en français", go: "Afficher en français", close: "Fermer" },
};
