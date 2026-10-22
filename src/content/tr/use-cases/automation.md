---
title: Android'de uygulamaları dondurma ve çözme nasıl otomatikleştirilir
short: Otomasyon ve geliştirici entegrasyonu
card: Ekran kapanınca otomatik dondurun, ana ekrandan tek dokunuşla işlem yapın veya SDK ile diğer uygulamaların Ice Box üzerinden dondurmasına izin verin.
description: Android'de dondurma ve çözmeyi Ice Box ile otomatikleştirin: Otomatik Dondurma, Tümünü Dondur ve Tümünü Çöz kısayolları ve kendi uygulamanıza ekleyebileceğiniz açık bir SDK.
section: usecase
order: 6
icon: code
faq: true
related: developers, guide/auto-freeze, guide/shortcuts
---

## Kısa yanıt {#answer}

Günlük kullanıcılar, ekran kapandığında veya ana ekrana döndüklerinde uygulamaları otomatik dondurmak için Ice Box'un [Otomatik Dondurma](/guide/auto-freeze/) özelliğine ve [ana ekran kısayollarına](/guide/shortcuts/) güvenebilir. Geliştiriciler, kullanıcı izin verdikten sonra kendi uygulamalarından uygulamaları dondurup çözmek için [Ice Box SDK](/developers/)'yı kullanabilir.

## Kod gerektirmeyen otomasyon {#no-code}

- **Otomatik Dondurma**: Ekran kapandığında veya Ana ekran tuşuna dokunduğunuzda ya da çift dokunduğunuzda Ice Box'taki uygulamaları otomatik olarak dondurun. Ekran kapanma gecikmesi ayarlayabilir ve şarj sırasında istisna tanımlayabilirsiniz.
- **Ana ekran kısayolları**: "Tümünü Dondur", "Dondur + Ekranı Kilitle" ve "Tümünü Çöz" ana ekrana eklenebilir, böylece her biri tek dokunuşla çalışır.
- **Dondurulmuş uygulamaların kısayolları**: Birine dokunduğunuzda uygulama otomatik olarak çözülür ve açılır, önce Ice Box'u açmanız gerekmez.
- **划卡冻结 (kaydırarak dondurma)**: Üçüncü taraf uygulama 划卡冻结, son uygulamalar ekranında bir uygulamanın kartını kaydırıp kapattığınızda o uygulamayı dondurabilir (yalnızca root).

## Geliştiriciler için: Ice Box SDK {#sdk}

Ice Box'un yüklü ve etkin olduğu telefonlarda Ice Box SDK, üçüncü taraf uygulamaların uygulamaları dondurup çözmesini sağlar:

- Ice Box'un geçerli çalışma modunu ve bir uygulamanın dondurulma durumunu sorgulayın. İzin gerekmez.
- Uygulamaları tek tek veya toplu olarak dondurun ve çözün. Kullanıcının izni gerekir.
- Device Owner (cihaz sahibi) modunda APK'ları sessizce yükleyin ve kaldırın.
- Üçüncü taraf bir uygulamanın Ice Box üzerinden yaptığı her işlem Ice Box'un günlük merkezine kaydedilir. Kullanıcı bunları istediği zaman kontrol edebilir.

Nasıl entegre edileceğini öğrenmek için [geliştirici kılavuzuna](/developers/) bakın.

## Sık sorulan sorular {#faq}

### Diğer uygulamalar haberim olmadan uygulamaları dondurabilir mi?

Üçüncü taraf bir uygulamanın Ice Box üzerinden uygulamaları dondurup çözebilmesi için sizin izniniz gerekir. Her işlem Ice Box'un günlük merkezine kaydedilir ve istediğiniz zaman kontrol edebilirsiniz.
