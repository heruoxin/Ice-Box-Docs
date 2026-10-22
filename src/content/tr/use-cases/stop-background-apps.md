---
title: Android uygulamalarının arka planda çalışması nasıl durdurulur
short: Arka plan uygulamalarını durdurun
card: Az kullandığınız uygulamaları Ice Box'a koyun; arka planda başlayamaz, çalışamaz, pilinizi ve verinizi tüketemezler.
description: Android uygulamalarının arka planda çalışmasını durdurun: Kendi kendine başlayan uygulamaları Ice Box ile dondurun, gerektiğinde tek dokunuşla çözün. Root olmadan çalışır.
section: usecase
order: 1
icon: bolt
faq: true
related: guide/auto-freeze, guide, use-cases/disable-preinstalled-apps
---

## Kısa yanıt {#answer}

Onları dondurun. Dondurulmuş bir uygulama çalışamaz, bu yüzden kendi kendine başlayamaz, arka planda çalışmaya devam edemez ve orada pil veya veri kullanmaz. Ice Box bu uygulamaları tek dokunuşla dondurabilir. Birine ihtiyacınız olduğunda dokunarak çözüp açın; işiniz bitince Ice Box onu otomatik olarak yeniden dondurur. Ice Box hem rootlu hem de rootsuz telefonlarda çalışır.

## Uygulamalar neden arka planda çalışır? {#why}

Birçok uygulama, uzun süredir açmamış olsanız bile telefon açıldığında, bir ağa bağlandığında, şarj olmaya başladığında veya bir anlık bildirim aldığında otomatik olarak başlar. Android'in "Durmaya zorla" seçeneği bir uygulamayı yalnızca bir kez durdurur. Sonrasında uygulama yine kendi kendine başlayabilir.

Dondurma farklıdır: Bir uygulama dondurulduğunda, siz onu Ice Box'ta çözene kadar sistem onu yeniden başlatmaz.

## Ice Box ile arka plan uygulamalarını durdurun {#steps}

1. [Ice Box'u indirin](/download/) ve [Yardım Merkezi](/guide/)'ndeki öneriye göre etkinleştirin.
2. Ice Box'un uygulama listesinde az kullandığınız ama kaldırmak istemediğiniz uygulamaları işaretleyin.
3. Bu uygulamaları dondurmak için Ice Box'un altındaki dondurma düğmesine dokunun veya düğmeyi kaydırın.
4. Birine ihtiyacınız olduğunda Ice Box'ta veya ana ekran kısayolunda ona dokunun. Ice Box önce uygulamayı çözer, sonra açar.
5. [Otomatik Dondurma](/guide/auto-freeze/) özelliğini açın, Ice Box ekran kapandığında onları otomatik olarak yeniden dondursun.

## Dikkat edilmesi gerekenler {#notes}

- Dondurulmuş uygulamalar kendi anlık bildirimlerini alamaz. OPPO, vivo ve OnePlus gibi telefonlarda bazı uygulamalar sistemin bildirim hizmetini kullanır ve yine de bildirim gösterebilir, ancak uygulamanın kendisi çalışmaz.
- Mesajları anında alması gereken sohbet uygulamaları, alarmlar ve navigasyon gibi arka planda çalışmaya devam etmesi gereken uygulamaları dondurmak iyi bir fikir değildir.
- Otomatik Dondurma, Ice Box'un arka planda çalışmasını gerektirir. Ice Box'un arka plan izinlerini ayarlamak için [Otomatik Dondurma](/guide/auto-freeze/) sayfasına bakın.

## Sık sorulan sorular {#faq}

### Dondurma ile "Durmaya zorla" arasındaki fark nedir?

"Durmaya zorla" yalnızca o anda çalışan uygulamayı durdurur ve başka olaylar onu daha sonra yeniden uyandırabilir. Dondurulmuş bir uygulama ise çözülene kadar hiç çalışamaz.

### Root olmadan çalışır mı?

Evet. Ice Box; Device Owner (cihaz sahibi), Kablosuz hata ayıklama, ADB ve Shizuku gibi root gerektirmeyen çalışma modlarını destekler. Size uygun modu bulmak için [Yardım Merkezi](/guide/#modes)'nde üç soruyu yanıtlayın.

### Dondurma uygulama verilerini siler mi?

Hayır. Dondurma, uygulamanın çalışmasını yalnızca geçici olarak durdurur. Tüm verileri korunur ve çözdükten sonra kullanmaya devam edebilirsiniz.
