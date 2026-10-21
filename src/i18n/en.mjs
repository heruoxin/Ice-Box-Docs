export default {
  meta: {
    siteName: 'Ice Box',
    brandHtml: 'Ice Box',
    titleSep: ' | ',
    homeTitle: 'Ice Box: freeze Android apps you rarely use, with or without root',
    homeDescription: 'Ice Box is an app freezer for Android. Frozen apps cannot run in the background and disappear from your home screen until you defrost them in one tap. Works with root, Device Owner, Wireless debugging, Shizuku and more.',
    appDescription: 'Ice Box is an app freezer for Android. Frozen apps cannot run in the background and are hidden from the home screen until you defrost them. Works with root and with several non-root modes.',
    featureList: ['Freeze and defrost apps in one tap', 'Auto-freeze after screen off', 'Home screen shortcuts that defrost and open apps', 'Multiple tabs', 'Themes and icon packs', 'Fingerprint and PIN lock', 'Freeze pre-installed system apps', 'Root and non-root work modes', 'Open SDK'],
    ogAlt: 'Ice Box: put the apps you rarely use on ice',
  },
  nav: {
    main: 'Main navigation',
    home: 'Home',
    download: 'Download',
    language: 'Choose language',
    skip: 'Skip to content',
    breadcrumb: 'Breadcrumb',
  },
  pages: { home: 'Home' },
  common: {
    stillStuckPre: 'Still stuck? See the ',
    stillStuckPost: ', or email us with Feedback in Ice Box.',
    viewGuide: 'View the guide',
    copy: 'Copy',
    copied: 'Copied',
    copyLink: 'Copy link',
    updated: 'Updated {date}',
    onThisPage: 'On this page',
    related: 'Related articles',
  },
  footer: {
    "copyright": "© {year} Ice Box",
    "links": "Site links"
  },
  home: {
    "title": [
      "Freeze the apps",
      "you rarely use"
    ],
    "lead": [
      "Frozen apps are tucked away in Ice Box.",
      "Hidden from the system, and unable to run in the background."
    ],
    "market": "",
    "auto": {
      "title": [
        "Tap to open.",
        "Lock to refreeze."
      ],
      "lead": [
        "Tap a frozen app and it opens right away.",
        "With Auto Freeze on, it goes back into the box when you lock the screen."
      ],
      "link": "About Auto Freeze"
    },
    "modes": {
      "title": [
        "Works",
        "without root"
      ],
      "lead": [
        "Device Owner, Wireless debugging or Shizuku. Pick one."
      ],
      "link": "Compare all modes",
      "items": [
        {
          "id": "deviceOwner",
          "line": "Set up once with a computer. Survives reboots."
        },
        {
          "id": "wireless",
          "line": "Set up on the phone itself. No computer needed."
        },
        {
          "id": "shizuku",
          "line": "Already running Shizuku? Just grant access."
        }
      ]
    },
    "help": {
      "title": "Help",
      "more": "All questions",
      "items": [
        {
          "q": "How do I set it up without root?",
          "a": "With a computer, use the [one-click activator](/guide/activator/) to set up Device Owner mode once, and it keeps working. On Android 11 and later, [Wireless debugging](/guide/wireless-debugging/) works right on the phone."
        },
        {
          "q": "Do frozen apps still send notifications?",
          "a": "A frozen app cannot run, so it gets no push messages of its own. On some phones the system push service may still show notifications, which you can turn off in system settings."
        },
        {
          "q": "How do I update a frozen app?",
          "a": "Defrost it in Ice Box, update it, then freeze it again."
        },
        {
          "q": "Is \"This device is managed\" normal?",
          "a": "Yes, that is how Device Owner mode works. You can change the name it shows in Ice Box under \"Laboratory\"."
        },
        {
          "q": "How do I uninstall Ice Box?",
          "a": "Defrost everything first, then tap \"Uninstall\" in Ice Box settings. In Device Owner mode, do not uninstall it from the home screen."
        },
        {
          "q": "New phone. How do I restore my purchase?",
          "a": "Tap \"I've purchased\" on the purchase screen. Google Play purchases need the Play version; other channels use your order number. See the [purchase guide](/purchase/)."
        }
      ]
    },
    "closing": {
      "title": [
        "Your phone,",
        "as fresh as day one"
      ]
      ,"note": "Ten years of development, and more than 5 million downloads on Google Play."
    }
  },
  phone: {
    "names": {
      "map": "Maps",
      "camera": "Camera",
      "music": "Music",
      "video": "Video",
      "shop": "Shop",
      "food": "Food",
      "game": "Games",
      "news": "News",
      "chat": "Chat",
      "ride": "Ride",
      "travel": "Travel",
      "fit": "Fitness"
    },
    "tabs": [
      "Daily",
      "Tools",
      "Games"
    ],
    "date": "Wednesday, October 21",
    "toastFrozen": "Frozen",
    "toastDefrosted": "Defrosted",
    "power": "Power key",
    "back": "Back"
  },
  modes: {
    root: { name: 'Root mode', desc: 'For rooted phones. Grant Ice Box root access and you are done.', note: '', extra: '' },
    deviceOwner: { name: 'Device Owner mode', desc: 'No root. Activate once with a computer, and it keeps working after reboots and system updates.', note: 'Accounts on the phone must be removed temporarily', extra: '' },
    wireless: { name: 'Wireless debugging mode', desc: 'No root, no computer. Turn on Wireless debugging and type the pairing code into the Ice Box notification.', note: '', extra: '' },
    adb: { name: 'ADB mode', desc: 'No root, and no need to remove accounts. Run the activator or one ADB command on a computer.', note: '', extra: '' },
    shizuku: { name: 'Shizuku mode', desc: 'Already using Shizuku or Sui? Switch Ice Box to Shizuku mode and it is ready.', note: '', extra: '' },
    qr: { name: 'QR code setup', desc: 'Set up Device Owner mode without a computer. Requires a factory reset first.', note: 'Requires a factory reset', extra: 'Requires a factory reset' },
  },
  modeTable: { mode: 'Work mode', root: 'No root', pc: 'No computer', reboot: 'Survives reboots', android: 'Android version', note: 'Notes', yes: 'Yes', no: 'No' },
  finder: {
    "root": {
      "q": "Is your phone rooted?",
      "yes": "Yes",
      "no": "No"
    },
    "pc": {
      "q": "Have a computer?",
      "yes": "Yes",
      "no": "No"
    },
    "android": {
      "q": "Android version",
      "new": "11 or later",
      "old": "10 or earlier"
    },
    "result": "We suggest"
  },
  guideGroups: {
    activate: 'Setup guides',
    tips: 'Tips',
    trouble: 'Troubleshooting',
    purchase: 'Purchase and payment',
  },
  search: {
    placeholder: 'Search help, for example: Device Owner, shortcuts',
    empty: 'Nothing found. Try another keyword.',
  },
  download: {
    play: 'For phones with Google services. Purchases are made and verified through Google Play',
    coolapkName: 'CoolApk',
    coolapk: 'Search for Ice Box (冰箱) in the CoolApk app',
    apkName: 'APK file',
    apk: 'Download the latest installer directly',
    activator: 'Download the activator for Windows',
    webActivator: 'Open the web activator',
  },
  themes: {
    sakura: 'Sakura Pink',
    clearBlue: 'Clear Blue',
    matcha: 'Matcha Green',
    panda: 'Panda',
    dazzleRed: 'Dazzling Red',
    amoled: 'AMOLED Black',
    clearRed: 'Clear Red',
    clearGreen: 'Clear Green',
    softPink: 'Soft Pink',
    import: 'Import to Ice Box',
  },
  alerts: { note: 'Note', tip: 'Tip', important: 'Important', warning: 'Warning', caution: 'Caution' },
  special: {
    theme: {
      title: 'Ice Box theme',
      lead: 'Someone shared an Ice Box theme with you. Open this link on a phone with Ice Box installed to preview and import it.',
      open: 'Open in Ice Box',
      copy: 'Copy link',
      note: 'Don\'t have Ice Box yet?',
      download: 'Download Ice Box',
      gallery: 'Browse more themes',
      invalid: 'This theme link could not be read. Please check that the link is complete.',
      restore: 'Changed your mind? In Ice Box settings, open Theme & Layout and restore the default from the menu.',
    },
    list: {
      title: 'Shared freeze list',
      lead: 'Someone shared a list of pre-installed apps that can be frozen. Open this link on a phone with Ice Box installed. Ice Box shows the apps from the list that can be frozen, and freezes them after you confirm.',
      open: 'Open in Ice Box',
      copy: 'Copy link',
      note: 'Don\'t have Ice Box yet?',
      download: 'Download Ice Box',
      invalid: 'This link has no list ID. Please check that the link is complete.',
    },
    notFound: {
      title: 'Page not found',
      lead: 'This page may have moved or been removed. You can continue here:',
      home: 'Home',
      guide: 'Help Center',
      faq: 'FAQ',
      download: 'Download Ice Box',
    },
  },
  langHint: { text: 'This page is available in English', go: 'Switch to English', close: 'Close' },
};
