---
title: Ice Box'u Shizuku ile etkinleştirme
short: Shizuku modu
description: Shizuku'yu yükleyip Kablosuz hata ayıklama ile başlatın, Ice Box root ve bilgisayar olmadan çalışsın. Rootlu telefonlar Sui de kullanabilir. Adımlar ve notlar bu sayfada.
section: guide
group: activate
order: 7
howto: true
related: guide/wireless-debugging, guide/adb, guide/root
---

[Shizuku](https://shizuku.rikka.app/), diğer uygulamaların sistem izinleri almasına yardımcı olan bir araçtır. Shizuku yüklüyse sistemin "Kablosuz hata ayıklama" özelliğini kullanarak Ice Box'u root ve bilgisayar olmadan etkinleştirebilirsiniz.

Başlamadan önce şunlara dikkat edin:

- Shizuku'yu Kablosuz hata ayıklama ile başlatmak için Android 11 veya üzeri gerekir.
- Telefon yeniden başladıktan sonra Shizuku'yu tekrar başlatmanız gerekir. Aksi hâlde Ice Box uygulamaları dondurup çözemez.
- Shizuku hizmeti kapalıyken dondurulmuş uygulamalar da çözülemez. Shizuku hizmeti yeniden çalıştığında her şey normale döner.

## Etkinleştirme adımları {#steps}

1. Shizuku'yu telefona [Google Play'den](https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api) veya Çinli bir Android uygulama mağazası olan [CoolApk'tan (酷安)](https://www.coolapk.com/) yükleyin.
2. Shizuku'yu Kablosuz hata ayıklama ile başlatmak için [Shizuku'nun resmi kılavuzunu](https://shizuku.rikka.app/guide/setup/#start-via-wireless-debugging) izleyin.
3. Ice Box'u açın, "Çalışma Modunu Değiştir" bölümünde "Shizuku Manager" seçeneğini seçin ve Shizuku sorduğunda Ice Box'a izin verin.

Bundan sonra Ice Box kullanıma hazırdır. Telefonu yeniden başlattıktan sonra önce Shizuku'yu tekrar başlatın.

## Rootlu telefonlar: Sui kullanın {#sui}

Sui, Shizuku'nun root sürümüdür. Magisk modülü olarak çalışır ve yeniden başlatmadan sonra otomatik olarak başlar. Ice Box, Sui'yi de destekler. Sui'yi yükledikten sonra Ice Box'un "Çalışma Modunu Değiştir" bölümünde "Sui" seçeneğini seçin.

Rootlu telefonlar doğrudan [Root modunu](/guide/root/) da kullanabilir.

## SSS {#faq}

### "Shizuku izni alınamadı" uyarısı çıkıyor

Shizuku hizmetinin çalıştığından emin olun ve Shizuku'da Ice Box'a izin verin.

### Shizuku, Xiaomi telefonlarda Ice Box ile çalışmıyor

MIUI 11'den itibaren üçüncü taraf uygulamalar arasında izin aktarımı başarısız olabilir. Önce "MIUI optimizasyonu" seçeneğini kapatın. Ardından ana ekranda Ice Box simgesine uzun basın, "Uygulama bilgileri" sayfasını açın ve izin ayarlarında "Diğer izinler" seçeneğini elle açın.
