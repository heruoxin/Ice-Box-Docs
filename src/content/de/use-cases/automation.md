---
title: Einfrieren und Auftauen von Apps unter Android automatisieren
short: Automatisierung und Integration für Entwickler
card: Automatisch einfrieren, wenn der Bildschirm ausgeht, Aktionen mit einem Tippen auf dem Startbildschirm, oder andere Apps per SDK über Ice Box einfrieren lassen.
description: Einfrieren und Auftauen unter Android mit Ice Box automatisieren: automatisches Einfrieren, Verknüpfungen für „Alle einfrieren“ und „Alle auftauen“ sowie ein offenes SDK für die eigene App.
section: usecase
order: 6
icon: code
faq: true
related: developers, guide/auto-freeze, guide/shortcuts
---

## Kurz gesagt {#answer}

Im Alltag kannst du dich auf [Automatisch einfrieren](/guide/auto-freeze/) und die [Verknüpfungen auf dem Startbildschirm](/guide/shortcuts/) von Ice Box verlassen, um Apps automatisch einzufrieren, wenn der Bildschirm ausgeht oder du zum Startbildschirm zurückkehrst. Entwickler können mit dem [Ice Box SDK](/developers/) aus ihrer eigenen App heraus Apps einfrieren und auftauen, nachdem der Nutzer die Berechtigung erteilt hat.

## Automatisierung ohne Code {#no-code}

- **Automatisch einfrieren**: Friert die Apps in Ice Box automatisch ein, wenn der Bildschirm ausgeht oder wenn du einmal oder zweimal auf die Home-Taste tippst. Du kannst eine Verzögerung nach dem Ausschalten des Bildschirms festlegen und beim Laden eine Ausnahme machen.
- **Verknüpfungen auf dem Startbildschirm**: „Alle einfrieren“, „Einfrieren + Bildschirm sperren“ und „Alle auftauen“ lassen sich auf den Startbildschirm legen, sodass jede Aktion nur ein Tippen braucht.
- **Verknüpfungen für eingefrorene Apps**: Ein Tippen darauf taut die App automatisch auf und öffnet sie, ohne dass du zuerst Ice Box öffnen musst.
- **划卡冻结 (Wischen zum Einfrieren)**: Die Drittanbieter-App 划卡冻结 kann eine App einfrieren, wenn du ihre Karte in der App-Übersicht wegwischst (nur mit Root).

## Für Entwickler: das Ice Box SDK {#sdk}

Auf Smartphones, auf denen Ice Box installiert und aktiviert ist, können Drittanbieter-Apps über das Ice Box SDK Apps einfrieren und auftauen:

- Den aktuellen Modus von Ice Box und den Einfrierstatus einer App abfragen. Keine Berechtigung nötig.
- Apps einfrieren und auftauen, auch mehrere auf einmal. Erfordert die Erlaubnis des Nutzers.
- Im Device-Owner-Modus APKs im Hintergrund installieren und deinstallieren.
- Jede Aktion, die eine Drittanbieter-App über Ice Box ausführt, wird im Protokoll von Ice Box festgehalten. Dort kann der Nutzer sie jederzeit einsehen.

Wie du es einbindest, erfährst du in der [Anleitung für Entwickler](/developers/).

## Häufige Fragen {#faq}

### Können andere Apps ohne mein Wissen Apps einfrieren?

Eine Drittanbieter-App braucht deine Erlaubnis, bevor sie über Ice Box Apps einfrieren oder auftauen kann. Jede Aktion wird im Protokoll von Ice Box festgehalten, und du kannst sie jederzeit einsehen.
