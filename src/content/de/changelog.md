---
title: Änderungsprotokoll von Ice Box
short: Änderungsprotokoll
description: Was sich in jeder Version von Ice Box geändert hat, von 3.4.0 bis zur neuesten Version, mit neuen Funktionen, verbesserter Kompatibilität und Fehlerbehebungen.
section: product
toc: false
priority: 0.5
related: download, features
---

Deine aktuelle Versionsnummer und den Vertriebskanal findest du in Ice Box unter „Einstellungen > Über“. Infos zu den einzelnen Vertriebskanälen und die neueste APK-Datei findest du auf der [Download-Seite](/download/#channels).

## 3.30.14 {#v3-30-14}

- Neue Sprachen: Spanisch, Portugiesisch, Französisch, Deutsch, Indonesisch, Türkisch, Vietnamesisch und Japanisch
- Ice Box liest die Zwischenablage nicht mehr automatisch; Designs und Listen importierst du mit „Aus Zwischenablage importieren“ in den Einstellungen
- Google Play-Käufe, die Pro manchmal nicht freigeschaltet haben, wurden behoben, auch bei später abgeschlossenen Zahlungen
- Android 17: Der Kopplungsassistent für Debugging über WLAN bleibt nicht mehr hängen, wenn der Status von USB-Debugging nicht gelesen werden kann
- Kompatibilität der Kopplung für Debugging über WLAN verbessert

## 3.30.11 {#v3-30-11}

- Darstellungsprobleme auf faltbaren Geräten behoben
- Unterstützung für die Xiaomi-Berechtigung zum Lesen der App-Liste
- Debugging über WLAN: Ab der zweiten Kopplung muss das VPN nicht mehr ausgeschaltet werden

## 3.30.10 {#v3-30-10}

- Unterstützung für eine Speicherseitengröße von 16 KB
- Anpassungen an die Prüfanforderungen des Xiaomi App Stores

## 3.30.9 {#v3-30-9}

- Verbesserung: Nach der ersten erfolgreichen Kopplung muss „USB-Debugging“ nicht mehr aktiviert bleiben
- Bessere Kompatibilität des Hintergrunddienstes

## 3.30.8 {#v3-30-8}

- Video-Anleitung zu den Hinweisen für den Start von „Debugging über WLAN“ hinzugefügt
- Behoben: Auf manchen Geräten erschien häufig der Berechtigungsdialog „Ice Box möchte xxx starten“

## 3.30.7 {#v3-30-7}

- Unter MIUI und HyperOS lassen sich mehr Systemkomponenten einfrieren
- Ziel-SDK auf 35 aktualisiert

## 3.25.0 {#v3-25-0}

- Anleitung zum kabellosen Aktivieren von Shizuku hinzugefügt
- Shizuku aktualisiert, mit Unterstützung für Sui
- Unterstützung für monochrome Symbole
- Dynamische Farben in der Oberfläche ab Android S, mit neuem weichgezeichnetem Hintergrund
- Der Tag-/Nachtmodus kann dem System folgen
- Die Version für China unterstützt WeChat Pay
- Einige verschobene Layouts korrigiert
- System-Plug-in entfernt, um die Anforderungen von Google Play zu erfüllen

## 3.22.0 {#v3-22-0}

- Auf Verlangen des Google Play Protect-Teams wurde der Modus „System-Plug-in“ entfernt. Wenn du ihn brauchst, suche im Internet nach einer älteren Version und installiere diese
- Neu: Das helle oder dunkle Design kann automatisch mit dem System wechseln

## 3.21.0 {#v3-21-0}

- Einige Funktionen im Shizuku-Modus repariert
- SDK auf Anforderung von Alipay aktualisiert
- Weitere Fehlerbehebungen

## 3.20.0 {#v3-20-0}

- Behoben: Einige ungewöhnliche Bestellnummern ließen sich nicht aktivieren
- Versuchte Korrektur (noch im Test): Unter MIUI und einigen anderen ROMs funktionierten die integrierten Doppel-Apps nicht mehr, nachdem Ice Box als Device Owner eingerichtet wurde
- Die PIN-Sperre unterstützt jetzt Gesichtserkennung

## 3.19.0 {#v3-19-0}

- Neue Option: Einfrier-Schaltfläche mittig platzieren
- Fabric, das eingestellt wird, durch Microsoft App Center ersetzt
- Einige Fehlerbehebungen

## 3.18.5 {#v3-18-5}

- Behoben: Symbole wurden manchmal falsch skaliert
- Verschobene Animationen auf einigen Bildschirmen korrigiert

## 3.18.2 {#v3-18-2}

- Darstellungsprobleme mit Gestensteuerung auf einigen Systemen behoben

## 3.18.0 {#v3-18-0}

- Neue Option: Automatisch eine Verknüpfung hinzufügen, wenn eine App zur Einfrierliste hinzugefügt wird.
- Neue Option: Wählen, ob die Einfrier-Schaltfläche nach links oder rechts gewischt wird.

## 3.17.5 {#v3-17-5}

- Kompatibilität mit Android Q Beta 6 korrigiert.
- Die in Festlandchina genutzten Server wurden für mehr Stabilität aktualisiert. Nutzer in China sollten aktualisieren; Nutzer außerhalb Chinas sind nicht betroffen.
- Weitere Fehlerbehebungen und Leistungsverbesserungen.

## 3.17.0 {#v3-17-0}

- Neue Begleit-App: IceBridge.
- Layout der Fingerabdrucksperre geändert, damit die PIN-Schaltfläche auf Geräten mit Fingerabdrucksensor im Display erreichbar ist.

## 3.16.5 {#v3-16-5}

- Unterstützung für eine neue Begleit-App: 划卡冻结 (zum Einfrieren wischen, nur mit Root)
- Fehlerbehebungen und Leistungsverbesserungen

## 3.16.0 {#v3-16-0}

- Seite zur Vorstellung von Begleit-Apps hinzugefügt

## 3.15.8 {#v3-15-8}

- Einige Probleme behoben, die im Hintergrund den Akku belasten konnten
- Anleitungen und Hilfedokumente nutzen jetzt Links, die in China gehostet werden, damit sie schneller laden

## 3.15.3 {#v3-15-3}

- Im Root-Modus und im Simple-ADB-Modus werden jetzt auch App-Klone angezeigt, die mit der Doppel-App-Funktion des Systems erstellt wurden
- Konflikt mit den Gesten von Android Q Beta 3 behoben

## 3.14.2 {#v3-14-2}

- Ein allgemein nutzbares SDK hinzugefügt: [Delegated Scopes Manager](https://github.com/heruoxin/Delegated-Scopes-Manager)
- Experimentelle Unterstützung für WeChat Pay und QQ Pay (manuelle Überweisung). Siehe [WeChat Pay](/purchase/wechat-pay/)

## 3.14.0 {#v3-14-0}

- Neuer Modus „Simple ADB“ für Geräte ohne Root, auf denen sich Device Owner nur umständlich einrichten lässt. Dieser Modus muss nach jedem Neustart erneut aktiviert werden
- Auf Shizuku API v3 aktualisiert
- Behoben: Unter Android Q startete die App beim Doppeltippen auf eine Verknüpfung nicht
- Weitere Fehlerbehebungen

## 3.13.0 {#v3-13-0}

- Grundlegende Kompatibilitätskorrekturen für Android Q
- Alle Funktionen arbeiten jetzt auch im Arbeitsprofil von Island
- Unterstützung für 权限猫
- Wenn die Optionen von „Automatisch einfrieren“ nicht richtig funktionieren, setze Ice Box in den Systemeinstellungen manuell auf die Ausnahmeliste der Akku-Optimierung. Wenn du „Automatisch einfrieren“ nicht brauchst, deaktiviere die Option, dann läuft Ice Box überhaupt nicht im Hintergrund

## 3.12.2 {#v3-12-2}

- Symbole lassen sich jetzt sortieren
- Mehrere Verknüpfungen auf einmal hinzufügen ist jetzt ab Android 8.0 möglich (wegen Systembeschränkungen klappt das nicht garantiert)

## 3.12.0 {#v3-12-0}

- Layout einiger Seiten neu geschrieben
- Funktion „Hinweis bei neuen Apps“ neu geschrieben
- Kompatibel mit dem Hinzufügen von Verknüpfungen aus Drittanbieter-Apps wie Fluid NG
- Wegen Einschränkungen im Huawei-System können Huawei-Nutzer mit einem Drittanbieter-Launcher keine Verknüpfungen aus Ice Box heraus hinzufügen. Drücke stattdessen lange auf eine leere Stelle des Startbildschirms, um sie hinzuzufügen

## 3.11.1 {#v3-11-1}

- Fehlerbehebungen
- Layout und Elemente der Oberfläche angepasst.

## 3.10.0 {#v3-10-0}

- Behoben: Unter Android 9 stürzte die App-Liste wegen eines Konflikts mit Nevolution ab.
- Die Aktivierungsanleitung beim ersten Start wurde neu gestaltet und enthält einen Link zum Ein-Klick-Aktivator.

## 3.9.9 {#v3-9-9}

- Wenn Ice Box ohne Root per QR-Code eingerichtet wurde, kannst du vorinstallierte Apps in Ice Box unter „Einstellungen > Labor > Vorinstallierte System-Apps aktivieren“ aktivieren. Nicht aktivierte Apps bleiben deinstalliert.
- Weitere Fehlerbehebungen.

## 3.9.8 {#v3-9-8}

- Einige Abstürze beim Bearbeiten der Liste behoben
- Im Modus ohne Root lässt sich der Name der Organisation auf dem Sperrbildschirm jetzt anpassen (das System schreibt ihn vor, deshalb kann er nicht entfernt werden)

## 3.9.6 {#v3-9-6}

- Filter- und Menüschaltfläche im Bildschirm zum Bearbeiten der Liste zusammengelegt
- Modus „Root (am schnellsten)“ hinzugefügt

## 3.9.5.1 {#v3-9-5-1}

- Der Status für schnelles Einfrieren in der Benachrichtigungsleiste folgt jetzt dem Status von „Automatisch einfrieren“
- Behoben: Einige Nutzer ohne Root konnten keine Verbindung zum Kaufserver herstellen

## 3.9.5 {#v3-9-5}

- Das SDK unterstützt jetzt das Installieren und Deinstallieren von Apps. Entwickler sind herzlich eingeladen, es einzubinden: [IceBox-SDK](https://github.com/heruoxin/IceBox-SDK)
- Protokollzentrale im SDK hinzugefügt. Jede Aktion von Drittanbieter-Apps zum Einfrieren, Installieren und Deinstallieren wird aufgezeichnet
- Wenn BlackHouse (小黑屋) bereits als Device Owner eingerichtet ist, kann Ice Box direkt genutzt werden
- Neue Spaßoption: Soundeffekt beim Schwertziehen

## 3.9.3 {#v3-9-3}

- Ziel auf 28 aktualisiert
- Engine „Root (schneller Modus)“ verbessert, damit sie unter Android P richtig funktioniert
- Behoben: Aus der Liste entfernte Apps wurden gelegentlich trotzdem eingefroren

## 3.9.2 {#v3-9-2}

- Ziel-API auf 26 aktualisiert. Android verlangt, dass im Hintergrund laufende Apps eine Benachrichtigung anzeigen. Wenn Funktionen aktiv sind, die im Hintergrund laufen, z. B. „Automatisch einfrieren“, muss Ice Box daher eine Benachrichtigung in der Benachrichtigungsleiste anzeigen. Du kannst diese Benachrichtigung von Ice Box in den Systemeinstellungen suchen und deaktivieren, ohne dass Funktionen beeinträchtigt werden

- Behoben: In der vorherigen Beta ließ sich der Modus ohne Root manchmal nicht öffnen
- Behoben: Beim Start fehlten gelegentlich Apps in der Liste
- Auf eine neue Datenbank umgestellt
- Island-API aktualisiert
- Weitere Updates und Fehlerbehebungen

## 3.9.0 {#v3-9-0}

- Neu: Listen mit System-Apps teilen, die sich sicher einfrieren lassen:
Manche Smartphone-ROMs bringen viel vorinstallierte Bloatware und Werbung mit, und viele Nutzer räumen auf, indem sie diese Apps einzeln einfrieren.
Wenn du darin gut bist, kannst du deine Liste eingefrorener vorinstallierter Apps mit anderen teilen oder sie für das nächste Flashen deines Smartphones aufheben.
(Listen erstellen können vorerst nur einige aktive Nutzer)

- Neu: QR-Code-Erkennung:
Wenn du Ice Box erneut aktivierst, musst du die lange Bestellnummer nicht mehr eintippen. Mach einen Screenshot der Alipay-Rechnung, teile ihn und wähle „Barcode-Erkennung (Ice Box)“, um ihn zu erkennen und zu aktivieren.

- Keine Begrenzung der Anzahl an Tabs mehr

## 3.8.6 {#v3-8-6}

- Verknüpfungen erscheinen im Launcher von Android P jetzt etwas häufiger
- Option im Labor hinzugefügt, die das [Xposed-Modul 1ceboxTurner](https://repo.xposed.info/module/gs.https.icebox.tuner) öffnet (beigesteuert von @web1n)
- Weitere Fehlerbehebungen

## 3.8.1 {#v3-8-1}

- Unterstützung für „In anderen Apps konfigurieren“ (android.intent.action.SHOW_APP_INFO) hinzugefügt, das mit Apps wie Greenify und AppOps funktioniert.
- Weitere kleine Fehlerbehebungen.

## 3.7.6 {#v3-7-6}

- Unterstützung für Magisk 16.3.
- Behoben: Die Aktion zum Sperren des Bildschirms funktionierte im Modus Shizuku Manager und im Brevent-Modus nicht.
- Weitere kleine Fehlerbehebungen.

## 3.7.0 {#v3-7-0}

- Apps ohne Symbol können wieder zu Ice Box hinzugefügt werden.
- Behoben: Langes Drücken wählte manchmal die falsche App aus.
- Brevent-SDK aktualisiert.
- Weitere Fehlerbehebungen.

(Versionshinweise der Betaversionen ausgelassen)

## 3.6.1 {#v3-6-1}

- Das Design-Panel unterstützt jetzt Transparenz.
- Verknüpfung „Alle auftauen“ hinzugefügt.
- Wenn die Fingerabdrucksperre aktiv ist, werden die Inhalte von Ice Box in der App-Übersicht ausgeblendet.
- Neues SDK. Andere Einfrier-Apps sind herzlich eingeladen, es einzubinden: [IceBox-SDK](https://github.com/heruoxin/IceBox-SDK)

## 3.5.2 Beta {#v3-5-2}

- Einige Optionen im Labor hinzugefügt:
- Wenn du das Icon-Pack gewechselt hast, tippe auf „Symbol-Cache leeren“
- Wenn die Symbolgrößen uneinheitlich sind, leere den Cache und deaktiviere dann eventuell „Symbolgröße angleichen“
- Mit „Bei ‚Zurück‘ im Hintergrund behalten“ legst du fest, ob Ice Box im Hintergrund zwischengespeichert bleibt
- Im Labor kannst du zwischen mehreren Engines wechseln. Stelle vor jedem Wechsel sicher, dass alle Apps aufgetaut sind
- Mehr Filter und Sortieroptionen im Editor für die App-Liste hinzugefügt

## 3.5.1 {#v3-5-1}

- Kompatibilität mit Android P korrigiert.
- Fehlerbehebungen und Leistungsverbesserungen.

## 3.4.0 {#v3-4-0}

- Brevent und Shizuku Manager als Engines hinzugefügt. Nutze diesen Modus, wenn du kein Root hast und sich Island oder der Device-Owner-Modus nur umständlich einrichten lassen.
