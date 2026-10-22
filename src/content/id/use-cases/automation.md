---
title: Cara mengotomatiskan pembekuan dan pencairan aplikasi di Android
short: Otomatisasi dan integrasi developer
card: Bekukan otomatis saat layar mati, pakai tindakan sekali ketuk di layar utama, atau biarkan aplikasi lain membekukan lewat Ice Box dengan SDK.
description: Otomatiskan pembekuan dan pencairan di Android dengan Ice Box: Bekukan otomatis, pintasan Bekukan semua dan Cairkan semua, serta SDK terbuka untuk dipasang di aplikasi Anda sendiri.
section: usecase
order: 6
icon: code
faq: true
related: developers, guide/auto-freeze, guide/shortcuts
---

## Jawaban singkat {#answer}

Pengguna biasa bisa mengandalkan [Bekukan otomatis](/guide/auto-freeze/) dan [pintasan layar utama](/guide/shortcuts/) di Ice Box untuk membekukan aplikasi secara otomatis saat layar mati atau saat kembali ke layar utama. Developer bisa memakai [SDK Ice Box](/developers/) untuk membekukan dan mencairkan aplikasi dari aplikasi mereka sendiri, setelah pengguna memberi izin.

## Otomatisasi tanpa kode {#no-code}

- **Bekukan otomatis**: otomatis membekukan aplikasi di Ice Box saat layar mati, atau saat Anda mengetuk atau mengetuk 2x tombol Home. Anda bisa mengatur jeda setelah layar mati dan membuat pengecualian saat mengisi daya.
- **Pintasan layar utama**: "Bekukan semua", "Bekukan + kunci layar", dan "Cairkan semua" semuanya bisa ditambahkan ke layar utama, jadi masing-masing cukup sekali ketuk.
- **Pintasan untuk aplikasi yang beku**: ketuk pintasan untuk otomatis mencairkan dan membuka aplikasinya, tanpa membuka Ice Box terlebih dahulu.
- **划卡冻结 (geser untuk membekukan)**: aplikasi pihak ketiga 划卡冻结 bisa membekukan aplikasi saat Anda menggeser kartunya di layar aplikasi terbaru (khusus root).

## Untuk developer: SDK Ice Box {#sdk}

Di ponsel yang sudah menginstal dan mengaktifkan Ice Box, SDK Ice Box memungkinkan aplikasi pihak ketiga membekukan dan mencairkan aplikasi:

- Mengetahui mode kerja Ice Box saat ini dan status beku sebuah aplikasi. Tidak perlu izin.
- Membekukan dan mencairkan aplikasi, termasuk sekaligus banyak. Memerlukan izin pengguna.
- Menginstal dan meng-uninstal APK secara diam-diam dalam mode Device Owner.
- Setiap tindakan yang dilakukan aplikasi pihak ketiga melalui Ice Box dicatat di pusat log Ice Box, dan pengguna bisa memeriksanya kapan saja.

Lihat [panduan developer](/developers/) untuk cara mengintegrasikannya.

## Pertanyaan umum {#faq}

### Bisakah aplikasi lain membekukan aplikasi tanpa sepengetahuan saya?

Aplikasi pihak ketiga memerlukan izin Anda sebelum bisa membekukan atau mencairkan aplikasi melalui Ice Box. Setiap tindakan dicatat di pusat log Ice Box, dan Anda bisa memeriksanya kapan saja.
