export default {
  meta: {
    siteName: 'Ice Box',
    brandHtml: 'Ice Box',
    titleSep: '｜',
    homeTitle: 'Ice Box：あまり使わない Android アプリを凍結。root 化なしでも使えます',
    homeDescription: 'Ice Box は Android 向けのアプリ凍結ツールです。凍結したアプリはバックグラウンドで動作せず、ホーム画面からも消えます。使いたいときはワンタップで解凍。Root、Device Owner、ワイヤレスデバッグ、Shizuku など複数のモードに対応しています。',
    appDescription: 'Ice Box は Android 向けのアプリ凍結ツールです。凍結したアプリはバックグラウンドで動作せず、ホーム画面にも表示されなくなります。root 化した端末でも、していない端末でも使えます。',
    featureList: ['ワンタップでアプリを凍結・解凍', '画面オフで自動凍結', 'ホーム画面のショートカットから解凍して起動', '複数タブで分類', 'テーマとアイコンパック', '指紋・PIN ロック', 'プリインストールアプリの凍結', 'root と非 root の複数モード', 'オープン SDK'],
    ogAlt: 'Ice Box：あまり使わないアプリを凍結',
  },
  nav: {
    main: 'メインナビゲーション',
    home: 'ホーム',
    download: 'ダウンロード',
    language: '言語を選択',
    skip: '本文へ移動',
    breadcrumb: 'パンくずリスト',
  },
  pages: { home: 'ホーム' },
  common: {
    stillStuckPre: '解決しない場合は',
    stillStuckPost: 'をご覧いただくか、Ice Box の「Feedback」からメールでお問い合わせください。',
    viewGuide: 'ガイドを見る',
    copy: 'コピー',
    copied: 'コピーしました',
    copyLink: 'リンクをコピー',
    updated: '{date} 更新',
    onThisPage: 'このページの内容',
    related: '関連記事',
  },
  footer: {
    "copyright": "© {year} Ice Box",
    "links": "サイトリンク"
  },
  home: {
    "title": [
      "使わないアプリは",
      "凍結しよう"
    ],
    "lead": [
      "凍結したアプリは、Ice Box の中へ。",
      "システムからは隠れ、バックグラウンドで動くこともありません。"
    ],
    "market": "",
    "auto": {
      "title": [
        "タップで起動",
        "ロックで再凍結"
      ],
      "lead": [
        "凍結したアプリも、タップすればすぐに起動。",
        "自動凍結をオンにすれば、画面をロックしたときにまた Ice Box へ戻ります。"
      ],
      "link": "自動凍結について"
    },
    "modes": {
      "title": [
        "root 化なしでも",
        "使える"
      ],
      "lead": [
        "Device Owner、ワイヤレスデバッグ、Shizuku から選ぶだけ。"
      ],
      "link": "すべての方法を比較",
      "items": [
        {
          "id": "deviceOwner",
          "line": "パソコンで一度設定すれば、再起動後も有効。"
        },
        {
          "id": "wireless",
          "line": "端末だけで設定でき、パソコンは不要。"
        },
        {
          "id": "shizuku",
          "line": "Shizuku を使っているなら、許可するだけ。"
        }
      ]
    },
    "help": {
      "title": "ヘルプ",
      "more": "よくある質問をすべて見る",
      "items": [
        {
          "q": "root 化せずに使うには？",
          "a": "パソコンがあれば、[ワンクリック有効化ツール](/guide/activator/)で Device Owner モードを一度設定するだけで使い続けられます。Android 11 以降なら、[ワイヤレスデバッグ](/guide/wireless-debugging/)で端末だけで設定できます。"
        },
        {
          "q": "凍結したアプリの通知は届きますか？",
          "a": "凍結したアプリは動作しないため、アプリ自身のプッシュ通知は届きません。一部の端末ではシステムのプッシュが通知を表示することがあり、システム設定でオフにできます。"
        },
        {
          "q": "凍結したアプリをアップデートするには？",
          "a": "Ice Box で解凍してからアップデートし、終わったらまた凍結してください。"
        },
        {
          "q": "「このデバイスは管理されています」と表示されるのは正常？",
          "a": "正常です。Device Owner モードの仕組みによるものです。表示される名前は Ice Box の「Laboratory」で変更できます。"
        },
        {
          "q": "Ice Box をアンインストールするには？",
          "a": "まずすべて解凍し、Ice Box の設定で「Uninstall」をタップします。Device Owner モードでは、ホーム画面から直接アンインストールしないでください。"
        },
        {
          "q": "機種変更したら、購入はどう復元しますか？",
          "a": "購入画面で「I've purchased」をタップします。Google Play で購入した場合は Play からインストールし、それ以外は注文番号で有効化します。詳しくは[購入ガイド](/purchase/)をご覧ください。"
        }
      ]
    },
    "closing": {
      "title": [
        "いつまでも、",
        "最初の日のように"
      ]
      ,"note": "開発を続けて 10 年。Google Play でのダウンロードは 500 万回を超えました。"
    }
  },
  phone: {
    "names": {
      "map": "マップ",
      "camera": "カメラ",
      "music": "音楽",
      "video": "動画",
      "shop": "ショップ",
      "food": "グルメ",
      "game": "ゲーム",
      "news": "ニュース",
      "chat": "チャット",
      "ride": "配車",
      "travel": "旅行",
      "fit": "フィット"
    },
    "tabs": [
      "よく使う",
      "ツール",
      "ゲーム"
    ],
    "date": "10月21日（水）",
    "toastFrozen": "Frozen",
    "toastDefrosted": "Defrosted",
    "power": "電源キー",
    "back": "戻る"
  },
  modes: {
    root: { name: 'Root モード', desc: 'root 化済みの端末向けです。Ice Box に root 権限を許可するだけで使えます。', note: '', extra: '' },
    deviceOwner: { name: 'Device Owner モード', desc: 'root 不要。パソコンで一度有効化すれば、再起動やシステムアップデート後も設定し直す必要はありません。', note: '有効化の前に端末のアカウントを一時的に削除する必要があります', extra: '' },
    wireless: { name: 'ワイヤレスデバッグモード', desc: 'root もパソコンも不要。「ワイヤレス デバッグ」をオンにして、Ice Box の通知にペア設定コードを入力するだけです。', note: '', extra: '' },
    adb: { name: 'ADB モード', desc: 'root 不要で、アカウントの削除も不要です。パソコンで有効化ツールまたは ADB コマンドを 1 つ実行します。', note: '', extra: '' },
    shizuku: { name: 'Shizuku モード', desc: 'すでに Shizuku または Sui を使っているなら、Ice Box を Shizuku モードに切り替えるだけです。', note: '', extra: '' },
    qr: { name: 'QR コードで設定', desc: 'パソコンなしで Device Owner モードを設定できます。ただし事前に初期化が必要です。', note: '端末の初期化が必要', extra: '端末の初期化が必要' },
  },
  modeTable: { mode: '動作モード', root: 'root 不要', pc: 'パソコン不要', reboot: '再起動後も有効', android: 'Android バージョン', note: '備考', yes: 'はい', no: 'いいえ' },
  finder: {
    "root": {
      "q": "端末は root 化済みですか？",
      "yes": "はい",
      "no": "いいえ"
    },
    "pc": {
      "q": "パソコンはありますか？",
      "yes": "ある",
      "no": "ない"
    },
    "android": {
      "q": "Android のバージョン",
      "new": "11 以降",
      "old": "10 以前"
    },
    "result": "おすすめ"
  },
  guideGroups: {
    activate: '設定ガイド',
    tips: '使い方のヒント',
    trouble: 'トラブルシューティング',
    purchase: '購入と支払い',
  },
  search: {
    placeholder: 'ヘルプを検索（例：Device Owner、ショートカット）',
    empty: '該当する内容が見つかりませんでした。別のキーワードでお試しください。',
  },
  download: {
    play: 'Google サービスが使える端末向け。購入と認証は Google Play で行います',
    coolapkName: 'CoolApk（酷安）',
    coolapk: 'CoolApk アプリで「冰箱」を検索してダウンロード',
    apkName: 'APK ファイル',
    apk: '最新版のインストーラーを直接ダウンロード',
    activator: 'Windows 用有効化ツールをダウンロード',
    webActivator: 'Web 版の有効化ツールを開く',
  },
  themes: {
    sakura: '桜ピンク',
    clearBlue: 'クリアブルー',
    matcha: '抹茶グリーン',
    panda: 'パンダ',
    dazzleRed: 'ビビッドレッド',
    amoled: 'AMOLED ブラック',
    clearRed: 'クリアレッド',
    clearGreen: 'クリアグリーン',
    softPink: 'ソフトピンク',
    import: 'Ice Box に読み込む',
  },
  alerts: { note: 'メモ', tip: 'ヒント', important: '重要', warning: '注意', caution: '警告' },
  special: {
    theme: {
      title: 'Ice Box のテーマ',
      lead: 'Ice Box のテーマが共有されました。Ice Box をインストールした端末でこのリンクを開くと、プレビューして読み込めます。',
      open: 'Ice Box で開く',
      copy: 'リンクをコピー',
      note: 'Ice Box をまだお持ちでないですか？',
      download: 'Ice Box をダウンロード',
      gallery: 'ほかのテーマを見る',
      invalid: 'このテーマのリンクを読み取れませんでした。リンクが途中で切れていないかご確認ください。',
      restore: '元に戻したいときは、Ice Box の設定で「Theme & Layout」を開き、右上のメニューからデフォルトに戻せます。',
    },
    list: {
      title: '共有された凍結リスト',
      lead: '凍結できるプリインストールアプリのリストが共有されました。Ice Box をインストールした端末でこのリンクを開くと、凍結できるアプリが表示され、確認したあとで凍結されます。',
      open: 'Ice Box で開く',
      copy: 'リンクをコピー',
      note: 'Ice Box をまだお持ちでないですか？',
      download: 'Ice Box をダウンロード',
      invalid: 'リンクにリスト ID が含まれていません。リンクが途中で切れていないかご確認ください。',
    },
    notFound: {
      title: 'ページが見つかりません',
      lead: 'このページは移動または削除された可能性があります。こちらからお進みください。',
      home: 'ホーム',
      guide: 'ヘルプセンター',
      faq: 'よくある質問',
      download: 'Ice Box をダウンロード',
    },
  },
  langHint: { text: 'このページには日本語版があります', go: '日本語で表示', close: '閉じる' },
};
