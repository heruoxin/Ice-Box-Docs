---
title: Geliştiriciler için Ice Box SDK
short: Geliştiriciler
description: Ice Box SDK, Ice Box yüklü telefonlarda diğer uygulamaların uygulamaları dondurup çözmesini ve APK'ları sessizce yükleyip kaldırmasını sağlar. Kurulum, izinler ve temel API'ler.
section: about
priority: 0.5
related: use-cases/automation, features, about
---

Ice Box'un yüklü ve etkin olduğu cihazlarda Ice Box SDK, üçüncü taraf uygulamaların uygulamaları dondurup çözmesini sağlar. Device Owner (cihaz sahibi) modunda APK'ları sessizce yükleyip kaldırabilir.

Kaynak kod ve tam belgeler: [github.com/heruoxin/IceBox-SDK](https://github.com/heruoxin/IceBox-SDK)

## Gereksinimler {#requirements}

- Dondurma ve çözme: Ice Box 3.6.0 veya üzeri.
- Sessiz yükleme ve kaldırma: Ice Box 3.9.5 veya üzeri ve Device Owner modunda çalışan Ice Box.

## İzin {#permission}

Dondurma, çözme ve APK yükleme gibi işlem API'leri için önce kullanıcıdan Ice Box SDK iznini istemeniz gerekir. Sorgu API'leri izin gerektirmez.

```java
if (ContextCompat.checkSelfPermission(this, IceBox.PERMISSION) != PackageManager.PERMISSION_GRANTED) {
    ActivityCompat.requestPermissions(this, new String[]{IceBox.PERMISSION}, 0x233);
}
```

## Temel API'ler {#api}

### Çalışma modunu sorgulama

Ice Box uygulamaları iki yoldan biriyle dondurabilir: `pm disable-user` veya `pm hide`. İzin gerekmez.

```java
IceBox.WorkMode workMode = IceBox.queryWorkMode(context);
```

### Bir uygulamanın dondurulma durumunu sorgulama

Normal, `pm disable` ile dondurulmuş, `pm hide` ile dondurulmuş veya her ikisi değerlerinden birini döndürür. İzin gerekmez.

```java
IceBox.getAppEnabledSetting(context, packageName);
```

### Uygulamaları dondurma veya çözme

İzin gerektirir. Toplu işlemleri destekler.

```java
IceBox.setAppEnabledSettings(context, enable, packageNames);
```

### Sessiz yükleme ve kaldırma

Ice Box Device Owner modunda çalışırken kullanılabilir. Şu anda desteklenip desteklenmediğini önce kontrol edebilirsiniz:

```java
IceBox.querySupportSilentInstall(context);
```

Her API'nin tüm parametreleri ve dönüş değerleri için [GitHub'daki belgeler](https://github.com/heruoxin/IceBox-SDK) esas alınır.

## Şeffaflık ve yetkilendirme {#transparency}

Üçüncü taraf bir uygulamanın Ice Box üzerinden yaptığı her dondurma, yükleme ve kaldırma işlemi Ice Box'un günlük merkezine kaydedilir. Kullanıcı bunları istediği zaman kontrol edebilir.

## Diğer entegrasyonlar {#integrations}

- **Başka Uygulamada Yapılandır**: Ice Box, Android'in `android.intent.action.SHOW_APP_INFO` özelliğini destekler. Böylece Greenify ve AppOps gibi uygulamalarla birlikte çalışır.
- **Island**: Ice Box, Island'ın izinleriyle çalışabilir. Ayrıca Island'ın iş profilinin içine yüklenip orada da kullanılabilir.
