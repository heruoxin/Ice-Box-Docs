---
title: SDK Ice Box untuk developer
short: Developer
description: SDK Ice Box memungkinkan aplikasi lain membekukan dan mencairkan aplikasi, serta menginstal atau meng-uninstal APK secara diam-diam, di ponsel yang memakai Ice Box. Penyiapan, izin, dan API utama.
section: about
priority: 0.5
related: use-cases/automation, features, about
---

Di perangkat yang sudah menginstal dan mengaktifkan Ice Box, SDK Ice Box memungkinkan aplikasi pihak ketiga membekukan dan mencairkan aplikasi. Dalam mode Device Owner, SDK ini juga bisa menginstal dan meng-uninstal APK secara diam-diam.

Kode sumber dan dokumentasi lengkap: [github.com/heruoxin/IceBox-SDK](https://github.com/heruoxin/IceBox-SDK)

## Persyaratan {#requirements}

- Membekukan dan mencairkan: Ice Box 3.6.0 ke atas.
- Instal dan uninstal diam-diam: Ice Box 3.9.5 ke atas, dengan Ice Box berjalan dalam mode Device Owner.

## Izin {#permission}

API tindakan, seperti membekukan, mencairkan, dan menginstal APK, mengharuskan Anda meminta izin SDK Ice Box dari pengguna terlebih dahulu. API kueri tidak memerlukan izin apa pun.

```java
if (ContextCompat.checkSelfPermission(this, IceBox.PERMISSION) != PackageManager.PERMISSION_GRANTED) {
    ActivityCompat.requestPermissions(this, new String[]{IceBox.PERMISSION}, 0x233);
}
```

## API utama {#api}

### Kueri mode kerja

Ice Box bisa membekukan aplikasi dengan salah satu dari dua cara, `pm disable-user` atau `pm hide`. Tidak perlu izin.

```java
IceBox.WorkMode workMode = IceBox.queryWorkMode(context);
```

### Kueri status beku aplikasi

Mengembalikan normal, dibekukan dengan `pm disable`, dibekukan dengan `pm hide`, atau keduanya. Tidak perlu izin.

```java
IceBox.getAppEnabledSetting(context, packageName);
```

### Membekukan atau mencairkan aplikasi

Memerlukan izin. Mendukung operasi sekaligus banyak.

```java
IceBox.setAppEnabledSettings(context, enable, packageNames);
```

### Instal dan uninstal diam-diam

Tersedia saat Ice Box berjalan dalam mode Device Owner. Anda bisa memeriksa dulu apakah fitur ini sedang didukung:

```java
IceBox.querySupportSilentInstall(context);
```

Untuk parameter lengkap dan nilai kembalian setiap API, yang menjadi acuan adalah [dokumentasi di GitHub](https://github.com/heruoxin/IceBox-SDK).

## Transparansi dan otorisasi {#transparency}

Setiap tindakan membekukan, menginstal, dan meng-uninstal yang dilakukan aplikasi pihak ketiga melalui Ice Box dicatat di pusat log Ice Box, dan pengguna bisa memeriksanya kapan saja.

## Integrasi lain {#integrations}

- **Atur di aplikasi lain**: Ice Box mendukung `android.intent.action.SHOW_APP_INFO` dari Android, sehingga bisa bekerja sama dengan aplikasi seperti Greenify dan AppOps.
- **Island**: Ice Box bisa bekerja melalui izin Island, dan juga bisa diinstal serta dipakai di dalam profil kerja Island.
