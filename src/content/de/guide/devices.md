---
title: Hinweise zu den einzelnen Herstellern
short: Hinweise zu Herstellern
description: Hinweise zu Ice Box für Xiaomi, Samsung, Huawei, OPPO, OnePlus, vivo, Sony, Meizu und weitere: Entwickleroptionen, Probleme mit Device Owner, Verknüpfungen und Push-Benachrichtigungen.
section: guide
group: trouble
order: 1
related: guide/samsung-device-owner, guide/wireless-debugging, guide/shortcuts, faq
---

Jeder Hersteller passt Android unterschiedlich stark an, daher verhält sich Ice Box je nach Marke ein wenig anders. Unten findest du die bekannten Probleme, sortiert nach Hersteller. Suche vor der Einrichtung den Hersteller deines Smartphones heraus und lies dir die Hinweise durch.

## Xiaomi / Redmi / POCO {#xiaomi}

- Aktiviere vor der Nutzung des ADB-Modus, des Modus „Debugging über WLAN“ oder des Device-Owner-Modus in den Entwickleroptionen „USB-Debugging (Sicherheitseinstellungen)“.
- Deaktiviere vor der Einrichtung von Device Owner die „MIUI-Optimierung“. Dann fragen Apps nicht bei jedem Einfrieren erneut nach ihren Berechtigungen, und es erscheinen keine Meldungen, die App sei deinstalliert worden.
- Nach der Einrichtung von Device Owner funktioniert die systemeigene Funktion „Dual Apps“ eventuell nicht.
- Wenn sich Verknüpfungen auf dem Startbildschirm nicht hinzufügen lassen, erteile Ice Box in den Systemeinstellungen die Berechtigung für Verknüpfungen auf dem Startbildschirm. Wenn Verknüpfungen hinzugefügt werden, aber nicht funktionieren, erlaube Ice Box, „andere Apps zu starten“ und „Pop-up-Fenster anzuzeigen, während die App im Hintergrund läuft“.
- Ab MIUI 11 kann die Weitergabe von Berechtigungen zwischen Ice Box und Apps wie Brevent, Island und Shizuku fehlschlagen. Deaktiviere zuerst die „MIUI-Optimierung“. Halte dann das Symbol von Ice Box auf dem Startbildschirm gedrückt, öffne „App-Info“ und aktiviere in den Berechtigungen manuell die „Weiteren Berechtigungen“.
- Manche wichtige System-Apps (z. B. Mi Music und der App-Store) lassen sich eventuell nicht einfrieren oder werden nach einem Neustart vom System automatisch aufgetaut. Seit Version 3.30.7 kann Ice Box mehr Systemkomponenten von MIUI / HyperOS einfrieren.
- Wenn du den Device-Owner-Modus nutzt, **deinstalliere Ice Box nicht direkt über den Startbildschirm**. Dabei geht die Device-Owner-Berechtigung verloren, und eingefrorene Apps lassen sich nicht mehr auftauen. Folge stattdessen den Schritten unter [Ice Box deinstallieren](/guide/uninstall/).

## Samsung {#samsung}

- Nach der Einrichtung von Device Owner funktionieren der Sichere Ordner und Dual Messenger eventuell nicht mehr, und das Passwort der Displaysperre kann sogar zurückgesetzt werden. Lies unbedingt zuerst die [Hinweise für Samsung](/guide/samsung-device-owner/).
- Samsung-Nutzern empfehlen wir den Root-Modus, den Modus „Debugging über WLAN“, den Shizuku-Modus oder den ADB-Modus.

## Huawei / Honor {#huawei}

