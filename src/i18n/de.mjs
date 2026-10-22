export default {
  meta: {
    siteName: 'Ice Box',
    brandHtml: 'Ice Box',
    titleSep: ' | ',
    homeTitle: 'Ice Box: selten genutzte Android-Apps einfrieren, mit oder ohne Root',
    homeDescription: 'Ice Box friert Android-Apps ein. Eingefrorene Apps können nicht im Hintergrund laufen und verschwinden vom Startbildschirm, bis du sie mit einem Tippen auftaust. Funktioniert mit Root, Device Owner, Debugging über WLAN, Shizuku und mehr.',
    appDescription: 'Ice Box friert Android-Apps ein. Eingefrorene Apps können nicht im Hintergrund laufen und sind auf dem Startbildschirm ausgeblendet, bis du sie auftaust. Funktioniert mit Root und mit mehreren Modi ohne Root.',
    featureList: ['Apps mit einem Tippen einfrieren und auftauen', 'Automatisch einfrieren, wenn der Bildschirm ausgeht', 'Verknüpfungen auf dem Startbildschirm, die Apps auftauen und öffnen', 'Mehrere Tabs', 'Designs und Icon-Packs', 'Fingerabdruck- und PIN-Sperre', 'Vorinstallierte System-Apps einfrieren', 'Modi mit und ohne Root', 'Offenes SDK'],
    ogAlt: 'Ice Box: selten genutzte Apps auf Eis legen',
  },
  nav: {
    main: 'Hauptnavigation',
    home: 'Startseite',
    download: 'Download',
    language: 'Sprache wählen',
    skip: 'Zum Inhalt springen',
    breadcrumb: 'Navigationspfad',
  },
  pages: { home: 'Startseite' },
  common: {
    stillStuckPre: 'Kommst du nicht weiter? Sieh dir die ',
    stillStuckPost: ' an oder schreib uns über „Feedback“ in Ice Box eine E-Mail.',
    viewGuide: 'Anleitung ansehen',
    copy: 'Kopieren',
    copied: 'Kopiert',
    copyLink: 'Link kopieren',
    updated: 'Aktualisiert am {date}',
    onThisPage: 'Auf dieser Seite',
    related: 'Ähnliche Artikel',
  },
  footer: {
    "copyright": "© {year} Ice Box",
    "links": "Links der Website"
  },
  home: {
    "title": [
      "Friere die Apps ein,",
      "die du selten nutzt"
    ],
    "lead": [
      "Eingefrorene Apps liegen sicher verstaut in Ice Box.",
      "Vor dem System verborgen und im Hintergrund stillgelegt."
    ],
    "market": "",
    "auto": {
      "title": [
        "Antippen und öffnen.",
        "Sperren und wieder einfrieren."
      ],
      "lead": [
        "Tippe auf eine eingefrorene App und sie öffnet sich sofort.",
        "Mit „Automatisch einfrieren“ kommt sie wieder in die Box, sobald du den Bildschirm sperrst."
      ],
      "link": "Mehr zu „Automatisch einfrieren“"
    },
    "modes": {
      "title": [
        "Funktioniert",
        "auch ohne Root"
      ],
      "lead": [
        "Device Owner, Debugging über WLAN oder Shizuku. Du hast die Wahl."
      ],
      "link": "Alle Modi vergleichen",
      "items": [
        {
          "id": "deviceOwner",
          "line": "Einmal am Computer einrichten. Bleibt auch nach Neustarts aktiv."
        },
        {
          "id": "wireless",
          "line": "Direkt auf dem Smartphone einrichten. Ohne Computer."
        },
        {
          "id": "shizuku",
          "line": "Nutzt du schon Shizuku? Einfach Zugriff erlauben."
        }
      ]
    },
    "help": {
      "title": "Hilfe",
      "more": "Alle Fragen",
      "items": [
        {
          "q": "Wie richte ich Ice Box ohne Root ein?",
          "a": "Mit einem Computer richtest du über den [Ein-Klick-Aktivator](/guide/activator/) einmalig den Device-Owner-Modus ein, der danach dauerhaft funktioniert. Ab Android 11 klappt [Debugging über WLAN](/guide/wireless-debugging/) direkt auf dem Smartphone."
        },
        {
          "q": "Senden eingefrorene Apps noch Benachrichtigungen?",
          "a": "Eine eingefrorene App kann nicht laufen und empfängt daher selbst keine Push-Nachrichten. Auf manchen Smartphones zeigt der Push-Dienst des Systems trotzdem Benachrichtigungen an. Diese kannst du in den Systemeinstellungen deaktivieren."
        },
        {
          "q": "Wie aktualisiere ich eine eingefrorene App?",
          "a": "Taue sie in Ice Box auf, aktualisiere sie und friere sie danach wieder ein."
        },
        {
          "q": "Ist „Dieses Gerät wird verwaltet“ normal?",
          "a": "Ja, so funktioniert der Device-Owner-Modus. Den angezeigten Namen kannst du in Ice Box unter „Labor“ ändern."
        },
        {
          "q": "Wie deinstalliere ich Ice Box?",
          "a": "Taue zuerst alles auf und tippe dann in den Einstellungen von Ice Box auf „Deinstallieren“. Im Device-Owner-Modus darfst du Ice Box nicht über den Startbildschirm deinstallieren."
        },
        {
          "q": "Neues Smartphone. Wie stelle ich meinen Kauf wieder her?",
          "a": "Tippe auf dem Kaufbildschirm auf „Bereits gekauft“. Käufe über Google Play brauchen die Play-Version, andere Kanäle nutzen deine Bestellnummer. Mehr dazu in der [Kaufanleitung](/purchase/)."
        }
      ]
    },
    "closing": {
      "title": [
        "Dein Smartphone,",
        "frisch wie am ersten Tag"
      ]
      ,"note": "Zehn Jahre Entwicklung und mehr als 5 Millionen Downloads bei Google Play."
    }
  },
  phone: {
    "names": {
      "map": "Karten",
      "camera": "Kamera",
      "music": "Musik",
      "video": "Video",
      "shop": "Shopping",
      "food": "Essen",
      "game": "Spiele",
      "news": "News",
      "chat": "Chat",
      "ride": "Fahrten",
      "travel": "Reisen",
      "fit": "Fitness"
    },
    "tabs": [
      "Alltag",
      "Tools",
      "Spiele"
    ],
    "date": "Mittwoch, 21. Oktober",
    "toastFrozen": "Eingefroren",
    "toastDefrosted": "Aufgetaut",
    "power": "Ein/Aus-Taste",
    "back": "Zurück"
  },
  modes: {
    root: { name: 'Root-Modus', desc: 'Für gerootete Smartphones. Erteile Ice Box Root-Zugriff und fertig.', note: '', extra: '' },
    deviceOwner: { name: 'Device-Owner-Modus', desc: 'Ohne Root. Einmal am Computer aktivieren, funktioniert auch nach Neustarts und Systemupdates weiter.', note: 'Konten auf dem Smartphone müssen vorübergehend entfernt werden', extra: '' },
    wireless: { name: 'Modus „Debugging über WLAN“', desc: 'Ohne Root, ohne Computer. Aktiviere „Debugging über WLAN“ und gib den Kopplungscode in der Benachrichtigung von Ice Box ein.', note: '', extra: '' },
    adb: { name: 'ADB-Modus', desc: 'Ohne Root und ohne Konten zu entfernen. Führe am Computer den Aktivator oder einen einzigen ADB-Befehl aus.', note: '', extra: '' },
    shizuku: { name: 'Shizuku-Modus', desc: 'Nutzt du schon Shizuku oder Sui? Stell Ice Box auf den Shizuku-Modus um und es ist startklar.', note: '', extra: '' },
    qr: { name: 'Einrichtung per QR-Code', desc: 'Device-Owner-Modus ohne Computer einrichten. Erfordert vorher ein Zurücksetzen auf die Werkseinstellungen.', note: 'Erfordert Zurücksetzen auf Werkseinstellungen', extra: 'Erfordert Zurücksetzen auf Werkseinstellungen' },
  },
  modeTable: { mode: 'Modus', root: 'Ohne Root', pc: 'Ohne Computer', reboot: 'Bleibt nach Neustart', android: 'Android-Version', note: 'Hinweise', yes: 'Ja', no: 'Nein' },
  finder: {
    "root": {
      "q": "Ist dein Smartphone gerootet?",
      "yes": "Ja",
      "no": "Nein"
    },
    "pc": {
      "q": "Hast du einen Computer?",
      "yes": "Ja",
      "no": "Nein"
    },
    "android": {
      "q": "Android-Version",
      "new": "11 oder höher",
      "old": "10 oder älter"
    },
    "result": "Unsere Empfehlung"
  },
  guideGroups: {
    activate: 'Einrichtung',
    tips: 'Tipps',
    trouble: 'Fehlerbehebung',
    purchase: 'Kauf und Zahlung',
  },
  search: {
    placeholder: 'Hilfe durchsuchen, z. B. Device Owner, Verknüpfungen',
    empty: 'Nichts gefunden. Versuch es mit einem anderen Suchbegriff.',
  },
  download: {
    play: 'Für Smartphones mit Google-Diensten. Kauf und Prüfung laufen über Google Play',
    coolapkName: 'CoolApk',
    coolapk: 'Suche in der CoolApk-App nach Ice Box (冰箱)',
    apkName: 'APK-Datei',
    apk: 'Neueste Installationsdatei direkt herunterladen',
    activator: 'Aktivator für Windows herunterladen',
    webActivator: 'Web-Aktivator öffnen',
  },
  themes: {
    sakura: 'Kirschblütenrosa',
    clearBlue: 'Klares Blau',
    matcha: 'Matcha-Grün',
    panda: 'Panda',
    dazzleRed: 'Leuchtendes Rot',
    amoled: 'AMOLED-Schwarz',
    clearRed: 'Klares Rot',
    clearGreen: 'Klares Grün',
    softPink: 'Zartrosa',
    import: 'In Ice Box importieren',
  },
  alerts: { note: 'Hinweis', tip: 'Tipp', important: 'Wichtig', warning: 'Warnung', caution: 'Achtung' },
  special: {
    theme: {
      title: 'Design für Ice Box',
      lead: 'Jemand hat ein Design für Ice Box mit dir geteilt. Öffne diesen Link auf einem Smartphone mit Ice Box, um es anzusehen und zu importieren.',
      open: 'In Ice Box öffnen',
      copy: 'Link kopieren',
      note: 'Du hast Ice Box noch nicht?',
      download: 'Ice Box herunterladen',
      gallery: 'Weitere Designs ansehen',
      invalid: 'Dieser Design-Link konnte nicht gelesen werden. Prüfe, ob der Link vollständig ist.',
      manual: 'Öffnet sich nichts? Kopiere den Link und tippe dann in den Einstellungen von Ice Box auf „Aus Zwischenablage importieren“.',
      restore: 'Doch nicht das Richtige? Öffne in den Einstellungen von Ice Box „Design & Layout“ und stelle über das Menü den Standard wieder her.',
    },
    list: {
      title: 'Geteilte Einfrierliste',
      lead: 'Jemand hat eine Liste vorinstallierter Apps geteilt, die sich einfrieren lassen. Öffne diesen Link auf einem Smartphone mit Ice Box. Ice Box zeigt dir die Apps aus der Liste, die eingefroren werden können, und friert sie nach deiner Bestätigung ein.',
      open: 'In Ice Box öffnen',
      copy: 'Link kopieren',
      note: 'Du hast Ice Box noch nicht?',
      download: 'Ice Box herunterladen',
      manual: 'Öffnet sich nichts? Kopiere den Link und tippe dann in den Einstellungen von Ice Box auf „Aus Zwischenablage importieren“.',
      invalid: 'Dieser Link enthält keine Listen-ID. Prüfe, ob der Link vollständig ist.',
    },
    notFound: {
      title: 'Seite nicht gefunden',
      lead: 'Diese Seite wurde vielleicht verschoben oder entfernt. Hier geht es weiter:',
      home: 'Startseite',
      guide: 'Hilfe',
      faq: 'FAQ',
      download: 'Ice Box herunterladen',
    },
  },
  langHint: { text: 'Diese Seite gibt es auch auf Deutsch', go: 'Auf Deutsch anzeigen', close: 'Schließen' },
};
