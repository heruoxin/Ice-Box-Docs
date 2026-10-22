---
title: Aktifkan Ice Box dengan Shizuku
short: Mode Shizuku
description: Instal Shizuku dan jalankan dengan Proses debug nirkabel, lalu Ice Box bisa dipakai tanpa root atau komputer. Ponsel yang sudah di-root juga bisa memakai Sui. Langkah dan catatannya ada di sini.
section: guide
group: activate
order: 7
howto: true
related: guide/wireless-debugging, guide/adb, guide/root
---

[Shizuku](https://shizuku.rikka.app/) adalah alat yang membantu aplikasi lain mendapatkan izin sistem. Dengan Shizuku terinstal, Anda bisa memakai fitur "Proses debug nirkabel" dari sistem untuk mengaktifkan Ice Box tanpa root atau komputer.

Sebelum mulai, perhatikan bahwa:

- Menjalankan Shizuku dengan Proses debug nirkabel memerlukan Android 11 ke atas.
- Setelah ponsel dimulai ulang, Anda perlu menjalankan Shizuku lagi. Jika tidak, Ice Box tidak bisa membekukan atau mencairkan aplikasi.
- Selama layanan Shizuku mati, aplikasi yang beku juga tidak bisa dicairkan. Semuanya berfungsi normal lagi setelah layanan Shizuku kembali berjalan.

## Langkah aktivasi {#steps}

1. Instal Shizuku di ponsel dari [Google Play](https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api) atau [CoolApk (酷安)](https://www.coolapk.com/), toko aplikasi Android asal Tiongkok.
2. Ikuti [panduan resmi Shizuku](https://shizuku.rikka.app/guide/setup/#start-via-wireless-debugging) untuk menjalankannya dengan Proses debug nirkabel.
3. Buka Ice Box, pilih "Shizuku Manager" di "Ganti mode kerja", lalu izinkan Ice Box saat Shizuku meminta.

Setelah itu, Ice Box siap dipakai. Setelah ponsel dimulai ulang, jalankan Shizuku lagi terlebih dahulu.

## Ponsel yang sudah di-root: gunakan Sui {#sui}

Sui adalah versi root dari Shizuku. Sui berjalan sebagai modul Magisk dan otomatis aktif setelah ponsel dimulai ulang. Ice Box juga mendukung Sui. Setelah menginstalnya, pilih "Sui" di "Ganti mode kerja" pada Ice Box.

Ponsel yang sudah di-root juga bisa langsung memakai [mode root](/guide/root/).

## FAQ {#faq}

### Muncul pesan "Gagal mendapatkan izin Shizuku"

Pastikan layanan Shizuku sedang berjalan, lalu berikan izin kepada Ice Box di Shizuku.

### Shizuku tidak berfungsi dengan Ice Box di ponsel Xiaomi

Mulai MIUI 11, penyerahan izin antar-aplikasi pihak ketiga bisa gagal. Matikan "Optimisasi MIUI" terlebih dahulu. Lalu tekan lama ikon Ice Box di layar utama, buka Info aplikasi, dan aktifkan "Izin lainnya" secara manual di setelan izin.
