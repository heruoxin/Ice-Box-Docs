---
title: Device-Owner-Modus einrichten
short: Device-Owner-Modus
description: Richte den Device-Owner-Modus von Ice Box ohne Root ein: Konten kurz entfernen und am Computer einen ADB-Befehl ausführen. Bleibt auch nach Neustarts und Systemupdates aktiv.
section: guide
group: activate
order: 1
howto: true
faq: true
related: guide/activator, guide/web-activator, guide/qr-code, guide/samsung-device-owner
---

Wenn dein Smartphone gerootet ist, öffne einfach Ice Box und leg los. Eine weitere Einrichtung ist nicht nötig. Wenn sich dein Smartphone nicht rooten lässt und du etwas möchtest, das du einmal einrichtest und dann dauerhaft nutzt, wähle den Device-Owner-Modus. Für die Einrichtung brauchst du einen Computer. Bitte lies daher zuerst diese ganze Seite.

## Was ist Device Owner? {#what}

Device Owner (Geräteinhaber) ist eine Funktion der Android-Unternehmensverwaltung. Damit lassen sich beliebige Apps ohne Root einfrieren und auftauen. Ice Box nutzt nur die dafür nötigen Fähigkeiten, etwa das Einfrieren von Apps.

- Ein Smartphone kann immer nur einen Device Owner haben.
- Er lässt sich nur per ADB-Befehl oder QR-Code festlegen. Ein Einschalten unter „Apps zur Geräteverwaltung“ in den Einstellungen des Smartphones funktioniert nicht und verschafft dir diese Berechtigung nicht.
- Einmal festgelegt, musst du ihn nach einem Neustart oder einem Systemupdate nicht erneut einrichten.

## Bitte zuerst lesen {#before}

Die Systeme chinesischer Hersteller bringen oft eigene Funktionen mit, und diese führen zu Kompatibilitätsproblemen mit dem Device-Owner-Modus. Häufig sind:

- Samsung-Smartphones werden eventuell vom System mit einem Passwort gesperrt. Lies unbedingt zuerst die [Hinweise für Samsung](/guide/samsung-device-owner/).
- Bei jedem Einfrieren erscheint eine Deinstallationsabfrage und beim Auftauen eine Berechtigungsanfrage (Huawei, Smartisan).
- In der Benachrichtigungsleiste blinkt „Geräteadministrator ist aktiviert, zum Deaktivieren tippen“ (OPPO, vivo).
- Die systemeigene Funktion für App-Klone (Dual Apps) funktioniert nicht mehr (Huawei, MIUI).
- Eine gerade aufgetaute App hat gelegentlich keine Internetverbindung. Schließe die App und öffne sie erneut (OnePlus, Smartisan und andere).

Wenn du diese Probleme nicht in Kauf nehmen möchtest, nimm den [ADB-Modus](/guide/adb/) oder den [Modus „Debugging über WLAN“](/guide/wireless-debugging/). Sie brauchen ebenfalls kein Root, du musst sie aber nach jedem Neustart des Smartphones erneut aktivieren.

## Aktivator oder Befehlszeile? {#tools}

Wenn du dich mit ADB und der Befehlszeile nicht auskennst, nutze eines der Aktivierungstools. Das Ergebnis ist genau dasselbe wie mit der Befehlszeile:

- [Ein-Klick-Aktivator](/guide/activator/): für Windows-Computer.
- [Web-Aktivator](/guide/web-activator/): funktioniert unter Windows, macOS und Linux. Chrome wird empfohlen.
- [AutumnBox (秋之盒)](/guide/autumnbox/): für Windows-Computer.

Kein Computer? Probiere die [Einrichtung per QR-Code](/guide/qr-code/). Das Ergebnis ist genau dasselbe, allerdings musst du das Smartphone vorher auf die Werkseinstellungen zurücksetzen, und manche Systeme chinesischer Hersteller unterstützen sie nicht.

## Einrichtung per Befehlszeile {#steps}

