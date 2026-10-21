---
title: Root mode
short: Root mode
description: Root mode: on a rooted phone, open Ice Box and grant root access. How to switch root engines, fix root permission failures and change to another work mode.
section: guide
group: activate
order: 9
faq: true
related: guide/shizuku, guide/other-modes, faq
---

If your phone is rooted, just open Ice Box and allow it when your root manager (such as Magisk) shows the permission request. No other setup is needed.

Root mode keeps working after a reboot, and it doesn't need a computer.

## Root engines {#engines}

Ice Box offers several root engines, including "Root (Fastest)" and "Root Classical". You can switch between them under "Choose Root Engine" in the "Laboratory". If the current engine doesn't work properly on your phone, try another one.

Before switching engines, make sure all apps are defrosted.

## FAQ {#faq}

### It says "Failed to get ROOT permission"

Open your root manager, delete Ice Box's authorization record, then grant Ice Box root access again.

### Switching from Root mode to another work mode

You can change it under "Switch Work Mode" in Ice Box settings. Defrost all apps before switching. Work modes are not compatible with each other, so apps must be defrosted in the same mode that froze them.

### Where did the old "System Plugin" go?

To meet Google Play requirements, System Plugin mode was removed in version 3.22.0. On rooted phones, use Root mode directly.
