---
title: FAQ Ice Box
short: FAQ
description: FAQ Ice Box: akses root, pemberitahuan Device Owner, cara uninstal, notifikasi push, pintasan, Bekukan otomatis, mengupdate aplikasi yang beku, dan mengganti mode kerja.
section: faq
group: trouble
order: 0
faq: true
priority: 0.8
related: guide/devices, guide/device-owner, purchase, guide/uninstall
---

Untuk pertanyaan seputar pembelian dan pembayaran, lihat [panduan pembelian](/purchase/). Untuk tips merek ponsel tertentu, lihat [catatan untuk setiap merek ponsel](/guide/devices/).

## Dasar-dasar {#basics}

### Apa artinya membekukan aplikasi? {#what-is-freeze}

Aplikasi yang dibekukan dinonaktifkan atau disembunyikan oleh sistem. Aplikasi itu tidak bisa berjalan, tidak bisa memulai sendiri di latar belakang, dan tidak muncul di layar utama maupun laci aplikasi, tetapi aplikasi dan datanya tetap ada. Setelah Anda mencairkannya di Ice Box, aplikasi itu kembali normal.

### Apa bedanya membekukan dengan meng-uninstal? {#freeze-vs-uninstall}

Meng-uninstal menghapus aplikasi beserta datanya. Membekukan hanya menghentikan aplikasi untuk sementara: datanya tidak terpengaruh, dan Anda bisa terus memakainya setelah dicairkan. Untuk aplikasi sistem bawaan yang tidak bisa di-uninstal, membekukan juga menjadi cara untuk menonaktifkannya.

### Bagaimana cara menambahkan kembali aplikasi yang beku ke layar utama? {#add-to-home}

Di Ice Box, tekan lama ikon aplikasi dan pilih "Tambahkan ke layar utama". Saat Anda mengetuk pintasan ini, Ice Box mencairkan aplikasinya terlebih dahulu, lalu membukanya. Lihat [Pintasan layar utama](/guide/shortcuts/).

### Bagaimana cara mengupdate aplikasi yang beku? {#update-frozen}

Jika Anda memakai CoolApk (酷安), toko aplikasi Android asal Tiongkok, aktifkan "Show hidden apps" (显示隐藏应用) di bagian lab pada setelan CoolApk. Jika memakai toko aplikasi lain, ketuk "Cairkan semua" di setelan Ice Box terlebih dahulu, lalu bekukan lagi aplikasinya setelah update.

### Tidak bisa mencairkan aplikasi setelah mengganti mode kerja? {#mode-switch}

Mode kerja tidak kompatibel satu sama lain. Kembalikan Ice Box ke mode kerja yang Anda pakai sebelumnya: aplikasi harus dicairkan dalam mode yang sama dengan saat dibekukan.

## Root {#root}

### Mode root menampilkan "Gagal mendapatkan izin ROOT" {#root-failed}

Buka pengelola root Anda (misalnya Magisk), hapus catatan izin Ice Box yang ada, lalu berikan akses root lagi.

### Ke mana Plugin sistem? {#system-plugin}

Sesuai persyaratan Google Play, mode plugin sistem dihapus di versi 3.22.0. Jika Plugin sistem masih terinstal, hapus `/system/priv-app/com.catchingnow.iceboxsystemplugin.apk` dengan pengelola file yang punya akses root, lalu mulai ulang ponsel untuk menyelesaikan proses uninstal.

## Mode Device Owner {#device-owner}

### Panel notifikasi menampilkan "Perangkat ini dikelola oleh organisasi Anda". Apakah itu normal? {#managed-notice}

Ya. Memang begitulah cara kerja mode Device Owner di Ice Box. Saat ini, menyiapkan Device Owner adalah satu-satunya cara permanen untuk membekukan aplikasi tanpa root. Sistem menampilkan teks ini dan teks itu tidak bisa dihilangkan, tetapi Anda bisa mengubah "Nama organisasi" menjadi teks apa pun yang Anda suka di "Laboratorium" Ice Box.

### Setelan ponsel menyebutkan Device Owner bisa membaca kalender, email, dan info pribadi lainnya. Apakah Ice Box membacanya? {#dpm-privacy}

Tidak. Ice Box terus diupdate sejak 2015, dan hanya memakai fitur Device Owner yang dibutuhkannya, seperti membekukan aplikasi. Ice Box tidak memakai fitur lain yang tidak terkait, jadi Anda bisa memakainya dengan tenang.

### Setelah menyiapkan Device Owner, fitur aplikasi ganda dan Folder Aman di sistem berhenti berfungsi? {#dual-apps}

Ini adalah batasan dari sistem ponsel tertentu (seperti Samsung dan Xiaomi). Begitu Device Owner disetel, sistem otomatis mematikan beberapa fitur, dan Ice Box tidak bisa memperbaikinya. Jika Anda benar-benar membutuhkan aplikasi ganda, Anda bisa mempertimbangkan:

