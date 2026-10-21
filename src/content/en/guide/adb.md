---
title: ADB mode: activate Ice Box with a computer
short: ADB mode
description: Can't set up device owner, or want to keep your accounts? Activate Ice Box over ADB on a computer (simple ADB mode). No root, but reactivate after each reboot.
section: guide
group: activate
order: 6
howto: true
faq: true
related: guide/wireless-debugging, guide/activator, guide/web-activator, guide/device-owner
---

If you couldn't set up [Device Owner mode](/guide/device-owner/), or don't want to remove the accounts on your phone, you can use ADB mode (also called simple ADB mode). How it differs from Device Owner mode:

- **Pros**: no complicated steps such as removing accounts. Use it right after activation.
- **Cons**: you need to activate it again every time the phone restarts. Otherwise apps can't be frozen or defrosted.

In Ice Box, ADB mode appears as the "Wireless Debugging" work mode. On Android 11 and later, you can also activate it on the phone itself without a computer. See [Wireless debugging mode](/guide/wireless-debugging/).

## Activation steps {#steps}

1. Make sure the latest version of Ice Box is installed.
2. Turn on USB debugging on the phone and keep it on at all times. Set the USB connection mode to "Charge only". On Xiaomi phones, you also need to turn on "USB debugging (Security settings)".
3. Connect the phone to the computer, open the activator, and choose ADB mode to activate.

[[activator-download]]

If you're comfortable with ADB commands, you can skip the activator and run this on your computer instead:

```
adb shell sh /sdcard/Android/data/com.catchingnow.icebox/files/start.sh
```

## FAQ {#faq}

### The activator is stuck loading

Extract all the files in the activator archive to your computer before you run it. Don't extract them to the phone's storage, and don't double-click the exe inside the archive.

### Ice Box stops working soon after I unplug the cable

Keep USB debugging on at all times, and leave the USB connection mode on "Charge only" without changing it. On Xiaomi phones, "USB debugging (Security settings)" also needs to be on. Changing any of these switches makes the system take back Ice Box's permission automatically.

### Can't freeze or defrost after restarting the phone

This is normal in ADB mode. After a restart, connect to the computer and activate again, or on Android 11 and later, activate again with [Wireless debugging](/guide/wireless-debugging/).