1. Stelle sicher, dass auf deinem Smartphone Android 7.0 oder höher läuft und die neueste Version von Ice Box installiert ist. Stelle sicher, dass du mit [ADB](https://developer.android.com/tools/adb)-Befehlen umgehen kannst und diese ganze Seite gelesen hast.
2. Entferne bei Sony-Smartphones die SIM-Karte. Aktiviere auf Xiaomi-Smartphones in den Entwickleroptionen „USB-Debugging (Sicherheitseinstellungen)“ und deaktiviere die „MIUI-Optimierung“.
3. Öffne auf dem Smartphone „Einstellungen > Konten“ und entferne alle Konten, auch Systemkonten wie Google-, Xiaomi- und Huawei-Konten. Nach der Einrichtung kannst du dich wieder anmelden.
4. Wenn du mehrere Nutzer, den Gastmodus oder App-Klone (Dual Apps) eingerichtet hast, deaktiviere oder entferne auch diese. Nach der Einrichtung kannst du sie wieder aktivieren.
5. Führe den folgenden Befehl auf deinem Computer aus (ein Terminal-Emulator auf dem Smartphone funktioniert nicht).

```
adb shell dpm set-device-owner com.catchingnow.icebox/.receiver.DPMReceiver
```

Wenn eine Meldung wie „Success“ erscheint, hat die Einrichtung geklappt. Öffne Ice Box und leg los. Du kannst die entfernten Konten jetzt auch wieder hinzufügen.

ADB gibt es als offiziellen Download von Google: [Windows](https://dl.google.com/android/repository/platform-tools-latest-windows.zip), [macOS](https://dl.google.com/android/repository/platform-tools-latest-darwin.zip), [Linux](https://dl.google.com/android/repository/platform-tools-latest-linux.zip).

## Einrichtung hat nicht geklappt? {#faq}

### Es erscheint „Der Befehl "adb" ist entweder falsch geschrieben oder konnte nicht gefunden werden.“

Vermutlich bist du mit der Befehlszeile am Computer nicht vertraut. Wir empfehlen, stattdessen mit dem [Ein-Klick-Aktivator](/guide/activator/) oder dem [Web-Aktivator](/guide/web-activator/) zu aktivieren.

### Der Aktivator lädt endlos

Entpacke vor dem Start alle Dateien aus dem Archiv des Aktivators auf deinen Computer. Entpacke sie nicht in den Speicher des Smartphones und doppelklicke nicht auf die exe-Datei innerhalb des Archivs.

### Es erscheint „error: no devices/emulators found“

Das Smartphone ist nicht mit dem Computer verbunden. Prüfe, ob USB-Debugging aktiviert ist, ob der Treiber des Smartphones korrekt auf dem Computer installiert ist und ob keine PC-Suite, kein Smartphone-Manager und keine Antivirensoftware die Verbindung blockiert.

### Es erscheint „Not allowed to ... already several accounts on the device“

In Schritt 3 wurden nicht alle Konten entfernt. Melde dich von allen Konten auf dem Smartphone ab, auch von deinem Google-Konto und von integrierten Systemkonten wie Xiaomi- und Huawei-Konten. Entferne bei Sony-Smartphones die SIM-Karte und starte neu.

### Es erscheint „Not allowed to ... already several users on the device“

Die mehreren Nutzer oder App-Klone aus Schritt 4 wurden nicht alle entfernt. Entferne oder deaktiviere alle zusätzlichen Nutzer, den Gastmodus und App-Klone.

### Es erscheint „Trying to set the device owner, but device owner is already set.“

Auf dem Smartphone ist bereits eine andere App als Device Owner eingerichtet, und ein Smartphone kann nur einen Device Owner haben. Wenn diese App mit Ice Box zusammenarbeitet, etwa Island oder BlackHouse (小黑屋), stelle Ice Box auf den passenden Modus um und du kannst es sofort nutzen. Siehe [weitere Modi](/guide/other-modes/).

### Xiaomi-Smartphones melden „Neither user xxx nor current process has android.permission.MANAGE_DEVICE_ADMINS“

Aktiviere in den Systemeinstellungen unter „Entwickleroptionen“ manuell „USB-Debugging (Sicherheitseinstellungen)“. Wenn es dann immer noch fehlschlägt, deaktiviere die „MIUI-Optimierung“ und versuche es noch einmal.

## Fragen nach erfolgreicher Einrichtung {#faq-after}

### Ist ein Hinweis wie „Dieses Gerät wird von deiner Organisation verwaltet“ in der Benachrichtigungsleiste normal?

Ja. So funktioniert der Device-Owner-Modus. Der Text wird vom System angezeigt und lässt sich nicht entfernen. Du kannst aber im „Labor“ von Ice Box unter „Name der Organisation“ einen beliebigen Text festlegen.

### Laut den Einstellungen mancher Smartphones kann der Device Owner persönliche Daten wie Kalender und E-Mails lesen. Liest Ice Box diese?

Nein. Ice Box nutzt nur die Device-Owner-Berechtigungen, die zum Einfrieren von Apps nötig sind. Andere Berechtigungen verwendet es nicht, und es liest niemals deinen Kalender, deine E-Mails oder ähnliche Daten.

### Wie entferne ich die Berechtigung von Ice Box, wenn ich es nicht mehr nutzen möchte?

Taue zuerst alle Apps auf und tippe dann in den Einstellungen von Ice Box auf „Deinstallieren“. Nach deiner Bestätigung entfernt Ice Box seine Device-Owner-Berechtigung und deinstalliert sich selbst. Siehe [Ice Box deinstallieren](/guide/uninstall/).

### Warum kann ich Apps nicht auftauen, die ich vorher im Root- oder ADB-Modus eingefroren habe?

Die Modi sind nicht miteinander kompatibel. Wechsle im „Labor“ von Ice Box zurück in deinen vorherigen Modus. Apps müssen im selben Modus aufgetaut werden, in dem sie eingefroren wurden.
