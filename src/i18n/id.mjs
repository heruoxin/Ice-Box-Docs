export default {
  meta: {
    siteName: 'Ice Box',
    brandHtml: 'Ice Box',
    titleSep: ' | ',
    homeTitle: 'Ice Box: bekukan aplikasi Android yang jarang dipakai, dengan atau tanpa root',
    homeDescription: 'Ice Box adalah pembeku aplikasi untuk Android. Aplikasi yang dibekukan tidak bisa berjalan di latar belakang dan hilang dari layar utama sampai Anda mencairkannya dengan sekali ketuk. Bisa dipakai dengan root, Device Owner, Proses debug nirkabel, Shizuku, dan lainnya.',
    appDescription: 'Ice Box adalah pembeku aplikasi untuk Android. Aplikasi yang dibekukan tidak bisa berjalan di latar belakang dan disembunyikan dari layar utama sampai Anda mencairkannya. Bisa dipakai dengan root maupun beberapa mode tanpa root.',
    featureList: ['Bekukan dan cairkan aplikasi dengan sekali ketuk', 'Bekukan otomatis setelah layar mati', 'Pintasan layar utama yang mencairkan dan membuka aplikasi', 'Banyak tab', 'Tema dan paket ikon', 'Kunci sidik jari dan PIN', 'Bekukan aplikasi sistem bawaan', 'Mode kerja dengan root dan tanpa root', 'SDK terbuka'],
    ogAlt: 'Ice Box: simpan aplikasi yang jarang dipakai di dalam es',
  },
  nav: {
    main: 'Navigasi utama',
    home: 'Beranda',
    download: 'Unduh',
    language: 'Pilih bahasa',
    skip: 'Langsung ke konten',
    breadcrumb: 'Breadcrumb',
  },
  pages: { home: 'Beranda' },
  common: {
    stillStuckPre: 'Masih bingung? Lihat ',
    stillStuckPost: ', atau kirim email kepada kami lewat Masukan di Ice Box.',
    viewGuide: 'Lihat panduan',
    copy: 'Salin',
    copied: 'Disalin',
    copyLink: 'Salin link',
    updated: 'Diperbarui {date}',
    onThisPage: 'Di halaman ini',
    related: 'Artikel terkait',
  },
  footer: {
    "copyright": "© {year} Ice Box",
    "links": "Link situs"
  },
  home: {
    "title": [
      "Bekukan aplikasi",
      "yang jarang dipakai"
    ],
    "lead": [
      "Aplikasi yang dibekukan disimpan rapi di Ice Box.",
      "Tersembunyi dari sistem, dan tidak bisa berjalan di latar belakang."
    ],
    "market": "",
    "auto": {
      "title": [
        "Ketuk untuk membuka.",
        "Kunci layar, beku lagi."
      ],
      "lead": [
        "Ketuk aplikasi yang beku, dan aplikasi langsung terbuka.",
        "Jika Bekukan otomatis aktif, aplikasi kembali ke dalam kotak saat Anda mengunci layar."
      ],
      "link": "Tentang Bekukan otomatis"
    },
    "modes": {
      "title": [
        "Bisa dipakai",
        "tanpa root"
      ],
      "lead": [
        "Device Owner, Proses debug nirkabel, atau Shizuku. Pilih salah satu."
      ],
      "link": "Bandingkan semua mode",
      "items": [
        {
          "id": "deviceOwner",
          "line": "Siapkan sekali dengan komputer. Tetap aktif setelah dimulai ulang."
        },
        {
          "id": "wireless",
          "line": "Siapkan langsung di ponsel. Tidak perlu komputer."
        },
        {
          "id": "shizuku",
          "line": "Sudah memakai Shizuku? Cukup berikan izin."
        }
      ]
    },
    "help": {
      "title": "Bantuan",
      "more": "Semua pertanyaan",
      "items": [
        {
          "q": "Bagaimana cara menyiapkannya tanpa root?",
          "a": "Jika punya komputer, gunakan [aktivator sekali klik](/guide/activator/) untuk menyiapkan mode Device Owner satu kali, dan mode ini akan terus berfungsi. Di Android 11 ke atas, [Proses debug nirkabel](/guide/wireless-debugging/) bisa disiapkan langsung di ponsel."
        },
        {
          "q": "Apakah aplikasi yang dibekukan masih mengirim notifikasi?",
          "a": "Aplikasi yang dibekukan tidak bisa berjalan, jadi tidak menerima pesan push sendiri. Di beberapa ponsel, layanan push sistem mungkin masih menampilkan notifikasi, dan ini bisa Anda matikan di setelan sistem."
        },
        {
          "q": "Bagaimana cara mengupdate aplikasi yang dibekukan?",
          "a": "Cairkan aplikasi di Ice Box, update, lalu bekukan lagi."
        },
        {
          "q": "Apakah pesan \"Perangkat ini dikelola\" normal?",
          "a": "Ya, begitulah cara kerja mode Device Owner. Anda bisa mengubah nama yang ditampilkan di Ice Box, di bagian \"Laboratorium\"."
        },
        {
          "q": "Bagaimana cara meng-uninstal Ice Box?",
          "a": "Cairkan semua aplikasi terlebih dahulu, lalu ketuk \"Uninstal\" di setelan Ice Box. Dalam mode Device Owner, jangan meng-uninstalnya dari layar utama."
        },
        {
          "q": "Ganti ponsel. Bagaimana cara memulihkan pembelian?",
          "a": "Ketuk \"Saya sudah membeli\" di layar pembelian. Pembelian Google Play memerlukan versi Play; saluran lain memakai nomor pesanan Anda. Lihat [panduan pembelian](/purchase/)."
        }
      ]
    },
    "closing": {
      "title": [
        "Ponsel Anda,",
        "selancar hari pertama"
      ]
      ,"note": "Sepuluh tahun pengembangan, dan lebih dari 5 juta unduhan di Google Play."
    }
  },
  phone: {
    "names": {
      "map": "Peta",
      "camera": "Kamera",
      "music": "Musik",
      "video": "Video",
      "shop": "Belanja",
      "food": "Makanan",
      "game": "Game",
      "news": "Berita",
      "chat": "Chat",
      "ride": "Ojek",
      "travel": "Travel",
      "fit": "Kebugaran"
    },
    "tabs": [
      "Harian",
      "Alat",
      "Game"
    ],
    "date": "Rabu, 21 Oktober",
    "toastFrozen": "Dibekukan",
    "toastDefrosted": "Dicairkan",
    "power": "Tombol daya",
    "back": "Kembali"
  },
  modes: {
    root: { name: 'Mode root', desc: 'Untuk ponsel yang sudah di-root. Berikan akses root ke Ice Box, dan selesai.', note: '', extra: '' },
    deviceOwner: { name: 'Mode Device Owner', desc: 'Tanpa root. Aktifkan sekali dengan komputer, dan tetap berfungsi setelah dimulai ulang maupun update sistem.', note: 'Akun di ponsel harus dihapus sementara', extra: '' },
    wireless: { name: 'Mode Proses debug nirkabel', desc: 'Tanpa root, tanpa komputer. Aktifkan Proses debug nirkabel, lalu masukkan kode penyambungan di notifikasi Ice Box.', note: '', extra: '' },
    adb: { name: 'Mode ADB', desc: 'Tanpa root, dan tidak perlu menghapus akun. Jalankan aktivator atau satu perintah ADB di komputer.', note: '', extra: '' },
    shizuku: { name: 'Mode Shizuku', desc: 'Sudah memakai Shizuku atau Sui? Alihkan Ice Box ke mode Shizuku, dan langsung siap.', note: '', extra: '' },
    qr: { name: 'Penyiapan dengan kode QR', desc: 'Siapkan mode Device Owner tanpa komputer. Perlu reset ke setelan pabrik terlebih dahulu.', note: 'Perlu reset ke setelan pabrik', extra: 'Perlu reset ke setelan pabrik' },
  },
  modeTable: { mode: 'Mode kerja', root: 'Tanpa root', pc: 'Tanpa komputer', reboot: 'Tetap aktif setelah dimulai ulang', android: 'Versi Android', note: 'Catatan', yes: 'Ya', no: 'Tidak' },
  finder: {
    "root": {
      "q": "Apakah ponsel Anda sudah di-root?",
      "yes": "Ya",
      "no": "Tidak"
    },
    "pc": {
      "q": "Punya komputer?",
      "yes": "Ya",
      "no": "Tidak"
    },
    "android": {
      "q": "Versi Android",
      "new": "11 ke atas",
      "old": "10 ke bawah"
    },
    "result": "Saran kami"
  },
  guideGroups: {
    activate: 'Panduan penyiapan',
    tips: 'Tips',
    trouble: 'Pemecahan masalah',
    purchase: 'Pembelian dan pembayaran',
  },
  search: {
    placeholder: 'Cari bantuan, misalnya: Device Owner, pintasan',
    empty: 'Tidak ditemukan. Coba kata kunci lain.',
  },
  download: {
    play: 'Untuk ponsel dengan layanan Google. Pembelian dilakukan dan diverifikasi lewat Google Play',
    coolapkName: 'CoolApk',
    coolapk: 'Cari Ice Box (冰箱) di aplikasi CoolApk',
    apkName: 'File APK',
    apk: 'Unduh langsung penginstal terbaru',
    activator: 'Unduh aktivator untuk Windows',
    webActivator: 'Buka aktivator web',
  },
  themes: {
    sakura: 'Merah Muda Sakura',
    clearBlue: 'Biru Cerah',
    matcha: 'Hijau Matcha',
    panda: 'Panda',
    dazzleRed: 'Merah Menyala',
    amoled: 'Hitam AMOLED',
    clearRed: 'Merah Cerah',
    clearGreen: 'Hijau Cerah',
    softPink: 'Merah Muda Lembut',
    import: 'Impor ke Ice Box',
  },
  alerts: { note: 'Catatan', tip: 'Tips', important: 'Penting', warning: 'Peringatan', caution: 'Hati-hati' },
  special: {
    theme: {
      title: 'Tema Ice Box',
      lead: 'Seseorang membagikan tema Ice Box kepada Anda. Buka link ini di ponsel yang sudah terinstal Ice Box untuk melihat pratinjau dan mengimpornya.',
      open: 'Buka di Ice Box',
      copy: 'Salin link',
      note: 'Belum punya Ice Box?',
      download: 'Unduh Ice Box',
      gallery: 'Lihat tema lainnya',
      invalid: 'Link tema ini tidak bisa dibaca. Pastikan link-nya lengkap.',
      manual: 'Tidak terbuka? Salin link-nya, lalu ketuk "Impor dari papan klip" di Setelan Ice Box.',
      restore: 'Berubah pikiran? Di setelan Ice Box, buka Tema & tata letak, lalu pulihkan tema default dari menu.',
    },
    list: {
      title: 'Daftar beku yang dibagikan',
      lead: 'Seseorang membagikan daftar aplikasi bawaan yang bisa dibekukan. Buka link ini di ponsel yang sudah terinstal Ice Box. Ice Box akan menampilkan aplikasi dari daftar yang bisa dibekukan, lalu membekukannya setelah Anda konfirmasi.',
      open: 'Buka di Ice Box',
      copy: 'Salin link',
      note: 'Belum punya Ice Box?',
      download: 'Unduh Ice Box',
      manual: 'Tidak terbuka? Salin link-nya, lalu ketuk "Impor dari papan klip" di Setelan Ice Box.',
      invalid: 'Link ini tidak berisi ID daftar. Pastikan link-nya lengkap.',
    },
    notFound: {
      title: 'Halaman tidak ditemukan',
      lead: 'Halaman ini mungkin sudah dipindahkan atau dihapus. Anda bisa melanjutkan dari sini:',
      home: 'Beranda',
      guide: 'Pusat Bantuan',
      faq: 'FAQ',
      download: 'Unduh Ice Box',
    },
  },
  langHint: { text: 'Halaman ini tersedia dalam Bahasa Indonesia', go: 'Buka versi Bahasa Indonesia', close: 'Tutup' },
};
