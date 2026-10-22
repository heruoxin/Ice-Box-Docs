---
title: Ice Box SSS
short: SSS
description: Ice Box sık sorulan sorular: root erişimi, Device Owner bildirimi, kaldırma, anlık bildirimler, kısayollar, Otomatik Dondurma, dondurulmuş uygulamaları güncelleme ve çalışma modunu değiştirme.
section: faq
group: trouble
order: 0
faq: true
priority: 0.8
related: guide/devices, guide/device-owner, purchase, guide/uninstall
---

Satın alma ve ödemeyle ilgili sorular için [satın alma kılavuzuna](/purchase/) bakın. Belirli telefon markalarıyla ilgili ipuçları için [telefon markalarına göre notlara](/guide/devices/) göz atın.

## Temel bilgiler {#basics}

### Bir uygulamayı dondurmak ne demek? {#what-is-freeze}

Dondurulmuş bir uygulama sistem tarafından devre dışı bırakılır veya gizlenir. Çalışamaz, arka planda kendi kendine başlayamaz ve ana ekranda ya da uygulama çekmecesinde görünmez, ancak uygulama ve verileri yerinde durur. Ice Box'ta çözdüğünüzde uygulama eski hâline döner.

### Dondurmak ile kaldırmak arasındaki fark nedir? {#freeze-vs-uninstall}

Kaldırmak, uygulamayı ve verilerini siler. Dondurmak ise uygulamanın çalışmasını yalnızca geçici olarak durdurur: verileri etkilenmez ve çözdükten sonra kullanmaya devam edebilirsiniz. Kaldırılamayan önceden yüklü sistem uygulamaları için dondurmak, onları devre dışı bırakmanın da bir yoludur.

### Dondurulmuş bir uygulamayı ana ekrana nasıl geri eklerim? {#add-to-home}

Ice Box'ta uygulama simgesine uzun basın ve "Ana Ekrana Ekle" seçeneğini seçin. Bu kısayola dokunduğunuzda Ice Box önce uygulamayı çözer, sonra açar. [Ana ekran kısayolları](/guide/shortcuts/) sayfasına bakın.

### Dondurulmuş bir uygulamayı nasıl güncellerim? {#update-frozen}

Çinli bir Android uygulama mağazası olan CoolApk'i (酷安) kullanıyorsanız CoolApk ayarlarının laboratuvar bölümünde "Show hidden apps" (显示隐藏应用) seçeneğini açın. Başka bir uygulama mağazası kullanıyorsanız önce Ice Box ayarlarında "Tümünü Çöz" seçeneğine dokunun, güncellemeden sonra uygulamaları yeniden dondurun.

### Çalışma modunu değiştirdikten sonra uygulamalar çözülmüyor mu? {#mode-switch}

Çalışma modları birbiriyle uyumlu değildir. Ice Box'u daha önce kullandığınız çalışma moduna geri alın: bir uygulama, hangi modda dondurulduysa aynı modda çözülmelidir.

## Root {#root}

### Root modu "ROOT izni alınamadı" diyor {#root-failed}

Root yöneticinizi (örneğin Magisk) açın, Ice Box'un mevcut izin kaydını silin ve ardından root erişimini yeniden verin.

### Sistem Eklentisi nereye gitti? {#system-plugin}

Google Play'in gerekliliği nedeniyle Sistem Eklentisi modu 3.22.0 sürümünde kaldırıldı. Sistem Eklentisi hâlâ yüklüyse root erişimi olan bir dosya yöneticisiyle `/system/priv-app/com.catchingnow.iceboxsystemplugin.apk` dosyasını silin, ardından kaldırma işlemini tamamlamak için cihazı yeniden başlatın.

## Device Owner modu {#device-owner}

### Bildirim panelinde "Bu cihaz kuruluşunuz tarafından yönetiliyor" yazıyor. Bu normal mi? {#managed-notice}

Evet. Ice Box'un Device Owner (cihaz sahibi) modu tam olarak bu şekilde çalışır. Şu anda root olmadan uygulamaları kalıcı olarak dondurmanın tek yolu Device Owner kurulumudur. Bu metni sistem gösterir ve kaldırılamaz, ancak Ice Box'un "Laboratuvar" bölümünde "Kuruluş Adı"nı istediğiniz herhangi bir metinle değiştirebilirsiniz.

