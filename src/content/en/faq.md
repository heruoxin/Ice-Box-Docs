---
title: Ice Box FAQ
short: FAQ
description: Ice Box FAQ: root access, the Device Owner notice, uninstalling, push notifications, shortcuts, Auto Freeze, updating frozen apps and switching work modes.
section: faq
group: trouble
order: 0
faq: true
priority: 0.8
related: guide/devices, guide/device-owner, purchase, guide/uninstall
---

For questions about buying and payment, see the [purchase guide](/purchase/). For tips on specific phone brands, see the [notes for each phone brand](/guide/devices/).

## The basics {#basics}

### What does freezing an app mean? {#what-is-freeze}

A frozen app is disabled or hidden by the system. It cannot run, cannot start itself in the background, and does not appear on the home screen or in the app drawer, but the app and its data are still there. Once you defrost it in Ice Box, the app is back to normal.

### What is the difference between freezing and uninstalling? {#freeze-vs-uninstall}

Uninstalling deletes the app and its data. Freezing only stops the app from running for the time being: its data is not affected, and you can keep using it after you defrost it. For pre-installed system apps that cannot be uninstalled, freezing is also a way to disable them.

### How do I add a frozen app back to the home screen? {#add-to-home}

In Ice Box, long-press the app icon and choose "Add to Launcher". When you tap this shortcut, Ice Box defrosts the app first and then opens it. See [Home screen shortcuts](/guide/shortcuts/).

### How do I update a frozen app? {#update-frozen}

If you use CoolApk (酷安), a Chinese Android app store, turn on "Show hidden apps" (显示隐藏应用) in the lab section of CoolApk's settings. If you use another app store, tap "Defrost All" in Ice Box settings first, and freeze the apps again after the update.

### Can't defrost apps after switching work modes? {#mode-switch}

Work modes are not compatible with each other. Switch Ice Box back to the work mode you used before: an app must be defrosted in the same mode it was frozen in.

## Root {#root}

### Root mode says "Failed to get ROOT permission" {#root-failed}

Open your root manager (such as Magisk), delete Ice Box's existing grant record, and then grant root access again.

### Where did the System Plugin go? {#system-plugin}

As required by Google Play, System Plugin mode was removed in version 3.22.0. If the System Plugin is still installed, delete `/system/priv-app/com.catchingnow.iceboxsystemplugin.apk` with a file manager that has root access, then reboot to finish uninstalling it.

## Device Owner mode {#device-owner}

### The notification shade says "This device is managed by your organization". Is that normal? {#managed-notice}

Yes. This is exactly how Ice Box's Device Owner mode works. Setting up Device Owner is currently the only permanent way to freeze apps without root. The system shows this text and it cannot be removed, but you can change the "Organization Name" to any text you like in the Ice Box "Laboratory".

### Phone settings say Device Owner can read my calendar, email and other personal info. Does Ice Box read them? {#dpm-privacy}

No. Ice Box has been updated continuously since 2015, and it only uses the Device Owner features it needs, such as freezing apps. It does not use any unrelated features, so you can use it with peace of mind.

### After setting up Device Owner, the system's dual apps and Secure Folder stopped working? {#dual-apps}

This is a limitation of some phone systems themselves (such as Samsung and Xiaomi). Once a Device Owner is set, the system turns off some features automatically, and Ice Box cannot fix that. If you really need dual apps, you can consider:

- Setting Island as Device Owner and using the dual apps feature it provides. Ice Box can then work through [Island mode](/guide/other-modes/#island).
- Using a work mode other than Device Owner. None of the other modes affect dual apps.

### App permissions are reset every time I defrost an app? {#permissions-reset}

This is a system issue. AppOps by Rikka ([Google Play](https://play.google.com/store/apps/details?id=rikka.appops), [CoolApk](https://www.coolapk.com/)) can reapply your permission rules automatically when an app is defrosted.

### On Huawei and Xiaomi phones, apps ask for permissions again every time they open, and freezing says the app was uninstalled? {#reinstall-prompt}

On Xiaomi phones, turn off "MIUI optimization". We have not found a matching switch on other phones yet.

### A freshly defrosted app sometimes can't connect to the network? {#no-network}

The system on some models (such as OnePlus and Huawei) occasionally has this problem. Make sure your system is updated to the latest version. Freezing and defrosting the app once more usually fixes it.

### How do I uninstall Ice Box? {#uninstall}

Tap "Uninstall" in Ice Box settings. Before you uninstall, double-check that every app has been defrosted. Xiaomi users, please note: **do not uninstall Ice Box directly from the home screen. This loses the admin permission, and frozen apps can never be defrosted again.** See [Uninstall Ice Box](/guide/uninstall/).

## Notifications and background {#background}

### Frozen apps still get push notifications? {#push}

On phones such as OPPO, vivo and OnePlus, some apps use the system push service. After they are frozen, the system still shows notifications on their behalf, but the app itself does not run in the background. If you don't want these notifications, turn off notifications for that app in system settings.

### I want frozen apps to still receive notifications {#keep-push}

You can look into installing [MiPushFramework](https://github.com/MiPushFramework/MiPushFramework).

### Why does Ice Box show a notification? {#ongoing-notification}

Android requires every app that runs in the background to show a notification. When you turn on features that need to run in the background, such as "Auto Freeze", Ice Box shows a notification in the notification shade. You can turn this notification off in system settings without affecting any features. With Auto Freeze off, Ice Box does not run in the background at all.

### Apps are not frozen after the screen turns off? {#auto-freeze-fail}

Check whether a phone manager or an app-blocking tool is stopping Ice Box from running in the background. In system settings, give Ice Box permissions such as "Run in background" and "Wake device", and set its battery usage to "Don't optimize". On Huawei phones, the "Screen Off" option under "Auto Freeze When" may not work because of system limits, so choose another option instead. See [Auto Freeze](/guide/auto-freeze/).

## Shortcuts {#shortcuts}

### Can't add home screen shortcuts on Xiaomi, Huawei, Smartisan or other phones? {#shortcut-missing}

On Xiaomi, Huawei and similar phones, turn on the permission to add home screen shortcuts for Ice Box manually in system settings. Smartisan phones do not support shortcuts from any app.

### Shortcuts were added on a Xiaomi or Meizu phone but don't work? {#shortcut-broken}

On Xiaomi phones, allow Ice Box to "start other apps" and to "display pop-up windows while running in the background" in system settings. We have not found a matching system switch on Meizu phones yet.

### How do I remove the Ice Box badge from shortcuts? {#shortcut-badge}

On Android 7.0 and later, the system adds the badge to shortcuts, and it cannot be changed or removed.

## Other questions {#other}

### Some system apps, such as Xiaomi Music, the app store or Huawei Home, can't be frozen, or quietly defrost after a reboot? {#system-unfreeze}

MIUI and some other systems automatically defrost key system apps. In newer EMUI versions, Huawei Home can no longer be frozen. It can be frozen in versions before EMUI 9.0.

### On OPPO and vivo phones, the app list only shows a few apps? {#app-list}

In the system's permission settings, allow Ice Box to read the app list.

### After defrosting an app on a Smartisan phone, all its permissions are allowed by default? {#smartisan-permissions}

That is how the Smartisan system is designed. It is not related to Ice Box.

### Does Ice Box support tablets? {#tablet}

Yes. Ice Box has separate layouts for tablets and landscape mode.

### Still have questions? {#contact}

Send us an email with the "Feedback" option in the Ice Box app. If you can, include your phone model, system version and a screenshot of the problem.
