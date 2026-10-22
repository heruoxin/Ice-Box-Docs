---
title: Catatan untuk setiap merek ponsel
short: Catatan merek ponsel
description: Catatan Ice Box untuk Xiaomi, Samsung, Huawei, OPPO, OnePlus, vivo, Sony, Meizu, dan lainnya: Opsi developer, masalah Device Owner, pintasan, dan notifikasi push.
section: guide
group: trouble
order: 1
related: guide/samsung-device-owner, guide/wireless-debugging, guide/shortcuts, faq
---

Setiap merek ponsel memodifikasi Android dengan tingkat yang berbeda, jadi perilaku Ice Box sedikit berbeda dari satu merek ke merek lain. Berikut masalah yang sudah diketahui, diurutkan per merek. Sebelum menyiapkan, cari merek ponsel Anda dan baca sekilas.

## Xiaomi / Redmi / POCO {#xiaomi}

- Sebelum memakai mode ADB, Proses debug nirkabel, atau Device Owner, aktifkan "Proses debug USB (Setelan keamanan)" di Opsi developer.
- Sebelum menyiapkan Device Owner, matikan "Optimisasi MIUI". Jika dimatikan, aplikasi tidak akan meminta izin lagi setiap kali Anda membekukannya, dan Anda tidak akan mendapat pesan bahwa aplikasi telah di-uninstal.
- Setelah menyiapkan Device Owner, fitur Aplikasi ganda bawaan sistem mungkin tidak berfungsi.
- Jika pintasan layar utama tidak bisa ditambahkan, aktifkan izin pintasan layar utama untuk Ice Box di setelan sistem. Jika pintasan sudah ditambahkan tetapi tidak berfungsi, izinkan Ice Box untuk "memulai aplikasi lain" dan "menampilkan jendela pop-up saat berjalan di latar belakang".
- Mulai MIUI 11, penyerahan izin antara Ice Box dan aplikasi seperti Brevent, Island, dan Shizuku bisa gagal. Matikan "Optimisasi MIUI" terlebih dahulu. Lalu tekan lama ikon Ice Box di layar utama, buka Info aplikasi, dan aktifkan "Izin lainnya" secara manual di setelan izin.
- Beberapa aplikasi sistem penting (seperti Mi Music dan toko aplikasi) mungkin tidak bisa dibekukan, atau dicairkan otomatis oleh sistem setelah ponsel dimulai ulang. Sejak versi 3.30.7, Ice Box bisa membekukan lebih banyak komponen sistem MIUI / HyperOS.
- Saat memakai mode Device Owner, **jangan meng-uninstal Ice Box langsung dari layar utama**. Cara itu membuat izin Device Owner hilang, dan aplikasi yang beku tidak bisa dicairkan. Ikuti langkah di [Uninstal Ice Box](/guide/uninstall/).

## Samsung {#samsung}

- Setelah menyiapkan Device Owner, Folder Aman dan Dual Messenger mungkin berhenti berfungsi, bahkan sandi layar kunci bisa tereset. Pastikan Anda membaca [catatan perangkat Samsung](/guide/samsung-device-owner/) terlebih dahulu.
- Untuk pengguna Samsung, kami menyarankan mode root, Proses debug nirkabel, Shizuku, atau ADB.

## Huawei / Honor {#huawei}

- Saat memakai mode ADB atau Proses debug nirkabel, aktifkan "Izinkan debug ADB dalam mode hanya mengisi daya" di Opsi developer.
- Setelah menyiapkan Device Owner, permintaan uninstal mungkin muncul setiap kali Anda membekukan aplikasi, dan permintaan izin mungkin muncul saat Anda mencairkannya. Fitur App Twin bawaan sistem mungkin tidak berfungsi.
- Jika pintasan layar utama tidak bisa ditambahkan, berikan izin menambahkan pintasan kepada Ice Box secara manual di setelan sistem. Dengan launcher pihak ketiga, Anda mungkin tidak bisa menambahkan pintasan dari dalam Ice Box. Sebagai gantinya, coba tekan lama area kosong di layar utama untuk menambahkannya.
- Karena batasan sistem, bekukan otomatis saat "Layar mati" mungkin tidak berfungsi. Sebagai gantinya, gunakan bekukan otomatis saat "Ketuk tombol Home" atau "Ketuk 2x tombol Home".
- Di EMUI versi baru, launcher Huawei tidak bisa dibekukan lagi. Versi sebelum EMUI 9.0 masih bisa membekukannya.

## OPPO / OnePlus / realme {#oppo}

- Saat memakai mode ADB atau Proses debug nirkabel, aktifkan "Nonaktifkan pemantauan izin" di Opsi developer.
- Setelah menyiapkan Device Owner, bilah notifikasi mungkin terus menampilkan "Admin perangkat aktif, ketuk untuk menonaktifkan".
- Jika daftar aplikasi hanya menampilkan sedikit aplikasi, izinkan Ice Box membaca daftar aplikasi di setelan izin sistem.
- Beberapa aplikasi memakai layanan push sistem, jadi sistem mungkin masih menampilkan notifikasinya setelah dibekukan, tetapi aplikasinya sendiri tidak berjalan di latar belakang. Jika tidak menginginkan notifikasi ini, matikan notifikasi untuk aplikasi tersebut di setelan sistem.
- Aplikasi yang baru dicairkan sesekali tidak bisa terhubung ke internet. Tutup aplikasinya lalu buka lagi.

## vivo / iQOO {#vivo}

- Setelah menyiapkan Device Owner, bilah notifikasi mungkin terus menampilkan "Admin perangkat aktif, ketuk untuk menonaktifkan".
- Jika daftar aplikasi hanya menampilkan sedikit aplikasi, izinkan Ice Box membaca daftar aplikasi di setelan izin sistem.
- Seperti di OPPO, beberapa aplikasi mungkin masih menampilkan notifikasi melalui push sistem setelah dibekukan.

## Sony {#sony}

- Lepas kartu SIM sebelum menyiapkan Device Owner.
- Kami menyarankan menyiapkan Ice Box sebelum upgrade ke Android 9. Android 9 menambahkan akun tersembunyi yang sulit dihapus. Jika sudah telanjur upgrade, gunakan [penyiapan dengan kode QR](/guide/qr-code/). Ponsel yang sudah disiapkan sebelumnya tidak terpengaruh.

## Meizu dan Smartisan {#meizu}

- Meizu: pintasan layar utama mungkin tidak berfungsi meskipun sudah ditambahkan. Kami belum menemukan tombol sistem untuk masalah ini.
- Smartisan: pintasan tidak didukung untuk aplikasi apa pun. Setelah menyiapkan Device Owner, permintaan uninstal mungkin muncul saat Anda membekukan aplikasi, dan aplikasi yang dicairkan otomatis mendapatkan semua izinnya. Ini memang rancangan sistem Smartisan dan tidak ada hubungannya dengan Ice Box.

## Pixel dan Android asli {#pixel}

- Sistem asli (stock) dan mendekati asli memiliki kompatibilitas terbaik dengan semua mode kerja.
- Tanpa komputer, Anda bisa memakai [penyiapan dengan kode QR](/guide/qr-code/) untuk menjadikan Ice Box sebagai Device Owner saat reset ke setelan pabrik, atau memakai [mode Proses debug nirkabel](/guide/wireless-debugging/) di Android 11 ke atas.
