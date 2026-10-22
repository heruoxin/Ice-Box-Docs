---
title: Fitur Ice Box
short: Fitur
description: Fitur Ice Box: bekukan dan cairkan dengan sekali ketuk, Bekukan otomatis, pintasan, tab, tema, paket ikon, kunci aplikasi, bekukan aplikasi sistem, SDK, serta mode root dan tanpa root.
section: product
priority: 0.9
related: guide, themes, guide/auto-freeze, developers
---

Ice Box adalah pembeku aplikasi untuk Android. Masukkan aplikasi yang jarang dipakai ke Ice Box, dan aplikasi itu tidak bisa lagi berjalan di latar belakang atau muncul di layar utama. Saat Anda membutuhkannya, ketuk aplikasinya, dan Ice Box akan mencairkan lalu membukanya.

## Bekukan dan cairkan {#freeze}

- **Bekukan**: aplikasi yang dibekukan tidak bisa berjalan, tidak bisa memulai sendiri di latar belakang, dan disembunyikan dari layar utama dan laci aplikasi. Aplikasi dan datanya tetap tersimpan.
- **Cairkan**: ketuk aplikasi di Ice Box, atau ketuk pintasannya di layar utama, dan Ice Box akan mencairkan lalu membukanya.
- **Bekukan semua / Cairkan semua**: geser atau ketuk tombol bekukan di bagian bawah Ice Box untuk membekukan semua aplikasi di daftar sekaligus. "Cairkan semua" mengembalikan semua aplikasi sekaligus. Anda bisa mengubah posisi dan arah geser tombol bekukan di setelan.
- **Bekukan + kunci layar**: bekukan semua aplikasi dan langsung kunci layar, dengan sekali ketuk.

Tergantung mode kerjanya, Ice Box membekukan aplikasi dengan salah satu dari dua cara yang disediakan sistem: "disable" (nonaktifkan) atau "hide" (sembunyikan).

## Bekukan otomatis {#auto-freeze}

Ice Box bisa membekukan aplikasi di daftar Anda secara otomatis saat layar mati, atau saat Anda mengetuk atau mengetuk 2x tombol Home. Anda bisa mengatur jeda setelah layar mati, dan memilih untuk tidak membekukan otomatis saat mengisi daya. Lihat [Bekukan otomatis](/guide/auto-freeze/).

## Pintasan layar utama {#shortcuts}

Buat pintasan layar utama untuk aplikasi yang beku. Mengetuknya akan mencairkan dan membuka aplikasi, tanpa perlu membuka Ice Box terlebih dahulu. Anda juga bisa mengaktifkan opsi untuk menambahkan pintasan secara otomatis saat aplikasi dimasukkan ke daftar beku. Lihat [Pintasan layar utama](/guide/shortcuts/).

## Banyak tab {#tabs}

Buat beberapa tab untuk mengelompokkan aplikasi menurut kegunaannya, seperti Harian, Sosial, dan Game. Tab bisa diganti namanya, dan aplikasi bisa dipindahkan antar-tab. Anda juga bisa mengurutkan aplikasi di Ice Box secara manual.

## Tema dan paket ikon {#themes}

- Hampir setiap elemen layar utama bisa diganti warnanya, dengan dukungan transparansi.
- Di Android 12 ke atas, Ice Box bisa memakai warna dinamis dari sistem. Anda juga bisa memakai wallpaper sebagai latar belakang.
- Tema terang dan gelap bisa beralih otomatis mengikuti sistem.
- Paket ikon pihak ketiga didukung, dan Anda bisa mengatur ukuran ikon.
- Tema bisa dibagikan dan diimpor sebagai link. Lihat skema warna yang dibagikan orang lain di [Tema yang dibagikan](/themes/).

## Kunci sidik jari dan PIN {#lock}

Jika aktif, Ice Box meminta sidik jari atau PIN Anda sebelum terbuka, dan pengenalan wajah juga bisa dipakai. Jika Kunci sidik jari aktif, isi Ice Box disembunyikan di layar aplikasi terbaru.

## Bekukan aplikasi sistem bawaan {#system-apps}

Selain aplikasi yang Anda instal sendiri, Ice Box juga bisa membekukan sebagian aplikasi sistem bawaan, dan ini juga berfungsi dalam mode tanpa root. Anda juga bisa mengimpor "daftar aplikasi sistem yang aman dibekukan" yang dibagikan orang lain. Lihat [Bekukan aplikasi sistem bawaan](/guide/system-apps/).

## Notifikasi aplikasi baru {#new-app}

Setelah Anda menginstal aplikasi baru, Ice Box bisa menampilkan notifikasi yang menanyakan apakah aplikasi itu ingin dimasukkan ke Ice Box.

## Mode kerja {#modes}

Ice Box bisa mendapatkan izin sistem dengan beberapa cara, jadi bisa dipakai di ponsel yang sudah di-root maupun tanpa root:

[[mode-cards]]

Bingung memilih? Jawab tiga pertanyaan di [Pusat Bantuan](/guide/) untuk mendapatkan saran.

## SDK terbuka dan integrasi {#sdk}

- **SDK Ice Box**: dengan izin pengguna, aplikasi lain bisa membekukan dan mencairkan aplikasi melalui Ice Box. Dalam mode Device Owner, aplikasi lain juga bisa menginstal dan meng-uninstal APK secara diam-diam. Setiap tindakan yang dilakukan aplikasi pihak ketiga dicatat di pusat log Ice Box. Lihat [Untuk developer](/developers/).
- **Atur di aplikasi lain**: mendukung titik masuk "Info aplikasi" dari Android, sehingga Ice Box bisa bekerja sama dengan aplikasi seperti Greenify dan AppOps.
- **Island**: semua fitur Ice Box juga berfungsi di dalam profil kerja Island.

## Versi dan persyaratan {#requirements}

- Ponsel dan tablet dengan Android 7.0 ke atas.
- Gratis diunduh. Beberapa fitur memerlukan upgrade ke Pro. Jika ada perbedaan, yang berlaku adalah keterangan di dalam aplikasi.
- Perubahan di setiap versi tercantum di [log perubahan](/changelog/).

[[download-buttons]]
