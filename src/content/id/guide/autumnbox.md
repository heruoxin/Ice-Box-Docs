---
title: Aktifkan Ice Box dengan AutumnBox
short: AutumnBox
description: AutumnBox adalah kumpulan alat untuk Windows yang menyederhanakan tugas ADB dan bisa mengaktifkan mode Device Owner untuk Ice Box dengan sekali klik. Langkah dan hal yang perlu diwaspadai.
section: guide
group: activate
order: 4
howto: true
related: guide/device-owner, guide/activator, guide/web-activator
---

AutumnBox (秋之盒) adalah kumpulan alat sekali klik yang membuat operasi ADB lebih mudah. Terima kasih banyak kepada [zsh2401](https://zsh2401.top/) atas kerja kerasnya mengembangkan alat ini.

AutumnBox hanya berjalan di Windows. Jika komputer Anda memakai macOS atau Linux, gunakan [aktivator web](/guide/web-activator/) atau ikuti [langkah penyiapan lewat command line](/guide/device-owner/#steps).

> [!NOTE]
> Situs AutumnBox saat ini tidak bisa diakses dan proyeknya sudah tidak diupdate. Kode sumber dan versi lamanya ada di [GitHub](https://github.com/zsh2401/AutumnBox). Kami menyarankan [aktivator sekali klik](/guide/activator/) atau [aktivator web](/guide/web-activator/) sebagai gantinya; fungsinya sama.

## Baca ini dulu {#before}

Sistem dari merek ponsel asal Tiongkok sering menambahkan fitur khusus sendiri, dan fitur ini menimbulkan beberapa masalah kompatibilitas dengan mode Device Owner. Yang umum terjadi antara lain:

- Ponsel Samsung bisa terkunci sandi oleh sistem (laporan sejauh ini sekitar 4 dari 200.000). Baca dulu [catatan perangkat Samsung](/guide/samsung-device-owner/).
- Muncul permintaan uninstal setiap kali Anda membekukan aplikasi, dan permintaan izin saat mencairkannya (Huawei, Smartisan).
- Bilah notifikasi terus menampilkan "Admin perangkat aktif, ketuk untuk menonaktifkan" (OPPO, vivo).
- Fitur aplikasi ganda bawaan sistem berhenti berfungsi (Huawei, MIUI).
- Aplikasi yang baru dicairkan sesekali tidak bisa terhubung ke internet. Tutup aplikasinya lalu buka lagi (OnePlus dan lainnya).
- Di ponsel Sony, kami menyarankan menyiapkan Ice Box sebelum upgrade ke Android 9. Android 9 menambahkan akun tersembunyi yang sulit dihapus. Jika sudah telanjur upgrade, gunakan [penyiapan dengan kode QR](/guide/qr-code/). Ponsel yang sudah disiapkan sebelumnya tidak terpengaruh.

Jika Anda tidak bisa menerima masalah ini, gunakan [Shizuku](/guide/shizuku/) atau [mode ADB](/guide/adb/). Keduanya juga tidak memerlukan root, tetapi Anda harus mengaktifkannya lagi setiap kali ponsel dimulai ulang.

Sebaliknya, mode Device Owner tidak perlu bolak-balik ke komputer. Siapkan sekali dan mode ini terus berfungsi, meskipun ponsel dimulai ulang atau sistem diupdate.

## Langkah-langkah {#steps}

Setelah Anda memutuskan untuk mengaktifkan Ice Box dalam mode Device Owner, ikuti langkah berikut:

1. Pastikan Ice Box sudah terinstal di ponsel. Hapus kunci layar. Di ponsel Sony, lepas kartu SIM. Di ponsel Xiaomi, aktifkan "Proses debug USB (Setelan keamanan)" dan matikan "Optimisasi MIUI".
2. Di setelan sistem, hapus semua akun, seperti akun Xiaomi, Huawei, dan Google. Anda bisa masuk lagi setelah aktivasi.
3. Unduh dan buka AutumnBox.
4. Aktifkan Proses debug USB di ponsel dan hubungkan ke komputer. Jika tidak mau terhubung, biasanya driver belum terinstal, atau ada PC suite lain yang bentrok. Periksa driver dan tutup software pengelola ponsel lainnya.
5. Klik fungsi "Activate Ice Box" (激活冰箱) di AutumnBox.

Biasanya, sekarang Anda sudah bisa membuka Ice Box dan mulai memakainya. Jika mengalami masalah, periksa dulu bahwa semua akun sistem sudah dihapus. Jika masih belum berhasil, bandingkan log output dengan [FAQ mode Device Owner](/guide/device-owner/#faq).