- Menjadikan Island sebagai Device Owner dan memakai fitur aplikasi ganda yang disediakannya. Ice Box lalu bisa bekerja melalui [mode Island](/guide/other-modes/#island).
- Memakai mode kerja selain Device Owner. Mode lain tidak memengaruhi aplikasi ganda.

### Izin aplikasi tereset setiap kali saya mencairkan aplikasi? {#permissions-reset}

Ini masalah sistem. AppOps buatan Rikka ([Google Play](https://play.google.com/store/apps/details?id=rikka.appops), [CoolApk](https://www.coolapk.com/)) bisa menerapkan ulang aturan izin Anda secara otomatis saat aplikasi dicairkan.

### Di ponsel Huawei dan Xiaomi, aplikasi meminta izin lagi setiap kali dibuka, dan saat dibekukan muncul pesan bahwa aplikasi telah di-uninstal? {#reinstall-prompt}

Di ponsel Xiaomi, matikan "Optimisasi MIUI". Kami belum menemukan tombol yang sesuai di ponsel lain.

### Aplikasi yang baru dicairkan kadang tidak bisa terhubung ke jaringan? {#no-network}

Sistem di beberapa model (seperti OnePlus dan Huawei) sesekali mengalami masalah ini. Pastikan sistem Anda sudah diupdate ke versi terbaru. Membekukan lalu mencairkan aplikasi itu sekali lagi biasanya bisa mengatasinya.

### Bagaimana cara meng-uninstal Ice Box? {#uninstall}

Ketuk "Uninstal" di setelan Ice Box. Sebelum meng-uninstal, periksa sekali lagi bahwa semua aplikasi sudah dicairkan. Pengguna Xiaomi, harap perhatikan: **jangan meng-uninstal Ice Box langsung dari layar utama. Cara ini membuat izin admin hilang, dan aplikasi yang beku tidak akan pernah bisa dicairkan lagi.** Lihat [Uninstal Ice Box](/guide/uninstall/).

## Notifikasi dan latar belakang {#background}

### Aplikasi yang beku masih menerima notifikasi push? {#push}

Di ponsel seperti OPPO, vivo, dan OnePlus, sebagian aplikasi memakai layanan push sistem. Setelah dibekukan, sistem tetap menampilkan notifikasi atas nama aplikasi itu, tetapi aplikasinya sendiri tidak berjalan di latar belakang. Jika tidak menginginkan notifikasi ini, matikan notifikasi untuk aplikasi tersebut di setelan sistem.

### Saya ingin aplikasi yang beku tetap menerima notifikasi {#keep-push}

Anda bisa mencoba menginstal [MiPushFramework](https://github.com/MiPushFramework/MiPushFramework).

### Kenapa Ice Box menampilkan notifikasi? {#ongoing-notification}

Android mewajibkan setiap aplikasi yang berjalan di latar belakang untuk menampilkan notifikasi. Saat Anda mengaktifkan fitur yang perlu berjalan di latar belakang, seperti "Bekukan otomatis", Ice Box menampilkan notifikasi di panel notifikasi. Anda bisa mematikan notifikasi ini di setelan sistem tanpa memengaruhi fitur apa pun. Jika Bekukan otomatis dimatikan, Ice Box sama sekali tidak berjalan di latar belakang.

### Aplikasi tidak dibekukan setelah layar mati? {#auto-freeze-fail}

Periksa apakah aplikasi pengelola ponsel atau alat pemblokir aplikasi menghentikan Ice Box berjalan di latar belakang. Di setelan sistem, berikan izin kepada Ice Box seperti "Berjalan di latar belakang" dan "Bangunkan perangkat", lalu atur penggunaan baterainya ke "Tidak dioptimalkan". Di ponsel Huawei, opsi "Layar mati" di "Bekukan otomatis saat" mungkin tidak berfungsi karena batasan sistem, jadi pilih opsi lain. Lihat [Bekukan otomatis](/guide/auto-freeze/).

## Pintasan {#shortcuts}

### Tidak bisa menambahkan pintasan layar utama di Xiaomi, Huawei, Smartisan, atau ponsel lain? {#shortcut-missing}

Di Xiaomi, Huawei, dan ponsel serupa, aktifkan izin untuk menambahkan pintasan layar utama bagi Ice Box secara manual di setelan sistem. Ponsel Smartisan tidak mendukung pintasan dari aplikasi apa pun.

### Pintasan sudah ditambahkan di ponsel Xiaomi atau Meizu tetapi tidak berfungsi? {#shortcut-broken}

Di ponsel Xiaomi, izinkan Ice Box untuk "memulai aplikasi lain" dan "menampilkan jendela pop-up saat berjalan di latar belakang" di setelan sistem. Kami belum menemukan tombol sistem yang sesuai di ponsel Meizu.

### Bagaimana cara menghapus lencana Ice Box dari pintasan? {#shortcut-badge}

Di Android 7.0 ke atas, sistem menambahkan lencana ke pintasan, dan lencana itu tidak bisa diubah atau dihapus.

## Pertanyaan lain {#other}

### Beberapa aplikasi sistem, seperti Xiaomi Music, toko aplikasi, atau Huawei Home, tidak bisa dibekukan, atau diam-diam dicairkan setelah ponsel dimulai ulang? {#system-unfreeze}

MIUI dan beberapa sistem lain otomatis mencairkan aplikasi sistem penting. Di EMUI versi baru, Huawei Home tidak bisa dibekukan lagi. Aplikasi ini masih bisa dibekukan di versi sebelum EMUI 9.0.

### Di ponsel OPPO dan vivo, daftar aplikasi hanya menampilkan sedikit aplikasi? {#app-list}

Di setelan izin sistem, izinkan Ice Box membaca daftar aplikasi.

### Setelah mencairkan aplikasi di ponsel Smartisan, semua izinnya otomatis diizinkan? {#smartisan-permissions}

Memang begitulah rancangan sistem Smartisan. Ini tidak ada hubungannya dengan Ice Box.

### Apakah Ice Box mendukung tablet? {#tablet}

Ya. Ice Box punya tata letak tersendiri untuk tablet dan mode lanskap.

### Apakah Ice Box membaca papan klip saya? {#clipboard}

Hanya sekali, saat Anda mengetuk "Impor dari papan klip" di Setelan, untuk mencari link tema atau daftar beku.

### Masih ada pertanyaan? {#contact}

Kirim email kepada kami lewat opsi "Masukan" di aplikasi Ice Box. Jika bisa, sertakan model ponsel, versi sistem, dan screenshot masalahnya.
