---
title: ADB modu: Ice Box'u bilgisayarla etkinleştirin
short: ADB modu
description: Cihaz sahibi kurulumu yapamıyor musunuz ya da hesaplarınızı silmek istemiyor musunuz? Ice Box'u bilgisayardan ADB ile etkinleştirin (basit ADB modu). Root gerekmez, ama her yeniden başlatmadan sonra tekrar etkinleştirmeniz gerekir.
section: guide
group: activate
order: 6
howto: true
faq: true
related: guide/wireless-debugging, guide/activator, guide/web-activator, guide/device-owner
---

[Device Owner (cihaz sahibi) modunu](/guide/device-owner/) kuramadıysanız veya telefonunuzdaki hesapları kaldırmak istemiyorsanız ADB modunu (basit ADB modu olarak da bilinir) kullanabilirsiniz. Device Owner modundan farkları:

- **Artıları**: Hesapları kaldırmak gibi karmaşık adımlar yoktur. Etkinleştirdikten hemen sonra kullanabilirsiniz.
- **Eksileri**: Telefon her yeniden başladığında tekrar etkinleştirmeniz gerekir. Aksi hâlde uygulamalar dondurulamaz veya çözülemez.

Ice Box'ta ADB modu, "Kablosuz hata ayıklama" çalışma modu olarak görünür. Android 11 ve üzerinde bilgisayar olmadan doğrudan telefonda da etkinleştirebilirsiniz. [Kablosuz hata ayıklama modu](/guide/wireless-debugging/) sayfasına bakın.

## Etkinleştirme adımları {#steps}

1. Ice Box'un en son sürümünün yüklü olduğundan emin olun.
2. Telefonda USB hata ayıklamayı açın ve her zaman açık tutun. USB bağlantı modunu "Yalnızca şarj" olarak ayarlayın. Xiaomi telefonlarda "USB hata ayıklama (Güvenlik ayarları)" seçeneğini de açmanız gerekir.
3. Telefonu bilgisayara bağlayın, etkinleştiriciyi açın ve etkinleştirmek için ADB modunu seçin.

[[activator-download]]

ADB komutlarını biliyorsanız etkinleştiriciyi atlayıp bilgisayarınızda bunun yerine şu komutu çalıştırabilirsiniz:

```
adb shell sh /sdcard/Android/data/com.catchingnow.icebox/files/start.sh
```

## SSS {#faq}

### Etkinleştirici yüklenme ekranında takılı kalıyor

Çalıştırmadan önce etkinleştirici arşivindeki tüm dosyaları bilgisayarınıza çıkarın. Dosyaları telefonun depolama alanına çıkarmayın ve arşivin içindeki exe dosyasına doğrudan çift tıklamayın.

### Kabloyu çıkardıktan kısa süre sonra Ice Box çalışmayı bırakıyor

USB hata ayıklamayı her zaman açık tutun ve USB bağlantı modunu değiştirmeden "Yalnızca şarj" olarak bırakın. Xiaomi telefonlarda "USB hata ayıklama (Güvenlik ayarları)" da açık olmalıdır. Bu ayarlardan herhangi birini değiştirmek, sistemin Ice Box'un iznini otomatik olarak geri almasına neden olur.

### Telefonu yeniden başlattıktan sonra dondurulamıyor veya çözülemiyor

ADB modunda bu normaldir. Yeniden başlattıktan sonra bilgisayara bağlanıp tekrar etkinleştirin ya da Android 11 ve üzerinde [Kablosuz hata ayıklama](/guide/wireless-debugging/) ile tekrar etkinleştirin.
