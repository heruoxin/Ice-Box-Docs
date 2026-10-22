---
title: Ice Box'u web etkinleştirici ile etkinleştirme
short: Web etkinleştirici
description: Kurulum gerekmez: Ice Box için Device Owner veya ADB modunu tarayıcınızdaki web etkinleştirici ile WebUSB üzerinden etkinleştirin. Windows, macOS, Linux. Chrome önerilir.
section: guide
group: activate
order: 3
howto: true
related: guide/device-owner, guide/activator, guide/adb
---

Web etkinleştiriciyi [@web1n](https://github.com/web1n) geliştirdi. Exe etkinleştiriciyle aynı işi yapar ve her bilgisayar işletim sisteminde çalışır. Chrome kullanmanızı öneririz.

[Web etkinleştiriciyi açın](https://adb.http.gs/icebox.html)

Web etkinleştirici iki modu etkinleştirebilir:

- **Device Owner (cihaz sahibi) modu**: Bir kez etkinleştirirsiniz ve çalışmaya devam eder, ama bazı telefonlarda yan etkileri olabilir.
- **ADB modu**: Yan etkisi yoktur, ama telefon her yeniden başladığında veya sistemin USB ayarları değiştiğinde bilgisayara bağlanıp tekrar etkinleştirmeniz gerekir.

## Device Owner modunun olası yan etkileri {#side-effects}

Samsung telefonlardaki ve Çinli markaların telefonlarındaki sistemler Android'i sıklıkla özelleştirir ve bu da Device Owner moduyla bazı uyumluluk sorunlarına yol açar. Sık görülenler:

- Samsung telefonlar sistem tarafından şifreyle kilitlenebilir (şimdiye kadarki bildirimler 200.000'de yaklaşık 4). Lütfen önce [Samsung cihaz notlarını](/guide/samsung-device-owner/) okuyun.
- Her uygulama dondurduğunuzda bir kaldırma uyarısı, çözdüğünüzde bir izin isteği açılır (Huawei, Smartisan).
- Bildirim çubuğunda "Cihaz yöneticisi açık, kapatmak için dokunun" mesajı yanıp söner (OPPO, vivo).
- Sistemin yerleşik çift uygulama özelliği çalışmaz hâle gelir (Huawei, MIUI).
- Yeni çözdüğünüz bir uygulama ara sıra internete bağlanamaz. Uygulamayı kapatıp yeniden açın (OnePlus, Smartisan ve diğerleri).

Bu sorunları kabul edemiyorsanız ADB modunu seçin. O da root gerektirmez, ama telefon her yeniden başladığında bilgisayarla tekrar etkinleştirmeniz gerekir.

## Nasıl etkinleştirilir {#steps}

1. Telefonda Ice Box'un yüklü olduğundan emin olun. Ekran kilidini kaldırın. Sony telefonlarda SIM kartı çıkarın. Xiaomi telefonlarda "USB hata ayıklama (Güvenlik ayarları)" seçeneğini açın ve "MIUI optimizasyonu" seçeneğini kapatın.
2. Telefonu USB kablosuyla bilgisayara bağlayın ve bilgisayardaki güvenlik yazılımlarını, PC paketlerini ve telefon yöneticilerini kapatın.
3. Bilgisayarda [web etkinleştiriciyi](https://adb.http.gs/icebox.html) Chrome ile açın, ardından cihazınızı bağlayıp etkinleştirin.

Device Owner modunu etkinleştirmeden önce telefondaki tüm hesaplardan da çıkış yapmanız gerekir. [Device Owner modu kurulumu](/guide/device-owner/#steps) bölümüne bakın.
