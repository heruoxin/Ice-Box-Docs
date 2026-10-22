---
title: Android-Apps davon abhalten, im Hintergrund zu laufen
short: Hintergrund-Apps stoppen
card: Leg die Apps, die du selten nutzt, in Ice Box, dann können sie im Hintergrund weder starten noch laufen und dort weder Akku noch Daten verbrauchen.
description: Android-Apps davon abhalten, im Hintergrund zu laufen: Friere Apps, die von selbst starten, mit Ice Box ein und taue sie bei Bedarf mit einem Tippen auf. Funktioniert ohne Root.
section: usecase
order: 1
icon: bolt
faq: true
related: guide/auto-freeze, guide, use-cases/disable-preinstalled-apps
---

## Kurz gesagt {#answer}

Friere sie ein. Eine eingefrorene App kann nicht laufen, also auch nicht von selbst starten oder im Hintergrund aktiv bleiben, und sie verbraucht dort weder Akku noch Daten. Ice Box friert diese Apps mit einem Tippen ein. Wenn du eine brauchst, tippst du darauf, um sie aufzutauen und zu öffnen, und wenn du fertig bist, friert Ice Box sie automatisch wieder ein. Ice Box funktioniert auf Smartphones mit und ohne Root.

## Warum laufen Apps im Hintergrund? {#why}

Viele Apps starten automatisch, wenn das Smartphone hochfährt, sich mit einem Netzwerk verbindet, mit dem Laden beginnt oder eine Push-Nachricht erhält, auch wenn du sie lange nicht geöffnet hast. „Beenden erzwingen“ von Android stoppt eine App nur einmal. Danach kann sich die App trotzdem wieder selbst starten.

Beim Einfrieren ist das anders: Sobald eine App eingefroren ist, startet das System sie nicht mehr, bis du sie in Ice Box auftaust.

## Hintergrund-Apps mit Ice Box stoppen {#steps}

1. [Lade Ice Box herunter](/download/) und aktiviere es nach der Empfehlung im [Hilfe-Center](/guide/).
2. Markiere in der App-Liste von Ice Box die Apps, die du selten nutzt, aber nicht deinstallieren möchtest.
3. Tippe auf die Einfrier-Schaltfläche unten in Ice Box oder wische darüber, um diese Apps einzufrieren.
4. Wenn du eine brauchst, tippe in Ice Box oder auf ihre Verknüpfung auf dem Startbildschirm darauf. Ice Box taut sie zuerst auf und öffnet sie dann.
5. Aktiviere [Automatisch einfrieren](/guide/auto-freeze/), dann friert Ice Box sie automatisch wieder ein, wenn der Bildschirm ausgeht.

## Gut zu wissen {#notes}

- Eingefrorene Apps können keine eigenen Push-Nachrichten empfangen. Auf Smartphones wie OPPO, vivo und OnePlus nutzen manche Apps den Push-Dienst des Systems und zeigen eventuell trotzdem Benachrichtigungen an, die App selbst läuft aber nicht.
- Apps, die im Hintergrund weiterarbeiten müssen, etwa Chat-Apps für Nachrichten in Echtzeit, Wecker und Navigation, sind keine guten Kandidaten zum Einfrieren.
- „Automatisch einfrieren“ setzt voraus, dass Ice Box im Hintergrund laufen darf. Unter [Automatisch einfrieren](/guide/auto-freeze/) erfährst du, wie du die Hintergrundberechtigungen für Ice Box einrichtest.

## Häufige Fragen {#faq}

### Was ist der Unterschied zwischen Einfrieren und „Beenden erzwingen“?

„Beenden erzwingen“ stoppt die App nur in ihrem aktuellen Lauf, und andere Ereignisse können sie später wieder aufwecken. Eine eingefrorene App kann überhaupt nicht laufen, bis sie aufgetaut wird.

### Funktioniert das ohne Root?

Ja. Ice Box unterstützt Modi ohne Root wie Device Owner, Debugging über WLAN, ADB und Shizuku. Beantworte im [Hilfe-Center](/guide/#modes) drei Fragen, um den passenden Modus für dich zu finden.

### Löscht das Einfrieren App-Daten?

Nein. Das Einfrieren stoppt die App nur vorübergehend. Alle ihre Daten bleiben erhalten, und nach dem Auftauen kannst du sie weiter nutzen.