### Telefon ayarları, Device Owner'ın takvimimi, e-postamı ve diğer kişisel bilgilerimi okuyabileceğini söylüyor. Ice Box bunları okuyor mu? {#dpm-privacy}

Hayır. Ice Box 2015'ten beri sürekli güncelleniyor ve Device Owner özelliklerinden yalnızca uygulamaları dondurmak gibi ihtiyaç duyduklarını kullanıyor. İlgisiz hiçbir özelliği kullanmaz, bu yüzden gönül rahatlığıyla kullanabilirsiniz.

### Device Owner kurulumundan sonra sistemin çift uygulama ve Güvenli Klasör özellikleri çalışmıyor mu? {#dual-apps}

Bu, bazı telefon sistemlerinin (örneğin Samsung ve Xiaomi) kendi kısıtlamasıdır. Bir Device Owner ayarlandığında sistem bazı özellikleri otomatik olarak kapatır ve Ice Box bunu düzeltemez. Çift uygulamaya gerçekten ihtiyacınız varsa şunları düşünebilirsiniz:

- Island'ı Device Owner olarak ayarlayıp onun sunduğu çift uygulama özelliğini kullanmak. Ice Box bu durumda [Island modu](/guide/other-modes/#island) üzerinden çalışabilir.
- Device Owner dışında bir çalışma modu kullanmak. Diğer modların hiçbiri çift uygulamayı etkilemez.

### Bir uygulamayı her çözdüğümde izinleri sıfırlanıyor mu? {#permissions-reset}

Bu bir sistem sorunudur. Rikka'nın AppOps uygulaması ([Google Play](https://play.google.com/store/apps/details?id=rikka.appops), [CoolApk](https://www.coolapk.com/)), bir uygulama çözüldüğünde izin kurallarınızı otomatik olarak yeniden uygulayabilir.

### Huawei ve Xiaomi telefonlarda uygulamalar her açılışta yeniden izin istiyor ve dondururken uygulamanın kaldırıldığı söyleniyor mu? {#reinstall-prompt}

Xiaomi telefonlarda "MIUI optimizasyonu"nu kapatın. Diğer telefonlarda henüz buna karşılık gelen bir ayar bulamadık.

### Yeni çözülen bir uygulama bazen internete bağlanamıyor mu? {#no-network}

Bazı modellerin (örneğin OnePlus ve Huawei) sisteminde bu sorun ara sıra görülür. Sisteminizin en son sürüme güncel olduğundan emin olun. Uygulamayı bir kez daha dondurup çözmek genellikle sorunu giderir.

### Ice Box'u nasıl kaldırırım? {#uninstall}

Ice Box ayarlarında "Kaldır" seçeneğine dokunun. Kaldırmadan önce tüm uygulamaların çözüldüğünü bir kez daha kontrol edin. Xiaomi kullanıcıları dikkat: **Ice Box'u doğrudan ana ekrandan kaldırmayın. Bu, yönetici iznini kaybettirir ve dondurulmuş uygulamalar bir daha asla çözülemez.** [Ice Box'u kaldırma](/guide/uninstall/) sayfasına bakın.

## Bildirimler ve arka plan {#background}

### Dondurulmuş uygulamalar hâlâ anlık bildirim alıyor mu? {#push}

OPPO, vivo ve OnePlus gibi telefonlarda bazı uygulamalar sistemin anlık bildirim hizmetini kullanır. Bu uygulamalar dondurulduktan sonra sistem onların adına bildirim göstermeye devam eder, ancak uygulamanın kendisi arka planda çalışmaz. Bu bildirimleri istemiyorsanız sistem ayarlarından o uygulamanın bildirimlerini kapatın.

### Dondurulmuş uygulamaların yine de bildirim almasını istiyorum {#keep-push}

