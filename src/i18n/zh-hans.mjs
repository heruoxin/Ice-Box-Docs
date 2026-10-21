export default {
  meta: {
    siteName: '冰箱 Ice Box',
    brandHtml: '冰箱 IceBox',
    titleSep: '｜',
    homeTitle: '冰箱 Ice Box：冻结不常用的 App，支持免 Root',
    homeDescription: '冰箱 Ice Box 是一款 Android 应用冻结工具。把不常用的 App 关进冰箱，冻结后无法在后台运行，也不会出现在桌面上，需要时一键解冻。支持 Root、设备管理员、无线调试、Shizuku 等多种工作模式。',
    appDescription: '冰箱 Ice Box 是一款 Android 应用冻结工具。冻结后的 App 无法在后台运行，也不会出现在桌面上，需要时可在冰箱中一键解冻。支持 Root 与免 Root 的多种工作模式。',
    featureList: ['一键冻结与解冻 App', '锁屏后自动冻结', '桌面快捷方式启动时自动解冻', '多标签分类', '主题与图标包', '指纹与密码锁', '冻结系统预装 App', 'Root 与免 Root 多种工作模式', '开放 SDK'],
    ogAlt: '冰箱 Ice Box：把不常用的 App 关进冰箱',
  },
  nav: {
    main: '主导航',
    home: '首页',
    download: '下载',
    language: '选择语言',
    skip: '跳到正文',
    breadcrumb: '当前位置',
  },
  pages: { home: '首页' },
  common: {
    stillStuckPre: '没有找到答案？可以看看',
    stillStuckPost: '，或在冰箱内通过「反馈」发送邮件。',
    viewGuide: '查看教程',
    copy: '复制',
    copied: '已复制',
    copyLink: '复制链接',
    updated: '更新于 {date}',
    onThisPage: '本页内容',
    related: '相关文章',
  },
  footer: {
    "copyright": "© {year} 冰箱 Ice Box",
    "links": "网站导航"
  },
  home: {
    "title": [
      "把不常用的 App",
      "关进冰箱"
    ],
    "lead": [
      "被冻结的 App 将被收纳入冰箱中。",
      "从系统中隐藏，更无法在后台运行。"
    ],
    "market": "也可在酷安、小米应用商店等渠道下载。",
    "auto": {
      "title": [
        "锁屏之后",
        "自动冻结"
      ],
      "lead": [
        "要用时点一下，即刻解冻打开。",
        "开启自动冻结，锁屏后它便回到冰箱。"
      ],
      "link": "了解自动冻结"
    },
    "modes": {
      "title": [
        "不用 Root",
        "也能用"
      ],
      "lead": [
        "设备管理员、无线调试、Shizuku，任选其一。"
      ],
      "link": "对比全部方式",
      "items": [
        {
          "id": "deviceOwner",
          "line": "用电脑设置一次，重启后依然有效。"
        },
        {
          "id": "wireless",
          "line": "在手机上就能完成，不用电脑。"
        },
        {
          "id": "shizuku",
          "line": "已经在用 Shizuku？直接授权即可。"
        }
      ]
    },
    "help": {
      "title": "使用帮助",
      "more": "查看全部常见问题",
      "items": [
        {
          "q": "没有 Root，怎么激活？",
          "a": "有电脑的话，推荐用[一键激活器](/guide/activator/)设置设备管理员模式，设置一次长期有效。Android 11 及以上也可以用[无线调试](/guide/wireless-debugging/)，在手机上完成。"
        },
        {
          "q": "冻结后，还会收到通知吗？",
          "a": "冻结的 App 无法运行，收不到自己的推送。部分手机的系统推送仍可能代为显示通知，可以在系统设置中关闭。"
        },
        {
          "q": "被冻结的 App 怎么更新？",
          "a": "先在冰箱中解冻，更新完成后再冻结。"
        },
        {
          "q": "通知栏提示「设备由单位管理」，正常吗？",
          "a": "正常，这是设备管理员模式的工作方式。显示的名称可以在冰箱的「实验室」中修改。"
        },
        {
          "q": "怎么卸载冰箱？",
          "a": "先全部解冻，再在冰箱设置中点击「卸载」。设备管理员模式下，不要直接从桌面卸载。"
        },
        {
          "q": "换了手机，怎么恢复购买？",
          "a": "在购买页面点击「我已购买」。Google Play 购买的请从 Play 安装，其他渠道用订单号激活，详见[购买说明](/purchase/)。"
        }
      ]
    },
    "closing": {
      "title": [
        "省心方便",
        "一如初见"
      ]
      ,"note": "持续开发十年，陪伴过 Google Play 上 500 万余次下载的用户。"
    }
  },
  phone: {
    "names": {
      "map": "地图",
      "camera": "相机",
      "music": "音乐",
      "video": "视频",
      "shop": "购物",
      "food": "外卖",
      "game": "游戏",
      "news": "新闻",
      "chat": "聊天",
      "ride": "打车",
      "travel": "旅行",
      "fit": "健身"
    },
    "tabs": [
      "常用",
      "工具",
      "游戏"
    ],
    "date": "10月21日 星期三",
    "toastFrozen": "已冻结",
    "toastDefrosted": "已解冻",
    "power": "电源键",
    "back": "返回"
  },
  modes: {
    root: { name: 'Root 模式', desc: '适用于已经 Root 的手机。授予冰箱 Root 权限后即可使用，无需其他设置。', note: '', extra: '' },
    deviceOwner: { name: '设备管理员模式', desc: '免 Root，用电脑激活一次，之后重启或升级系统都不需要重新设置。', note: '激活前需要暂时删除手机上的帐号', extra: '' },
    wireless: { name: '无线调试模式', desc: '免 Root，免电脑。在手机上开启「无线调试」，在冰箱的通知里输入配对码即可。', note: '', extra: '' },
    adb: { name: 'ADB 模式', desc: '免 Root，也不用删除帐号。用电脑运行一键激活器或一条 ADB 命令即可。', note: '', extra: '' },
    shizuku: { name: 'Shizuku 模式', desc: '已经在用 Shizuku 或 Sui 的话，在冰箱中切换到 Shizuku 模式即可。', note: '', extra: '' },
    qr: { name: '二维码设置', desc: '不用电脑也能设置设备管理员模式，但需要先恢复出厂设置。', note: '需要恢复出厂设置', extra: '需要恢复出厂设置' },
  },
  modeTable: { mode: '工作模式', root: '免 Root', pc: '免电脑', reboot: '重启后依然有效', android: 'Android 系统要求', note: '备注', yes: '是', no: '否' },
  finder: {
    "root": {
      "q": "手机已经 Root 了吗？",
      "yes": "已 Root",
      "no": "没有"
    },
    "pc": {
      "q": "手边有电脑吗？",
      "yes": "有",
      "no": "没有"
    },
    "android": {
      "q": "Android 版本",
      "new": "11 及以上",
      "old": "10 及以下"
    },
    "result": "推荐使用"
  },
  guideGroups: {
    activate: '激活教程',
    tips: '使用技巧',
    trouble: '问题排查',
    purchase: '购买与支付',
  },
  search: {
    placeholder: '搜索帮助，例如：设备管理员、快捷方式',
    empty: '没有找到相关内容，换个关键词试试。',
  },
  download: {
    play: '适合可以使用 Google 服务的手机，通过 Google Play 购买与验证',
    coolapkName: '酷安',
    coolapk: '在酷安 App 内搜索「冰箱」下载与更新',
    apkName: 'APK 安装包',
    apk: '直接下载最新版本的安装包',
    activator: '下载一键激活器（Windows）',
    webActivator: '打开网页版激活器',
  },
  themes: {
    sakura: '樱花粉',
    clearBlue: '透明蓝',
    matcha: '抹茶绿',
    panda: '熊猫配',
    dazzleRed: '炫目红',
    amoled: 'A 屏黑',
    clearRed: '透明红',
    clearGreen: '透明绿',
    softPink: '淡粉色',
    import: '导入到冰箱',
  },
  alerts: { note: '说明', tip: '提示', important: '重要', warning: '注意', caution: '警告' },
  special: {
    theme: {
      title: '冰箱主题分享',
      lead: '有人和你分享了一套冰箱主题。在装有冰箱的手机上打开这个链接，就能预览并导入。',
      open: '在冰箱中打开',
      copy: '复制链接',
      note: '还没有安装冰箱？',
      download: '下载冰箱',
      gallery: '浏览更多主题',
      invalid: '无法识别这个主题链接，请确认链接是否完整。',
      restore: '不喜欢的话，可以在冰箱设置的「主题和布局」中，点击右上角菜单还原默认。',
    },
    list: {
      title: '冰箱冻结列表分享',
      lead: '有人分享了一份可以冻结的预装 App 列表。在装有冰箱的手机上打开这个链接，冰箱会列出其中可以冻结的 App，由你确认后再冻结。',
      open: '在冰箱中打开',
      copy: '复制链接',
      note: '还没有安装冰箱？',
      download: '下载冰箱',
      invalid: '链接中缺少列表编号，请确认链接是否完整。',
    },
    notFound: {
      title: '页面不存在',
      lead: '这个页面可能已经移动或删除，可以从这里继续：',
      home: '首页',
      guide: '帮助中心',
      faq: '常见问题',
      download: '下载冰箱',
    },
  },
  langHint: { text: '这个页面有简体中文版本', go: '切换到简体中文', close: '关闭' },
};
