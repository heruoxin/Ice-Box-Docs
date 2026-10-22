---
title: Penyiapan mode Device Owner
short: Mode Device Owner
description: Siapkan mode Device Owner Ice Box tanpa root: hapus akun Anda sebentar dan jalankan satu perintah ADB di komputer. Tetap aktif setelah ponsel dimulai ulang dan sistem diupdate.
section: guide
group: activate
order: 1
howto: true
faq: true
related: guide/activator, guide/web-activator, guide/qr-code, guide/samsung-device-owner
---

Jika ponsel Anda sudah di-root, cukup buka Ice Box dan mulai memakainya. Tidak perlu penyiapan tambahan. Jika ponsel Anda tidak bisa di-root dan Anda ingin sesuatu yang cukup disiapkan sekali lalu terus dipakai, pilih mode Device Owner. Penyiapannya memerlukan komputer, jadi baca dulu seluruh halaman ini.

## Apa itu Device Owner? {#what}

Device Owner (pemilik perangkat) adalah fitur dari kerangka pengelolaan perusahaan di Android. Fitur ini bisa membekukan dan mencairkan aplikasi apa pun tanpa root. Ice Box hanya memakai kemampuan yang terkait, seperti membekukan aplikasi.

- Satu ponsel hanya bisa punya satu Device Owner pada satu waktu.
- Device Owner hanya bisa disetel dengan perintah ADB atau kode QR. Mengaktifkannya di "Aplikasi admin perangkat" pada setelan ponsel tidak akan berhasil dan tidak akan memberi Anda izin ini.
- Setelah disetel, Anda tidak perlu menyiapkannya lagi setelah ponsel dimulai ulang atau sistem diupdate.

## Baca ini dulu {#before}

Sistem dari merek ponsel asal Tiongkok sering menambahkan fitur khusus sendiri, dan fitur ini menimbulkan beberapa masalah kompatibilitas dengan mode Device Owner. Yang umum terjadi antara lain:

- Ponsel Samsung bisa terkunci sandi oleh sistem. Pastikan Anda membaca [catatan perangkat Samsung](/guide/samsung-device-owner/) terlebih dahulu.
- Muncul permintaan uninstal setiap kali Anda membekukan aplikasi, dan permintaan izin saat mencairkannya (Huawei, Smartisan).
- Bilah notifikasi terus menampilkan "Admin perangkat aktif, ketuk untuk menonaktifkan" (OPPO, vivo).
- Fitur aplikasi ganda bawaan sistem berhenti berfungsi (Huawei, MIUI).
- Aplikasi yang baru dicairkan sesekali tidak bisa terhubung ke internet. Tutup aplikasinya lalu buka lagi (OnePlus, Smartisan, dan lainnya).

Jika Anda tidak bisa menerima masalah ini, pertimbangkan [mode ADB](/guide/adb/) atau [mode Proses debug nirkabel](/guide/wireless-debugging/). Keduanya juga tidak memerlukan root, tetapi Anda harus mengaktifkannya lagi setiap kali ponsel dimulai ulang.

## Aktivator atau command line? {#tools}

Jika Anda tidak terbiasa dengan ADB dan command line, gunakan salah satu alat aktivasi. Hasilnya sama persis dengan memakai command line:

- [Aktivator sekali klik](/guide/activator/): untuk komputer Windows.
- [Aktivator web](/guide/web-activator/): bisa dipakai di Windows, macOS, dan Linux. Disarankan memakai Chrome.
- [AutumnBox (秋之盒)](/guide/autumnbox/): untuk komputer Windows.

Tidak punya komputer? Coba [penyiapan dengan kode QR](/guide/qr-code/). Hasilnya sama persis, tetapi perlu reset ke setelan pabrik terlebih dahulu, dan beberapa sistem dari merek ponsel asal Tiongkok tidak mendukungnya.

## Menyiapkan dengan command line {#steps}

