---
title: Ice Box'u tek tıkla etkinleştirici ile etkinleştirme (Windows)
short: Tek tıkla etkinleştirici
description: Komut yazmadan Ice Box için Device Owner modunu veya ADB modunu açmak üzere Windows bilgisayarda tek tıkla etkinleştiriciyi kullanın. İndirme bağlantısı, adımlar ve SSS bu sayfada.
section: guide
group: activate
order: 2
howto: true
faq: true
related: guide/device-owner, guide/web-activator, guide/adb, guide/autumnbox
---

Tek tıkla etkinleştiriciyi [@web1n](https://github.com/web1n) geliştirdi. Windows bilgisayarlarda çalışır ve Ice Box için Device Owner (cihaz sahibi) modunu açar. Böylece ADB komutlarını elle yazmanız gerekmez.

[[activator-download]]

Windows bilgisayarınız yoksa veya exe etkinleştiriciyle sorun yaşıyorsanız bunun yerine [web etkinleştiriciyi](/guide/web-activator/) kullanın. Aynı işi yapar.

## Önce bunu okuyun {#before}

Çinli telefon markalarının sistemleri Android'i sıklıkla özelleştirir ve bu da Device Owner moduyla bazı uyumluluk sorunlarına yol açar. Sık görülenler:

- Samsung telefonlar sistem tarafından şifreyle kilitlenebilir (şimdiye kadarki bildirimler 200.000'de yaklaşık 4). Lütfen önce [Samsung cihaz notlarını](/guide/samsung-device-owner/) okuyun.
- Her uygulama dondurduğunuzda bir kaldırma uyarısı, çözdüğünüzde bir izin isteği açılır (Huawei, Smartisan).
- Bildirim çubuğunda "Cihaz yöneticisi açık, kapatmak için dokunun" mesajı yanıp söner (OPPO, vivo).
- Sistemin yerleşik çift uygulama özelliği çalışmaz hâle gelir (Huawei, MIUI).
- Yeni çözdüğünüz bir uygulama ara sıra internete bağlanamaz. Uygulamayı kapatıp yeniden açın (OnePlus, Smartisan ve diğerleri).

Bu sorunları kabul edemiyorsanız [ADB modunu](/guide/adb/) kullanın. O da root gerektirmez, ama telefon her yeniden başladığında bilgisayarla tekrar etkinleştirmeniz gerekir.

Device Owner modu ise bilgisayara tekrar tekrar bağlanmayı gerektirmez. Bir kez kurarsınız ve yeniden başlatmalarda ve sistem güncellemelerinde de çalışmaya devam eder.

## Adımlar {#steps}

Ice Box'u Device Owner modunda etkinleştirmeye karar verdiyseniz şu adımları izleyin:

1. Telefonda Ice Box'un yüklü olduğundan emin olun. Ekran kilidini kaldırın. Sony telefonlarda SIM kartı çıkarın. Xiaomi telefonlarda "USB hata ayıklama (Güvenlik ayarları)" seçeneğini açın ve "MIUI optimizasyonu" seçeneğini kapatın.
2. Sistem ayarlarında Xiaomi, Huawei ve Google hesapları gibi tüm hesaplardan çıkış yapın. Etkinleştirmeden sonra yeniden oturum açabilirsiniz.
3. Etkinleştiriciyi indirip arşivden çıkarın. Dosyaları telefonun depolama alanına değil, bilgisayara çıkarın.
4. Telefonda USB hata ayıklamayı açın ve telefonu USB kablosuyla bilgisayara bağlayın.
5. Etkinleştiricide "Activate Ice Box" (激活冰箱) düğmesine tıklayın.

İşlem başarılı olunca Ice Box'u açıp kullanmaya başlayın.

Başka sorunlarla karşılaşırsanız önce tüm sistem hesaplarının kaldırıldığını kontrol edin. Bundan sonra da çalışmıyorsa etkinleştiricinin günlük çıktısını [Device Owner modu SSS](/guide/device-owner/#faq) bölümüyle karşılaştırın.

## SSS {#faq}

### Etkinleştirici yüklenme ekranında takılı kalıyor

Çalıştırmadan önce etkinleştirici arşivindeki tüm dosyaları bilgisayarınıza çıkarın. Dosyaları telefonun depolama alanına çıkarmayın ve arşivin içindeki exe dosyasına doğrudan çift tıklamayın.

### Etkinleştirici cihazı bulamadığını söylüyor

USB hata ayıklamanın açık olduğunu, kablonuzun veri aktarımını desteklediğini, telefonun sürücüsünün bilgisayarda yüklü olduğunu ve hiçbir PC paketi, telefon yöneticisi veya virüsten koruma yazılımının bağlantıyı meşgul etmediğini kontrol edin.
