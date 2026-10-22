---
title: Ice Box per QR-Code einrichten (ohne Root, ohne Computer)
short: Einrichtung per QR-Code
description: Kein Computer? Scanne nach dem Zurücksetzen auf die Werkseinstellungen auf dem Einrichtungsbildschirm einen QR-Code, um Ice Box als Device Owner einzurichten. Für Stock-Android und stocknahes Android ab 7.0.
section: guide
group: activate
order: 8
howto: true
related: guide/device-owner, guide/wireless-debugging, guide/other-modes
---

> [!WARNING]
> Für diese Methode musst du das Smartphone **auf die Werkseinstellungen zurücksetzen**. Dabei werden alle Daten gelöscht. Erstelle vorher eine Sicherung. Sie funktioniert nur mit Stock-Android und stocknahem Android ab Version 7.0. Bei vielen Systemen chinesischer Hersteller wurde diese Funktion entfernt.

Wenn du einen Computer hast, richte Ice Box besser mit dem [Ein-Klick-Aktivator](/guide/activator/) oder dem [Web-Aktivator](/guide/web-activator/) ein. Das Ergebnis ist genau dasselbe, und du musst nichts zurücksetzen.

## Schritte zur Einrichtung {#steps}

0. Speichere den QR-Code unten auf einem anderen Smartphone oder einem Computer oder drucke ihn aus, damit du ihn griffbereit hast.
1. Setze das Smartphone auf die Werkseinstellungen zurück.
2. Tippe auf dem Einrichtungsbildschirm mindestens 6-mal hintereinander auf den Begrüßungstext. Wenn nichts passiert, wurde diese Funktion in deinem System entfernt.
3. Folge den Anweisungen, verbinde dich mit einem WLAN, lade den QR-Code-Scanner herunter und scanne dann den QR-Code unten. Das Smartphone installiert und konfiguriert Ice Box automatisch.

![QR-Code zum Einrichten von Ice Box im Device-Owner-Modus](https://files.catchingnow.com/dpm/icebox_en.png)

## Hinweise {#notes}

- Nach der Einrichtung bleibt der Modus auch über Neustarts und Systemupdates hinweg aktiv, solange die Daten nicht gelöscht werden. Um Ice Box zu deinstallieren, tippe in den Einstellungen von Ice Box auf „Deinstallieren“.
- Nach dieser Einrichtung installiert das System vorinstallierte Apps standardmäßig nicht. Das betrifft allerlei Werbe-Apps, aber auch Funktionen wie die Kamera. Um vorinstallierte Apps zurückzuholen, öffne in den Einstellungen von Ice Box das „Labor“, tippe auf „Vorinstallierte System-Apps aktivieren“ und wähle die Apps aus, die installiert werden sollen.
- Wenn das Smartphone während der Einrichtung meldet, dass es zurückgesetzt werden muss, wurde meist die Netzwerkverbindung manipuliert und Ice Box konnte nicht heruntergeladen werden.

## QR-Codes für andere Apps {#other-apps}

Ein Smartphone kann nur einen Device Owner haben. Wenn du stattdessen eine andere App wie Island oder BlackHouse (小黑屋) als Device Owner einrichten möchtest, scanne den passenden QR-Code unten.

![QR-Codes zur Device-Owner-Einrichtung für Island, BlackHouse und andere Apps](https://files.catchingnow.com/dpm/all_apps.png)
