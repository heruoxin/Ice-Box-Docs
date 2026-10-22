---
title: Risiken von Device Owner auf Samsung-Smartphones
short: Hinweise für Samsung
description: Device Owner kann auf Samsung-Geräten den Sicheren Ordner und Dual Messenger stören oder sogar das Passwort der Displaysperre zurücksetzen. Samsung-Nutzer sollten das vor der Entscheidung lesen.
section: guide
group: trouble
order: 2
related: guide/root, guide/shizuku, guide/wireless-debugging, guide/devices
---

Ice Box nutzt die nativen Device-Owner-Funktionen von Android. Samsung ist unter den Android-Herstellern ein Sonderfall: Das Unternehmen setzt ein eigenes Sicherheits-Framework namens KNOX ein.

Wenn du auf einem Samsung-Smartphone eine Lösung ohne Root einrichtest, die auf dem nativen Device Owner von Android basiert, können diese Probleme auftreten:

- Manche KNOX-Funktionen wie der Sichere Ordner funktionieren eventuell nicht.
- Die integrierte Funktion Dual Messenger funktioniert nicht mehr.
- Das System setzt das Passwort der Displaysperre zurück. Dann bleibt nur das Zurücksetzen auf die Werkseinstellungen, und deine Daten gehen verloren.

Keines dieser Probleme tritt jedes Mal auf. Zum schwerwiegendsten, dem Zurücksetzen des Displaysperre-Passworts: 2018 erhielten wir bei rund 200.000 Samsung-Nutzern von Ice Box insgesamt 6 Meldungen, die tatsächliche Zahl der Betroffenen kann höher sein. Seit Samsung One UI veröffentlicht hat, scheinen mehr Nutzer auf dieses Problem zu stoßen. Deshalb empfehlen wir den Device-Owner-Modus unter One UI nicht.

Die genaue Ursache dieser Probleme kennen wir derzeit nicht, und eine gute Lösung gibt es noch nicht.

> [!CAUTION]
> Wenn du ein Samsung-Smartphone nutzt, überlege dir bitte sehr, sehr gut, ob du den Device-Owner-Modus verwenden willst.

## Empfohlene Modi für Samsung-Nutzer {#recommended}

- Gerootet: Nutze den [Root-Modus](/guide/root/).
- Nicht gerootet, Android 11 oder höher: Nutze den [Modus „Debugging über WLAN“](/guide/wireless-debugging/) oder den [Shizuku-Modus](/guide/shizuku/).
- Nicht gerootet, mit Computer: Nutze den [ADB-Modus](/guide/adb/).

Keiner dieser Modi braucht Device Owner. Bis auf den Root-Modus müssen sie aber nach jedem Neustart des Smartphones erneut aktiviert werden.
