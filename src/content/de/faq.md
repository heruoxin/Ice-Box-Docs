---
title: Ice Box FAQ
short: FAQ
description: "Ice Box FAQ: Root-Zugriff, der Device-Owner-Hinweis, Deinstallation, Push-Benachrichtigungen, Verknüpfungen, automatisches Einfrieren, Updates eingefrorener Apps und Moduswechsel."
section: faq
group: trouble
order: 0
faq: true
priority: 0.8
related: guide/devices, guide/device-owner, purchase, guide/uninstall
---

Fragen zu Kauf und Zahlung beantwortet die [Kaufanleitung](/purchase/). Tipps für bestimmte Smartphone-Marken findest du in den [Hinweisen für jede Smartphone-Marke](/guide/devices/).

## Grundlagen {#basics}

### Was bedeutet es, eine App einzufrieren? {#what-is-freeze}

Eine eingefrorene App wird vom System deaktiviert oder ausgeblendet. Sie kann nicht laufen, startet nicht von selbst im Hintergrund und erscheint weder auf dem Startbildschirm noch in der App-Liste, aber die App und ihre Daten bleiben erhalten. Sobald du sie in Ice Box auftaust, funktioniert die App wieder ganz normal.

### Was ist der Unterschied zwischen Einfrieren und Deinstallieren? {#freeze-vs-uninstall}

Beim Deinstallieren werden die App und ihre Daten gelöscht. Beim Einfrieren wird die App nur vorübergehend gestoppt: Ihre Daten bleiben unberührt, und nach dem Auftauen kannst du sie weiter nutzen. Bei vorinstallierten System-Apps, die sich nicht deinstallieren lassen, ist Einfrieren außerdem eine Möglichkeit, sie zu deaktivieren.

### Wie lege ich eine eingefrorene App wieder auf den Startbildschirm? {#add-to-home}

Halte in Ice Box das Symbol der App gedrückt und wähle „Zum Startbildschirm hinzufügen“. Wenn du auf diese Verknüpfung tippst, taut Ice Box die App zuerst auf und öffnet sie dann. Mehr dazu unter [Verknüpfungen auf dem Startbildschirm](/guide/shortcuts/).

### Wie aktualisiere ich eine eingefrorene App? {#update-frozen}

Wenn du CoolApk (酷安) nutzt, einen chinesischen App-Store für Android, aktiviere in den Einstellungen von CoolApk im Laborbereich „Ausgeblendete Apps anzeigen“ (显示隐藏应用). Bei anderen App-Stores tippst du zuerst in den Einstellungen von Ice Box auf „Alle auftauen“ und frierst die Apps nach dem Update wieder ein.

### Apps lassen sich nach einem Moduswechsel nicht mehr auftauen? {#mode-switch}

Die Modi sind nicht miteinander kompatibel. Stell Ice Box wieder auf den Modus um, den du vorher genutzt hast: Eine App muss in demselben Modus aufgetaut werden, in dem sie eingefroren wurde.

## Root {#root}

### Im Root-Modus erscheint „Keine Root-Berechtigung erhalten“ {#root-failed}

Öffne deinen Root-Manager (zum Beispiel Magisk), lösche den vorhandenen Eintrag für Ice Box und erteile den Root-Zugriff dann erneut.

### Wo ist das System-Plug-in geblieben? {#system-plugin}

Auf Anforderung von Google Play wurde der Modus System-Plug-in in Version 3.22.0 entfernt. Wenn das System-Plug-in noch installiert ist, lösche `/system/priv-app/com.catchingnow.iceboxsystemplugin.apk` mit einem Dateimanager mit Root-Zugriff und starte das Gerät neu, um die Deinstallation abzuschließen.

## Device-Owner-Modus {#device-owner}

### In der Benachrichtigungsleiste steht „Dieses Gerät wird von deiner Organisation verwaltet“. Ist das normal? {#managed-notice}

