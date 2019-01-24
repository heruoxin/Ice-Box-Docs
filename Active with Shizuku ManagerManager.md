# Active Ice Box with Shizuku Manager

Setting up Shizuku Manager is much easier than the device owner but has the follow limitations:

1. Android 7.0+ system is required.
2. It needs to active again on computer after each reboot.

The activation steps are as follows:

1. Install [Shizuku Manager](https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api) on your device and open it.
2. Enable "USB debug" in the developer settings and set the USB mode to "Charge Only".
3. Connect your device to computer and run the ADB command:

```
adb shell sh /sdcard/Android/data/moe.shizuku.privileged.api/files/start.sh
```

You should follow the step 3 again after each reboot otherwise apps in Ice Box will not be able to be defrosted.
