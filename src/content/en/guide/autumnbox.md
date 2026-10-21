---
title: Activate Ice Box with AutumnBox
short: AutumnBox
description: AutumnBox is a Windows toolbox that simplifies ADB tasks and can activate Device Owner mode for Ice Box in one click. Steps and things to watch out for.
section: guide
group: activate
order: 4
howto: true
related: guide/device-owner, guide/activator, guide/web-activator
---

AutumnBox (秋之盒) is a one-click toolbox that makes ADB operations simpler. Many thanks to [zsh2401](https://zsh2401.top/) for all the hard work developing it.

AutumnBox only runs on Windows. If your computer runs macOS or Linux, use the [web activator](/guide/web-activator/) or follow the [command line setup steps](/guide/device-owner/#steps).

> [!NOTE]
> The AutumnBox website is currently unreachable and the project is no longer updated. Its source code and older versions are on [GitHub](https://github.com/zsh2401/AutumnBox). We recommend the [one-click activator](/guide/activator/) or the [web activator](/guide/web-activator/) instead; they do the same job.

## Read this first {#before}

Systems from Chinese phone brands often add custom features of their own, and these cause some compatibility problems with Device Owner mode. Common ones include:

- Samsung phones may be password-locked by the system (reports so far come to about 4 in 200,000). Please read the [Samsung device notes](/guide/samsung-device-owner/) first.
- An uninstall prompt pops up every time you freeze an app, and a permission request pops up when you defrost it (Huawei, Smartisan).
- The notification bar flashes "Device admin is on, tap to turn off" (OPPO, vivo).
- The system's built-in dual apps feature stops working (Huawei, MIUI).
- An app you just defrosted occasionally can't connect to the internet. Close the app and open it again (OnePlus and others).
- On Sony phones, we recommend setting up Ice Box before upgrading to Android 9. Android 9 adds a hidden account that is hard to remove. If you've already upgraded, use [QR code setup](/guide/qr-code/). Phones that were already set up are not affected.

If you can't accept these issues, use [Shizuku](/guide/shizuku/) or [ADB mode](/guide/adb/). They don't need root either, but you have to activate them again every time the phone restarts.

Device Owner mode, on the other hand, doesn't need repeated trips to the computer. Set it up once and it keeps working, through reboots and system updates.

## Steps {#steps}

Once you've decided to activate Ice Box in Device Owner mode, follow these steps:

1. Make sure Ice Box is installed on the phone. Remove the screen lock. On Sony phones, remove the SIM card. On Xiaomi phones, turn on "USB debugging (Security settings)" and turn off "MIUI optimization".
2. In system settings, remove all accounts, such as Xiaomi, Huawei and Google accounts. You can sign back in after activation.
3. Download and open AutumnBox. 
4. Turn on USB debugging on the phone and connect it to the computer. If it won't connect, the driver usually isn't installed, or another PC suite is conflicting with it. Check the driver and close any other phone management software.
5. Click the "Activate Ice Box" (激活冰箱) function in AutumnBox.

Normally, you can now open Ice Box and start using it. If you run into problems, first check that all system accounts have been removed. If it still doesn't work after that, compare the output log with the [Device Owner mode FAQ](/guide/device-owner/#faq).
