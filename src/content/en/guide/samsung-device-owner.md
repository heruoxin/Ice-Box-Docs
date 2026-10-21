---
title: Risks of setting up device owner on Samsung phones
short: Samsung device notes
description: Setting up device owner on Samsung may break Secure Folder and Dual Messenger, or even reset the lock screen password. Samsung users, read this before deciding.
section: guide
group: trouble
order: 2
related: guide/root, guide/shizuku, guide/wireless-debugging, guide/devices
---

Ice Box is built on Android's native device owner features. Samsung is a special case among Android phone makers: it implements its own security framework called KNOX.

After you set up and activate a non-root solution based on Android's native device owner on a Samsung phone, you may run into these problems:

- Some KNOX features, such as Secure Folder, may not work.
- The built-in Dual Messenger feature stops working.
- The system resets the lock screen password, which forces a factory reset and loses your data.

None of these problems happen every time. Take the most serious one, the lock screen password reset: in 2018, among about 200,000 Samsung users of Ice Box, we received 6 reports in total, and the actual number of affected users may be higher. Since Samsung released One UI, more users seem to have run into this problem, so we don't recommend Device Owner mode on One UI.

For now, we don't know the exact cause of these problems, and there's no good solution.

> [!CAUTION]
> Samsung users, please think carefully, very carefully, before using Device Owner mode.

## Recommended modes for Samsung users {#recommended}

- Rooted: use [Root mode](/guide/root/).
- Not rooted, Android 11 or later: use [Wireless debugging mode](/guide/wireless-debugging/) or [Shizuku mode](/guide/shizuku/).
- Not rooted, with a computer: use [ADB mode](/guide/adb/).

None of these modes need device owner. Except for Root mode, they all need to be activated again every time the phone restarts.
