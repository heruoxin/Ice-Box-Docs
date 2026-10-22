---
title: Mode Proses debug nirkabel: aktifkan Ice Box tanpa root atau komputer
short: Mode Proses debug nirkabel
description: Di Android 11 ke atas, aktifkan Ice Box dengan fitur Proses debug nirkabel dari sistem, tanpa root dan tanpa komputer. Langkah lengkap, tips penyambungan, dan FAQ.
section: guide
group: activate
order: 5
howto: true
faq: true
related: guide/adb, guide/shizuku, guide/devices, guide/device-owner
---

Mode Proses debug nirkabel tidak memerlukan root maupun komputer. Ice Box memakai fitur "Proses debug nirkabel" dari sistem untuk mendapatkan izin yang diperlukan untuk membekukan aplikasi, dan seluruh prosesnya dilakukan di ponsel.

Sebelum mulai, perhatikan bahwa:

- Mode ini memerlukan Android 11 ke atas.
- Anda perlu terhubung ke Wi-Fi saat penyambungan. Jaringan Wi-Fi apa saja bisa.
- Setelah ponsel dimulai ulang, Anda perlu menyalakan lagi tombol "Proses debug nirkabel". Jika tidak, Ice Box tidak bisa membekukan atau mencairkan aplikasi.

Jika ponsel Anda memakai versi lebih lama dari Android 11, atau Anda lebih suka mengaktifkan dengan komputer, lihat [mode ADB](/guide/adb/).

## Sebelum memulai {#before}

Ice Box memeriksa setiap hal berikut di halaman penyiapannya. Ketuk item yang belum terpenuhi untuk langsung membuka setelan yang tepat:

1. **Matikan VPN untuk sementara**. Anda bisa menyalakannya lagi setelah penyambungan.
2. **Izinkan notifikasi untuk Ice Box**. Kode penyambungan dimasukkan di notifikasi Ice Box.
3. **Aktifkan Proses debug USB**. Jika Opsi developer belum diaktifkan, lihat bagian berikutnya.
4. **Hubungkan ke Wi-Fi**. Jaringan Wi-Fi apa saja bisa.
5. **Izinkan Ice Box berjalan di latar belakang**. Di beberapa ponsel, Anda perlu mengatur penggunaan baterai Ice Box ke "Tidak dibatasi" di setelan sistem.

## Cara mengaktifkan Proses debug USB {#usb-debugging}

1. Buka "Setelan", cari "Tentang ponsel", lalu ketuk "Nomor build" 7 kali berturut-turut sampai muncul pesan seperti "Sekarang Anda adalah developer!".
2. Kembali ke "Setelan", cari "Opsi developer" di bagian "Sistem" atau "Setelan tambahan", lalu aktifkan tombol "Proses debug USB".

Letak menu berbeda-beda tergantung merek dan versi sistem. Ice Box menyertakan ilustrasi langkah demi langkah untuk merek-merek umum yang bisa Anda ikuti.

## Dapatkan kode penyambungan dalam tiga langkah {#pairing}

1. Di Opsi developer, cari "Proses debug nirkabel", aktifkan, lalu ketuk untuk membuka halaman setelannya.
2. Pilih "Sambungkan perangkat dengan kode penyambungan".
3. Biarkan dialog kode penyambungan tetap terbuka, tarik ke bawah panel notifikasi, lalu masukkan kode penyambungan 6 digit di notifikasi Ice Box.

Setelah penyambungan berhasil, Ice Box menampilkan "Proses debug nirkabel aktif" dan siap dipakai. Ice Box juga punya video tutorial yang bisa Anda buka jika kesulitan menyambungkan.

> [!TIP]
> Jika Anda tidak melihat "Proses debug nirkabel" di Opsi developer, kemungkinan besar Opsi developer belum diaktifkan. Selesaikan dulu langkah di bagian sebelumnya.

## Setelah ponsel dimulai ulang {#after-reboot}

Saat ponsel dimulai ulang, sistem mencabut izin Ice Box. Masuk lagi ke Opsi developer dan nyalakan tombol "Proses debug nirkabel", lalu Ice Box akan berfungsi lagi. Ice Box akan mengingatkan Anda untuk menyalakannya lewat notifikasi.

## FAQ {#faq}

### Muncul pesan "Nonaktifkan VPN dan pengoptimalan baterai" saat penyambungan

Ice Box tidak bisa terhubung ke layanan proses debug nirkabel milik sistem. Matikan VPN dan aplikasi proxy apa pun, matikan pengoptimalan baterai untuk Ice Box di setelan sistem, lalu coba lagi.

### Muncul pesan "Kode penyambungan salah" atau "Kedaluwarsa"

Kode penyambungan hanya berlaku selama dialognya masih tampil. Ambil kode penyambungan baru dan segera masukkan selagi dialognya tetap terbuka.

### Kotak isian tidak terlihat di notifikasi

Pastikan notifikasi untuk Ice Box diizinkan. Beberapa sistem menciutkan notifikasi. Ketuk tombol luaskan di sisi kanan notifikasi untuk melihat kotak isian.

### Ponsel Xiaomi, Huawei, OPPO, atau lainnya mengatakan izin ADB tidak cukup

Aktifkan opsi yang sesuai untuk merek Anda di Opsi developer. Di ponsel Xiaomi, aktifkan "Proses debug USB (Setelan keamanan)". Di ponsel Huawei, aktifkan "Izinkan debug ADB dalam mode hanya mengisi daya". Di ponsel OPPO dan OnePlus, aktifkan "Nonaktifkan pemantauan izin". Di merek lain, aktifkan opsi serupa sesuai kebutuhan. Untuk info lebih lanjut, lihat [catatan merek ponsel](/guide/devices/).
