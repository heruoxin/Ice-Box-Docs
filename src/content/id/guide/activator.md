---
title: Aktifkan Ice Box dengan aktivator sekali klik (Windows)
short: Aktivator sekali klik
description: Gunakan aktivator sekali klik di PC Windows untuk menyalakan mode Device Owner atau mode ADB pada Ice Box tanpa mengetik perintah. Termasuk unduhan, langkah, dan FAQ.
section: guide
group: activate
order: 2
howto: true
faq: true
related: guide/device-owner, guide/web-activator, guide/adb, guide/autumnbox
---

Aktivator sekali klik dikembangkan oleh [@web1n](https://github.com/web1n). Aktivator ini berjalan di komputer Windows dan menyalakan mode Device Owner untuk Ice Box, jadi Anda tidak perlu mengetik perintah ADB secara manual.

[[activator-download]]

Jika Anda tidak punya komputer Windows, atau mengalami masalah dengan aktivator exe, gunakan [aktivator web](/guide/web-activator/). Fungsinya sama.

## Baca ini dulu {#before}

Sistem dari merek ponsel asal Tiongkok sering memodifikasi Android, sehingga menimbulkan beberapa masalah kompatibilitas dengan mode Device Owner. Yang umum terjadi antara lain:

- Ponsel Samsung bisa terkunci sandi oleh sistem (laporan sejauh ini sekitar 4 dari 200.000). Baca dulu [catatan perangkat Samsung](/guide/samsung-device-owner/).
- Muncul permintaan uninstal setiap kali Anda membekukan aplikasi, dan permintaan izin saat mencairkannya (Huawei, Smartisan).
- Bilah notifikasi terus menampilkan "Admin perangkat aktif, ketuk untuk menonaktifkan" (OPPO, vivo).
- Fitur aplikasi ganda bawaan sistem berhenti berfungsi (Huawei, MIUI).
- Aplikasi yang baru dicairkan sesekali tidak bisa terhubung ke internet. Tutup aplikasinya lalu buka lagi (OnePlus, Smartisan, dan lainnya).

Jika Anda tidak bisa menerima masalah ini, gunakan [mode ADB](/guide/adb/). Mode ini juga tidak memerlukan root, tetapi Anda harus mengaktifkannya lagi dengan komputer setiap kali ponsel dimulai ulang.

Sebaliknya, mode Device Owner tidak perlu bolak-balik ke komputer. Siapkan sekali dan mode ini terus berfungsi, meskipun ponsel dimulai ulang atau sistem diupdate.

## Langkah-langkah {#steps}

Setelah Anda memutuskan untuk mengaktifkan Ice Box dalam mode Device Owner, ikuti langkah berikut:

1. Pastikan Ice Box sudah terinstal di ponsel. Hapus kunci layar. Di ponsel Sony, lepas kartu SIM. Di ponsel Xiaomi, aktifkan "Proses debug USB (Setelan keamanan)" dan matikan "Optimisasi MIUI".
2. Di setelan sistem, keluar dari semua akun, seperti akun Xiaomi, Huawei, dan Google. Anda bisa masuk lagi setelah aktivasi.
3. Unduh dan ekstrak aktivator. Ekstrak di komputer, bukan ke penyimpanan ponsel.
4. Aktifkan Proses debug USB di ponsel dan hubungkan ke komputer dengan kabel USB.
5. Klik "Activate Ice Box" (激活冰箱) di aktivator.

Setelah berhasil, buka Ice Box dan mulai memakainya.

Jika Anda mengalami masalah lain, periksa dulu bahwa semua akun sistem sudah dihapus. Jika masih belum berhasil, bandingkan log output aktivator dengan [FAQ mode Device Owner](/guide/device-owner/#faq).

## FAQ {#faq}

### Aktivator terus memuat

Ekstrak semua file dari arsip aktivator ke komputer sebelum menjalankannya. Jangan mengekstraknya ke penyimpanan ponsel, dan jangan mengeklik dua kali file exe di dalam arsip.

### Aktivator mengatakan perangkat tidak ditemukan

Periksa bahwa Proses debug USB aktif, kabel Anda mendukung transfer data, driver ponsel sudah terinstal di komputer, dan tidak ada PC suite, pengelola ponsel, atau antivirus yang memakai koneksi tersebut.
