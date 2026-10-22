---
title: Modus „Debugging über WLAN“: Ice Box ohne Root und ohne Computer aktivieren
short: Debugging über WLAN
description: Ab Android 11 aktivierst du Ice Box mit der Systemfunktion „Debugging über WLAN“, ganz ohne Root und ohne Computer. Alle Schritte, Tipps zur Kopplung und FAQ.
section: guide
group: activate
order: 5
howto: true
faq: true
related: guide/adb, guide/shizuku, guide/devices, guide/device-owner
---

Der Modus „Debugging über WLAN“ braucht weder Root noch einen Computer. Ice Box nutzt die Systemfunktion „Debugging über WLAN“, um die Berechtigung zum Einfrieren von Apps zu erhalten, und alles passiert direkt auf dem Smartphone.

Bevor du loslegst, beachte:

- Du brauchst Android 11 oder höher.
- Während der Kopplung muss eine WLAN-Verbindung bestehen. Jedes WLAN ist geeignet.
- Nach jedem Neustart des Smartphones musst du den Schalter „Debugging über WLAN“ wieder einschalten. Sonst kann Ice Box keine Apps einfrieren oder auftauen.

Wenn dein Smartphone eine ältere Version als Android 11 nutzt oder du lieber mit einem Computer aktivierst, sieh dir den [ADB-Modus](/guide/adb/) an.

## Bevor du beginnst {#before}

Ice Box prüft auf seiner Einrichtungsseite jeden der folgenden Punkte. Tippe auf einen Punkt, der noch nicht erfüllt ist, um direkt zur passenden Einstellung zu gelangen:

1. **VPN vorübergehend ausschalten**. Nach der Kopplung kannst du es wieder einschalten.
2. **Benachrichtigungen für Ice Box erlauben**. Den Kopplungscode gibst du in der Benachrichtigung von Ice Box ein.
3. **USB-Debugging aktivieren**. Wenn du die Entwickleroptionen noch nicht aktiviert hast, sieh dir den nächsten Abschnitt an.
4. **Mit WLAN verbinden**. Jedes WLAN ist geeignet.
5. **Ice Box die Hintergrundaktivität erlauben**. Auf manchen Smartphones musst du die Akkunutzung von Ice Box in den Systemeinstellungen auf „Uneingeschränkt“ stellen.

## So aktivierst du USB-Debugging {#usb-debugging}

1. Öffne die „Einstellungen“, suche „Über das Telefon“ und tippe 7-mal hintereinander auf „Build-Nummer“, bis eine Meldung wie „Du bist jetzt Entwickler!“ erscheint.
2. Kehre zu den „Einstellungen“ zurück, suche unter „System“ oder „Weitere Einstellungen“ die „Entwickleroptionen“ und schalte „USB-Debugging“ ein.

Wo sich die Menüs befinden, hängt vom Hersteller und der Systemversion ab. Ice Box enthält bebilderte Schritt-für-Schritt-Anleitungen für gängige Hersteller, denen du folgen kannst.

## In drei Schritten zum Kopplungscode {#pairing}

1. Suche in den Entwickleroptionen „Debugging über WLAN“, schalte es ein und tippe darauf, um die Einstellungsseite zu öffnen.
2. Wähle „Gerät mit Kopplungscode koppeln“.
3. Lass das Fenster mit dem Kopplungscode geöffnet, zieh die Benachrichtigungsleiste herunter und gib den sechsstelligen Kopplungscode in der Benachrichtigung von Ice Box ein.

Sobald die Kopplung geklappt hat, zeigt Ice Box „Debugging über WLAN aktiviert“ an und ist einsatzbereit. Falls die Kopplung nicht klappt, kannst du in Ice Box außerdem eine Video-Anleitung aufklappen.

> [!TIP]
> Wenn du „Debugging über WLAN“ in den Entwickleroptionen nicht findest, sind die Entwickleroptionen höchstwahrscheinlich noch nicht aktiviert. Erledige zuerst die Schritte im vorherigen Abschnitt.

## Nach einem Neustart des Smartphones {#after-reboot}

Beim Neustart entzieht das System Ice Box die Berechtigung. Öffne wieder die Entwickleroptionen und schalte „Debugging über WLAN“ ein, dann funktioniert Ice Box wieder. Ice Box erinnert dich mit einer Benachrichtigung daran.

## FAQ {#faq}

### Bei der Kopplung erscheint „Bitte VPN und Akku-Optimierung deaktivieren“

Ice Box kann keine Verbindung zum Dienst für das Debugging über WLAN herstellen. Schalte dein VPN und alle Proxy-Apps aus, deaktiviere in den Systemeinstellungen die Akku-Optimierung für Ice Box und versuche es dann noch einmal.

### Es erscheint „Falscher Kopplungscode“ oder „Abgelaufen“

Der Kopplungscode gilt nur, solange sein Fenster angezeigt wird. Rufe einen neuen Kopplungscode ab und gib ihn zügig ein, während das Fenster geöffnet bleibt.

### Ich sehe kein Eingabefeld in der Benachrichtigung

Stelle sicher, dass Benachrichtigungen für Ice Box erlaubt sind. Manche Systeme klappen die Benachrichtigung zu. Tippe rechts in der Benachrichtigung auf den Pfeil zum Aufklappen, um das Eingabefeld zu sehen.

### Xiaomi, Huawei, OPPO oder andere Smartphones melden fehlende ADB-Berechtigung

Aktiviere in den Entwickleroptionen die passende Option für deinen Hersteller. Auf Xiaomi-Smartphones aktivierst du „USB-Debugging (Sicherheitseinstellungen)“. Auf Huawei-Smartphones aktivierst du „ADB-Debugging im Nur-Laden-Modus zulassen“. Auf OPPO- und OnePlus-Smartphones aktivierst du „Berechtigungsüberwachung deaktivieren“. Bei anderen Herstellern aktivierst du bei Bedarf ähnliche Optionen. Mehr dazu in den [Hinweisen zu Herstellern](/guide/devices/).