[MiPushFramework](https://github.com/MiPushFramework/MiPushFramework) yüklemeyi araştırabilirsiniz.

### Ice Box neden bildirim gösteriyor? {#ongoing-notification}

Android, arka planda çalışan her uygulamanın bir bildirim göstermesini zorunlu tutar. "Otomatik Dondurma" gibi arka planda çalışması gereken özellikleri açtığınızda Ice Box bildirim panelinde bir bildirim gösterir. Bu bildirimi hiçbir özelliği etkilemeden sistem ayarlarından kapatabilirsiniz. Otomatik Dondurma kapalıyken Ice Box arka planda hiç çalışmaz.

### Ekran kapandıktan sonra uygulamalar dondurulmuyor mu? {#auto-freeze-fail}

Bir telefon yöneticisinin veya uygulama engelleme aracının Ice Box'un arka planda çalışmasını engelleyip engellemediğini kontrol edin. Sistem ayarlarında Ice Box'a "Arka planda çalışma" ve "Cihazı uyandırma" gibi izinler verin ve pil kullanımını "Kısıtlanmamış" (veya "Optimize etme") olarak ayarlayın. Huawei telefonlarda "Otomatik Dondurma Zamanı" altındaki "Ekran Kapanınca" seçeneği sistem kısıtlamaları nedeniyle çalışmayabilir, bu durumda başka bir seçenek seçin. [Otomatik Dondurma](/guide/auto-freeze/) sayfasına bakın.

## Kısayollar {#shortcuts}

### Xiaomi, Huawei, Smartisan veya diğer telefonlarda ana ekran kısayolu eklenemiyor mu? {#shortcut-missing}

Xiaomi, Huawei ve benzeri telefonlarda sistem ayarlarından Ice Box için ana ekran kısayolu ekleme iznini elle açın. Smartisan telefonlar hiçbir uygulamanın kısayollarını desteklemez.

### Xiaomi veya Meizu telefonda kısayollar eklendi ama çalışmıyor mu? {#shortcut-broken}

Xiaomi telefonlarda sistem ayarlarından Ice Box'un "diğer uygulamaları başlatmasına" ve "arka planda çalışırken açılır pencere göstermesine" izin verin. Meizu telefonlarda henüz buna karşılık gelen bir sistem ayarı bulamadık.

### Kısayollardaki Ice Box rozetini nasıl kaldırırım? {#shortcut-badge}

Android 7.0 ve üzerinde rozeti kısayollara sistem ekler ve bu rozet değiştirilemez veya kaldırılamaz.

## Diğer sorular {#other}

### Xiaomi Müzik, uygulama mağazası veya Huawei Home gibi bazı sistem uygulamaları dondurulamıyor ya da yeniden başlatmadan sonra kendiliğinden çözülüyor mu? {#system-unfreeze}

MIUI ve bazı diğer sistemler önemli sistem uygulamalarını otomatik olarak çözer. Yeni EMUI sürümlerinde Huawei Home artık dondurulamaz. EMUI 9.0'dan önceki sürümlerde dondurulabilir.

### OPPO ve vivo telefonlarda uygulama listesinde yalnızca birkaç uygulama mı görünüyor? {#app-list}

Sistemin izin ayarlarında Ice Box'un uygulama listesini okumasına izin verin.

### Smartisan telefonda bir uygulamayı çözdükten sonra tüm izinleri varsayılan olarak açık mı? {#smartisan-permissions}

Smartisan sistemi bu şekilde tasarlanmıştır. Ice Box ile ilgisi yoktur.

### Ice Box tabletleri destekliyor mu? {#tablet}

Evet. Ice Box'ta tabletler ve yatay mod için ayrı düzenler vardır.

### Ice Box panomu okuyor mu? {#clipboard}

Yalnızca bir kez, Ayarlar'da "Panodan içe aktar" seçeneğine dokunduğunuzda, bir tema veya dondurma listesi bağlantısı bulmak için okur.

### Başka sorunuz mu var? {#contact}

Ice Box uygulamasındaki "Geri Bildirim" seçeneğiyle bize e-posta gönderin. Mümkünse telefon modelinizi, sistem sürümünüzü ve sorunun ekran görüntüsünü ekleyin.
