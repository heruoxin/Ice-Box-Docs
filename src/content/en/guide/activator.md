---
title: Activate Ice Box with the one-click activator (Windows)
short: One-click activator
description: Use the one-click activator on a Windows PC to turn on Device Owner mode or ADB mode for Ice Box without typing commands. Includes the download, steps and FAQ.
section: guide
group: activate
order: 2
howto: true
faq: true
related: guide/device-owner, guide/web-activator, guide/adb, guide/autumnbox
---

The one-click activator is developed by [@web1n](https://github.com/web1n). It runs on Windows computers and turns on Device Owner mode for Ice Box, so you don't have to type ADB commands by hand.

[[activator-download]]

If you don't have a Windows computer, or run into problems with the exe activator, use the [web activator](/guide/web-activator/) instead. It does the same thing.

## Read this first {#before}

Systems from Chinese phone brands often customize Android, which causes some compatibility problems with Device Owner mode. Common ones include:

- Samsung phones may be password-locked by the system (reports so far come to about 4 in 200,000). Please read the [Samsung device notes](/guide/samsung-device-owner/) first.
- An uninstall prompt pops up every time you freeze an app, and a permission request pops up when you defrost it (Huawei, Smartisan).
- The notification bar flashes "Device admin is on, tap to turn off" (OPPO, vivo).
- The system's built-in dual apps feature stops working (Huawei, MIUI).
- An app you just defrosted occasionally can't connect to the internet. Close the app and open it again (OnePlus, Smartisan and others).

If you can't accept these issues, use [ADB mode](/guide/adb/). It doesn't need root either, but you have to activate it again with a computer every time the phone restarts.

Device Owner mode, on the other hand, doesn't need repeated trips to the computer. Set it up once and it keeps working, through reboots and system updates.

## Steps {#steps}

Once you've decided to activate Ice Box in Device Owner mode, follow these steps:

1. Make sure Ice Box is installed on the phone. Remove the screen lock. On Sony phones, remove the SIM card. On Xiaomi phones, turn on "USB debugging (Security settings)" and turn off "MIUI optimization".
2. In system settings, sign out of all accounts, such as Xiaomi, Huawei and Google accounts. You can sign back in after activation.
3. Download and extract the activator. Extract it on the computer, not to the phone's storage.
4. Turn on USB debugging on the phone and connect it to the computer with a USB cable.
5. Click "Activate Ice Box" (激活冰箱) in the activator.

Once it succeeds, open Ice Box and start using it.

If you run into other problems, first check that all system accounts have been removed. If it still doesn't work after that, compare the activator's log output with the [Device Owner mode FAQ](/guide/device-owner/#faq).

## FAQ {#faq}

### The activator is stuck loading

Extract all the files in the activator archive to your computer before you run it. Don't extract them to the phone's storage, and don't double-click the exe inside the archive.

### The activator says it can't find the device

Check that USB debugging is on, that your cable supports data transfer, that the phone's driver is installed on the computer, and that no PC suite, phone manager or antivirus software is occupying the connection.
