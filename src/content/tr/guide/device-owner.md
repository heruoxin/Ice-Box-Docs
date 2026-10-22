---
title: Device Owner modu kurulumu
short: Device Owner modu
description: Ice Box'un Device Owner modunu root olmadan kurun: hesaplarınızı kısa süreliğine kaldırın ve bilgisayarda tek bir ADB komutu çalıştırın. Yeniden başlatmalardan ve sistem güncellemelerinden etkilenmez.
section: guide
group: activate
order: 1
howto: true
faq: true
related: guide/activator, guide/web-activator, guide/qr-code, guide/samsung-device-owner
---

Telefonunuz rootluysa Ice Box'u açıp hemen kullanmaya başlayın. Ek bir kurulum gerekmez. Telefonunuz rootlanamıyorsa ve bir kez kurup kullanmaya devam edeceğiniz bir çözüm istiyorsanız Device Owner (cihaz sahibi) modunu seçin. Kurulum için bilgisayar gerekir, bu yüzden lütfen önce bu sayfanın tamamını okuyun.

## Cihaz sahibi nedir? {#what}

Cihaz sahibi (Device Owner), Android'in kurumsal yönetim altyapısının bir özelliğidir. Root olmadan herhangi bir uygulamayı dondurup çözebilir. Ice Box bu özelliklerden yalnızca uygulama dondurma gibi ilgili olanları kullanır.

- Bir telefonda aynı anda yalnızca bir cihaz sahibi olabilir.
- Yalnızca bir ADB komutuyla veya QR kodla ayarlanabilir. Telefon ayarlarındaki "Cihaz yönetimi uygulamaları" bölümünden açmak işe yaramaz ve size bu izni vermez.
- Bir kez ayarlandıktan sonra yeniden başlatma veya sistem güncellemesinden sonra tekrar kurmanız gerekmez.

## Önce bunu okuyun {#before}

Çinli telefon markalarının sistemleri sıklıkla kendi özel özelliklerini ekler ve bunlar Device Owner moduyla bazı uyumluluk sorunlarına yol açar. Sık görülenler:

- Samsung telefonlar sistem tarafından şifreyle kilitlenebilir. Önce mutlaka [Samsung cihaz notlarını](/guide/samsung-device-owner/) okuyun.
- Her uygulama dondurduğunuzda bir kaldırma uyarısı, çözdüğünüzde bir izin isteği açılır (Huawei, Smartisan).
- Bildirim çubuğunda "Cihaz yöneticisi açık, kapatmak için dokunun" mesajı yanıp söner (OPPO, vivo).
- Sistemin yerleşik çift uygulama özelliği çalışmaz hâle gelir (Huawei, MIUI).
- Yeni çözdüğünüz bir uygulama ara sıra internete bağlanamaz. Uygulamayı kapatıp yeniden açın (OnePlus, Smartisan ve diğerleri).

Bu sorunları kabul edemiyorsanız [ADB modunu](/guide/adb/) veya [Kablosuz hata ayıklama modunu](/guide/wireless-debugging/) düşünün. Bunlar da root gerektirmez, ama telefon her yeniden başladığında tekrar etkinleştirmeniz gerekir.

## Etkinleştirici mi, komut satırı mı? {#tools}

ADB'ye ve komut satırına aşina değilseniz bunun yerine etkinleştirme araçlarından birini kullanın. Sonuç komut satırıyla elde edilenle tamamen aynıdır:

- [Tek tıkla etkinleştirici](/guide/activator/): Windows bilgisayarlar için.
- [Web etkinleştirici](/guide/web-activator/): Windows, macOS ve Linux'ta çalışır. Chrome önerilir.
- [AutumnBox (秋之盒)](/guide/autumnbox/): Windows bilgisayarlar için.

Bilgisayarınız yok mu? [QR kodla kurulumu](/guide/qr-code/) deneyin. Sonuç tamamen aynıdır, ama önce fabrika ayarlarına sıfırlama gerekir ve Çinli telefon markalarının bazı sistemleri bunu desteklemez.

## Komut satırıyla kurulum {#steps}

1. Telefonunuzun Android 7.0 veya üzerini çalıştırdığından ve Ice Box'un en son sürümünün yüklü olduğundan emin olun. [ADB](https://developer.android.com/tools/adb) komutlarını kullanmayı bildiğinizden ve bu sayfanın tamamını okuduğunuzdan emin olun.
2. Sony telefonlarda SIM kartı çıkarın. Xiaomi telefonlarda Geliştirici seçeneklerinde "USB hata ayıklama (Güvenlik ayarları)" seçeneğini açın ve "MIUI optimizasyonu" seçeneğini kapatın.
3. Telefonunuzda "Ayarlar > Hesaplar" bölümüne gidin ve Google, Xiaomi ve Huawei hesapları gibi sistem hesapları dahil tüm hesapları kaldırın. Kurulumdan sonra yeniden oturum açabilirsiniz.
4. Birden fazla kullanıcı, misafir modu veya çift uygulama ayarladıysanız bunları da kapatın veya kaldırın. Kurulumdan sonra yeniden açabilirsiniz.
5. Aşağıdaki komutu bilgisayarınızda çalıştırın (telefondaki bir terminal emülatörü işe yaramaz).

