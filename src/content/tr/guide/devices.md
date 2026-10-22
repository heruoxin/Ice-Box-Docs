---
title: Telefon markalarına göre notlar
short: Telefon markası notları
description: Xiaomi, Samsung, Huawei, OPPO, OnePlus, vivo, Sony, Meizu ve diğer markalar için Ice Box notları: Geliştirici seçenekleri, Device Owner sorunları, kısayollar ve anlık bildirimler.
section: guide
group: trouble
order: 1
related: guide/samsung-device-owner, guide/wireless-debugging, guide/shortcuts, faq
---

Her telefon markası Android'i farklı ölçüde özelleştirir, bu yüzden Ice Box markadan markaya biraz farklı davranır. Aşağıda bilinen sorunları markaya göre sıraladık. Kuruluma başlamadan önce telefonunuzun markasını bulup göz atın.

## Xiaomi / Redmi / POCO {#xiaomi}

- ADB, Kablosuz hata ayıklama veya Device Owner (cihaz sahibi) modunu kullanmadan önce Geliştirici seçeneklerinde "USB hata ayıklama (Güvenlik ayarları)" seçeneğini açın.
- Cihaz sahibi kurulumundan önce "MIUI optimizasyonu" seçeneğini kapatın. Kapalıyken uygulamalar her dondurulduğunda izinlerini yeniden istemez ve uygulamanın kaldırıldığını söyleyen uyarılar çıkmaz.
- Cihaz sahibi kurulumundan sonra sistemin yerleşik "Çift uygulamalar" özelliği çalışmayabilir.
- Ana ekran kısayolları eklenemiyorsa sistem ayarlarından Ice Box için ana ekran kısayolu iznini açın. Kısayollar eklendiği hâlde çalışmıyorsa Ice Box'a "diğer uygulamaları başlatma" ve "arka planda çalışırken açılır pencere gösterme" izinlerini verin.
- MIUI 11'den itibaren Ice Box ile Brevent, Island ve Shizuku gibi uygulamalar arasında izin aktarımı başarısız olabilir. Önce "MIUI optimizasyonu" seçeneğini kapatın. Ardından ana ekranda Ice Box simgesine uzun basın, "Uygulama bilgileri" sayfasını açın ve izin ayarlarında "Diğer izinler" seçeneğini elle açın.
- Bazı önemli sistem uygulamaları (Mi Müzik ve uygulama mağazası gibi) dondurulamayabilir veya yeniden başlatmadan sonra sistem tarafından otomatik olarak çözülebilir. Ice Box, 3.30.7 sürümünden beri daha fazla MIUI / HyperOS sistem bileşenini dondurabilir.
- Device Owner modunu kullanıyorsanız **Ice Box'u doğrudan ana ekrandan kaldırmayın**. Bu, cihaz sahibi izninin kaybolmasına yol açar ve dondurulmuş uygulamalar çözülemez. Bunun yerine [Ice Box'u kaldırma](/guide/uninstall/) sayfasındaki adımları izleyin.

## Samsung {#samsung}

- Cihaz sahibi kurulumundan sonra Güvenli Klasör ve Dual Messenger çalışmayabilir, hatta kilit ekranı şifresi sıfırlanabilir. Önce mutlaka [Samsung cihaz notlarını](/guide/samsung-device-owner/) okuyun.
- Samsung kullanıcılarına Root, Kablosuz hata ayıklama, Shizuku veya ADB modunu öneririz.

## Huawei / Honor {#huawei}

