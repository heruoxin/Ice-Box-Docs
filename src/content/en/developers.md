---
title: Ice Box SDK for developers
short: Developers
description: The Ice Box SDK lets other apps freeze and defrost apps, and silently install or uninstall APKs, on phones with Ice Box. Setup, permissions and the main APIs.
section: about
priority: 0.5
related: use-cases/automation, features, about
---

On devices where Ice Box is installed and enabled, the Ice Box SDK lets third-party apps freeze and defrost apps. In Device Owner mode, it can also install and uninstall APKs silently.

Source code and full documentation: [github.com/heruoxin/IceBox-SDK](https://github.com/heruoxin/IceBox-SDK)

## Requirements {#requirements}

- Freeze and defrost: Ice Box 3.6.0 or later.
- Silent install and uninstall: Ice Box 3.9.5 or later, with Ice Box running in Device Owner mode.

## Permission {#permission}

Action APIs, such as freezing, defrosting and installing APKs, require you to request the Ice Box SDK permission from the user first. Query APIs do not need any permission.

```java
if (ContextCompat.checkSelfPermission(this, IceBox.PERMISSION) != PackageManager.PERMISSION_GRANTED) {
    ActivityCompat.requestPermissions(this, new String[]{IceBox.PERMISSION}, 0x233);
}
```

## Main APIs {#api}

### Query the work mode

Ice Box may freeze apps in one of two ways, `pm disable-user` or `pm hide`. No permission needed.

```java
IceBox.WorkMode workMode = IceBox.queryWorkMode(context);
```

### Query an app's freeze state

Returns normal, frozen with `pm disable`, frozen with `pm hide`, or both. No permission needed.

```java
IceBox.getAppEnabledSetting(context, packageName);
```

### Freeze or defrost apps

Requires permission. Supports batch operations.

```java
IceBox.setAppEnabledSettings(context, enable, packageNames);
```

### Silent install and uninstall

Available when Ice Box is running in Device Owner mode. You can first check whether it is currently supported:

```java
IceBox.querySupportSilentInstall(context);
```

For the full parameters and return values of each API, the [documentation on GitHub](https://github.com/heruoxin/IceBox-SDK) is authoritative.

## Transparency and authorization {#transparency}

Every freeze, install and uninstall action a third-party app performs through Ice Box is recorded in Ice Box's log center, where the user can check it at any time.

## Other integrations {#integrations}

- **Configure in other Apps**: Ice Box supports Android's `android.intent.action.SHOW_APP_INFO`, so it works together with apps such as Greenify and AppOps.
- **Island**: Ice Box can work through Island's permissions, and it can also be installed and used inside Island's work profile.
