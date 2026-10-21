---
title: Wireless debugging mode: activate Ice Box without root or a computer
short: Wireless debugging mode
description: On Android 11 and later, activate Ice Box with the system's Wireless debugging feature, with no root and no computer needed. Full steps, pairing tips and FAQ.
section: guide
group: activate
order: 5
howto: true
faq: true
related: guide/adb, guide/shizuku, guide/devices, guide/device-owner
---

Wireless debugging mode needs neither root nor a computer. Ice Box uses the system's "Wireless debugging" feature to get the permission it needs to freeze apps, and the whole process happens on the phone.

Before you start, note that:

- It requires Android 11 or later.
- You need a WiFi connection while pairing. Any WiFi network will do.
- After the phone restarts, you need to turn the "Wireless debugging" switch back on. Otherwise Ice Box can't freeze or defrost apps.

If your phone runs a version older than Android 11, or you'd rather activate with a computer, see [ADB mode](/guide/adb/).

## Before you begin {#before}

Ice Box checks each of the following on its setup page. Tap any item that isn't met yet to go straight to the right setting:

1. **Turn off VPN for now**. You can turn it back on after pairing.
2. **Allow notifications for Ice Box**. You enter the pairing code in Ice Box's notification.
3. **Turn on USB debugging**. If you haven't turned on Developer options yet, see the next section.
4. **Connect to WiFi**. Any WiFi network will do.
5. **Allow Ice Box to run in the background**. On some phones, you need to set Ice Box's background usage to "Unrestricted" in system settings.

## How to turn on USB debugging {#usb-debugging}

1. Open "Settings", find "About phone", and tap "Build number" 7 times in a row until you see a message like "Developer mode enabled".
2. Go back to "Settings", find "Developer options" under "System" or "Additional settings", and turn on the "USB debugging" switch.

Menu locations vary by brand and system version. Ice Box includes step-by-step illustrations for common brands that you can follow along with.

## Get the pairing code in three steps {#pairing}

1. In Developer options, find "Wireless debugging", turn it on, and tap it to open its settings page.
2. Choose "Pair device with pairing code".
3. Keep the pairing code dialog open, pull down the notification shade, and enter the six-digit pairing code in Ice Box's notification.

Once pairing succeeds, Ice Box shows "Wireless Debugging Enabled" and is ready to use. Ice Box also has a video tutorial you can expand if you have trouble pairing.

> [!TIP]
> If you don't see "Wireless debugging" in Developer options, Developer options are most likely not turned on yet. Complete the steps in the previous section first.

## After restarting the phone {#after-reboot}

When the phone restarts, the system takes back Ice Box's permission. Go back into Developer options and turn on the "Wireless debugging" switch, and Ice Box will work again. Ice Box reminds you to turn it on with a notification.

## FAQ {#faq}

### It says "Please disable VPN and battery optimization" when pairing

Ice Box can't connect to the system's wireless debugging service. Turn off your VPN and any proxy apps, turn off battery optimization for Ice Box in system settings, then try again.

### It says "Incorrect pairing code" or "Expired"

The pairing code only works while its dialog is showing. Get a new pairing code and enter it quickly while the dialog stays open.

### I can't see the input box in the notification

Make sure notifications are allowed for Ice Box. Some systems collapse the notification. Tap the expand button on the right side of the notification to see the input box.

### Xiaomi, Huawei, OPPO or other phones say ADB permission is insufficient

Turn on the matching option for your brand in Developer options. On Xiaomi phones, turn on "USB debugging (Security settings)". On Huawei phones, turn on "Allow ADB debugging in charge only mode". On OPPO and OnePlus phones, turn on "Disable permission monitoring". On other brands, turn on similar options as needed. For more, see the [phone brand notes](/guide/devices/).
