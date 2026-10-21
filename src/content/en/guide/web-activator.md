---
title: Activate Ice Box with the web activator
short: Web activator
description: No install needed: activate Device Owner or ADB mode for Ice Box with the web activator in your browser via WebUSB. Windows, macOS, Linux. Chrome recommended.
section: guide
group: activate
order: 3
howto: true
related: guide/device-owner, guide/activator, guide/adb
---

The web activator is developed by [@web1n](https://github.com/web1n). It does the same job as the exe activator and works on any computer operating system. We recommend using Chrome.

[Open the web activator](https://adb.http.gs/icebox.html)

The web activator can activate two modes:

- **Device Owner mode**: activate once and it keeps working, but it may have side effects on some phones.
- **ADB mode**: no side effects, but you need to connect to a computer and activate again every time the phone restarts or the system's USB settings are changed.

## Possible side effects of Device Owner mode {#side-effects}

Systems on Samsung phones and phones from Chinese brands often customize Android, which causes some compatibility problems with Device Owner mode. Common ones include:

- Samsung phones may be password-locked by the system (reports so far come to about 4 in 200,000). Please read the [Samsung device notes](/guide/samsung-device-owner/) first.
- An uninstall prompt pops up every time you freeze an app, and a permission request pops up when you defrost it (Huawei, Smartisan).
- The notification bar flashes "Device admin is on, tap to turn off" (OPPO, vivo).
- The system's built-in dual apps feature stops working (Huawei, MIUI).
- An app you just defrosted occasionally can't connect to the internet. Close the app and open it again (OnePlus, Smartisan and others).

If you can't accept these issues, choose ADB mode. It doesn't need root either, but you have to activate it again with a computer every time the phone restarts.

## How to activate {#steps}

1. Make sure Ice Box is installed on the phone. Remove the screen lock. On Sony phones, remove the SIM card. On Xiaomi phones, turn on "USB debugging (Security settings)" and turn off "MIUI optimization".
2. Connect the phone to the computer with a USB cable, and close any security software, PC suites and phone managers on the computer.
3. On the computer, open the [web activator](https://adb.http.gs/icebox.html) in Chrome, then connect your device and activate.

Before activating Device Owner mode, you also need to sign out of all accounts on the phone first. See [Device Owner mode setup](/guide/device-owner/#steps).