Ja. Genau so funktioniert der Device-Owner-Modus von Ice Box. Die Einrichtung als Device Owner ist derzeit die einzige dauerhafte Möglichkeit, Apps ohne Root einzufrieren. Das System zeigt diesen Text an und er lässt sich nicht entfernen, aber du kannst im „Labor“ von Ice Box den „Namen der Organisation“ in einen beliebigen Text ändern.

### Laut Einstellungen kann der Device Owner meinen Kalender, meine E-Mails und andere persönliche Daten lesen. Liest Ice Box sie? {#dpm-privacy}

Nein. Ice Box wird seit 2015 ständig weiterentwickelt und nutzt nur die Device-Owner-Funktionen, die es braucht, zum Beispiel das Einfrieren von Apps. Andere Funktionen nutzt es nicht, du kannst es also unbesorgt verwenden.

### Nach der Einrichtung als Device Owner funktionieren die Doppel-Apps und der Sichere Ordner des Systems nicht mehr? {#dual-apps}

Das ist eine Einschränkung mancher Systeme selbst (zum Beispiel bei Samsung und Xiaomi). Sobald ein Device Owner festgelegt ist, schaltet das System einige Funktionen automatisch ab, und Ice Box kann das nicht ändern. Wenn du Doppel-Apps wirklich brauchst, hast du diese Möglichkeiten:

