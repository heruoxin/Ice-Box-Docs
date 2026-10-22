---
title: Ice Box nasıl kaldırılır ve cihaz sahibi izni nasıl bırakılır
short: Ice Box'u kaldırma
description: Ice Box'u kaldırmadan önce tüm uygulamaları çözün. Device Owner modunda Ice Box'u ana ekrandan değil, kendi ayarlarından kaldırın. Aksi hâlde dondurulmuş uygulamalar çözülemez.
section: guide
group: trouble
order: 3
howto: true
related: guide/device-owner, faq, guide/devices
---

Ice Box'un dondurduğu uygulamaları yalnızca Ice Box çözebilir. Ice Box'u kaldırmadan önce tüm uygulamaların çözüldüğünden emin olun.

## Kaldırma adımları {#steps}

1. Ice Box'u açın, "Tümünü Çöz" ile Ice Box'taki tüm uygulamaları çözün ve hepsinin ana ekranda yeniden göründüğünü kontrol edin.
2. Ice Box ayarlarına gidin ve "Kaldır" seçeneğine dokunun.
3. Onayladıktan sonra Ice Box kendi cihaz sahibi iznini (varsa) bırakır ve kaldırma işlemini tamamlar.

> [!WARNING]
> Device Owner (cihaz sahibi) modunu kullanıyorsanız **Ice Box'u doğrudan ana ekrandan kaldırmayın**. Xiaomi ve bazı başka telefonlarda bu, cihaz sahibi izninin kaybolmasına yol açar ve dondurulmuş uygulamalar bir daha asla çözülemez.

## Çalışma modlarına göre notlar {#modes}

- **Device Owner modu**: Cihaz sahibi iznini Ice Box ayarlarındaki "Kaldır" ile bırakmanız gerekir. Aksi hâlde sistem uygulamayı kaldırmanıza izin vermez.
- **Root, Kablosuz hata ayıklama, ADB ve Shizuku modları**: Bunlarda da önce her şeyi çözün, sonra Ice Box'u kaldırın.
- Çalışma modunu değiştirdiyseniz çözmeden önce dondururken kullandığınız moda geri dönün. Çalışma modları birbiriyle uyumlu değildir.

## Kaldırmadan önce çözmeyi mi unuttunuz? {#already-removed}

- **Root, Kablosuz hata ayıklama, ADB ve Shizuku modları**: Ice Box'u yeniden yükleyin, dondururken kullandığınız çalışma moduna geçin, ardından dondurulmuş uygulamaları uygulama listesinde bulup çözün.
- **Device Owner modu**: Ice Box'u doğrudan kaldırmak cihaz sahibi iznini kaybettirir ve dondurulmuş uygulamalar artık çözülemez. Bu yüzden yukarıdaki adımları mutlaka izleyin ve Ice Box'u kendi ayarlarından kaldırın.
