---
title: Samsung telefonlarda cihaz sahibi kurulumunun riskleri
short: Samsung cihaz notları
description: Samsung telefonlarda cihaz sahibi (Device Owner) kurulumu Güvenli Klasör ve Dual Messenger'ı bozabilir, hatta kilit ekranı şifresini sıfırlayabilir. Samsung kullanıcıları karar vermeden önce bunu okumalı.
section: guide
group: trouble
order: 2
related: guide/root, guide/shizuku, guide/wireless-debugging, guide/devices
---

Ice Box, Android'in yerleşik cihaz sahibi (Device Owner) özellikleri üzerine kuruludur. Samsung, Android telefon üreticileri arasında özel bir durumdur: KNOX adlı kendi güvenlik altyapısını kullanır.

Samsung bir telefonda Android'in yerleşik cihaz sahibi özelliğine dayanan rootsuz bir çözümü kurup etkinleştirdikten sonra şu sorunlarla karşılaşabilirsiniz:

- Güvenli Klasör gibi bazı KNOX özellikleri çalışmayabilir.
- Yerleşik Dual Messenger özelliği çalışmaz hâle gelir.
- Sistem kilit ekranı şifresini sıfırlar. Bu da fabrika ayarlarına sıfırlamayı zorunlu kılar ve verilerinizi kaybedersiniz.

Bu sorunların hiçbiri her seferinde yaşanmaz. En ciddisi olan kilit ekranı şifresinin sıfırlanmasını ele alalım: 2018'de Ice Box'u kullanan yaklaşık 200.000 Samsung kullanıcısından toplam 6 bildirim aldık. Gerçekte etkilenen kullanıcı sayısı daha yüksek olabilir. Samsung One UI'ı yayımladığından beri bu sorunla karşılaşan kullanıcı sayısı artmış görünüyor. Bu yüzden One UI'da Device Owner modunu önermiyoruz.

Şimdilik bu sorunların kesin nedenini bilmiyoruz ve iyi bir çözüm de yok.

> [!CAUTION]
> Samsung kullanıcıları, lütfen Device Owner modunu kullanmadan önce çok ama çok dikkatli düşünün.

## Samsung kullanıcıları için önerilen modlar {#recommended}

- Rootluysa: [Root modunu](/guide/root/) kullanın.
- Rootsuz, Android 11 veya üzeri: [Kablosuz hata ayıklama modunu](/guide/wireless-debugging/) ya da [Shizuku modunu](/guide/shizuku/) kullanın.
- Rootsuz, bilgisayarınız varsa: [ADB modunu](/guide/adb/) kullanın.

Bu modların hiçbiri cihaz sahibi izni gerektirmez. Root modu dışında hepsinin, telefon her yeniden başladığında tekrar etkinleştirilmesi gerekir.
