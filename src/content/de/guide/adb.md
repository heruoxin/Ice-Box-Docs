---
title: ADB-Modus: Ice Box mit einem Computer aktivieren
short: ADB-Modus
description: Device Owner lässt sich nicht einrichten oder du möchtest deine Konten behalten? Aktiviere Ice Box per ADB am Computer (einfacher ADB-Modus). Ohne Root, aber nach jedem Neustart neu aktivieren.
section: guide
group: activate
order: 6
howto: true
faq: true
related: guide/wireless-debugging, guide/activator, guide/web-activator, guide/device-owner
---

Wenn sich der [Device-Owner-Modus](/guide/device-owner/) nicht einrichten ließ oder du die Konten auf deinem Smartphone nicht entfernen möchtest, kannst du den ADB-Modus (auch einfacher ADB-Modus genannt) nutzen. Die Unterschiede zum Device-Owner-Modus:

- **Vorteile**: keine aufwendigen Schritte wie das Entfernen von Konten. Direkt nach der Aktivierung nutzbar.
- **Nachteile**: Du musst ihn nach jedem Neustart des Smartphones neu aktivieren. Sonst lassen sich Apps nicht einfrieren oder auftauen.

In Ice Box heißt der ADB-Modus „Debugging über WLAN“. Ab Android 11 kannst du ihn auch direkt auf dem Smartphone aktivieren, ganz ohne Computer. Siehe [Modus „Debugging über WLAN“](/guide/wireless-debugging/).

## Schritte zur Aktivierung {#steps}

1. Stelle sicher, dass die neueste Version von Ice Box installiert ist.
2. Aktiviere auf dem Smartphone das USB-Debugging und lass es dauerhaft eingeschaltet. Stelle den USB-Verbindungsmodus auf „Nur Laden“. Auf Xiaomi-Smartphones musst du außerdem „USB-Debugging (Sicherheitseinstellungen)“ aktivieren.
3. Verbinde das Smartphone mit dem Computer, öffne den Aktivator und wähle zum Aktivieren den ADB-Modus.

[[activator-download]]

Wenn du dich mit ADB-Befehlen auskennst, kannst du den Aktivator auch weglassen und stattdessen am Computer diesen Befehl ausführen:

```
adb shell sh /sdcard/Android/data/com.catchingnow.icebox/files/start.sh
```

## FAQ {#faq}

### Der Aktivator lädt endlos

Entpacke vor dem Start alle Dateien aus dem Archiv des Aktivators auf deinen Computer. Entpacke sie nicht in den Speicher des Smartphones und doppelklicke nicht auf die exe-Datei innerhalb des Archivs.

### Ice Box funktioniert kurz nach dem Abziehen des Kabels nicht mehr

Lass das USB-Debugging dauerhaft eingeschaltet und den USB-Verbindungsmodus unverändert auf „Nur Laden“. Auf Xiaomi-Smartphones muss auch „USB-Debugging (Sicherheitseinstellungen)“ aktiviert sein. Wenn du einen dieser Schalter änderst, entzieht das System Ice Box die Berechtigung automatisch.

### Nach einem Neustart lässt sich nichts einfrieren oder auftauen

Das ist im ADB-Modus normal. Verbinde das Smartphone nach einem Neustart mit dem Computer und aktiviere neu, oder aktiviere ab Android 11 neu über [Debugging über WLAN](/guide/wireless-debugging/).
