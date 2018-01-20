###Device Owner (Non Root) Mode Setup

1. Make sure your phone running Android  5.0+ and you know how to use [ADB](https://www.xda-developers.com/install-adb-windows-macos-linux/) clearly.
2. Go to "Settings - Accounts", remove ALL ACCOUNTS including your Google account.
3. If multi-user or guest mode has been set on your device, also need to be closed or deleted
4. Run "adb shell dpm set-device-owner com.catchingnow.icebox/.receiver.DPMReceiver " on your computer.
5. Reboot then you can add your accounts and guest mode back.

###FAQ

- Q: It shows "Not allowed to ... already several accounts on the device"
- A: Please follow step 1 and remove *ALL accounts*.Please note:if you device is Xperia or ZUK,you should remove SIM card in order to Setup Icebox.

- Q: It shows "Not allowed to ... already several users on the device"
- A: Please follow step 2 and remove the guest mode or multi app/private mode.

- Q: There is "Device is managed by your organization" on my notification center after setting up. Why?
- A: That is how Ice Box works.

- Q: How to uninstall Ice Box?
- A: Just select "Uninstall" in the settings of Ice Box.


