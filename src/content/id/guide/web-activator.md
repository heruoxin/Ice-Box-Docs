---
title: Aktifkan Ice Box dengan aktivator web
short: Aktivator web
description: Tanpa instalasi: aktifkan mode Device Owner atau ADB untuk Ice Box dengan aktivator web di browser melalui WebUSB. Windows, macOS, Linux. Disarankan memakai Chrome.
section: guide
group: activate
order: 3
howto: true
related: guide/device-owner, guide/activator, guide/adb
---

Aktivator web dikembangkan oleh [@web1n](https://github.com/web1n). Fungsinya sama dengan aktivator exe dan bisa dipakai di sistem operasi komputer apa pun. Kami menyarankan memakai Chrome.

[Buka aktivator web](https://adb.http.gs/icebox.html)

Aktivator web bisa mengaktifkan dua mode:

- **Mode Device Owner**: aktifkan sekali dan terus berfungsi, tetapi bisa menimbulkan efek samping di beberapa ponsel.
- **Mode ADB**: tanpa efek samping, tetapi Anda perlu menghubungkan ke komputer dan mengaktifkan lagi setiap kali ponsel dimulai ulang atau setelan USB sistem diubah.

## Kemungkinan efek samping mode Device Owner {#side-effects}

Sistem di ponsel Samsung dan ponsel dari merek asal Tiongkok sering memodifikasi Android, sehingga menimbulkan beberapa masalah kompatibilitas dengan mode Device Owner. Yang umum terjadi antara lain:

- Ponsel Samsung bisa terkunci sandi oleh sistem (laporan sejauh ini sekitar 4 dari 200.000). Baca dulu [catatan perangkat Samsung](/guide/samsung-device-owner/).
- Muncul permintaan uninstal setiap kali Anda membekukan aplikasi, dan permintaan izin saat mencairkannya (Huawei, Smartisan).
- Bilah notifikasi terus menampilkan "Admin perangkat aktif, ketuk untuk menonaktifkan" (OPPO, vivo).
- Fitur aplikasi ganda bawaan sistem berhenti berfungsi (Huawei, MIUI).
- Aplikasi yang baru dicairkan sesekali tidak bisa terhubung ke internet. Tutup aplikasinya lalu buka lagi (OnePlus, Smartisan, dan lainnya).

Jika Anda tidak bisa menerima masalah ini, pilih mode ADB. Mode ini juga tidak memerlukan root, tetapi Anda harus mengaktifkannya lagi dengan komputer setiap kali ponsel dimulai ulang.

## Cara mengaktifkan {#steps}

1. Pastikan Ice Box sudah terinstal di ponsel. Hapus kunci layar. Di ponsel Sony, lepas kartu SIM. Di ponsel Xiaomi, aktifkan "Proses debug USB (Setelan keamanan)" dan matikan "Optimisasi MIUI".
2. Hubungkan ponsel ke komputer dengan kabel USB, dan tutup software keamanan, PC suite, dan pengelola ponsel apa pun di komputer.
3. Di komputer, buka [aktivator web](https://adb.http.gs/icebox.html) di Chrome, lalu hubungkan perangkat Anda dan aktifkan.

Sebelum mengaktifkan mode Device Owner, Anda juga perlu keluar dari semua akun di ponsel terlebih dahulu. Lihat [penyiapan mode Device Owner](/guide/device-owner/#steps).