- Aktiviere bei Nutzung des ADB-Modus oder des Modus „Debugging über WLAN“ in den Entwickleroptionen „ADB-Debugging im Nur-Laden-Modus zulassen“.
- Nach der Einrichtung von Device Owner erscheint eventuell bei jedem Einfrieren eine Deinstallationsabfrage und beim Auftauen eine Berechtigungsanfrage. Die systemeigene Funktion „App-Twin“ funktioniert eventuell nicht.
- Wenn sich Verknüpfungen auf dem Startbildschirm nicht hinzufügen lassen, erteile Ice Box in den Systemeinstellungen manuell die Berechtigung zum Hinzufügen von Verknüpfungen. Mit einem Launcher eines Drittanbieters lassen sich Verknüpfungen eventuell nicht aus Ice Box heraus hinzufügen. Halte stattdessen eine freie Stelle auf dem Startbildschirm gedrückt und füge sie dort hinzu.
- Wegen Systembeschränkungen funktioniert automatisches Einfrieren bei „Bildschirm aus“ eventuell nicht. Nutze stattdessen „Tippen auf Home“ oder „Doppeltippen auf Home“.
- In neueren EMUI-Versionen lässt sich der Huawei-Launcher nicht mehr einfrieren. Versionen vor EMUI 9.0 können ihn noch einfrieren.

## OPPO / OnePlus / realme {#oppo}

- Aktiviere bei Nutzung des ADB-Modus oder des Modus „Debugging über WLAN“ in den Entwickleroptionen „Berechtigungsüberwachung deaktivieren“.
- Nach der Einrichtung von Device Owner blinkt in der Benachrichtigungsleiste eventuell „Geräteadministrator ist aktiviert, zum Deaktivieren tippen“.
- Wenn die App-Liste nur wenige Apps zeigt, erlaube Ice Box in den Berechtigungseinstellungen des Systems, die App-Liste zu lesen.
- Manche Apps nutzen den Push-Dienst des Systems. Das System zeigt ihre Benachrichtigungen daher eventuell auch nach dem Einfrieren noch an, die Apps selbst laufen aber nicht im Hintergrund. Wenn du diese Benachrichtigungen nicht möchtest, deaktiviere in den Systemeinstellungen die Benachrichtigungen für die jeweilige App.
- Eine gerade aufgetaute App hat gelegentlich keine Internetverbindung. Schließe die App und öffne sie erneut.

## vivo / iQOO {#vivo}

- Nach der Einrichtung von Device Owner blinkt in der Benachrichtigungsleiste eventuell „Geräteadministrator ist aktiviert, zum Deaktivieren tippen“.
- Wenn die App-Liste nur wenige Apps zeigt, erlaube Ice Box in den Berechtigungseinstellungen des Systems, die App-Liste zu lesen.
- Wie bei OPPO zeigen manche Apps nach dem Einfrieren eventuell weiterhin Benachrichtigungen über den Push-Dienst des Systems an.

## Sony {#sony}

- Entferne vor der Einrichtung von Device Owner die SIM-Karte.
- Wir empfehlen, Ice Box vor dem Upgrade auf Android 9 einzurichten. Android 9 fügt ein verstecktes Konto hinzu, das sich nur schwer entfernen lässt. Wenn du schon aktualisiert hast, nutze die [Einrichtung per QR-Code](/guide/qr-code/). Bereits eingerichtete Smartphones sind nicht betroffen.

## Meizu und Smartisan {#meizu}

- Meizu: Verknüpfungen auf dem Startbildschirm funktionieren eventuell auch nach dem Hinzufügen nicht. Einen passenden Schalter im System haben wir noch nicht gefunden.
- Smartisan: Verknüpfungen werden für keine App unterstützt. Nach der Einrichtung von Device Owner erscheint beim Einfrieren eventuell eine Deinstallationsabfrage, und bei aufgetauten Apps sind standardmäßig alle Berechtigungen erlaubt. Das ist so im System von Smartisan vorgesehen und hat nichts mit Ice Box zu tun.

## Pixel und Stock-Android {#pixel}

- Stock-Android und stocknahe Systeme sind mit allen Modi am besten kompatibel.
- Ohne Computer kannst du Ice Box über die [Einrichtung per QR-Code](/guide/qr-code/) beim Zurücksetzen auf die Werkseinstellungen als Device Owner einrichten oder ab Android 11 den [Modus „Debugging über WLAN“](/guide/wireless-debugging/) nutzen.
