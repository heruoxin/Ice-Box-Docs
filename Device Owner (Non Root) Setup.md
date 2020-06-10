<script src="/main.js?raw=true"></script>

### Device Owner (Non Root) Mode Setup

This is a setup of how to use Ice Box  app in [device owner (DPC)](https://developer.android.com/work/dpc/build-dpc) mode without root permission.

If your device already rooted, there is no need to use device owner mode. Just use the root mode.

#### What is device owner?

Device owner (DPC) is a part of Android enterprise functions which provides the ability to freeze and unfreeze any apps without root.

One device can only have one device owner. Please do not enable the "device admin" permission on phone directly, it will not work.

To enable the device owner permission on your device, follow the instruction:

1. Make sure your phone running Android  5.0+ and you know how to use [ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) command line clearly.
2. Go to "Settings - Accounts", remove ALL ACCOUNTS including your Google account.
3. If multi-user or guest mode has been set on your device, also need to be closed or deleted
4. Run "adb shell dpm set-device-owner com.catchingnow.icebox/.receiver.DPMReceiver " on your computer.
5. Reboot then you can add your accounts and guest mode back.

### FAQ

- Q: It shows "Not allowed to ... already several accounts on the device"
- A: Please follow step 2 and remove *ALL accounts*. PS: Pulling out SIM card may be required for Xperia and ZUK devices.

- Q: It shows "Not allowed to ... already several users on the device"
- A: Please follow step 3 and remove the guest mode or multi app/private mode.

- Q: There is "Device is managed by IceBox" on my notification center after setting up. Why?
- A: That is how device owner mode works. This prompt cannot be removed due to Android system limitations but can be renamed in Ice Box's settings -> lab.

- Q: How to release the permission or uninstall Ice Box?
- A: Just select "Uninstall" in the settings of Ice Box.The device owner permission will be released and Ice Box will be uninstalled at the same time. Please make sure all apps has been defrosted before uninstalling.
