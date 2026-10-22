---
title: Cara menghentikan aplikasi Android berjalan di latar belakang
short: Hentikan aplikasi latar belakang
card: Masukkan aplikasi yang jarang dipakai ke Ice Box, dan aplikasi itu tidak bisa mulai atau berjalan di latar belakang, ataupun menguras baterai dan kuota di sana.
description: Hentikan aplikasi Android yang berjalan di latar belakang: bekukan aplikasi yang suka berjalan sendiri dengan Ice Box, lalu cairkan dengan sekali ketuk saat dibutuhkan. Bisa tanpa root.
section: usecase
order: 1
icon: bolt
faq: true
related: guide/auto-freeze, guide, use-cases/disable-preinstalled-apps
---

## Jawaban singkat {#answer}

Bekukan aplikasinya. Aplikasi yang dibekukan tidak bisa berjalan, jadi tidak bisa memulai sendiri atau terus berjalan di latar belakang, dan tidak memakai baterai atau kuota di sana. Ice Box bisa membekukan aplikasi ini dengan sekali ketuk. Saat Anda membutuhkannya, ketuk aplikasinya untuk mencairkan dan membukanya, dan Ice Box akan membekukannya lagi secara otomatis setelah Anda selesai. Ice Box bisa dipakai di ponsel yang sudah di-root maupun tanpa root.

## Kenapa aplikasi berjalan di latar belakang? {#why}

Banyak aplikasi mulai berjalan otomatis saat ponsel menyala, terhubung ke jaringan, mulai diisi daya, atau menerima pesan push, meskipun sudah lama tidak Anda buka. "Paksa berhenti" di Android hanya menghentikan aplikasi satu kali. Setelah itu, aplikasi masih bisa memulai dirinya sendiri lagi.

Membekukan itu berbeda: setelah aplikasi dibekukan, sistem tidak akan menjalankannya lagi sampai Anda mencairkannya di Ice Box.

## Hentikan aplikasi latar belakang dengan Ice Box {#steps}

1. [Unduh Ice Box](/download/) dan aktifkan sesuai saran di [Pusat Bantuan](/guide/).
2. Di daftar aplikasi Ice Box, centang aplikasi yang jarang dipakai tetapi tidak ingin Anda uninstal.
3. Ketuk atau geser tombol bekukan di bagian bawah Ice Box untuk membekukan aplikasi ini.
4. Saat membutuhkannya, ketuk aplikasi itu di Ice Box atau pintasannya di layar utama. Ice Box mencairkannya terlebih dahulu, lalu membukanya.
5. Aktifkan [Bekukan otomatis](/guide/auto-freeze/), dan Ice Box akan membekukannya lagi secara otomatis saat layar mati.

## Hal yang perlu diperhatikan {#notes}

- Aplikasi yang beku tidak bisa menerima pesan push sendiri. Di ponsel seperti OPPO, vivo, dan OnePlus, sebagian aplikasi memakai layanan push sistem dan mungkin masih menampilkan notifikasi, tetapi aplikasinya sendiri tidak berjalan.
- Aplikasi yang harus terus bekerja di latar belakang, seperti aplikasi chat yang harus menerima pesan secara real time, alarm, dan navigasi, tidak cocok untuk dibekukan.
- Bekukan otomatis memerlukan Ice Box untuk berjalan di latar belakang. Lihat [Bekukan otomatis](/guide/auto-freeze/) untuk mengatur izin latar belakang Ice Box.

## Pertanyaan umum {#faq}

### Apa bedanya membekukan dengan "Paksa berhenti"?

"Paksa berhenti" hanya menghentikan aplikasi yang sedang berjalan saat itu, dan peristiwa lain masih bisa membangunkannya lagi nanti. Aplikasi yang beku sama sekali tidak bisa berjalan sampai dicairkan.

### Apakah bisa tanpa root?

Bisa. Ice Box mendukung mode kerja tanpa root seperti Device Owner, Proses debug nirkabel, ADB, dan Shizuku. Jawab tiga pertanyaan di [Pusat Bantuan](/guide/#modes) untuk menemukan mode yang tepat untuk Anda.

### Apakah membekukan menghapus data aplikasi?

Tidak. Membekukan hanya menghentikan aplikasi untuk sementara. Semua datanya tetap tersimpan, dan Anda bisa terus memakainya setelah dicairkan.
