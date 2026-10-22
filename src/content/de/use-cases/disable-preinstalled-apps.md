---
title: Bloatware unter Android ohne Root deaktivieren
short: Bloatware deaktivieren
card: Vorinstallierte System-Apps, die sich nicht deinstallieren lassen, kannst du trotzdem einfrieren, und dafür brauchst du kein Root.
description: Bloatware ohne Root deaktivieren: Friere vorinstallierte Apps und Werbe-Apps mit Ice Box ein, dann verschwinden sie vom Startbildschirm und können nicht laufen. Funktioniert mit Device Owner und weiteren Modi.
section: usecase
order: 2
icon: layers
faq: true
related: guide/system-apps, guide/devices, guide/qr-code
---

## Kurz gesagt {#answer}

Die meisten vorinstallierten Apps lassen sich nicht deinstallieren, aber einfrieren. Mit Ice Box eingefroren, verschwinden sie vom Startbildschirm und aus der App-Liste und können nicht im Hintergrund laufen. Wenn du eine später doch brauchst, taust du sie in Ice Box wieder auf. Zum Einfrieren vorinstallierter Apps brauchst du kein Root: Modi ohne Root wie Device Owner, Debugging über WLAN und ADB funktionieren alle.

## Schritte {#steps}

1. [Lade Ice Box herunter](/download/) und aktiviere es nach der Empfehlung im [Hilfe-Center](/guide/).
2. Wechsle in der App-Liste von Ice Box zu den System-Apps und markiere die vorinstallierten Apps, die du sicher nicht brauchst.
3. Friere sie ein. Ab dann erscheinen diese Apps nicht mehr auf dem Startbildschirm und laufen nicht mehr im Hintergrund.
4. Um eine App zurückzuholen, taue sie in Ice Box auf.

Du kannst auch eine von anderen geteilte „Liste sicher einfrierbarer System-Apps“ importieren. Ice Box zeigt dir die Apps daraus, die sich auf deinem Smartphone einfrieren lassen, und friert sie nach deiner Bestätigung ein. Mehr dazu unter [Vorinstallierte System-Apps einfrieren](/guide/system-apps/).

## Gut zu wissen {#notes}

- Friere nur Apps ein, die du sicher nicht brauchst. Wenn du wichtige Systemkomponenten einfrierst, funktionieren Teile deines Smartphones eventuell nicht mehr richtig.
- Unter MIUI und einigen anderen Systemen lassen sich bestimmte wichtige Apps eventuell nicht einfrieren, oder das System taut sie nach einem Neustart automatisch wieder auf.
- Auf Smartphones, die per [Einrichtung mit QR-Code](/guide/qr-code/) eingerichtet wurden, installiert das System vorinstallierte Apps standardmäßig nicht. Wenn du sie brauchst, kannst du sie im „Labor“ von Ice Box aktivieren.
- Details zu den einzelnen Marken findest du in den [Hinweisen für jede Smartphone-Marke](/guide/devices/).

## Häufige Fragen {#faq}

### Was ist der Unterschied zwischen dem Einfrieren vorinstallierter Apps und dem Deaktivieren per ADB-Befehl?

Die Wirkung ist ähnlich, aber Ice Box bietet dir eine grafische Oberfläche, in der du Apps jederzeit prüfen, einfrieren und auftauen kannst, ohne dir Befehle merken zu müssen.

### Lassen sich eingefrorene Apps wiederherstellen?

Ja. Sobald du eine App in Ice Box auftaust, funktioniert sie wieder normal. Taue vor der Deinstallation von Ice Box zuerst alle Apps auf.

### Kommen eingefrorene vorinstallierte Apps nach einem Systemupdate zurück?

Manche Systeme tauen wichtige Apps nach einem Neustart oder Update automatisch wieder auf. Friere sie in diesem Fall in Ice Box erneut ein.
