---
title: Funktionen von Ice Box
short: Funktionen
description: Die Funktionen von Ice Box: Einfrieren und Auftauen mit einem Tippen, automatisches Einfrieren, Verknüpfungen, Tabs, Designs, Icon-Packs, App-Sperre, Einfrieren von System-Apps, ein SDK sowie Modi mit und ohne Root.
section: product
priority: 0.9
related: guide, themes, guide/auto-freeze, developers
---

Ice Box ist eine App zum Einfrieren von Apps unter Android. Leg die Apps, die du selten nutzt, in Ice Box, dann können sie nicht mehr im Hintergrund laufen und erscheinen nicht mehr auf dem Startbildschirm. Wenn du eine brauchst, tippst du darauf, und Ice Box taut sie auf und öffnet sie.

## Einfrieren und auftauen {#freeze}

- **Einfrieren**: Eine eingefrorene App kann nicht laufen, startet nicht von selbst im Hintergrund und ist auf dem Startbildschirm und in der App-Liste ausgeblendet. Die App und ihre Daten bleiben erhalten.
- **Auftauen**: Tippe in Ice Box auf eine App oder auf ihre Verknüpfung auf dem Startbildschirm, und Ice Box taut sie auf und öffnet sie.
- **Alle einfrieren / Alle auftauen**: Wische über die Einfrier-Schaltfläche unten in Ice Box oder tippe darauf, um alle Apps der Liste auf einmal einzufrieren. „Alle auftauen“ stellt alle Apps auf einmal wieder her. Position und Wischrichtung der Einfrier-Schaltfläche kannst du in den Einstellungen ändern.
- **Einfrieren + Bildschirm sperren**: Mit einem Tippen alle Apps einfrieren und sofort den Bildschirm sperren.

Je nach Modus friert Ice Box Apps mit einer von zwei Methoden ein, die das System bereitstellt: „deaktivieren“ oder „ausblenden“.

## Automatisch einfrieren {#auto-freeze}

Ice Box kann die Apps in deiner Liste automatisch einfrieren, wenn der Bildschirm ausgeht oder wenn du einmal oder zweimal auf die Home-Taste tippst. Du kannst eine Verzögerung nach dem Ausschalten des Bildschirms festlegen und das automatische Einfrieren beim Laden aussetzen. Mehr dazu unter [Automatisch einfrieren](/guide/auto-freeze/).

## Verknüpfungen auf dem Startbildschirm {#shortcuts}

Erstelle Verknüpfungen für eingefrorene Apps auf dem Startbildschirm. Ein Tippen darauf taut die App auf und öffnet sie, ohne dass du zuerst Ice Box öffnen musst. Du kannst auch festlegen, dass automatisch eine Verknüpfung hinzugefügt wird, wenn eine App zur Einfrierliste hinzukommt. Mehr dazu unter [Verknüpfungen auf dem Startbildschirm](/guide/shortcuts/).

## Mehrere Tabs {#tabs}

Lege mehrere Tabs an, um Apps nach Zweck zu sortieren, etwa Alltag, Social Media und Spiele. Tabs lassen sich umbenennen, und Apps können zwischen Tabs verschoben werden. Außerdem kannst du die Apps in Ice Box von Hand sortieren.

## Designs und Icon-Packs {#themes}

- Fast jedes Element der Startseite lässt sich umfärben, auch mit Transparenz.
- Ab Android 12 kann Ice Box die dynamischen Farben des Systems verwenden. Du kannst auch dein Hintergrundbild als Hintergrund nutzen.
- Das helle und das dunkle Design können automatisch mit dem System wechseln.
- Icon-Packs von Drittanbietern werden unterstützt, und du kannst die Symbolgröße anpassen.
- Designs lassen sich als Links teilen und importieren. Sieh dir unter [Geteilte Designs](/themes/) die Farbschemata an, die andere geteilt haben.

## Fingerabdruck- und PIN-Sperre {#lock}

Ist die Sperre aktiv, fragt Ice Box vor dem Öffnen nach deinem Fingerabdruck oder deiner PIN, auch die Gesichtserkennung kann verwendet werden. Mit aktivierter Fingerabdrucksperre wird der Inhalt von Ice Box in der App-Übersicht ausgeblendet.

## Vorinstallierte System-Apps einfrieren {#system-apps}

Neben den Apps, die du selbst installiert hast, kann Ice Box auch manche vorinstallierten System-Apps einfrieren, und das auch in den Modi ohne Root. Du kannst außerdem eine von anderen geteilte „Liste sicher einfrierbarer System-Apps“ importieren. Mehr dazu unter [Vorinstallierte System-Apps einfrieren](/guide/system-apps/).

## Hinweis bei neuen Apps {#new-app}

Nachdem du eine neue App installiert hast, kann Ice Box fragen, ob sie zu Ice Box hinzugefügt werden soll.

## Modi {#modes}

Ice Box kann sich Systemberechtigungen auf mehreren Wegen holen und funktioniert daher auf Smartphones mit und ohne Root:

[[mode-cards]]

Du weißt nicht, welchen du wählen sollst? Beantworte im [Hilfe-Center](/guide/) drei Fragen und erhalte eine Empfehlung.

## Offenes SDK und Integrationen {#sdk}

- **Ice Box SDK**: Mit Erlaubnis des Nutzers können andere Apps über Ice Box Apps einfrieren und auftauen. Im Device-Owner-Modus können sie außerdem APKs im Hintergrund installieren und deinstallieren. Jede Aktion einer Drittanbieter-App wird im Protokoll von Ice Box festgehalten. Mehr dazu unter [Für Entwickler](/developers/).
- **In anderen Apps konfigurieren**: Unterstützt den Einstiegspunkt „App-Info“ von Android, sodass Ice Box mit Apps wie Greenify und AppOps zusammenarbeitet.
- **Island**: Alle Funktionen von Ice Box funktionieren auch im Arbeitsprofil von Island.

## Versionen und Voraussetzungen {#requirements}

- Smartphones und Tablets mit Android 7.0 oder höher.
- Kostenloser Download. Einige Funktionen erfordern ein Upgrade auf Pro. Bei Abweichungen gilt die Beschreibung in der App.
- Die Änderungen jeder Version stehen im [Änderungsprotokoll](/changelog/).

[[download-buttons]]
