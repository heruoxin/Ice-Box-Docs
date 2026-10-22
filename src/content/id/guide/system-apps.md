---
title: Bekukan aplikasi sistem bawaan
short: Bekukan aplikasi bawaan
description: Ice Box bisa membekukan sebagian aplikasi sistem bawaan, juga dalam mode tanpa root. Hal yang perlu diperiksa dulu, aplikasi yang tidak bisa dibekukan, daftar yang dibagikan, dan cara mengupdate aplikasi yang beku.
section: guide
group: tips
order: 3
faq: true
related: use-cases/disable-preinstalled-apps, guide/devices, guide/qr-code
---

Banyak ponsel datang dengan banyak software bawaan dan aplikasi iklan yang tidak akan pernah Anda pakai. Ice Box bisa membekukan aplikasi bawaan ini: aplikasi itu tidak akan berjalan di latar belakang dan tidak akan muncul di layar utama. Kapan pun Anda membutuhkannya, cairkan di Ice Box untuk mengembalikannya.

## Sebelum membekukan {#before}

- Bekukan hanya aplikasi yang Anda yakin tidak dibutuhkan. Jika ragu, jangan dibekukan. Membekukan komponen penting sistem bisa membuat ponsel tidak berfungsi dengan baik.
- Beberapa sistem memperlakukan aplikasi penting secara khusus: di MIUI dan sistem serupa, sebagian aplikasi penting mungkin tidak bisa dibekukan, atau akan dicairkan paksa oleh sistem setelah ponsel dimulai ulang.
- Di EMUI versi baru, launcher Huawei tidak bisa dibekukan lagi.
- Aplikasi yang berjalan dengan izin admin perangkat tidak bisa dibekukan. Cabut dulu izin aplikasi itu di "Setelan > Keamanan > Aplikasi admin perangkat", lalu bekukan.

## Impor daftar beku yang dibagikan {#lists}

Ice Box bisa membagikan dan mengimpor daftar aplikasi sistem yang aman dibekukan. Saat Anda membuka link daftar yang dibagikan seseorang, Ice Box menampilkan aplikasi dari daftar itu yang bisa dibekukan di ponsel Anda, lalu membekukannya setelah Anda mengonfirmasi satu per satu.

Anda juga bisa menyalin teks yang dibagikan, lalu ketuk "Impor dari papan klip" di Setelan Ice Box.


## Aplikasi bawaan setelah penyiapan dengan kode QR {#qr}

Di ponsel yang disiapkan dengan [penyiapan kode QR](/guide/qr-code/), sistem secara default tidak menginstal aplikasi bawaan. Saat Anda membutuhkan salah satunya, buka "Laboratorium" di setelan Ice Box, ketuk "Aktifkan aplikasi sistem bawaan", lalu pilih aplikasi yang ingin diinstal.

## FAQ {#faq}

### Bagaimana cara mengupdate aplikasi yang beku?

Jika Anda memakai CoolApk (酷安), toko aplikasi Android asal Tiongkok, aktifkan "Show hidden apps" di bagian lab pada setelan CoolApk. Di toko aplikasi lain, cairkan dulu aplikasinya di Ice Box, lalu bekukan lagi setelah update.

### Beberapa aplikasi sistem tidak bisa dibekukan, atau diam-diam dicairkan setelah ponsel dimulai ulang

Ini adalah cara sistem melindungi aplikasi penting, dan Ice Box tidak bisa menghindarinya. MIUI dan beberapa sistem lain melakukan hal ini.
