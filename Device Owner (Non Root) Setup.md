<script src="/main.js?raw=true"></script>

### Device Owner (Non Root) Mode Setup

This is a setup of how to grant [device owner (DPC)](https://developer.android.com/work/dpc/build-dpc) permission to Ice Box App. 

1. Make sure your phone running Android  5.0+ and you know how to use [ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) clearly.
2. Go to "Settings - Accounts", remove ALL ACCOUNTS including your Google account.
3. If multi-user or guest mode has been set on your device, also need to be closed or deleted
4. Run "adb shell dpm set-device-owner com.catchingnow.icebox/.receiver.DPMReceiver " on your computer.
5. Reboot then you can add your accounts and guest mode back.

### FAQ

- Q: It shows "Not allowed to ... already several accounts on the device"
- A: Please follow step 2 and remove *ALL accounts*. PS: Pulling out SIM card may be required for Xperia and ZUK devices.

- Q: It shows "Not allowed to ... already several users on the device"
- A: Please follow step 3 and remove the guest mode or multi app/private mode.

- Q: There is "Device is managed by your organization" on my notification center after setting up. Why?
- A: That is how device owner mode works. 

- Q: How to uninstall Ice Box?
- A: Just select "Uninstall" in the settings of Ice Box.