- Island als Device Owner einrichten und dessen Funktion für Doppel-Apps nutzen. Ice Box kann dann über den [Island-Modus](/guide/other-modes/#island) arbeiten.
- Einen anderen Modus als Device Owner verwenden. Keiner der anderen Modi beeinträchtigt Doppel-Apps.

### App-Berechtigungen werden bei jedem Auftauen zurückgesetzt? {#permissions-reset}

Das ist ein Problem des Systems. AppOps von Rikka ([Google Play](https://play.google.com/store/apps/details?id=rikka.appops), [CoolApk](https://www.coolapk.com/)) kann deine Berechtigungsregeln beim Auftauen einer App automatisch wieder anwenden.

### Auf Huawei- und Xiaomi-Smartphones fragen Apps bei jedem Öffnen erneut nach Berechtigungen, und beim Einfrieren heißt es, die App sei deinstalliert? {#reinstall-prompt}

Deaktiviere auf Xiaomi-Smartphones die „MIUI-Optimierung“. Auf anderen Smartphones haben wir noch keinen passenden Schalter gefunden.

### Eine gerade aufgetaute App hat manchmal keine Netzwerkverbindung? {#no-network}

Bei einigen Modellen (zum Beispiel von OnePlus und Huawei) tritt dieses Problem gelegentlich auf. Achte darauf, dass dein System auf dem neuesten Stand ist. Meist hilft es, die App noch einmal einzufrieren und aufzutauen.

### Wie deinstalliere ich Ice Box? {#uninstall}

Tippe in den Einstellungen von Ice Box auf „Deinstallieren“. Prüfe vor der Deinstallation genau, ob alle Apps aufgetaut sind. Hinweis für Xiaomi-Nutzer: **Deinstalliere Ice Box nicht direkt über den Startbildschirm. Dadurch geht die Administratorberechtigung verloren und eingefrorene Apps lassen sich nie wieder auftauen.** Mehr dazu unter [Ice Box deinstallieren](/guide/uninstall/).

## Benachrichtigungen und Hintergrund {#background}

### Eingefrorene Apps erhalten trotzdem Push-Benachrichtigungen? {#push}

Auf Smartphones wie OPPO, vivo und OnePlus nutzen manche Apps den Push-Dienst des Systems. Nach dem Einfrieren zeigt das System weiterhin Benachrichtigungen für sie an, die App selbst läuft aber nicht im Hintergrund. Wenn du diese Benachrichtigungen nicht möchtest, deaktiviere sie für die betreffende App in den Systemeinstellungen.

### Ich möchte, dass eingefrorene Apps weiterhin Benachrichtigungen erhalten {#keep-push}

Dafür kannst du dir [MiPushFramework](https://github.com/MiPushFramework/MiPushFramework) ansehen.

### Warum zeigt Ice Box eine Benachrichtigung an? {#ongoing-notification}

Android verlangt, dass jede App, die im Hintergrund läuft, eine Benachrichtigung anzeigt. Wenn du Funktionen aktivierst, die im Hintergrund laufen müssen, etwa „Automatisch einfrieren“, zeigt Ice Box eine Benachrichtigung in der Benachrichtigungsleiste an. Du kannst diese Benachrichtigung in den Systemeinstellungen deaktivieren, ohne dass Funktionen verloren gehen. Wenn „Automatisch einfrieren“ aus ist, läuft Ice Box überhaupt nicht im Hintergrund.

### Apps werden nach dem Ausschalten des Bildschirms nicht eingefroren? {#auto-freeze-fail}

Prüfe, ob ein Telefonmanager oder ein Tool zum Blockieren von Apps Ice Box daran hindert, im Hintergrund zu laufen. Erteile Ice Box in den Systemeinstellungen Berechtigungen wie „Im Hintergrund ausführen“ und „Gerät aktivieren“ und stelle die Akkunutzung auf „Nicht optimieren“. Auf Huawei-Smartphones funktioniert die Option „Bildschirm aus“ unter „Automatisch einfrieren bei“ wegen Systembeschränkungen eventuell nicht. Wähle dann eine andere Option. Mehr dazu unter [Automatisch einfrieren](/guide/auto-freeze/).

## Verknüpfungen {#shortcuts}

### Auf Xiaomi-, Huawei-, Smartisan- oder anderen Smartphones lassen sich keine Verknüpfungen zum Startbildschirm hinzufügen? {#shortcut-missing}

Auf Xiaomi, Huawei und ähnlichen Smartphones musst du Ice Box in den Systemeinstellungen manuell die Berechtigung erteilen, Verknüpfungen zum Startbildschirm hinzuzufügen. Smartisan-Smartphones unterstützen Verknüpfungen von keiner App.

### Verknüpfungen wurden auf einem Xiaomi- oder Meizu-Smartphone hinzugefügt, funktionieren aber nicht? {#shortcut-broken}

Erlaube Ice Box auf Xiaomi-Smartphones in den Systemeinstellungen, „andere Apps zu starten“ und „Pop-up-Fenster beim Ausführen im Hintergrund anzuzeigen“. Auf Meizu-Smartphones haben wir noch keinen passenden Systemschalter gefunden.

### Wie entferne ich das Badge von Ice Box an Verknüpfungen? {#shortcut-badge}

Ab Android 7.0 fügt das System das Badge zu Verknüpfungen hinzu. Es lässt sich weder ändern noch entfernen.

## Weitere Fragen {#other}

### Manche System-Apps wie Xiaomi Musik, der App-Store oder Huawei Home lassen sich nicht einfrieren oder tauen nach einem Neustart von selbst wieder auf? {#system-unfreeze}

MIUI und einige andere Systeme tauen wichtige System-Apps automatisch wieder auf. In neueren EMUI-Versionen lässt sich Huawei Home nicht mehr einfrieren. In Versionen vor EMUI 9.0 geht es noch.

### Auf OPPO- und vivo-Smartphones zeigt die App-Liste nur wenige Apps? {#app-list}

Erlaube Ice Box in den Berechtigungseinstellungen des Systems, die App-Liste zu lesen.

### Nach dem Auftauen einer App auf einem Smartisan-Smartphone sind standardmäßig alle Berechtigungen erlaubt? {#smartisan-permissions}

So ist das Smartisan-System aufgebaut. Mit Ice Box hat das nichts zu tun.

### Unterstützt Ice Box Tablets? {#tablet}

Ja. Ice Box hat eigene Layouts für Tablets und das Querformat.

### Liest Ice Box meine Zwischenablage? {#clipboard}

Nur ein einziges Mal, wenn du in den Einstellungen auf „Aus Zwischenablage importieren“ tippst, um einen Link zu einem Design oder einer Einfrierliste zu finden.

### Noch Fragen? {#contact}

Schreib uns über die Option „Feedback“ in Ice Box eine E-Mail. Gib nach Möglichkeit dein Smartphone-Modell, deine Systemversion und einen Screenshot des Problems an.
