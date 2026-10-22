---
title: Ice Box mit dem Ein-Klick-Aktivator aktivieren (Windows)
short: Ein-Klick-Aktivator
description: Aktiviere mit dem Ein-Klick-Aktivator auf einem Windows-PC den Device-Owner-Modus oder ADB-Modus von Ice Box, ohne Befehle einzutippen. Mit Download, Schritten und FAQ.
section: guide
group: activate
order: 2
howto: true
faq: true
related: guide/device-owner, guide/web-activator, guide/adb, guide/autumnbox
---

Der Ein-Klick-Aktivator wurde von [@web1n](https://github.com/web1n) entwickelt. Er läuft auf Windows-Computern und aktiviert den Device-Owner-Modus von Ice Box, sodass du keine ADB-Befehle von Hand eintippen musst.

[[activator-download]]

Wenn du keinen Windows-Computer hast oder mit dem exe-Aktivator Probleme auftreten, nutze stattdessen den [Web-Aktivator](/guide/web-activator/). Er macht genau dasselbe.

## Bitte zuerst lesen {#before}

Die Systeme chinesischer Hersteller passen Android oft an, was zu Kompatibilitätsproblemen mit dem Device-Owner-Modus führt. Häufig sind:

- Samsung-Smartphones werden eventuell vom System mit einem Passwort gesperrt (bisher etwa 4 Meldungen bei 200.000 Nutzern). Bitte lies zuerst die [Hinweise für Samsung](/guide/samsung-device-owner/).
- Bei jedem Einfrieren erscheint eine Deinstallationsabfrage und beim Auftauen eine Berechtigungsanfrage (Huawei, Smartisan).
- In der Benachrichtigungsleiste blinkt „Geräteadministrator ist aktiviert, zum Deaktivieren tippen“ (OPPO, vivo).
- Die systemeigene Funktion für App-Klone (Dual Apps) funktioniert nicht mehr (Huawei, MIUI).
- Eine gerade aufgetaute App hat gelegentlich keine Internetverbindung. Schließe die App und öffne sie erneut (OnePlus, Smartisan und andere).

Wenn du diese Probleme nicht in Kauf nehmen möchtest, nutze den [ADB-Modus](/guide/adb/). Er braucht ebenfalls kein Root, du musst ihn aber nach jedem Neustart des Smartphones erneut mit einem Computer aktivieren.

Der Device-Owner-Modus dagegen erspart dir den wiederholten Gang zum Computer. Einmal eingerichtet, funktioniert er dauerhaft, auch über Neustarts und Systemupdates hinweg.

## Schritte {#steps}

Wenn du dich entschieden hast, Ice Box im Device-Owner-Modus zu aktivieren, gehe so vor:

1. Stelle sicher, dass Ice Box auf dem Smartphone installiert ist. Entferne die Displaysperre. Entferne bei Sony-Smartphones die SIM-Karte. Aktiviere auf Xiaomi-Smartphones „USB-Debugging (Sicherheitseinstellungen)“ und deaktiviere die „MIUI-Optimierung“.
2. Melde dich in den Systemeinstellungen von allen Konten ab, z. B. Xiaomi-, Huawei- und Google-Konten. Nach der Aktivierung kannst du dich wieder anmelden.
3. Lade den Aktivator herunter und entpacke ihn. Entpacke ihn auf dem Computer, nicht in den Speicher des Smartphones.
4. Aktiviere auf dem Smartphone das USB-Debugging und verbinde es per USB-Kabel mit dem Computer.
5. Klicke im Aktivator auf „Ice Box aktivieren“ (激活冰箱).

Sobald es geklappt hat, öffne Ice Box und leg los.

Wenn andere Probleme auftreten, prüfe zuerst, ob wirklich alle Systemkonten entfernt wurden. Wenn es danach immer noch nicht klappt, vergleiche die Protokollausgabe des Aktivators mit der [FAQ zum Device-Owner-Modus](/guide/device-owner/#faq).

## FAQ {#faq}

### Der Aktivator lädt endlos

Entpacke vor dem Start alle Dateien aus dem Archiv des Aktivators auf deinen Computer. Entpacke sie nicht in den Speicher des Smartphones und doppelklicke nicht auf die exe-Datei innerhalb des Archivs.

### Der Aktivator findet das Gerät nicht

Prüfe, ob USB-Debugging aktiviert ist, ob dein Kabel Datenübertragung unterstützt, ob der Treiber des Smartphones auf dem Computer installiert ist und ob keine PC-Suite, kein Smartphone-Manager und keine Antivirensoftware die Verbindung blockiert.
