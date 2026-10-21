---
title: Device Owner mode setup
short: Device Owner mode
description: Set up Ice Box's Device Owner mode without root: briefly remove your accounts and run one ADB command on a computer. It survives reboots and system updates.
section: guide
group: activate
order: 1
howto: true
faq: true
related: guide/activator, guide/web-activator, guide/qr-code, guide/samsung-device-owner
---

If your phone is rooted, just open Ice Box and start using it. No extra setup is needed. If your phone can't be rooted and you want something you set up once and keep using, choose Device Owner mode. The setup needs a computer, so please read this whole page first.

## What is device owner? {#what}

Device owner is a feature of Android's enterprise management framework. It can freeze and defrost any app without root. Ice Box only uses the related abilities, such as freezing apps.

- A phone can only have one device owner at a time.
- It can only be set with an ADB command or a QR code. Switching it on under "Device admin apps" in your phone's settings does not work and won't give you this permission.
- Once it's set, you don't need to set it up again after a reboot or a system update.

## Read this first {#before}

Systems from Chinese phone brands often add custom features of their own, and these cause some compatibility problems with Device Owner mode. Common ones include:

- Samsung phones may be password-locked by the system. Be sure to read the [Samsung device notes](/guide/samsung-device-owner/) first.
- An uninstall prompt pops up every time you freeze an app, and a permission request pops up when you defrost it (Huawei, Smartisan).
- The notification bar flashes "Device admin is on, tap to turn off" (OPPO, vivo).
- The system's built-in dual apps feature stops working (Huawei, MIUI).
- An app you just defrosted occasionally can't connect to the internet. Close the app and open it again (OnePlus, Smartisan and others).

If you can't accept these issues, consider [ADB mode](/guide/adb/) or [Wireless debugging mode](/guide/wireless-debugging/). They don't need root either, but you have to activate them again every time the phone restarts.

## Activator or command line? {#tools}

If you're not familiar with ADB and the command line, use one of the activation tools instead. The result is exactly the same as with the command line:

- [One-click activator](/guide/activator/): for Windows computers.
- [Web activator](/guide/web-activator/): works on Windows, macOS and Linux. Chrome is recommended.
- [AutumnBox (秋之盒)](/guide/autumnbox/): for Windows computers.

No computer? Try [QR code setup](/guide/qr-code/). The result is exactly the same, but it needs a factory reset first, and some systems from Chinese phone brands don't support it.

## Set up with the command line {#steps}

1. Make sure your phone runs Android 7.0 or later and has the latest version of Ice Box installed. Make sure you know how to use [ADB](https://developer.android.com/tools/adb) commands and have read this whole page.
2. On Sony phones, remove the SIM card. On Xiaomi phones, turn on "USB debugging (Security settings)" in Developer options and turn off "MIUI optimization".
3. Go to "Settings > Accounts" on your phone and remove every account, including system accounts such as Google, Xiaomi and Huawei accounts. You can sign back in after the setup.
4. If you have set up multiple users, guest mode or dual apps, turn them off or remove them too. You can turn them back on after the setup.
5. Run the command below on your computer (a terminal emulator on the phone won't work).

```
adb shell dpm set-device-owner com.catchingnow.icebox/.receiver.DPMReceiver
```

If you see something like "Success", the setup worked. Open Ice Box and start using it. You can also add back the accounts you removed.

ADB is available as an official download from Google: [Windows](https://dl.google.com/android/repository/platform-tools-latest-windows.zip), [macOS](https://dl.google.com/android/repository/platform-tools-latest-darwin.zip), [Linux](https://dl.google.com/android/repository/platform-tools-latest-linux.zip).

## Setup didn't work? {#faq}

### It says "'adb' is not recognized as an internal or external command, operable program or batch file"

You may not be familiar with using the command line on a computer. We suggest activating with the [one-click activator](/guide/activator/) or the [web activator](/guide/web-activator/) instead.

### The activator is stuck loading

Extract all the files in the activator archive to your computer before you run it. Don't extract them to the phone's storage, and don't double-click the exe inside the archive.

### It says "error: no devices/emulators found"

The phone isn't connected to the computer. Check that USB debugging is on, that the phone's driver is installed correctly on the computer, and that no PC suite, phone manager or antivirus software is blocking the connection.

### It says "Not allowed to ... already several accounts on the device"

Not all accounts were removed in step 3. Sign out of every account on the phone, including your Google account and built-in system accounts such as Xiaomi and Huawei accounts. On Sony phones, remove the SIM card and restart.

### It says "Not allowed to ... already several users on the device"

The multiple users or dual apps from step 4 haven't all been removed. Remove or turn off all extra users, guest mode and dual apps.

### It says "Trying to set the device owner, but device owner is already set."

Another app on the phone is already set as the device owner, and a phone can only have one device owner. If that app works with Ice Box, such as Island or BlackHouse (小黑屋), switch Ice Box to the matching work mode and you can use it right away. See [other work modes](/guide/other-modes/).

### Xiaomi phones say "Neither user xxx nor current process has android.permission.MANAGE_DEVICE_ADMINS"

In Developer options in system settings, turn on "USB debugging (Security settings)" manually. If it still fails, turn off "MIUI optimization" and try again.

## Questions after a successful setup {#faq-after}

### Is it normal to see a notice like "This device is managed by your organization" in the notification bar?

Yes. This is how Device Owner mode works. The text is shown by the system and can't be removed, but you can change "Organization Name" in Ice Box's "Laboratory" to any text you like.

### Some phones' settings say the device owner can read personal information such as calendars and email. Does Ice Box read them?

No. Ice Box only uses the device owner permissions related to freezing apps. It doesn't use unrelated permissions, and it never reads your calendar, email or similar information.

### How do I remove Ice Box's permission when I no longer want it?

Defrost all apps first, then tap "Uninstall" in Ice Box settings. Once you confirm, Ice Box removes its device owner authorization and uninstalls itself. See [Uninstall Ice Box](/guide/uninstall/).

### Why can't I defrost apps I froze earlier in Root or ADB mode?

Work modes are not compatible with each other. Switch back to your previous work mode in Ice Box's "Laboratory". Apps must be defrosted in the same mode that froze them.
