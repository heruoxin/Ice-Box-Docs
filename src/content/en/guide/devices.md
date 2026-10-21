---
title: Notes for each phone brand
short: Phone brand notes
description: Ice Box notes for Xiaomi, Samsung, Huawei, OPPO, OnePlus, vivo, Sony, Meizu and more: Developer options, Device Owner issues, shortcuts and push notifications.
section: guide
group: trouble
order: 1
related: guide/samsung-device-owner, guide/wireless-debugging, guide/shortcuts, faq
---

Each phone brand customizes Android to a different degree, so Ice Box behaves a little differently from brand to brand. Below are the known issues, sorted by brand. Before you set things up, find your phone's brand and take a look.

## Xiaomi / Redmi / POCO {#xiaomi}

- Before using ADB, Wireless debugging or Device Owner mode, turn on "USB debugging (Security settings)" in Developer options.
- Before setting up device owner, turn off "MIUI optimization". With it off, apps won't ask for their permissions again every time you freeze them, and you won't get prompts saying the app was uninstalled.
- After setting up device owner, the system's built-in Dual apps feature may not work.
- If home screen shortcuts can't be added, turn on the home screen shortcut permission for Ice Box in system settings. If shortcuts are added but don't work, allow Ice Box to "start other apps" and to "display pop-up windows while running in the background".
- Starting with MIUI 11, permission handoffs between Ice Box and apps such as Brevent, Island and Shizuku may fail. Turn off "MIUI optimization" first. Then long-press the Ice Box icon on the home screen, open App info, and manually turn on "Other permissions" in the permission settings.
- Some key system apps (such as Mi Music and the app store) may not be freezable, or may be defrosted by the system automatically after a reboot. Since version 3.30.7, Ice Box can freeze more MIUI / HyperOS system components.
- When using Device Owner mode, **don't uninstall Ice Box directly from the home screen**. That loses the device owner permission, and frozen apps can't be defrosted. Follow the steps in [Uninstall Ice Box](/guide/uninstall/) instead.

## Samsung {#samsung}

- After setting up device owner, Secure Folder and Dual Messenger may stop working, and the lock screen password may even be reset. Be sure to read the [Samsung device notes](/guide/samsung-device-owner/) first.
- For Samsung users, we recommend Root, Wireless debugging, Shizuku or ADB mode.

## Huawei / Honor {#huawei}

- When using ADB or Wireless debugging mode, turn on "Allow ADB debugging in charge only mode" in Developer options.
- After setting up device owner, an uninstall prompt may pop up every time you freeze an app, and a permission request may pop up when you defrost it. The system's built-in App Twin feature may not work.
- If home screen shortcuts can't be added, manually give Ice Box the permission to add shortcuts in system settings. With a third-party launcher, you may not be able to add shortcuts from inside Ice Box. Try long-pressing an empty area of the home screen to add them instead.
- Due to system limits, auto freeze on "Screen Off" may not work. Use auto freeze on "Tap Home Button" or "Double Tap Home" instead.
- On newer EMUI versions, the Huawei launcher can no longer be frozen. Versions before EMUI 9.0 can still freeze it.

## OPPO / OnePlus / realme {#oppo}

- When using ADB or Wireless debugging mode, turn on "Disable permission monitoring" in Developer options.
- After setting up device owner, the notification bar may flash "Device admin is on, tap to turn off".
- If the app list only shows a few apps, allow Ice Box to read the app list in the system's permission settings.
- Some apps use the system's push service, so the system may still show their notifications after they're frozen, but the apps themselves don't run in the background. If you don't want these notifications, turn off notifications for that app in system settings.
- An app you just defrosted occasionally can't connect to the internet. Close the app and open it again.

## vivo / iQOO {#vivo}

- After setting up device owner, the notification bar may flash "Device admin is on, tap to turn off".
- If the app list only shows a few apps, allow Ice Box to read the app list in the system's permission settings.
- As on OPPO, some apps may still show notifications through system push after they're frozen.

## Sony {#sony}

- Remove the SIM card before setting up device owner.
- We recommend setting up Ice Box before upgrading to Android 9. Android 9 adds a hidden account that is hard to remove. If you've already upgraded, use [QR code setup](/guide/qr-code/). Phones that were already set up are not affected.

## Meizu and Smartisan {#meizu}

- Meizu: home screen shortcuts may not work even after they're added. We haven't found a system switch for this yet.
- Smartisan: shortcuts aren't supported for any app. After setting up device owner, an uninstall prompt may pop up when you freeze an app, and defrosted apps have all their permissions allowed by default. This is how Smartisan's system is designed and has nothing to do with Ice Box.

## Pixel and stock Android {#pixel}

- Stock and near-stock systems have the best compatibility with every work mode.
- Without a computer, you can use [QR code setup](/guide/qr-code/) to make Ice Box the device owner during a factory reset, or use [Wireless debugging mode](/guide/wireless-debugging/) on Android 11 and later.
