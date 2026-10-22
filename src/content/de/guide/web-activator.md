---
title: Ice Box mit dem Web-Aktivator aktivieren
short: Web-Aktivator
description: Ohne Installation: Aktiviere den Device-Owner- oder ADB-Modus von Ice Box mit dem Web-Aktivator im Browser über WebUSB. Windows, macOS, Linux. Chrome empfohlen.
section: guide
group: activate
order: 3
howto: true
related: guide/device-owner, guide/activator, guide/adb
---

Der Web-Aktivator wurde von [@web1n](https://github.com/web1n) entwickelt. Er erledigt dieselbe Aufgabe wie der exe-Aktivator und funktioniert mit jedem Betriebssystem. Wir empfehlen Chrome.

[Web-Aktivator öffnen](https://adb.http.gs/icebox.html)

Der Web-Aktivator kann zwei Modi aktivieren:

- **Device-Owner-Modus**: Einmal aktivieren und er funktioniert dauerhaft, kann auf manchen Smartphones aber Nebenwirkungen haben.
- **ADB-Modus**: keine Nebenwirkungen, aber du musst das Smartphone nach jedem Neustart oder jeder Änderung der USB-Einstellungen des Systems wieder mit einem Computer verbinden und neu aktivieren.

## Mögliche Nebenwirkungen des Device-Owner-Modus {#side-effects}

Die Systeme von Samsung und chinesischen Herstellern passen Android oft an, was zu Kompatibilitätsproblemen mit dem Device-Owner-Modus führt. Häufig sind:

- Samsung-Smartphones werden eventuell vom System mit einem Passwort gesperrt (bisher etwa 4 Meldungen bei 200.000 Nutzern). Bitte lies zuerst die [Hinweise für Samsung](/guide/samsung-device-owner/).
- Bei jedem Einfrieren erscheint eine Deinstallationsabfrage und beim Auftauen eine Berechtigungsanfrage (Huawei, Smartisan).
- In der Benachrichtigungsleiste blinkt „Geräteadministrator ist aktiviert, zum Deaktivieren tippen“ (OPPO, vivo).
- Die systemeigene Funktion für App-Klone (Dual Apps) funktioniert nicht mehr (Huawei, MIUI).
- Eine gerade aufgetaute App hat gelegentlich keine Internetverbindung. Schließe die App und öffne sie erneut (OnePlus, Smartisan und andere).

Wenn du diese Probleme nicht in Kauf nehmen möchtest, wähle den ADB-Modus. Er braucht ebenfalls kein Root, du musst ihn aber nach jedem Neustart des Smartphones erneut mit einem Computer aktivieren.

## So aktivierst du {#steps}

1. Stelle sicher, dass Ice Box auf dem Smartphone installiert ist. Entferne die Displaysperre. Entferne bei Sony-Smartphones die SIM-Karte. Aktiviere auf Xiaomi-Smartphones „USB-Debugging (Sicherheitseinstellungen)“ und deaktiviere die „MIUI-Optimierung“.
2. Verbinde das Smartphone per USB-Kabel mit dem Computer und schließe auf dem Computer alle Sicherheitsprogramme, PC-Suiten und Smartphone-Manager.
3. Öffne am Computer den [Web-Aktivator](https://adb.http.gs/icebox.html) in Chrome, verbinde dann dein Gerät und aktiviere.

Vor der Aktivierung des Device-Owner-Modus musst du dich außerdem zuerst von allen Konten auf dem Smartphone abmelden. Siehe [Einrichtung des Device-Owner-Modus](/guide/device-owner/#steps).