```
adb shell dpm set-device-owner com.catchingnow.icebox/.receiver.DPMReceiver
```

"Success" gibi bir mesaj görürseniz kurulum başarılı olmuştur. Ice Box'u açıp kullanmaya başlayın. Kaldırdığınız hesapları da geri ekleyebilirsiniz.

ADB, Google'ın resmi indirmesi olarak sunulur: [Windows](https://dl.google.com/android/repository/platform-tools-latest-windows.zip), [macOS](https://dl.google.com/android/repository/platform-tools-latest-darwin.zip), [Linux](https://dl.google.com/android/repository/platform-tools-latest-linux.zip).

## Kurulum işe yaramadı mı? {#faq}

### "'adb' iç veya dış komut, çalıştırılabilir program veya toplu iş dosyası olarak tanınmıyor" uyarısı çıkıyor

İngilizce Windows'ta bu mesaj "'adb' is not recognized as an internal or external command, operable program or batch file" şeklindedir. Bilgisayarda komut satırı kullanmaya aşina olmayabilirsiniz. Bunun yerine [tek tıkla etkinleştirici](/guide/activator/) veya [web etkinleştirici](/guide/web-activator/) ile etkinleştirmenizi öneririz.

### Etkinleştirici yüklenme ekranında takılı kalıyor

Çalıştırmadan önce etkinleştirici arşivindeki tüm dosyaları bilgisayarınıza çıkarın. Dosyaları telefonun depolama alanına çıkarmayın ve arşivin içindeki exe dosyasına doğrudan çift tıklamayın.

### "error: no devices/emulators found" uyarısı çıkıyor

Telefon bilgisayara bağlı değil. USB hata ayıklamanın açık olduğunu, telefonun sürücüsünün bilgisayarda doğru yüklendiğini ve hiçbir PC paketi, telefon yöneticisi veya virüsten koruma yazılımının bağlantıyı engellemediğini kontrol edin.

### "Not allowed to ... already several accounts on the device" uyarısı çıkıyor

3. adımda tüm hesaplar kaldırılmamış. Google hesabınız ile Xiaomi ve Huawei hesapları gibi yerleşik sistem hesapları dahil telefondaki tüm hesaplardan çıkış yapın. Sony telefonlarda SIM kartı çıkarıp yeniden başlatın.

### "Not allowed to ... already several users on the device" uyarısı çıkıyor

4. adımdaki ek kullanıcılar veya çift uygulamalar tamamen kaldırılmamış. Tüm ek kullanıcıları, misafir modunu ve çift uygulamaları kaldırın veya kapatın.

### "Trying to set the device owner, but device owner is already set." uyarısı çıkıyor

Telefondaki başka bir uygulama zaten cihaz sahibi olarak ayarlanmış ve bir telefonda yalnızca bir cihaz sahibi olabilir. O uygulama Island veya BlackHouse (小黑屋) gibi Ice Box ile birlikte çalışabiliyorsa Ice Box'u ilgili çalışma moduna geçirin, hemen kullanabilirsiniz. [Diğer çalışma modları](/guide/other-modes/) sayfasına bakın.

### Xiaomi telefonlarda "Neither user xxx nor current process has android.permission.MANAGE_DEVICE_ADMINS" uyarısı çıkıyor

Sistem ayarlarındaki Geliştirici seçeneklerinde "USB hata ayıklama (Güvenlik ayarları)" seçeneğini elle açın. Yine başarısız olursa "MIUI optimizasyonu" seçeneğini kapatıp tekrar deneyin.

## Başarılı kurulumdan sonraki sorular {#faq-after}

### Bildirim çubuğunda "Bu cihaz kuruluşunuz tarafından yönetiliyor" gibi bir uyarı görmek normal mi?

Evet. Device Owner modu bu şekilde çalışır. Bu metni sistem gösterir ve kaldırılamaz (tam ifade telefona göre değişebilir), ama Ice Box'un "Laboratuvar" bölümündeki "Kuruluş Adı" ayarını istediğiniz herhangi bir metinle değiştirebilirsiniz.

### Bazı telefonların ayarlarında cihaz sahibinin takvim ve e-posta gibi kişisel bilgileri okuyabileceği yazıyor. Ice Box bunları okuyor mu?

Hayır. Ice Box yalnızca uygulama dondurmayla ilgili cihaz sahibi izinlerini kullanır. İlgisiz izinleri kullanmaz ve takviminizi, e-postanızı veya benzeri bilgileri asla okumaz.

### Artık istemediğimde Ice Box'un iznini nasıl kaldırırım?

Önce tüm uygulamaları çözün, ardından Ice Box ayarlarında "Kaldır" seçeneğine dokunun. Onayladığınızda Ice Box cihaz sahibi iznini bırakır ve kendini kaldırır. [Ice Box'u kaldırma](/guide/uninstall/) sayfasına bakın.

### Daha önce Root veya ADB modunda dondurduğum uygulamaları neden çözemiyorum?

Çalışma modları birbiriyle uyumlu değildir. Ice Box'un "Laboratuvar" bölümünden önceki çalışma modunuza geri dönün. Uygulamalar hangi modda dondurulduysa aynı modda çözülmelidir.
