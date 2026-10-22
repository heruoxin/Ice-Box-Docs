---
title: Ice Box deinstallieren und Device Owner entfernen
short: Ice Box deinstallieren
description: Taue vor der Deinstallation von Ice Box alle Apps auf. Im Device-Owner-Modus deinstallierst du über die Einstellungen von Ice Box, nicht über den Startbildschirm, sonst lassen sich eingefrorene Apps nicht mehr auftauen.
section: guide
group: trouble
order: 3
howto: true
related: guide/device-owner, faq, guide/devices
---

Nur Ice Box kann die Apps auftauen, die es eingefroren hat. Prüfe vor der Deinstallation von Ice Box daher genau, ob alle Apps aufgetaut sind.

## Schritte zur Deinstallation {#steps}

1. Öffne Ice Box, taue mit „Alle auftauen“ alle Apps in Ice Box auf und prüfe, ob sie wieder auf dem Startbildschirm erscheinen.
2. Öffne die Einstellungen von Ice Box und tippe auf „Deinstallieren“.
3. Nach deiner Bestätigung entfernt Ice Box seine Device-Owner-Berechtigung (falls vorhanden) und schließt die Deinstallation ab.

> [!WARNING]
> Wenn du den Device-Owner-Modus nutzt, **deinstalliere Ice Box nicht direkt über den Startbildschirm**. Auf Xiaomi und einigen anderen Smartphones geht dabei die Device-Owner-Berechtigung verloren, und eingefrorene Apps lassen sich nie wieder auftauen.

## Hinweise zu den einzelnen Modi {#modes}

- **Device-Owner-Modus**: Du musst die Device-Owner-Berechtigung über „Deinstallieren“ in den Einstellungen von Ice Box entfernen. Sonst lässt das System die Deinstallation nicht zu.
- **Root, Debugging über WLAN, ADB und Shizuku**: Taue auch hier zuerst alles auf und deinstalliere Ice Box erst danach.
- Wenn du den Modus gewechselt hast, wechsle vor dem Auftauen zurück in den Modus, mit dem du eingefroren hast. Die Modi sind nicht miteinander kompatibel.

## Vor der Deinstallation das Auftauen vergessen? {#already-removed}

- **Root, Debugging über WLAN, ADB und Shizuku**: Installiere Ice Box neu, wechsle in den Modus, mit dem du eingefroren hast, suche die eingefrorenen Apps in der App-Liste und taue sie auf.
- **Device-Owner-Modus**: Wenn du Ice Box direkt deinstallierst, geht die Device-Owner-Berechtigung verloren, und eingefrorene Apps lassen sich nicht mehr auftauen. Halte dich deshalb unbedingt an die Schritte oben und deinstalliere über die Einstellungen von Ice Box.
