---
title: Ice Box mit AutumnBox aktivieren
short: AutumnBox
description: AutumnBox ist eine Toolbox für Windows, die ADB-Aufgaben vereinfacht und den Device-Owner-Modus von Ice Box mit einem Klick aktivieren kann. Schritte und worauf du achten solltest.
section: guide
group: activate
order: 4
howto: true
related: guide/device-owner, guide/activator, guide/web-activator
---

AutumnBox (秋之盒) ist eine Ein-Klick-Toolbox, die ADB-Vorgänge vereinfacht. Vielen Dank an [zsh2401](https://zsh2401.top/) für die viele Arbeit bei der Entwicklung.

AutumnBox läuft nur unter Windows. Wenn dein Computer macOS oder Linux nutzt, verwende den [Web-Aktivator](/guide/web-activator/) oder folge den [Schritten für die Einrichtung per Befehlszeile](/guide/device-owner/#steps).

> [!NOTE]
> Die Website von AutumnBox ist derzeit nicht erreichbar, und das Projekt wird nicht mehr aktualisiert. Quellcode und ältere Versionen findest du auf [GitHub](https://github.com/zsh2401/AutumnBox). Wir empfehlen stattdessen den [Ein-Klick-Aktivator](/guide/activator/) oder den [Web-Aktivator](/guide/web-activator/), die dieselbe Aufgabe erledigen.

## Bitte zuerst lesen {#before}

Die Systeme chinesischer Hersteller bringen oft eigene Funktionen mit, und diese führen zu Kompatibilitätsproblemen mit dem Device-Owner-Modus. Häufig sind:

- Samsung-Smartphones werden eventuell vom System mit einem Passwort gesperrt (bisher etwa 4 Meldungen bei 200.000 Nutzern). Bitte lies zuerst die [Hinweise für Samsung](/guide/samsung-device-owner/).
- Bei jedem Einfrieren erscheint eine Deinstallationsabfrage und beim Auftauen eine Berechtigungsanfrage (Huawei, Smartisan).
- In der Benachrichtigungsleiste blinkt „Geräteadministrator ist aktiviert, zum Deaktivieren tippen“ (OPPO, vivo).
- Die systemeigene Funktion für App-Klone (Dual Apps) funktioniert nicht mehr (Huawei, MIUI).
- Eine gerade aufgetaute App hat gelegentlich keine Internetverbindung. Schließe die App und öffne sie erneut (OnePlus und andere).
- Auf Sony-Smartphones empfehlen wir, Ice Box vor dem Upgrade auf Android 9 einzurichten. Android 9 fügt ein verstecktes Konto hinzu, das sich nur schwer entfernen lässt. Wenn du schon aktualisiert hast, nutze die [Einrichtung per QR-Code](/guide/qr-code/). Bereits eingerichtete Smartphones sind nicht betroffen.

Wenn du diese Probleme nicht in Kauf nehmen möchtest, nutze [Shizuku](/guide/shizuku/) oder den [ADB-Modus](/guide/adb/). Sie brauchen ebenfalls kein Root, du musst sie aber nach jedem Neustart des Smartphones erneut aktivieren.

Der Device-Owner-Modus dagegen erspart dir den wiederholten Gang zum Computer. Einmal eingerichtet, funktioniert er dauerhaft, auch über Neustarts und Systemupdates hinweg.

## Schritte {#steps}

Wenn du dich entschieden hast, Ice Box im Device-Owner-Modus zu aktivieren, gehe so vor:

1. Stelle sicher, dass Ice Box auf dem Smartphone installiert ist. Entferne die Displaysperre. Entferne bei Sony-Smartphones die SIM-Karte. Aktiviere auf Xiaomi-Smartphones „USB-Debugging (Sicherheitseinstellungen)“ und deaktiviere die „MIUI-Optimierung“.
2. Entferne in den Systemeinstellungen alle Konten, z. B. Xiaomi-, Huawei- und Google-Konten. Nach der Aktivierung kannst du dich wieder anmelden.
3. Lade AutumnBox herunter und öffne es.
4. Aktiviere auf dem Smartphone das USB-Debugging und verbinde es mit dem Computer. Wenn keine Verbindung zustande kommt, ist meist der Treiber nicht installiert oder eine andere PC-Suite stört. Prüfe den Treiber und schließe alle anderen Programme zur Smartphone-Verwaltung.
5. Klicke in AutumnBox auf die Funktion „Ice Box aktivieren“ (激活冰箱).

Normalerweise kannst du Ice Box jetzt öffnen und loslegen. Wenn Probleme auftreten, prüfe zuerst, ob wirklich alle Systemkonten entfernt wurden. Wenn es danach immer noch nicht klappt, vergleiche das Ausgabeprotokoll mit der [FAQ zum Device-Owner-Modus](/guide/device-owner/#faq).
