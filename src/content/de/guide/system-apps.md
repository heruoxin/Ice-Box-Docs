---
title: Vorinstallierte System-Apps einfrieren
short: Vorinstallierte Apps einfrieren
description: Ice Box kann manche vorinstallierte System-Apps einfrieren, auch in den Modi ohne Root. Was du vorher prüfen solltest, Apps, die sich nicht einfrieren lassen, geteilte Listen und das Aktualisieren eingefrorener Apps.
section: guide
group: tips
order: 3
faq: true
related: use-cases/disable-preinstalled-apps, guide/devices, guide/qr-code
---

Viele Smartphones kommen mit jeder Menge vorinstallierter Software und Werbe-Apps, die du nie nutzen wirst. Ice Box kann diese vorinstallierten Apps einfrieren: Sie laufen nicht im Hintergrund und erscheinen nicht auf dem Startbildschirm. Wenn du eine davon brauchst, taust du sie in Ice Box auf und sie ist wieder da.

## Vor dem Einfrieren {#before}

- Friere nur Apps ein, von denen du sicher weißt, dass du sie nicht brauchst. Im Zweifel lieber nicht. Wenn du wichtige Systemkomponenten einfrierst, funktioniert das Smartphone eventuell nicht mehr richtig.
- Manche Systeme behandeln wichtige Apps gesondert: Unter MIUI und ähnlichen Systemen lassen sich manche wichtige Apps nicht einfrieren oder werden nach einem Neustart vom System zwangsweise aufgetaut.
- In neueren EMUI-Versionen lässt sich der Huawei-Launcher nicht mehr einfrieren.
- Apps, die mit Geräteadministrator-Berechtigung laufen, lassen sich nicht einfrieren. Entziehe der App zuerst die Berechtigung unter „Einstellungen > Sicherheit > Apps zur Geräteverwaltung“ und friere sie dann ein.

## Geteilte Einfrierliste importieren {#lists}

Mit Ice Box kannst du Listen von System-Apps teilen und importieren, die sich sicher einfrieren lassen. Wenn du einen geteilten Listen-Link öffnest, zeigt Ice Box die Apps daraus an, die sich auf deinem Smartphone einfrieren lassen, und friert sie ein, nachdem du jede einzeln bestätigt hast.

Du kannst auch den geteilten Text kopieren und in den Einstellungen von Ice Box auf „Aus Zwischenablage importieren“ tippen.


## Vorinstallierte Apps nach der Einrichtung per QR-Code {#qr}

Auf Smartphones, die per [QR-Code](/guide/qr-code/) eingerichtet wurden, installiert das System vorinstallierte Apps standardmäßig nicht. Wenn du eine davon brauchst, öffne in den Einstellungen von Ice Box das „Labor“, tippe auf „Vorinstallierte System-Apps aktivieren“ und wähle die Apps aus, die installiert werden sollen.

## FAQ {#faq}

### Wie aktualisiere ich eine eingefrorene App?

Wenn du CoolApk (酷安) nutzt, einen chinesischen App-Store für Android, aktiviere im Laborbereich der Einstellungen von CoolApk die Option, ausgeblendete Apps anzuzeigen. Bei anderen App-Stores taust du die App zuerst in Ice Box auf und frierst sie nach dem Update wieder ein.

### Manche System-Apps lassen sich nicht einfrieren oder werden nach einem Neustart heimlich aufgetaut

Das System schützt hier wichtige Apps, und Ice Box kann das nicht umgehen. MIUI und einige andere Systeme verhalten sich so.
