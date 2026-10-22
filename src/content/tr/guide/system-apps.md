---
title: Önceden yüklü sistem uygulamalarını dondurma
short: Önceden yüklü uygulamaları dondurma
description: Ice Box, rootsuz modlarda da bazı önceden yüklü sistem uygulamalarını dondurabilir. Önce nelere dikkat etmeli, dondurulamayan uygulamalar, paylaşılan listeler ve dondurulmuş uygulamaları güncelleme.
section: guide
group: tips
order: 3
faq: true
related: use-cases/disable-preinstalled-apps, guide/devices, guide/qr-code
---

Birçok telefon, hiç kullanmayacağınız çok sayıda önceden yüklü yazılım ve reklam uygulamasıyla gelir. Ice Box bu önceden yüklü uygulamaları dondurabilir: arka planda çalışmazlar ve ana ekranda görünmezler. Birine ihtiyacınız olduğunda Ice Box'ta çözerek geri getirebilirsiniz.

## Dondurmadan önce {#before}

- Yalnızca ihtiyacınız olmayacağından emin olduğunuz uygulamaları dondurun. Emin değilseniz dondurmayın. Önemli sistem bileşenlerini dondurmak telefonun hatalı çalışmasına yol açabilir.
- Bazı sistemler önemli uygulamaları özel olarak ele alır: MIUI ve benzeri sistemlerde bazı önemli uygulamalar dondurulamayabilir veya yeniden başlatmadan sonra sistem tarafından zorla çözülebilir.
- Yeni EMUI sürümlerinde Huawei ana ekran uygulaması artık dondurulamaz.
- Cihaz yöneticisi izniyle çalışan uygulamalar dondurulamaz. Önce "Ayarlar > Güvenlik > Cihaz yönetimi uygulamaları" bölümünden uygulamanın iznini kaldırın, sonra dondurun.

## Paylaşılan bir dondurma listesini içe aktarma {#lists}

Ice Box, güvenle dondurulabilecek sistem uygulamalarının listelerini paylaşıp içe aktarabilir. Birinin paylaştığı bir liste bağlantısını açtığınızda Ice Box, listedeki uygulamalardan telefonunuzda dondurulabilecek olanları gösterir ve her birini onayladıktan sonra dondurur.

Paylaşılan metni kopyalayıp Ice Box ayarlarında "Panodan içe aktar" seçeneğine de dokunabilirsiniz.


## QR kodla kurulumdan sonra önceden yüklü uygulamalar {#qr}

[QR kodla kurulum](/guide/qr-code/) yapılan telefonlarda sistem önceden yüklü uygulamaları varsayılan olarak yüklemez. Bunlardan birine ihtiyacınız olduğunda Ice Box ayarlarında "Laboratuvar" bölümüne gidin, "Önceden Yüklü Sistem Uygulamalarını Etkinleştir" seçeneğine dokunun ve yüklenecek uygulamaları seçin.

## SSS {#faq}

### Dondurulmuş bir uygulamayı nasıl güncellerim?

Çinli bir Android uygulama mağazası olan CoolApk'ı (酷安) kullanıyorsanız CoolApk ayarlarının laboratuvar bölümünde "Gizli uygulamaları göster" seçeneğini açın. Diğer uygulama mağazalarında önce uygulamayı Ice Box'ta çözün, güncellemeden sonra yeniden dondurun.

### Bazı sistem uygulamaları dondurulamıyor veya yeniden başlatmadan sonra sessizce çözülüyor

Bu, sistemin önemli uygulamaları korumasıdır ve Ice Box bunu aşamaz. MIUI ve bazı başka sistemler böyle davranır.
