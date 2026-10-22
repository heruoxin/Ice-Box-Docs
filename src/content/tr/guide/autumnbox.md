---
title: Ice Box'u AutumnBox ile etkinleştirme
short: AutumnBox
description: AutumnBox, ADB işlemlerini kolaylaştıran ve Ice Box için Device Owner modunu tek tıkla etkinleştirebilen bir Windows araç kutusudur. Adımlar ve dikkat edilmesi gerekenler.
section: guide
group: activate
order: 4
howto: true
related: guide/device-owner, guide/activator, guide/web-activator
---

AutumnBox (秋之盒), ADB işlemlerini kolaylaştıran tek tıkla çalışan bir araç kutusudur. Onu büyük emekle geliştiren [zsh2401](https://zsh2401.top/) adlı geliştiriciye çok teşekkür ederiz.

AutumnBox yalnızca Windows'ta çalışır. Bilgisayarınızda macOS veya Linux varsa [web etkinleştiriciyi](/guide/web-activator/) kullanın ya da [komut satırı kurulum adımlarını](/guide/device-owner/#steps) izleyin.

> [!NOTE]
> AutumnBox web sitesine şu anda erişilemiyor ve proje artık güncellenmiyor. Kaynak kodu ve eski sürümleri [GitHub](https://github.com/zsh2401/AutumnBox) üzerinde. Bunun yerine [tek tıkla etkinleştiriciyi](/guide/activator/) veya [web etkinleştiriciyi](/guide/web-activator/) öneririz, ikisi de aynı işi yapar.

## Önce bunu okuyun {#before}

Çinli telefon markalarının sistemleri sıklıkla kendi özel özelliklerini ekler ve bunlar Device Owner (cihaz sahibi) moduyla bazı uyumluluk sorunlarına yol açar. Sık görülenler:

- Samsung telefonlar sistem tarafından şifreyle kilitlenebilir (şimdiye kadarki bildirimler 200.000'de yaklaşık 4). Lütfen önce [Samsung cihaz notlarını](/guide/samsung-device-owner/) okuyun.
- Her uygulama dondurduğunuzda bir kaldırma uyarısı, çözdüğünüzde bir izin isteği açılır (Huawei, Smartisan).
- Bildirim çubuğunda "Cihaz yöneticisi açık, kapatmak için dokunun" mesajı yanıp söner (OPPO, vivo).
- Sistemin yerleşik çift uygulama özelliği çalışmaz hâle gelir (Huawei, MIUI).
- Yeni çözdüğünüz bir uygulama ara sıra internete bağlanamaz. Uygulamayı kapatıp yeniden açın (OnePlus ve diğerleri).
- Sony telefonlarda Ice Box'u Android 9'a yükseltmeden önce kurmanızı öneririz. Android 9, kaldırılması zor gizli bir hesap ekler. Zaten yükselttiyseniz [QR kodla kurulumu](/guide/qr-code/) kullanın. Daha önce kurulmuş telefonlar etkilenmez.

Bu sorunları kabul edemiyorsanız [Shizuku](/guide/shizuku/) veya [ADB modunu](/guide/adb/) kullanın. Bunlar da root gerektirmez, ama telefon her yeniden başladığında tekrar etkinleştirmeniz gerekir.

Device Owner modu ise bilgisayara tekrar tekrar bağlanmayı gerektirmez. Bir kez kurarsınız ve yeniden başlatmalarda ve sistem güncellemelerinde de çalışmaya devam eder.

## Adımlar {#steps}

Ice Box'u Device Owner modunda etkinleştirmeye karar verdiyseniz şu adımları izleyin:

1. Telefonda Ice Box'un yüklü olduğundan emin olun. Ekran kilidini kaldırın. Sony telefonlarda SIM kartı çıkarın. Xiaomi telefonlarda "USB hata ayıklama (Güvenlik ayarları)" seçeneğini açın ve "MIUI optimizasyonu" seçeneğini kapatın.
2. Sistem ayarlarında Xiaomi, Huawei ve Google hesapları gibi tüm hesapları kaldırın. Etkinleştirmeden sonra yeniden oturum açabilirsiniz.
3. AutumnBox'u indirip açın.
4. Telefonda USB hata ayıklamayı açın ve telefonu bilgisayara bağlayın. Bağlanmıyorsa genellikle sürücü yüklü değildir ya da başka bir PC paketi çakışıyordur. Sürücüyü kontrol edin ve diğer telefon yönetim yazılımlarını kapatın.
5. AutumnBox'ta "Activate Ice Box" (激活冰箱) işlevine tıklayın.

Normalde artık Ice Box'u açıp kullanmaya başlayabilirsiniz. Sorunla karşılaşırsanız önce tüm sistem hesaplarının kaldırıldığını kontrol edin. Bundan sonra da çalışmıyorsa çıktı günlüğünü [Device Owner modu SSS](/guide/device-owner/#faq) bölümüyle karşılaştırın.
