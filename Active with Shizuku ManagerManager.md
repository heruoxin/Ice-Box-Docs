# Active Ice Box with Shizuku Manager

Setting up Shizuku Manager is much easier than the device owner but has the follow limitations:

1. It requires Android 7.0+ system.
2. It needs to active again on computer after each reboot.

The activation steps are as follows:

1. Install Shizuku Manager on your device and open it. [Google Play](https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api)
2. Enable "USB debug" and set the USB mode to "Charge Only".
3. Run the ADB command:

```
adb shell sh /sdcard/Android/data/moe.shizuku.privileged.api/files/start.sh
```

You should follow the step 3 again after each reboot otherwise apps in Ice Box will not able to be defrosted.
