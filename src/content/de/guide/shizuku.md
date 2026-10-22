---
title: Ice Box mit Shizuku aktivieren
short: Shizuku-Modus
description: Installiere Shizuku, starte es über „Debugging über WLAN“, und Ice Box funktioniert ohne Root und ohne Computer. Gerootete Smartphones können auch Sui nutzen. Schritte und Hinweise.
section: guide
group: activate
order: 7
howto: true
related: guide/wireless-debugging, guide/adb, guide/root
---

[Shizuku](https://shizuku.rikka.app/) ist ein Tool, das anderen Apps zu Systemberechtigungen verhilft. Mit Shizuku kannst du Ice Box über die Systemfunktion „Debugging über WLAN“ aktivieren, ganz ohne Root und ohne Computer.

Bevor du loslegst, beachte:

- Um Shizuku über „Debugging über WLAN“ zu starten, brauchst du Android 11 oder höher.
- Nach jedem Neustart des Smartphones musst du Shizuku erneut starten. Sonst kann Ice Box keine Apps einfrieren oder auftauen.
- Solange der Shizuku-Dienst nicht läuft, lassen sich auch eingefrorene Apps nicht auftauen. Sobald der Dienst wieder läuft, funktioniert alles wieder normal.

## Schritte zur Aktivierung {#steps}

1. Installiere Shizuku auf dem Smartphone über [Google Play](https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api) oder [CoolApk (酷安)](https://www.coolapk.com/), einen chinesischen App-Store für Android.
2. Starte Shizuku nach der [offiziellen Anleitung von Shizuku](https://shizuku.rikka.app/guide/setup/#start-via-wireless-debugging) über „Debugging über WLAN“.
3. Öffne Ice Box, wähle unter „Modus wechseln“ den Eintrag „Shizuku Manager“ und erlaube den Zugriff, wenn Shizuku nachfragt.

Danach ist Ice Box einsatzbereit. Nach einem Neustart des Smartphones startest du zuerst Shizuku erneut.

## Gerootete Smartphones: Sui nutzen {#sui}

Sui ist die Root-Version von Shizuku. Es läuft als Magisk-Modul und startet nach einem Neustart automatisch. Ice Box unterstützt auch Sui. Wähle nach der Installation in Ice Box unter „Modus wechseln“ den Eintrag „Sui“.

Gerootete Smartphones können auch direkt den [Root-Modus](/guide/root/) nutzen.

## FAQ {#faq}

### Es erscheint „Shizuku-Berechtigung konnte nicht erteilt werden“

Stelle sicher, dass der Shizuku-Dienst läuft, und erteile Ice Box in Shizuku die Berechtigung.

### Shizuku funktioniert auf Xiaomi-Smartphones nicht mit Ice Box

Ab MIUI 11 kann die Weitergabe von Berechtigungen zwischen Apps von Drittanbietern fehlschlagen. Deaktiviere zuerst die „MIUI-Optimierung“. Halte dann das Symbol von Ice Box auf dem Startbildschirm gedrückt, öffne „App-Info“ und aktiviere in den Berechtigungen manuell die „Weiteren Berechtigungen“.