1. Pastikan ponsel Anda memakai Android 7.0 ke atas dan sudah terinstal Ice Box versi terbaru. Pastikan Anda tahu cara memakai perintah [ADB](https://developer.android.com/tools/adb) dan sudah membaca seluruh halaman ini.
2. Di ponsel Sony, lepas kartu SIM. Di ponsel Xiaomi, aktifkan "Proses debug USB (Setelan keamanan)" di Opsi developer dan matikan "Optimisasi MIUI".
3. Buka "Setelan > Akun" di ponsel dan hapus semua akun, termasuk akun sistem seperti akun Google, Xiaomi, dan Huawei. Anda bisa masuk lagi setelah penyiapan.
4. Jika Anda menyiapkan beberapa pengguna, mode tamu, atau aplikasi ganda, matikan atau hapus juga. Anda bisa menyalakannya lagi setelah penyiapan.
5. Jalankan perintah di bawah di komputer Anda (emulator terminal di ponsel tidak akan berhasil).

```
adb shell dpm set-device-owner com.catchingnow.icebox/.receiver.DPMReceiver
```

Jika muncul pesan seperti "Success", berarti penyiapan berhasil. Buka Ice Box dan mulai memakainya. Anda juga bisa menambahkan kembali akun yang tadi dihapus.

ADB tersedia sebagai unduhan resmi dari Google: [Windows](https://dl.google.com/android/repository/platform-tools-latest-windows.zip), [macOS](https://dl.google.com/android/repository/platform-tools-latest-darwin.zip), [Linux](https://dl.google.com/android/repository/platform-tools-latest-linux.zip).

## Penyiapan tidak berhasil? {#faq}

### Muncul pesan "'adb' is not recognized as an internal or external command, operable program or batch file"

Anda mungkin belum terbiasa memakai command line di komputer. Kami menyarankan mengaktifkan dengan [aktivator sekali klik](/guide/activator/) atau [aktivator web](/guide/web-activator/).

### Aktivator terus memuat

Ekstrak semua file dari arsip aktivator ke komputer sebelum menjalankannya. Jangan mengekstraknya ke penyimpanan ponsel, dan jangan mengeklik dua kali file exe di dalam arsip.

### Muncul pesan "error: no devices/emulators found"

Ponsel tidak terhubung ke komputer. Periksa bahwa Proses debug USB aktif, driver ponsel sudah terinstal dengan benar di komputer, dan tidak ada PC suite, pengelola ponsel, atau antivirus yang memblokir koneksi.

### Muncul pesan "Not allowed to ... already several accounts on the device"

Belum semua akun dihapus di langkah 3. Keluar dari semua akun di ponsel, termasuk akun Google dan akun sistem bawaan seperti akun Xiaomi dan Huawei. Di ponsel Sony, lepas kartu SIM lalu mulai ulang ponsel.

### Muncul pesan "Not allowed to ... already several users on the device"

Beberapa pengguna atau aplikasi ganda dari langkah 4 belum semuanya dihapus. Hapus atau matikan semua pengguna tambahan, mode tamu, dan aplikasi ganda.

### Muncul pesan "Trying to set the device owner, but device owner is already set."

Ada aplikasi lain di ponsel yang sudah disetel sebagai Device Owner, dan satu ponsel hanya bisa punya satu Device Owner. Jika aplikasi itu bisa bekerja dengan Ice Box, seperti Island atau BlackHouse (小黑屋), alihkan Ice Box ke mode kerja yang sesuai dan Anda bisa langsung memakainya. Lihat [mode kerja lain](/guide/other-modes/).

### Ponsel Xiaomi menampilkan "Neither user xxx nor current process has android.permission.MANAGE_DEVICE_ADMINS"

Di Opsi developer pada setelan sistem, aktifkan "Proses debug USB (Setelan keamanan)" secara manual. Jika masih gagal, matikan "Optimisasi MIUI" lalu coba lagi.

## Pertanyaan setelah penyiapan berhasil {#faq-after}

### Apakah normal jika muncul pemberitahuan seperti "Perangkat ini dikelola oleh organisasi Anda" di bilah notifikasi?

Ya. Begitulah cara kerja mode Device Owner. Teks itu ditampilkan oleh sistem dan tidak bisa dihilangkan, tetapi Anda bisa mengubah "Nama organisasi" di "Laboratorium" Ice Box menjadi teks apa pun yang Anda suka.

### Setelan di beberapa ponsel menyebutkan bahwa Device Owner bisa membaca informasi pribadi seperti kalender dan email. Apakah Ice Box membacanya?

Tidak. Ice Box hanya memakai izin Device Owner yang terkait dengan pembekuan aplikasi. Ice Box tidak memakai izin yang tidak terkait, dan tidak pernah membaca kalender, email, atau informasi serupa milik Anda.

### Bagaimana cara melepas izin Ice Box jika saya tidak membutuhkannya lagi?

Cairkan semua aplikasi terlebih dahulu, lalu ketuk "Uninstal" di setelan Ice Box. Setelah Anda konfirmasi, Ice Box melepas otorisasi Device Owner miliknya dan meng-uninstal dirinya sendiri. Lihat [Uninstal Ice Box](/guide/uninstall/).

### Kenapa aplikasi yang dulu saya bekukan dalam mode root atau ADB tidak bisa dicairkan?

Mode kerja tidak kompatibel satu sama lain. Kembali ke mode kerja sebelumnya di "Laboratorium" Ice Box. Aplikasi harus dicairkan dalam mode yang sama dengan saat dibekukan.