- ADB veya Kablosuz hata ayıklama modunu kullanırken Geliştirici seçeneklerinde "Yalnızca şarj modunda ADB hata ayıklamaya izin ver" seçeneğini açın.
- Cihaz sahibi kurulumundan sonra her uygulama dondurduğunuzda bir kaldırma uyarısı, çözdüğünüzde bir izin isteği açılabilir. Sistemin yerleşik "Uygulama İkizi" özelliği çalışmayabilir.
- Ana ekran kısayolları eklenemiyorsa sistem ayarlarından Ice Box'a kısayol ekleme iznini elle verin. Üçüncü taraf bir ana ekran uygulamasıyla Ice Box'un içinden kısayol ekleyemeyebilirsiniz. Bunun yerine ana ekranda boş bir alana uzun basarak eklemeyi deneyin.
- Sistem kısıtlamaları nedeniyle "Ekran Kapanınca" otomatik dondurma çalışmayabilir. Bunun yerine "Ana Ekrana Dönünce" veya "Ana Ekran Tuşuna Çift Basınca" ile otomatik dondurmayı kullanın.
- Yeni EMUI sürümlerinde Huawei ana ekran uygulaması artık dondurulamaz. EMUI 9.0 öncesi sürümlerde hâlâ dondurulabilir.

## OPPO / OnePlus / realme {#oppo}

- ADB veya Kablosuz hata ayıklama modunu kullanırken Geliştirici seçeneklerinde "İzin izlemeyi devre dışı bırak" seçeneğini açın.
- Cihaz sahibi kurulumundan sonra bildirim çubuğunda "Cihaz yöneticisi açık, kapatmak için dokunun" mesajı yanıp sönebilir.
- Uygulama listesinde yalnızca birkaç uygulama görünüyorsa sistemin izin ayarlarından Ice Box'un uygulama listesini okumasına izin verin.
- Bazı uygulamalar sistemin anlık bildirim hizmetini kullanır. Bu yüzden dondurulduktan sonra da sistem bu uygulamaların bildirimlerini gösterebilir, ama uygulamaların kendisi arka planda çalışmaz. Bu bildirimleri istemiyorsanız sistem ayarlarından o uygulamanın bildirimlerini kapatın.
- Yeni çözdüğünüz bir uygulama ara sıra internete bağlanamaz. Uygulamayı kapatıp yeniden açın.

## vivo / iQOO {#vivo}

- Cihaz sahibi kurulumundan sonra bildirim çubuğunda "Cihaz yöneticisi açık, kapatmak için dokunun" mesajı yanıp sönebilir.
- Uygulama listesinde yalnızca birkaç uygulama görünüyorsa sistemin izin ayarlarından Ice Box'un uygulama listesini okumasına izin verin.
- OPPO'da olduğu gibi bazı uygulamalar dondurulduktan sonra sistemin anlık bildirimleri üzerinden bildirim göstermeye devam edebilir.

## Sony {#sony}

- Cihaz sahibi kurulumundan önce SIM kartı çıkarın.
- Ice Box'u Android 9'a yükseltmeden önce kurmanızı öneririz. Android 9, kaldırılması zor gizli bir hesap ekler. Zaten yükselttiyseniz [QR kodla kurulumu](/guide/qr-code/) kullanın. Daha önce kurulmuş telefonlar etkilenmez.

## Meizu ve Smartisan {#meizu}

- Meizu: Ana ekran kısayolları eklendikten sonra bile çalışmayabilir. Bunun için henüz bir sistem ayarı bulamadık.
- Smartisan: Hiçbir uygulama için kısayol desteklenmez. Cihaz sahibi kurulumundan sonra bir uygulamayı dondurduğunuzda kaldırma uyarısı açılabilir ve çözülen uygulamaların tüm izinleri varsayılan olarak verilmiş olur. Bu, Smartisan sisteminin tasarımından kaynaklanır ve Ice Box ile ilgisi yoktur.

## Pixel ve stok Android {#pixel}

- Stok ve stoka yakın sistemler tüm çalışma modlarıyla en iyi uyumluluğa sahiptir.
- Bilgisayarınız yoksa fabrika ayarlarına sıfırlama sırasında Ice Box'u cihaz sahibi yapmak için [QR kodla kurulumu](/guide/qr-code/) kullanabilir ya da Android 11 ve üzerinde [Kablosuz hata ayıklama modunu](/guide/wireless-debugging/) kullanabilirsiniz.
