---
title: Freeze pre-installed system apps
short: Freeze pre-installed apps
description: Ice Box can freeze some pre-installed system apps, in non-root modes too. What to check first, apps that can't be frozen, shared lists and updating frozen apps.
section: guide
group: tips
order: 3
faq: true
related: use-cases/disable-preinstalled-apps, guide/devices, guide/qr-code
---

Many phones come with a lot of pre-installed software and ad apps you'll never use. Ice Box can freeze these pre-installed apps: they won't run in the background and won't appear on the home screen. Whenever you need one, defrost it in Ice Box to bring it back.

## Before you freeze {#before}

- Only freeze apps you're sure you won't need. If you're not sure, don't freeze it. Freezing key system components can make the phone malfunction.
- Some systems handle key apps specially: on MIUI and similar systems, some key apps may not be freezable, or may be forcibly defrosted by the system after a reboot.
- On newer EMUI versions, the Huawei launcher can no longer be frozen.
- Apps running with device admin permission can't be frozen. Remove the app's permission under "Settings > Security > Device admin apps" first, then freeze it.

## Import a shared freeze list {#lists}

Ice Box can share and import lists of system apps that are safe to freeze. When you open a list link someone shared, Ice Box lists the apps from it that can be frozen on your phone, and freezes them after you confirm each one.


## Pre-installed apps after QR code setup {#qr}

On phones set up with [QR code setup](/guide/qr-code/), the system doesn't install pre-installed apps by default. When you need one of them, go to "Laboratory" in Ice Box settings, tap "Active Pre-installed System Apps" and choose the apps to install.

## FAQ {#faq}

### How do I update a frozen app?

If you use CoolApk (酷安), a Chinese Android app store, turn on "Show hidden apps" in the lab section of CoolApk's settings. With other app stores, defrost the app in Ice Box first, then freeze it again after the update.

### Some system apps can't be frozen, or quietly get defrosted after a reboot

This is the system protecting key apps, and Ice Box can't get around it. MIUI and some other systems do this.
