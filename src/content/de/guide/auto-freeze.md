---
title: Automatisch einfrieren, wenn der Bildschirm ausgeht
short: Automatisch einfrieren
description: Mit „Automatisch einfrieren“ friert Ice Box die Apps deiner Liste ein, wenn der Bildschirm ausgeht oder du einmal bzw. zweimal auf Home tippst. Auslöser, Verzögerung, Ausnahme beim Laden und Lösungen.
section: guide
group: tips
order: 1
faq: true
related: guide/shortcuts, guide/devices, use-cases/stop-background-apps
---

Wenn du eine App öffnest, taut Ice Box sie zuerst auf, und wenn du fertig bist, muss sie wieder eingefroren werden. Mit „Automatisch einfrieren“ übernimmt Ice Box diesen Schritt für dich.

## Wann Apps eingefroren werden {#when}

Öffne in den Einstellungen von Ice Box „Automatisch einfrieren“ und lege unter „Automatisch einfrieren bei“ fest, wann Apps automatisch eingefroren werden:

- **Bildschirm aus**: einfrieren, nachdem der Bildschirm ausgegangen ist. Mit „Verzögerung nach Bildschirm aus“ kannst du festlegen, dass erst einige Zeit nach dem Ausschalten eingefroren wird.
- **Tippen auf Home**: einfrieren, wenn du zum Startbildschirm zurückkehrst.
- **Doppeltippen auf Home**: einfrieren, wenn du zweimal schnell auf die Home-Taste tippst.
- **Nie**: automatisches Einfrieren deaktivieren.

Unter „Ausnahmen“ kannst du außerdem „Beim Laden“ wählen, damit Apps nicht automatisch eingefroren werden, während das Smartphone lädt.

## Ausführung im Hintergrund {#background}

Für „Automatisch einfrieren“ muss Ice Box im Hintergrund laufen. Weil Android das vorschreibt, zeigt Ice Box währenddessen eine Benachrichtigung an. Du kannst diese Benachrichtigung in den Systemeinstellungen deaktivieren, ohne dass die Funktion beeinträchtigt wird.

Wenn du „Automatisch einfrieren“ und andere Funktionen, die den Hintergrund brauchen, deaktivierst, läuft Ice Box nicht im Hintergrund.

## „Automatisch einfrieren“ funktioniert nicht? {#faq}

### Apps werden nach dem Ausschalten des Bildschirms nicht eingefroren

Prüfe, ob eine Smartphone-Manager- oder Cleaner-App Ice Box daran hindert, im Hintergrund zu laufen. Erteile Ice Box in den Systemeinstellungen Berechtigungen wie „Im Hintergrund ausführen“ und „Autostart“ und stelle die Akkunutzung auf „Nicht optimieren“ bzw. „Uneingeschränkt“.

### „Verzögerung nach Bildschirm aus“ greift nicht

Auf manchen Smartphones funktioniert das Einfrieren einige Minuten nach dem Ausschalten des Bildschirms eventuell nicht. Das System schränkt hier Hintergrundaufgaben ein. Stelle eine kürzere Verzögerung ein oder lass direkt nach dem Ausschalten des Bildschirms einfrieren.

### Huawei-Smartphones frieren nach dem Ausschalten des Bildschirms nicht ein

Wegen Systembeschränkungen funktioniert automatisches Einfrieren bei „Bildschirm aus“ auf Huawei-Smartphones eventuell nicht. Nutze stattdessen „Tippen auf Home“ oder „Doppeltippen auf Home“.
