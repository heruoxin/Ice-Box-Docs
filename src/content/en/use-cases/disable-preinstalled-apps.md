---
title: How to disable bloatware on Android without root
short: Disable bloatware
card: Pre-installed system apps that can't be uninstalled can still be frozen, and you don't need root to do it.
description: Disable bloatware without root: freeze pre-installed and ad apps with Ice Box so they leave the home screen and can't run. Works with Device Owner and more.
section: usecase
order: 2
icon: layers
faq: true
related: guide/system-apps, guide/devices, guide/qr-code
---

## Short answer {#answer}

Most pre-installed apps cannot be uninstalled, but they can be frozen. Once frozen with Ice Box, they disappear from the home screen and the app drawer and cannot run in the background. If you need one later, defrost it in Ice Box to bring it back. Freezing pre-installed apps does not require root: non-root modes such as Device Owner, Wireless debugging and ADB all work.

## Steps {#steps}

1. [Download Ice Box](/download/) and activate it following the recommendation in the [Help Center](/guide/).
2. In Ice Box's app list, switch to system apps and tick the pre-installed apps you are sure you won't need.
3. Freeze them. From then on, these apps no longer appear on the home screen or run in the background.
4. To bring one back, defrost it in Ice Box.

You can also import a "list of system apps that are safe to freeze" shared by someone else. Ice Box lists the apps from it that can be frozen on your phone, and freezes them after you confirm. See [Freeze pre-installed system apps](/guide/system-apps/).

## Things to keep in mind {#notes}

- Only freeze apps you are sure you won't need. Freezing key system components can make parts of your phone stop working properly.
- On MIUI and some other systems, certain key apps may not be freezable, or the system may defrost them automatically after a reboot.
- On phones set up with [QR code setup](/guide/qr-code/), the system does not install pre-installed apps by default. If you need them, you can activate them in the Ice Box "Laboratory".
- For details on each brand, see the [notes for each phone brand](/guide/devices/).

## Common questions {#faq}

### How is freezing pre-installed apps different from disabling them with ADB commands?

The effect is similar, but Ice Box gives you a graphical interface where you can check, freeze and defrost apps at any time, with no commands to remember.

### Can frozen apps be restored?

Yes. Once you defrost an app in Ice Box, it is back to normal. Before uninstalling Ice Box, defrost all apps first.

### Will frozen pre-installed apps come back after a system update?

Some systems automatically defrost key apps after a reboot or an update. If this happens, freeze them again in Ice Box.
