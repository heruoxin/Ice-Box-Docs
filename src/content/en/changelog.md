---
title: Ice Box changelog
short: Changelog
description: What changed in each version of Ice Box, from 3.4.0 to the latest release, including new features, compatibility improvements and bug fixes.
section: product
toc: false
priority: 0.5
related: download, features
---

You can find your current version number and channel under "Settings > About" in Ice Box. For details on each distribution channel, and to download the latest APK, see the [download page](/download/#channels).

## 3.30.11 {#v3-30-11}

- Fixed layout issues on foldable devices
- Support for Xiaomi's permission to read the app list
- Wireless debugging no longer requires turning off VPN from the second pairing on

## 3.30.10 {#v3-30-10}

- Support for 16 KB memory page size
- Changes to meet Xiaomi app store review requirements

## 3.30.9 {#v3-30-9}

- Improvement: after the first successful pairing, "USB debugging" no longer has to stay on
- Improved background service compatibility

## 3.30.8 {#v3-30-8}

- Added a video tutorial to the instructions for starting Wireless debugging
- Fixed the "Ice Box is requesting to start xxx" permission dialog appearing frequently on some devices

## 3.30.7 {#v3-30-7}

- Can freeze more system components on MIUI and HyperOS
- Updated target SDK to 35

## 3.25.0 {#v3-25-0}

- Added guidance on activating Shizuku wirelessly
- Updated Shizuku, with support for Sui
- Monochrome icon support
- Dynamic color UI from Android S onward, with a new blurred background effect
- Day/night mode can follow the system
- The China version supports WeChat Pay
- Fixed some misaligned layouts
- Removed the System Plugin to match Google Play requirements

## 3.22.0 {#v3-22-0}

- As required by the Google Play Protect team, "System Plugin" mode has been removed. If you need it, search online for an older version and install that
- New: the day/night theme can switch automatically with the system

## 3.21.0 {#v3-21-0}

- Fixed some features in Shizuku mode
- Updated the SDK as required by Alipay
- Other fixes

## 3.20.0 {#v3-20-0}

- Fixed some unusual order numbers failing to activate
- Attempted fix (still being tested) for built-in dual apps not working on MIUI and some other ROMs after Ice Box is set as Device Owner
- PIN Lock now supports face recognition

## 3.19.0 {#v3-19-0}

- New option: center the freeze button
- Replaced Fabric, which is shutting down, with Microsoft App Center
- Some fixes

## 3.18.5 {#v3-18-5}

- Fixed icons sometimes being scaled incorrectly
- Fixed misaligned animations on some screens

## 3.18.2 {#v3-18-2}

- Fixed display issues with gesture navigation on some systems

## 3.18.0 {#v3-18-0}

- New option: automatically add a shortcut when an app is added to the freeze list.
- New option: choose whether to swipe the freeze button left or right.

## 3.17.5 {#v3-17-5}

- Fixed compatibility with Android Q Beta 6.
- Updated the servers used in mainland China for better stability. Users in China should update; users outside China are not affected.
- Other bug fixes and performance improvements.

## 3.17.0 {#v3-17-0}

- New companion app: IceBridge.
- Changed the Fingerprint Lock screen layout so the PIN button can be reached on devices with an in-display fingerprint sensor.

## 3.16.5 {#v3-16-5}

- New companion app support: 划卡冻结 (swipe to freeze, root only)
- Bug fixes and performance improvements

## 3.16.0 {#v3-16-0}

- Added a page introducing companion apps

## 3.15.8 {#v3-15-8}

- Fixed some issues that could drain battery in the background
- Tutorials and help docs now use links hosted in China for faster access

## 3.15.3 {#v3-15-3}

- Root mode and simple ADB mode can now show app clones created by the system's dual apps feature
- Fixed a conflict with Android Q Beta 3 gestures

## 3.14.2 {#v3-14-2}

- Added a general-purpose SDK: [Delegated Scopes Manager](https://github.com/heruoxin/Delegated-Scopes-Manager)
- Experimental support for WeChat Pay and QQ Pay (manual transfer). See [WeChat Pay](/purchase/wechat-pay/)

## 3.14.0 {#v3-14-0}

- New "Simple ADB" mode for non-rooted devices where setting up Device Owner is inconvenient. This mode needs to be activated again after every reboot
- Updated to Shizuku API v3
- Fixed double-tapping a shortcut failing to launch the app on Android Q
- Other fixes

## 3.13.0 {#v3-13-0}

- Basic compatibility fixes for Android Q
- All features now work inside Island's work profile
- Support for 权限猫
- If the Auto Freeze options don't work properly, add Ice Box to the battery whitelist in system settings manually. If you don't need Auto Freeze, turn the option off and Ice Box will not run in the background at all

## 3.12.2 {#v3-12-2}

- Icons can now be sorted
- Batch adding shortcuts is now available on Android 8.0+ (because of system limits, batch adding is not guaranteed to succeed)

## 3.12.0 {#v3-12-0}

- Rewrote some page layouts
- Rewrote the "Notify Add to Ice Box" feature
- Compatible with adding shortcuts from third-party apps such as Fluid NG
- Because of Huawei system limits, Huawei users with a third-party launcher cannot add shortcuts from inside Ice Box. Try long-pressing an empty area of the home screen to add them instead

## 3.11.1 {#v3-11-1}

- Bug fixes
- Adjusted UI layout and elements.

## 3.10.0 {#v3-10-0}

- Fixed the app list crashing on Android 9 because of a conflict with Nevolution.
- Redesigned the first-launch activation guide and added a link to the one-click activator.

## 3.9.9 {#v3-9-9}

- If Ice Box was set up without root using a QR code, you can activate pre-installed apps in "Ice Box Settings > Laboratory > Active Pre-installed System Apps". Apps that are not activated stay uninstalled.
- Other bug fixes.

## 3.9.8 {#v3-9-8}

- Fixed a few crashes when editing the list
- In non-root mode, the organization name shown on the lock screen can now be customized (the system requires it, so it cannot be removed)

## 3.9.6 {#v3-9-6}

- Merged the filter and menu buttons on the list editing screen
- Added Root (Fastest) mode

## 3.9.5.1 {#v3-9-5-1}

- The quick freeze status in the notification shade now follows the Auto Freeze status
- Fixed some non-root users being unable to connect to the purchase server

## 3.9.5 {#v3-9-5}

- The SDK now supports installing and uninstalling apps. Developers are welcome to integrate it: [IceBox-SDK](https://github.com/heruoxin/IceBox-SDK)
- Added a log center to the SDK. Every freeze, install and uninstall action by third-party apps is recorded
- If BlackHouse (小黑屋) is already set as Device Owner, Ice Box can be used directly
- New just-for-fun option: sword-drawing sound effect

## 3.9.3 {#v3-9-3}

- Updated target to 28
- Improved the Root (fast mode) engine so it works properly on Android P
- Fixed apps removed from the list occasionally still being frozen

## 3.9.2 {#v3-9-2}

- Updated target API to 26. Android requires apps running in the background to show a notification, so when features that run in the background, such as "Auto Freeze", are on, Ice Box must show a notification in your notification shade. You can find and turn off this Ice Box notification in system settings without affecting any features

- Fixed non-root mode sometimes failing to open in the previous beta
- Fixed apps occasionally missing from the list on launch
- Switched to a new database
- Updated the Island API
- Other updates and bug fixes

## 3.9.0 {#v3-9-0}

- New: share lists of system apps that are safe to freeze:
Some phone ROMs come with a lot of built-in bloatware and ads, and many users clean them up by freezing them one by one.
If you are good at this, you can share your list of frozen built-in apps with others, or keep it for the next time you flash your phone.
(Creating lists is only open to some active users)

- New QR code recognition:
When you activate Ice Box again, you no longer need to type the long order number. Take a screenshot of the Alipay bill page, share it, and choose "Barcode recognition (Ice Box)" to recognize it and activate.

- No more limit on the number of tabs

## 3.8.6 {#v3-8-6}

- Shortcuts now appear slightly more often in the Android P launcher
- Added an option in the lab that opens the [1ceboxTurner Xposed module](https://repo.xposed.info/module/gs.https.icebox.tuner) (contributed by @web1n)
- Other bug fixes

## 3.8.1 {#v3-8-1}

- Added support for "Configure in other Apps" (android.intent.action.SHOW_APP_INFO), which works with apps such as Greenify and AppOps.
- Other minor fixes.

## 3.7.6 {#v3-7-6}

- Support for Magisk 16.3.
- Fixed the lock screen action not working in Shizuku Manager and Brevent modes.
- Other minor fixes.

## 3.7.0 {#v3-7-0}

- Apps without icons can be added to Ice Box again.
- Fixed long press sometimes selecting the wrong app.
- Updated the Brevent SDK.
- Other bug fixes.

(Beta release notes omitted)

## 3.6.1 {#v3-6-1}

- The theme panel now supports transparency.
- Added a "Defrost All" shortcut.
- Ice Box content is hidden on the recent apps screen when Fingerprint Lock is on.
- New SDK. Other freezer apps are welcome to integrate it: [IceBox-SDK](https://github.com/heruoxin/IceBox-SDK)

## 3.5.2 Beta {#v3-5-2}

- Added some options to the lab:
- If you changed the icon pack, tap "Clear Icons Cache"
- If icon sizes are inconsistent, clear the cache and then consider turning off "Normalize Icon Size"
- Use "Keep Activity When Back Pressed" to decide whether Ice Box stays cached in the background
- You can switch between several engines in the lab. Before each switch, make sure all apps have been defrosted
- Added more filters and sort options to the app list editor

## 3.5.1 {#v3-5-1}

- Fixed compatibility with Android P.
- Bug fixes and performance improvements.

## 3.4.0 {#v3-4-0}

- Added Brevent and Shizuku Manager as engines. Use this mode if you have no root and setting up Island or Device Owner mode is inconvenient.
