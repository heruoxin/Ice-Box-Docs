---
title: Cara meng-uninstal Ice Box dan melepas Device Owner
short: Uninstal Ice Box
description: Cairkan semua aplikasi sebelum meng-uninstal Ice Box. Dalam mode Device Owner, uninstal dari setelan Ice Box, bukan dari layar utama, karena jika tidak, aplikasi yang beku tidak bisa dicairkan.
section: guide
group: trouble
order: 3
howto: true
related: guide/device-owner, faq, guide/devices
---

Hanya Ice Box yang bisa mencairkan aplikasi yang dibekukannya. Sebelum meng-uninstal Ice Box, periksa sekali lagi bahwa semua aplikasi sudah dicairkan.

## Langkah meng-uninstal {#steps}

1. Buka Ice Box, gunakan "Cairkan semua" untuk mencairkan semua aplikasi di Ice Box, lalu pastikan semuanya sudah muncul lagi di layar utama.
2. Buka setelan Ice Box dan ketuk "Uninstal".
3. Setelah Anda konfirmasi, Ice Box akan melepas otorisasi Device Owner miliknya (jika ada) dan menyelesaikan proses uninstal.

> [!WARNING]
> Saat memakai mode Device Owner, **jangan meng-uninstal Ice Box langsung dari layar utama**. Di Xiaomi dan beberapa ponsel lain, cara ini membuat izin Device Owner hilang, dan aplikasi yang beku tidak akan pernah bisa dicairkan lagi.

## Catatan untuk setiap mode kerja {#modes}

- **Mode Device Owner**: Anda harus melepas otorisasi Device Owner dengan "Uninstal" di setelan Ice Box. Jika tidak, sistem tidak akan mengizinkan Anda meng-uninstalnya.
- **Mode root, Proses debug nirkabel, ADB, dan Shizuku**: sama saja, cairkan semua aplikasi terlebih dahulu, lalu uninstal Ice Box.
- Jika Anda pernah beralih mode kerja, kembalilah ke mode yang dipakai saat membekukan sebelum mencairkan. Mode kerja tidak kompatibel satu sama lain.

## Lupa mencairkan sebelum meng-uninstal? {#already-removed}

- **Mode root, Proses debug nirkabel, ADB, dan Shizuku**: instal ulang Ice Box, beralih ke mode kerja yang dipakai saat membekukan, lalu cari aplikasi yang beku di daftar aplikasi dan cairkan.
- **Mode Device Owner**: meng-uninstal Ice Box secara langsung membuat izin Device Owner hilang, dan aplikasi yang beku tidak bisa dicairkan lagi. Jadi, pastikan Anda mengikuti langkah di atas dan meng-uninstal dari setelan Ice Box.
