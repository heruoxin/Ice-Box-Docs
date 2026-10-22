---
title: Kablosuz hata ayıklama modu: Ice Box'u root ve bilgisayar olmadan etkinleştirin
short: Kablosuz hata ayıklama modu
description: Android 11 ve üzerinde Ice Box'u sistemin Kablosuz hata ayıklama özelliğiyle etkinleştirin, root ve bilgisayar gerekmez. Tüm adımlar, eşleme ipuçları ve SSS.
section: guide
group: activate
order: 5
howto: true
faq: true
related: guide/adb, guide/shizuku, guide/devices, guide/device-owner
---

Kablosuz hata ayıklama modu ne root ne de bilgisayar gerektirir. Ice Box, uygulamaları dondurmak için gereken izni almak üzere sistemin "Kablosuz hata ayıklama" özelliğini kullanır ve işlemin tamamı telefonda yapılır.

Başlamadan önce şunlara dikkat edin:

- Android 11 veya üzeri gerekir.
- Eşleme sırasında bir Wi-Fi bağlantısı gerekir. Herhangi bir Wi-Fi ağı olabilir.
- Telefon yeniden başladıktan sonra "Kablosuz hata ayıklama" anahtarını tekrar açmanız gerekir. Aksi hâlde Ice Box uygulamaları dondurup çözemez.

Telefonunuzda Android 11'den eski bir sürüm varsa veya bilgisayarla etkinleştirmeyi tercih ediyorsanız [ADB modu](/guide/adb/) sayfasına bakın.

## Başlamadan önce {#before}

Ice Box kurulum sayfasında aşağıdakilerin her birini kontrol eder. Henüz karşılanmamış bir öğeye dokunarak doğrudan ilgili ayara gidebilirsiniz:

1. **VPN'i şimdilik kapatın**. Eşlemeden sonra tekrar açabilirsiniz.
2. **Ice Box'un bildirimlerine izin verin**. Eşleme kodunu Ice Box'un bildirimine girersiniz.
3. **USB hata ayıklamayı açın**. Geliştirici seçeneklerini henüz açmadıysanız sonraki bölüme bakın.
4. **Wi-Fi ağına bağlanın**. Herhangi bir Wi-Fi ağı olabilir.
5. **Ice Box'un arka planda çalışmasına izin verin**. Bazı telefonlarda sistem ayarlarından Ice Box'un arka plan kullanımını "Kısıtlanmamış" olarak ayarlamanız gerekir.

## USB hata ayıklama nasıl açılır {#usb-debugging}

1. "Ayarlar"ı açın, "Telefon hakkında" bölümünü bulun ve "Geliştirici modu açıldı" gibi bir mesaj görene kadar "Derleme numarası"na art arda 7 kez dokunun (Samsung'da "Yazılım bilgileri" altında "Yapım numarası").
2. "Ayarlar"a geri dönün, "Sistem" veya "Ek ayarlar" altında "Geliştirici seçenekleri"ni bulun ve "USB hata ayıklama" anahtarını açın.

Menü konumları markaya ve sistem sürümüne göre değişir. Ice Box, yaygın markalar için adım adım izleyebileceğiniz görseller içerir.

## Eşleme kodunu üç adımda alın {#pairing}

1. Geliştirici seçeneklerinde "Kablosuz hata ayıklama"yı bulun, açın ve ayarlar sayfasını açmak için üzerine dokunun.
2. "Cihazı eşleme koduyla eşle" seçeneğini seçin.
3. Eşleme kodu penceresini açık tutun, bildirim panelini aşağı çekin ve 6 haneli eşleme kodunu Ice Box'un bildirimine girin.

Eşleme başarılı olunca Ice Box "Kablosuz hata ayıklama hazır" mesajını gösterir ve kullanıma hazırdır. Eşlemede sorun yaşarsanız Ice Box'ta açabileceğiniz bir video kılavuz da vardır.

> [!TIP]
> Geliştirici seçeneklerinde "Kablosuz hata ayıklama"yı göremiyorsanız Geliştirici seçenekleri büyük olasılıkla henüz açık değildir. Önce önceki bölümdeki adımları tamamlayın.

## Telefonu yeniden başlattıktan sonra {#after-reboot}

Telefon yeniden başladığında sistem Ice Box'un iznini geri alır. Geliştirici seçeneklerine tekrar girip "Kablosuz hata ayıklama" anahtarını açın, Ice Box yeniden çalışır. Ice Box bunu açmanızı bir bildirimle hatırlatır.

## SSS {#faq}

### Eşleme sırasında "Lütfen VPN'i ve pil optimizasyonunu kapatın" uyarısı çıkıyor

Ice Box sistemin kablosuz hata ayıklama hizmetine bağlanamıyor. VPN'inizi ve proxy uygulamalarını kapatın, sistem ayarlarından Ice Box için pil optimizasyonunu kapatın ve tekrar deneyin.

### "Eşleme kodu yanlış" veya "Kodun süresi doldu" uyarısı çıkıyor

Eşleme kodu yalnızca penceresi açıkken geçerlidir. Yeni bir eşleme kodu alın ve pencere açıkken hızlıca girin.

### Bildirimde kodu girme kutusunu göremiyorum

Ice Box'un bildirimlerine izin verildiğinden emin olun. Bazı sistemler bildirimi daraltır. Kodu girme kutusunu görmek için bildirimin sağ tarafındaki genişletme düğmesine dokunun.

### Xiaomi, Huawei, OPPO veya başka telefonlarda ADB izninin yetersiz olduğu söyleniyor

Geliştirici seçeneklerinde markanıza uygun seçeneği açın. Xiaomi telefonlarda "USB hata ayıklama (Güvenlik ayarları)" seçeneğini açın. Huawei telefonlarda "Yalnızca şarj modunda ADB hata ayıklamaya izin ver" seçeneğini açın. OPPO ve OnePlus telefonlarda "İzin izlemeyi devre dışı bırak" seçeneğini açın. Diğer markalarda gerektiğinde benzer seçenekleri açın. Daha fazlası için [telefon markası notlarına](/guide/devices/) bakın.
