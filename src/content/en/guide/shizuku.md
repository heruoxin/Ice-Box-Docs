---
title: Activate Ice Box with Shizuku
short: Shizuku mode
description: Install Shizuku and start it with Wireless debugging, and Ice Box works without root or a computer. Rooted phones can also use Sui. Steps and notes inside.
section: guide
group: activate
order: 7
howto: true
related: guide/wireless-debugging, guide/adb, guide/root
---

[Shizuku](https://shizuku.rikka.app/) is a tool that helps other apps get system permissions. With Shizuku installed, you can use the system's "Wireless debugging" feature to activate Ice Box without root or a computer.

Before you start, note that:

- Starting Shizuku with Wireless debugging requires Android 11 or later.
- After the phone restarts, you need to start Shizuku again. Otherwise Ice Box can't freeze or defrost apps.
- While the Shizuku service is down, frozen apps can't be defrosted either. Everything works normally again once the Shizuku service is back.

## Activation steps {#steps}

1. Install Shizuku on the phone from [Google Play](https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api) or [CoolApk (酷安)](https://www.coolapk.com/), a Chinese Android app store.
2. Follow the [official Shizuku guide](https://shizuku.rikka.app/guide/setup/#start-via-wireless-debugging) to start it with Wireless debugging.
3. Open Ice Box, choose "Shizuku Manager" in "Switch Work Mode", and allow Ice Box when Shizuku asks.

After that, Ice Box is ready to use. After restarting the phone, start Shizuku again first.

## Rooted phones: use Sui {#sui}

Sui is the root version of Shizuku. It runs as a Magisk module and starts automatically after a reboot. Ice Box supports Sui as well. After installing it, choose "Sui" in Ice Box's "Switch Work Mode".

Rooted phones can also use [Root mode](/guide/root/) directly.

## FAQ {#faq}

### It says "Failure to grant Shizuku permission"

Make sure the Shizuku service is running, and grant Ice Box permission in Shizuku.

### Shizuku doesn't work with Ice Box on Xiaomi phones

Starting with MIUI 11, permission handoffs between third-party apps may fail. Turn off "MIUI optimization" first. Then long-press the Ice Box icon on the home screen, open App info, and manually turn on "Other permissions" in the permission settings.
