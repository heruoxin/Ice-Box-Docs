---
title: Risiko menyiapkan Device Owner di ponsel Samsung
short: Catatan perangkat Samsung
description: Menyiapkan Device Owner di Samsung bisa merusak Folder Aman dan Dual Messenger, bahkan mereset sandi layar kunci. Pengguna Samsung, baca ini sebelum memutuskan.
section: guide
group: trouble
order: 2
related: guide/root, guide/shizuku, guide/wireless-debugging, guide/devices
---

Ice Box dibangun di atas fitur Device Owner bawaan Android. Samsung adalah kasus khusus di antara produsen ponsel Android: Samsung menerapkan kerangka keamanannya sendiri yang bernama KNOX.

Setelah Anda menyiapkan dan mengaktifkan solusi tanpa root yang memakai Device Owner bawaan Android di ponsel Samsung, Anda mungkin mengalami masalah berikut:

- Beberapa fitur KNOX, seperti Folder Aman, mungkin tidak berfungsi.
- Fitur bawaan Dual Messenger berhenti berfungsi.
- Sistem mereset sandi layar kunci, sehingga Anda terpaksa melakukan reset ke setelan pabrik dan kehilangan data.

Masalah-masalah ini tidak selalu terjadi. Ambil contoh yang paling serius, yaitu sandi layar kunci yang tereset: pada tahun 2018, dari sekitar 200.000 pengguna Samsung yang memakai Ice Box, kami menerima total 6 laporan, dan jumlah pengguna yang sebenarnya terdampak mungkin lebih banyak. Sejak Samsung merilis One UI, tampaknya lebih banyak pengguna yang mengalami masalah ini, jadi kami tidak menyarankan mode Device Owner di One UI.

Saat ini kami belum tahu penyebab pasti masalah-masalah ini, dan belum ada solusi yang baik.

> [!CAUTION]
> Pengguna Samsung, pertimbangkan dengan sangat, sangat hati-hati sebelum memakai mode Device Owner.

## Mode yang disarankan untuk pengguna Samsung {#recommended}

- Sudah di-root: gunakan [mode root](/guide/root/).
- Tanpa root, Android 11 ke atas: gunakan [mode Proses debug nirkabel](/guide/wireless-debugging/) atau [mode Shizuku](/guide/shizuku/).
- Tanpa root, punya komputer: gunakan [mode ADB](/guide/adb/).

Semua mode ini tidak memerlukan Device Owner. Kecuali mode root, semuanya perlu diaktifkan lagi setiap kali ponsel dimulai ulang.
