---
title: Log perubahan Ice Box
short: Log perubahan
description: Apa saja yang berubah di setiap versi Ice Box, dari 3.4.0 hingga rilis terbaru, termasuk fitur baru, peningkatan kompatibilitas, dan perbaikan bug.
section: product
toc: false
priority: 0.5
related: download, features
---

Anda bisa melihat nomor versi dan saluran yang sedang dipakai di "Setelan > Tentang" di Ice Box. Untuk detail setiap saluran distribusi, dan untuk mengunduh APK terbaru, lihat [halaman unduhan](/download/#channels).

## 3.30.11 {#v3-30-11}

- Memperbaiki masalah tata letak di perangkat lipat
- Mendukung izin Xiaomi untuk membaca daftar aplikasi
- Mulai penyambungan kedua, Proses debug nirkabel tidak lagi mengharuskan VPN dimatikan

## 3.30.10 {#v3-30-10}

- Mendukung ukuran halaman memori 16 KB
- Perubahan untuk memenuhi persyaratan peninjauan toko aplikasi Xiaomi

## 3.30.9 {#v3-30-9}

- Peningkatan: setelah penyambungan pertama berhasil, "Proses debug USB" tidak perlu lagi terus aktif
- Meningkatkan kompatibilitas layanan latar belakang

## 3.30.8 {#v3-30-8}

- Menambahkan video tutorial ke petunjuk menyalakan Proses debug nirkabel
- Memperbaiki dialog izin "Ice Box meminta untuk membuka xxx" yang sering muncul di beberapa perangkat

## 3.30.7 {#v3-30-7}

- Bisa membekukan lebih banyak komponen sistem di MIUI dan HyperOS
- Memperbarui target SDK ke 35

## 3.25.0 {#v3-25-0}

- Menambahkan panduan mengaktifkan Shizuku secara nirkabel
- Memperbarui Shizuku, dengan dukungan untuk Sui
- Mendukung ikon monokrom
- UI warna dinamis mulai Android S, dengan efek latar belakang buram yang baru
- Mode terang/gelap bisa mengikuti sistem
- Versi Tiongkok mendukung WeChat Pay
- Memperbaiki beberapa tata letak yang tidak rata
- Menghapus Plugin sistem untuk memenuhi persyaratan Google Play

## 3.22.0 {#v3-22-0}

- Sesuai permintaan tim Google Play Protect, mode "Plugin sistem" telah dihapus. Jika Anda membutuhkannya, cari versi lama di internet dan instal versi tersebut
- Baru: tema terang/gelap bisa beralih otomatis mengikuti sistem

## 3.21.0 {#v3-21-0}

- Memperbaiki beberapa fitur di mode Shizuku
- Memperbarui SDK sesuai persyaratan Alipay
- Perbaikan lainnya

## 3.20.0 {#v3-20-0}

- Memperbaiki beberapa nomor pesanan yang tidak biasa gagal diaktifkan
- Percobaan perbaikan (masih diuji) untuk fitur aplikasi ganda bawaan yang tidak berfungsi di MIUI dan beberapa ROM lain setelah Ice Box dijadikan Device Owner
- Kunci PIN kini mendukung pengenalan wajah

## 3.19.0 {#v3-19-0}

- Opsi baru: posisikan tombol bekukan di tengah
- Mengganti Fabric, yang akan ditutup, dengan Microsoft App Center
- Beberapa perbaikan

## 3.18.5 {#v3-18-5}

- Memperbaiki ikon yang kadang diskalakan dengan salah
- Memperbaiki animasi yang tidak rata di beberapa layar

## 3.18.2 {#v3-18-2}

- Memperbaiki masalah tampilan dengan navigasi gestur di beberapa sistem

## 3.18.0 {#v3-18-0}

- Opsi baru: otomatis menambahkan pintasan saat aplikasi dimasukkan ke daftar beku.
- Opsi baru: pilih apakah tombol bekukan digeser ke kiri atau ke kanan.

## 3.17.5 {#v3-17-5}

- Memperbaiki kompatibilitas dengan Android Q Beta 6.
- Memperbarui server yang dipakai di Tiongkok daratan agar lebih stabil. Pengguna di Tiongkok sebaiknya mengupdate; pengguna di luar Tiongkok tidak terpengaruh.
- Perbaikan bug dan peningkatan performa lainnya.

## 3.17.0 {#v3-17-0}

- Aplikasi pendamping baru: IceBridge.
- Mengubah tata letak layar Kunci sidik jari agar tombol PIN bisa dijangkau di perangkat dengan sensor sidik jari di layar.

## 3.16.5 {#v3-16-5}

- Dukungan aplikasi pendamping baru: 划卡冻结 (geser untuk membekukan, khusus root)
- Perbaikan bug dan peningkatan performa

## 3.16.0 {#v3-16-0}

- Menambahkan halaman yang memperkenalkan aplikasi pendamping

## 3.15.8 {#v3-15-8}

- Memperbaiki beberapa masalah yang bisa menguras baterai di latar belakang
- Tutorial dan dokumen bantuan kini memakai link yang di-hosting di Tiongkok agar lebih cepat diakses

## 3.15.3 {#v3-15-3}

- Mode root dan mode ADB sederhana kini bisa menampilkan klon aplikasi yang dibuat oleh fitur aplikasi ganda di sistem
- Memperbaiki konflik dengan gestur Android Q Beta 3

## 3.14.2 {#v3-14-2}

- Menambahkan SDK serbaguna: [Delegated Scopes Manager](https://github.com/heruoxin/Delegated-Scopes-Manager)
- Dukungan eksperimental untuk WeChat Pay dan QQ Pay (transfer manual). Lihat [WeChat Pay](/purchase/wechat-pay/)

## 3.14.0 {#v3-14-0}

- Mode baru "ADB sederhana" untuk perangkat tanpa root yang sulit menyiapkan Device Owner. Mode ini perlu diaktifkan lagi setiap kali ponsel dimulai ulang
- Memperbarui ke Shizuku API v3
- Memperbaiki ketuk 2x pada pintasan yang gagal membuka aplikasi di Android Q
- Perbaikan lainnya

## 3.13.0 {#v3-13-0}

- Perbaikan kompatibilitas dasar untuk Android Q
- Semua fitur kini berfungsi di dalam profil kerja Island
- Mendukung 权限猫
- Jika opsi Bekukan otomatis tidak berfungsi dengan baik, tambahkan Ice Box ke daftar putih baterai di setelan sistem secara manual. Jika tidak memerlukan Bekukan otomatis, matikan opsinya dan Ice Box sama sekali tidak akan berjalan di latar belakang

## 3.12.2 {#v3-12-2}

- Ikon kini bisa diurutkan
- Penambahan pintasan sekaligus banyak kini tersedia di Android 8.0+ (karena batasan sistem, penambahan sekaligus banyak tidak dijamin berhasil)

## 3.12.0 {#v3-12-0}

- Menulis ulang tata letak beberapa halaman
- Menulis ulang fitur "Notifikasi aplikasi baru"
- Kompatibel dengan penambahan pintasan dari aplikasi pihak ketiga seperti Fluid NG
- Karena batasan sistem Huawei, pengguna Huawei dengan launcher pihak ketiga tidak bisa menambahkan pintasan dari dalam Ice Box. Sebagai gantinya, coba tekan lama area kosong di layar utama untuk menambahkannya

## 3.11.1 {#v3-11-1}

- Perbaikan bug
- Menyesuaikan tata letak dan elemen UI.

## 3.10.0 {#v3-10-0}

- Memperbaiki daftar aplikasi yang crash di Android 9 karena konflik dengan Nevolution.
- Mendesain ulang panduan aktivasi saat pertama kali dibuka dan menambahkan link ke aktivator sekali klik.

## 3.9.9 {#v3-9-9}

- Jika Ice Box disiapkan tanpa root dengan kode QR, Anda bisa mengaktifkan aplikasi bawaan di "Setelan Ice Box > Laboratorium > Aktifkan aplikasi sistem bawaan". Aplikasi yang tidak diaktifkan tetap tidak terinstal.
- Perbaikan bug lainnya.

## 3.9.8 {#v3-9-8}

- Memperbaiki beberapa crash saat mengedit daftar
- Dalam mode tanpa root, nama organisasi yang tampil di layar kunci kini bisa diubah (diwajibkan oleh sistem, jadi tidak bisa dihilangkan)

## 3.9.6 {#v3-9-6}

- Menggabungkan tombol filter dan menu di layar pengeditan daftar
- Menambahkan mode Root (Tercepat)

## 3.9.5.1 {#v3-9-5-1}

- Status bekukan cepat di panel notifikasi kini mengikuti status Bekukan otomatis
- Memperbaiki sebagian pengguna tanpa root yang tidak bisa terhubung ke server pembelian

## 3.9.5 {#v3-9-5}

- SDK kini mendukung instal dan uninstal aplikasi. Developer dipersilakan untuk mengintegrasikannya: [IceBox-SDK](https://github.com/heruoxin/IceBox-SDK)
- Menambahkan pusat log ke SDK. Setiap tindakan membekukan, menginstal, dan meng-uninstal oleh aplikasi pihak ketiga dicatat
- Jika BlackHouse (小黑屋) sudah disetel sebagai Device Owner, Ice Box bisa langsung dipakai
- Opsi baru sekadar iseng: efek suara mencabut pedang

## 3.9.3 {#v3-9-3}

- Memperbarui target ke 28
- Meningkatkan mesin Root (mode cepat) agar berfungsi dengan baik di Android P
- Memperbaiki aplikasi yang sudah dihapus dari daftar sesekali masih dibekukan

## 3.9.2 {#v3-9-2}

- Memperbarui target API ke 26. Android mewajibkan aplikasi yang berjalan di latar belakang untuk menampilkan notifikasi, jadi saat fitur yang berjalan di latar belakang, seperti "Bekukan otomatis", aktif, Ice Box harus menampilkan notifikasi di panel notifikasi Anda. Anda bisa mencari dan mematikan notifikasi Ice Box ini di setelan sistem tanpa memengaruhi fitur apa pun

- Memperbaiki mode tanpa root yang kadang gagal dibuka di beta sebelumnya
- Memperbaiki aplikasi yang sesekali hilang dari daftar saat dibuka
- Beralih ke database baru
- Memperbarui API Island
- Update dan perbaikan bug lainnya

## 3.9.0 {#v3-9-0}

- Baru: bagikan daftar aplikasi sistem yang aman dibekukan:
ROM di sebagian ponsel datang dengan banyak bloatware dan iklan bawaan, dan banyak pengguna membersihkannya dengan membekukannya satu per satu.
Jika Anda mahir melakukannya, Anda bisa membagikan daftar aplikasi bawaan yang Anda bekukan kepada orang lain, atau menyimpannya untuk saat Anda mem-flash ponsel berikutnya.
(Pembuatan daftar hanya dibuka untuk sebagian pengguna aktif)

- Baru: pengenalan kode QR:
Saat mengaktifkan Ice Box lagi, Anda tidak perlu lagi mengetik nomor pesanan yang panjang. Ambil screenshot halaman tagihan Alipay, bagikan, lalu pilih "Pemindai barcode (Ice Box)" untuk mengenali dan mengaktifkannya.

- Tidak ada lagi batasan jumlah tab

## 3.8.6 {#v3-8-6}

- Pintasan kini sedikit lebih sering muncul di launcher Android P
- Menambahkan opsi di lab yang membuka [modul Xposed 1ceboxTurner](https://repo.xposed.info/module/gs.https.icebox.tuner) (kontribusi dari @web1n)
- Perbaikan bug lainnya

## 3.8.1 {#v3-8-1}

- Menambahkan dukungan untuk "Atur di aplikasi lain" (android.intent.action.SHOW_APP_INFO), yang bisa dipakai bersama aplikasi seperti Greenify dan AppOps.
- Perbaikan kecil lainnya.

## 3.7.6 {#v3-7-6}

- Mendukung Magisk 16.3.
- Memperbaiki tindakan kunci layar yang tidak berfungsi di mode Shizuku Manager dan Brevent.
- Perbaikan kecil lainnya.

## 3.7.0 {#v3-7-0}

- Aplikasi tanpa ikon bisa dimasukkan ke Ice Box lagi.
- Memperbaiki tekan lama yang kadang memilih aplikasi yang salah.
- Memperbarui SDK Brevent.
- Perbaikan bug lainnya.

(Catatan rilis beta tidak dicantumkan)

## 3.6.1 {#v3-6-1}

- Panel tema kini mendukung transparansi.
- Menambahkan pintasan "Cairkan semua".
- Isi Ice Box disembunyikan di layar aplikasi terbaru saat Kunci sidik jari aktif.
- SDK baru. Aplikasi pembeku lain dipersilakan untuk mengintegrasikannya: [IceBox-SDK](https://github.com/heruoxin/IceBox-SDK)

## 3.5.2 Beta {#v3-5-2}

- Menambahkan beberapa opsi ke lab:
- Jika Anda mengganti paket ikon, ketuk "Hapus cache ikon"
- Jika ukuran ikon tidak seragam, hapus cache lalu pertimbangkan untuk mematikan "Seragamkan ukuran ikon"
- Gunakan "Tetap di memori saat tombol Kembali ditekan" untuk menentukan apakah Ice Box tetap disimpan di latar belakang
- Anda bisa beralih di antara beberapa mesin di lab. Sebelum setiap peralihan, pastikan semua aplikasi sudah dicairkan
- Menambahkan lebih banyak filter dan opsi pengurutan ke editor daftar aplikasi

## 3.5.1 {#v3-5-1}

- Memperbaiki kompatibilitas dengan Android P.
- Perbaikan bug dan peningkatan performa.

## 3.4.0 {#v3-4-0}

- Menambahkan Brevent dan Shizuku Manager sebagai mesin. Gunakan mode ini jika Anda tidak punya root dan sulit menyiapkan Island atau mode Device Owner.
