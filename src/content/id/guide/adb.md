---
title: Mode ADB: aktifkan Ice Box dengan komputer
short: Mode ADB
description: Tidak bisa menyiapkan Device Owner, atau ingin mempertahankan akun Anda? Aktifkan Ice Box lewat ADB di komputer (mode ADB sederhana). Tanpa root, tetapi perlu diaktifkan ulang setiap kali ponsel dimulai ulang.
section: guide
group: activate
order: 6
howto: true
faq: true
related: guide/wireless-debugging, guide/activator, guide/web-activator, guide/device-owner
---

Jika Anda tidak berhasil menyiapkan [mode Device Owner](/guide/device-owner/), atau tidak ingin menghapus akun di ponsel, Anda bisa memakai mode ADB (disebut juga mode ADB sederhana). Perbedaannya dengan mode Device Owner:

- **Kelebihan**: tidak ada langkah rumit seperti menghapus akun. Langsung bisa dipakai setelah aktivasi.
- **Kekurangan**: Anda perlu mengaktifkannya lagi setiap kali ponsel dimulai ulang. Jika tidak, aplikasi tidak bisa dibekukan atau dicairkan.

Di Ice Box, mode ADB muncul sebagai mode kerja "Proses debug nirkabel". Di Android 11 ke atas, Anda juga bisa mengaktifkannya langsung di ponsel tanpa komputer. Lihat [mode Proses debug nirkabel](/guide/wireless-debugging/).

## Langkah aktivasi {#steps}

1. Pastikan Ice Box versi terbaru sudah terinstal.
2. Aktifkan Proses debug USB di ponsel dan biarkan selalu aktif. Atur mode koneksi USB ke "Hanya mengisi daya". Di ponsel Xiaomi, Anda juga perlu mengaktifkan "Proses debug USB (Setelan keamanan)".
3. Hubungkan ponsel ke komputer, buka aktivator, lalu pilih mode ADB untuk mengaktifkan.

[[activator-download]]

Jika Anda terbiasa dengan perintah ADB, Anda bisa melewati aktivator dan menjalankan perintah ini di komputer:

```
adb shell sh /sdcard/Android/data/com.catchingnow.icebox/files/start.sh
```

## FAQ {#faq}

### Aktivator terus memuat

Ekstrak semua file dari arsip aktivator ke komputer sebelum menjalankannya. Jangan mengekstraknya ke penyimpanan ponsel, dan jangan mengeklik dua kali file exe di dalam arsip.

### Ice Box berhenti berfungsi tak lama setelah kabel dicabut

Biarkan Proses debug USB selalu aktif, dan biarkan mode koneksi USB tetap di "Hanya mengisi daya" tanpa diubah. Di ponsel Xiaomi, "Proses debug USB (Setelan keamanan)" juga harus aktif. Mengubah salah satu tombol ini membuat sistem otomatis mencabut izin Ice Box.

### Tidak bisa membekukan atau mencairkan setelah ponsel dimulai ulang

Ini normal dalam mode ADB. Setelah dimulai ulang, hubungkan ke komputer dan aktifkan lagi, atau di Android 11 ke atas, aktifkan lagi dengan [Proses debug nirkabel](/guide/wireless-debugging/).
