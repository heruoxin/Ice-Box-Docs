---
title: Android'de root olmadan gereksiz önceden yüklü uygulamalar nasıl devre dışı bırakılır
short: Gereksiz uygulamaları devre dışı bırakın
card: Kaldırılamayan önceden yüklü sistem uygulamaları yine de dondurulabilir ve bunun için root gerekmez.
description: Root olmadan gereksiz uygulamaları devre dışı bırakın: Önceden yüklü ve reklam uygulamalarını Ice Box ile dondurun, ana ekrandan kaybolsunlar ve çalışamasınlar. Device Owner ve diğer modlarla çalışır.
section: usecase
order: 2
icon: layers
faq: true
related: guide/system-apps, guide/devices, guide/qr-code
---

## Kısa yanıt {#answer}

Önceden yüklü uygulamaların çoğu kaldırılamaz ama dondurulabilir. Ice Box ile dondurulduklarında ana ekrandan ve uygulama çekmecesinden kaybolurlar ve arka planda çalışamazlar. Daha sonra birine ihtiyacınız olursa Ice Box'ta çözerek geri getirebilirsiniz. Önceden yüklü uygulamaları dondurmak root gerektirmez: Device Owner (cihaz sahibi), Kablosuz hata ayıklama ve ADB gibi rootsuz modların hepsi işe yarar.

## Adımlar {#steps}

1. [Ice Box'u indirin](/download/) ve [Yardım Merkezi](/guide/)'ndeki öneriye göre etkinleştirin.
2. Ice Box'un uygulama listesinde sistem uygulamalarına geçin ve ihtiyacınız olmayacağından emin olduğunuz önceden yüklü uygulamaları işaretleyin.
3. Onları dondurun. Bundan sonra bu uygulamalar ana ekranda görünmez ve arka planda çalışmaz.
4. Birini geri getirmek için Ice Box'ta çözün.

Başka birinin paylaştığı "güvenle dondurulabilen sistem uygulamaları listesini" de içe aktarabilirsiniz. Ice Box listedeki uygulamalardan telefonunuzda dondurulabilenleri gösterir ve siz onayladıktan sonra dondurur. [Önceden yüklü sistem uygulamalarını dondurma](/guide/system-apps/) sayfasına bakın.

## Dikkat edilmesi gerekenler {#notes}

- Yalnızca ihtiyacınız olmayacağından emin olduğunuz uygulamaları dondurun. Önemli sistem bileşenlerini dondurmak telefonunuzun bazı bölümlerinin düzgün çalışmamasına yol açabilir.
- MIUI ve bazı diğer sistemlerde belirli önemli uygulamalar dondurulamayabilir veya sistem onları yeniden başlatmadan sonra otomatik olarak çözebilir.
- [QR kodla kurulum](/guide/qr-code/) yapılan telefonlarda sistem, önceden yüklü uygulamaları varsayılan olarak yüklemez. İhtiyacınız varsa onları Ice Box'un "Laboratuvar" bölümünden etkinleştirebilirsiniz.
- Her markayla ilgili ayrıntılar için [telefon markalarına göre notlara](/guide/devices/) bakın.

## Sık sorulan sorular {#faq}

### Önceden yüklü uygulamaları dondurmanın ADB komutlarıyla devre dışı bırakmaktan farkı nedir?

Etkisi benzerdir, ancak Ice Box size uygulamaları istediğiniz zaman kontrol edebileceğiniz, dondurup çözebileceğiniz bir arayüz sunar. Komut ezberlemeniz gerekmez.

### Dondurulmuş uygulamalar geri getirilebilir mi?

Evet. Bir uygulamayı Ice Box'ta çözdüğünüzde normale döner. Ice Box'u kaldırmadan önce tüm uygulamaları çözün.

### Dondurulmuş önceden yüklü uygulamalar sistem güncellemesinden sonra geri gelir mi?

Bazı sistemler önemli uygulamaları yeniden başlatma veya güncelleme sonrasında otomatik olarak çözer. Bu olursa onları Ice Box'ta yeniden dondurun.
