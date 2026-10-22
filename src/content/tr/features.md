---
title: Ice Box özellikleri
short: Özellikler
description: Ice Box özellikleri: tek dokunuşla dondurma ve çözme, Otomatik Dondurma, kısayollar, sekmeler, temalar, simge paketleri, uygulama kilidi, sistem uygulamalarını dondurma, SDK, root ve rootsuz modlar.
section: product
priority: 0.9
related: guide, themes, guide/auto-freeze, developers
---

Ice Box, Android için bir uygulama dondurucudur. Az kullandığınız uygulamaları Ice Box'a koyun; artık arka planda çalışamaz ve ana ekranınızda görünmezler. Birine ihtiyacınız olduğunda dokunun, Ice Box onu çözer ve açar.

## Dondurma ve çözme {#freeze}

- **Dondurma**: Dondurulmuş bir uygulama çalışamaz, arka planda kendi kendine başlayamaz, ana ekrandan ve uygulama çekmecesinden gizlenir. Uygulama ve verileri korunur.
- **Çözme**: Ice Box'ta bir uygulamaya veya onun ana ekran kısayoluna dokunun, Ice Box uygulamayı çözer ve açar.
- **Tümünü Dondur / Tümünü Çöz**: Listedeki tüm uygulamaları bir kerede dondurmak için Ice Box'un altındaki dondurma düğmesini kaydırın veya ona dokunun. "Tümünü Çöz" ise tüm uygulamaları bir kerede geri getirir. Dondurma düğmesinin konumunu ve kaydırma yönünü ayarlardan değiştirebilirsiniz.
- **Dondur + Ekranı Kilitle**: Tek dokunuşla tüm uygulamaları dondurun ve ekranı hemen kilitleyin.

Ice Box, çalışma moduna bağlı olarak sistemin sunduğu iki yöntemden biriyle uygulamaları dondurur: "devre dışı bırakma" (disable) veya "gizleme" (hide).

## Otomatik Dondurma {#auto-freeze}

Ice Box, listenizdeki uygulamaları ekran kapandığında veya Ana ekran tuşuna dokunduğunuzda ya da çift dokunduğunuzda otomatik olarak dondurabilir. Ekran kapandıktan sonra bir gecikme ayarlayabilir ve şarj olurken otomatik dondurmamayı seçebilirsiniz. [Otomatik Dondurma](/guide/auto-freeze/) sayfasına bakın.

## Ana ekran kısayolları {#shortcuts}

Dondurulmuş uygulamalar için ana ekran kısayolları oluşturun. Kısayola dokunduğunuzda uygulama çözülür ve açılır, önce Ice Box'u açmanız gerekmez. Bir uygulama dondurma listesine eklendiğinde kısayolunun otomatik eklenmesi seçeneğini de açabilirsiniz. [Ana ekran kısayolları](/guide/shortcuts/) sayfasına bakın.

## Çoklu sekme {#tabs}

Uygulamaları amacına göre ayırmak için Günlük, Sosyal ve Oyunlar gibi birkaç sekme oluşturun. Sekmeler yeniden adlandırılabilir ve uygulamalar sekmeler arasında taşınabilir. Ice Box'taki uygulamaları elle de sıralayabilirsiniz.

## Temalar ve simge paketleri {#themes}

- Ana ekrandaki neredeyse her öğe, saydamlık desteğiyle yeniden renklendirilebilir.
- Android 12 ve üzerinde Ice Box sistemin dinamik renklerini kullanabilir. Duvar kâğıdınızı arka plan olarak da kullanabilirsiniz.
- Gündüz ve gece temaları sistemle birlikte otomatik olarak değişebilir.
- Üçüncü taraf simge paketleri desteklenir ve simge boyutunu ayarlayabilirsiniz.
- Temalar bağlantı olarak paylaşılabilir ve içe aktarılabilir. Başkalarının paylaştığı renk şemalarına [Paylaşılan temalar](/themes/) sayfasından göz atın.

## Parmak izi ve PIN kilidi {#lock}

Bu özellik açıkken Ice Box açılmadan önce parmak izinizi veya PIN'inizi ister. Yüz tanıma da kullanılabilir. "Parmak İzi Kilidi" açıkken Ice Box'un içeriği son uygulamalar ekranında gizlenir.

## Önceden yüklü sistem uygulamalarını dondurma {#system-apps}

Ice Box, kendi yüklediğiniz uygulamaların yanı sıra önceden yüklü bazı sistem uygulamalarını da dondurabilir. Bu, root gerektirmeyen modlarda da çalışır. Başka birinin paylaştığı "güvenle dondurulabilen sistem uygulamaları listesini" de içe aktarabilirsiniz. [Önceden yüklü sistem uygulamalarını dondurma](/guide/system-apps/) sayfasına bakın.

## Yeni uygulama bildirimi {#new-app}

Yeni bir uygulama yüklediğinizde Ice Box, uygulamanın Ice Box'a eklenip eklenmeyeceğini soran bir bildirim gösterebilir.

## Çalışma modları {#modes}

Ice Box sistem izinlerini birkaç farklı yoldan alabilir, bu nedenle hem rootlu hem de rootsuz telefonlarda çalışır:

[[mode-cards]]

Hangisini seçeceğinizden emin değil misiniz? Öneri almak için [Yardım Merkezi](/guide/)'nde üç soruyu yanıtlayın.

## Açık SDK ve entegrasyonlar {#sdk}

- **Ice Box SDK**: Kullanıcının izniyle diğer uygulamalar Ice Box üzerinden uygulamaları dondurup çözebilir. Device Owner (cihaz sahibi) modunda APK'ları sessizce yükleyip kaldırabilirler. Üçüncü taraf bir uygulamanın yaptığı her işlem Ice Box'un günlük merkezine kaydedilir. [Geliştiriciler için](/developers/) sayfasına bakın.
- **Başka Uygulamada Yapılandır**: Android'in "Uygulama bilgileri" giriş noktasını destekler, böylece Ice Box Greenify ve AppOps gibi uygulamalarla birlikte çalışır.
- **Island**: Ice Box'un tüm özellikleri Island'ın iş profilinde de çalışır.

## Sürümler ve gereksinimler {#requirements}

- Android 7.0 veya üzeri çalıştıran telefon ve tabletler.
- İndirmesi ücretsizdir. Bazı özellikler için Pro'ya yükseltmek gerekir. Bir fark varsa uygulamadaki açıklama geçerlidir.
- Her sürümdeki değişiklikler [sürüm geçmişinde](/changelog/) listelenir.

[[download-buttons]]
