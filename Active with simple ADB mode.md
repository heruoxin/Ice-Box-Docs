# Active with simple ADB mode

It is recommended to set up the [device owner mode](https://iceboxdoc.catchingnow.com/Device%20Owner%20(Non%20Root)%20Setup).
You can set up the simple ADB mode if you don't want to delete the accounts or have other difficulties.

- Pros: no need to delete the account and other steps.
- Cons: You will have to reactivate it every time after restarting your device. Otherwise the frozen apps will not be available.

### Step

1. Please keep the USB debugging always on and set the USB connection to "charge only". For MIUI enable the "USB debugging (security setting)".
2. Run the cmd:

```
adb shell sh /sdcard/Android/data/com.catchingnow.icebox/files/start.sh
```
