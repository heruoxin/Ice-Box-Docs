---
title: Ice Box SDK für Entwickler
short: Entwickler
description: Mit dem Ice Box SDK können andere Apps auf Smartphones mit Ice Box Apps einfrieren und auftauen sowie APKs im Hintergrund installieren oder deinstallieren. Einrichtung, Berechtigungen und die wichtigsten APIs.
section: about
priority: 0.5
related: use-cases/automation, features, about
---

Auf Geräten, auf denen Ice Box installiert und aktiviert ist, können Drittanbieter-Apps über das Ice Box SDK Apps einfrieren und auftauen. Im Device-Owner-Modus lassen sich außerdem APKs im Hintergrund installieren und deinstallieren.

Quellcode und vollständige Dokumentation: [github.com/heruoxin/IceBox-SDK](https://github.com/heruoxin/IceBox-SDK)

## Voraussetzungen {#requirements}

- Einfrieren und Auftauen: Ice Box 3.6.0 oder höher.
- Installation und Deinstallation im Hintergrund: Ice Box 3.9.5 oder höher, Ice Box muss im Device-Owner-Modus laufen.

## Berechtigung {#permission}

Für Aktions-APIs wie Einfrieren, Auftauen und das Installieren von APKs musst du den Nutzer zuerst um die Berechtigung für das Ice Box SDK bitten. Abfrage-APIs benötigen keine Berechtigung.

```java
if (ContextCompat.checkSelfPermission(this, IceBox.PERMISSION) != PackageManager.PERMISSION_GRANTED) {
    ActivityCompat.requestPermissions(this, new String[]{IceBox.PERMISSION}, 0x233);
}
```

## Die wichtigsten APIs {#api}

### Modus abfragen

Ice Box friert Apps auf eine von zwei Arten ein, `pm disable-user` oder `pm hide`. Keine Berechtigung nötig.

```java
IceBox.WorkMode workMode = IceBox.queryWorkMode(context);
```

### Einfrierstatus einer App abfragen

Gibt zurück: normal, mit `pm disable` eingefroren, mit `pm hide` eingefroren oder beides. Keine Berechtigung nötig.

```java
IceBox.getAppEnabledSetting(context, packageName);
```

### Apps einfrieren oder auftauen

Berechtigung erforderlich. Unterstützt Stapelvorgänge.

```java
IceBox.setAppEnabledSettings(context, enable, packageNames);
```

### Installation und Deinstallation im Hintergrund

Verfügbar, wenn Ice Box im Device-Owner-Modus läuft. Du kannst vorher prüfen, ob es aktuell unterstützt wird:

```java
IceBox.querySupportSilentInstall(context);
```

Für alle Parameter und Rückgabewerte der einzelnen APIs ist die [Dokumentation auf GitHub](https://github.com/heruoxin/IceBox-SDK) maßgeblich.

## Transparenz und Autorisierung {#transparency}

Jede Aktion zum Einfrieren, Installieren und Deinstallieren, die eine Drittanbieter-App über Ice Box ausführt, wird im Protokoll von Ice Box festgehalten. Dort kann der Nutzer sie jederzeit einsehen.

## Weitere Integrationen {#integrations}

- **In anderen Apps konfigurieren**: Ice Box unterstützt `android.intent.action.SHOW_APP_INFO` von Android und arbeitet daher mit Apps wie Greenify und AppOps zusammen.
- **Island**: Ice Box kann mit den Berechtigungen von Island arbeiten und lässt sich auch im Arbeitsprofil von Island installieren und nutzen.
