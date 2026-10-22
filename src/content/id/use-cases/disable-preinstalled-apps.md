---
title: Cara menonaktifkan bloatware di Android tanpa root
short: Nonaktifkan bloatware
card: Aplikasi sistem bawaan yang tidak bisa di-uninstal tetap bisa dibekukan, dan Anda tidak perlu root untuk melakukannya.
description: Nonaktifkan bloatware tanpa root: bekukan aplikasi bawaan dan aplikasi iklan dengan Ice Box agar hilang dari layar utama dan tidak bisa berjalan. Bisa dengan Device Owner dan mode lainnya.
section: usecase
order: 2
icon: layers
faq: true
related: guide/system-apps, guide/devices, guide/qr-code
---

## Jawaban singkat {#answer}

Sebagian besar aplikasi bawaan tidak bisa di-uninstal, tetapi bisa dibekukan. Setelah dibekukan dengan Ice Box, aplikasi itu hilang dari layar utama dan laci aplikasi, dan tidak bisa berjalan di latar belakang. Jika nanti Anda membutuhkannya, cairkan di Ice Box untuk mengembalikannya. Membekukan aplikasi bawaan tidak memerlukan root: mode tanpa root seperti Device Owner, Proses debug nirkabel, dan ADB semuanya bisa dipakai.

## Langkah-langkah {#steps}

1. [Unduh Ice Box](/download/) dan aktifkan sesuai saran di [Pusat Bantuan](/guide/).
2. Di daftar aplikasi Ice Box, beralih ke aplikasi sistem dan centang aplikasi bawaan yang Anda yakin tidak dibutuhkan.
3. Bekukan. Sejak saat itu, aplikasi ini tidak lagi muncul di layar utama atau berjalan di latar belakang.
4. Untuk mengembalikannya, cairkan di Ice Box.

Anda juga bisa mengimpor "daftar aplikasi sistem yang aman dibekukan" yang dibagikan orang lain. Ice Box menampilkan aplikasi dari daftar itu yang bisa dibekukan di ponsel Anda, lalu membekukannya setelah Anda konfirmasi. Lihat [Bekukan aplikasi sistem bawaan](/guide/system-apps/).

## Hal yang perlu diperhatikan {#notes}

- Bekukan hanya aplikasi yang Anda yakin tidak dibutuhkan. Membekukan komponen penting sistem bisa membuat sebagian fungsi ponsel tidak berjalan dengan baik.
- Di MIUI dan beberapa sistem lain, aplikasi penting tertentu mungkin tidak bisa dibekukan, atau sistem akan mencairkannya otomatis setelah ponsel dimulai ulang.
- Di ponsel yang disiapkan dengan [penyiapan kode QR](/guide/qr-code/), sistem secara default tidak menginstal aplikasi bawaan. Jika membutuhkannya, Anda bisa mengaktifkannya di "Laboratorium" Ice Box.
- Untuk detail setiap merek, lihat [catatan untuk setiap merek ponsel](/guide/devices/).

## Pertanyaan umum {#faq}

### Apa bedanya membekukan aplikasi bawaan dengan menonaktifkannya lewat perintah ADB?

Hasilnya mirip, tetapi Ice Box memberi Anda antarmuka grafis untuk memeriksa, membekukan, dan mencairkan aplikasi kapan saja, tanpa perlu menghafal perintah.

### Bisakah aplikasi yang beku dipulihkan?

Bisa. Setelah Anda mencairkan aplikasi di Ice Box, aplikasi itu kembali normal. Sebelum meng-uninstal Ice Box, cairkan semua aplikasi terlebih dahulu.

### Apakah aplikasi bawaan yang beku akan kembali setelah update sistem?

Beberapa sistem otomatis mencairkan aplikasi penting setelah ponsel dimulai ulang atau diupdate. Jika ini terjadi, bekukan lagi di Ice Box.
