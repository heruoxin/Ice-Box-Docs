---
title: How to uninstall Ice Box and remove device owner
short: Uninstall Ice Box
description: Defrost all apps before you uninstall Ice Box. In Device Owner mode, uninstall from Ice Box settings, not the home screen, or frozen apps can't be defrosted.
section: guide
group: trouble
order: 3
howto: true
related: guide/device-owner, faq, guide/devices
---

Only Ice Box can defrost the apps it has frozen. Before you uninstall Ice Box, double-check that every app has been defrosted.

## Steps to uninstall {#steps}

1. Open Ice Box, use "Defrost All" to defrost every app in Ice Box, and check that they have all reappeared on the home screen.
2. Go to Ice Box settings and tap "Uninstall".
3. After you confirm, Ice Box removes its own device owner authorization (if it has one) and finishes uninstalling.

> [!WARNING]
> When using Device Owner mode, **don't uninstall Ice Box directly from the home screen**. On Xiaomi and some other phones, this loses the device owner permission, and frozen apps can never be defrosted again.

## Notes for each work mode {#modes}

- **Device Owner mode**: you must remove the device owner authorization with "Uninstall" in Ice Box settings. Otherwise the system won't let you uninstall it.
- **Root, Wireless debugging, ADB and Shizuku modes**: likewise, defrost everything first, then uninstall Ice Box.
- If you've switched work modes, switch back to the mode you used for freezing before you defrost. Work modes are not compatible with each other.

## Forgot to defrost before uninstalling? {#already-removed}

- **Root, Wireless debugging, ADB and Shizuku modes**: reinstall Ice Box, switch to the work mode you used for freezing, then find the frozen apps in the app list and defrost them.
- **Device Owner mode**: uninstalling Ice Box directly loses the device owner permission, and frozen apps can no longer be defrosted. So be sure to follow the steps above and uninstall from Ice Box settings.
