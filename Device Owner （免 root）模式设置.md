## 冰箱免 Root（设备管理员模式）使用配置方法

0. 首先确保您的手机 Android 版本大于等于 5.0，您已经知道如何操作 [adb](https://sspai.com/post/23509) 命令。并且您已经阅读完整篇教程。
1. 进入手机「设置 - 帐户」，删除 #所有# 的帐户，包括你的 Google 帐户（之后可以再登录回来）。
2. 如果您之前设置过多用户或手机自带访客模式、应用双开等，也需要一并关闭或删除（之后可以打开）。
3. 在电脑上执行（手机终端模拟器不行）`adb shell dpm set-device-owner com.catchingnow.icebox/.receiver.DPMReceiver` 
4. 如果显示 Success 之类的字样，那么重启您的手机。之后即可打开冰箱使用，也可以把之前删除的帐号加回来了。


### 常见问题：

#### 未设置成功？

- 问：提示 “Not allowed to ... already several accounts on the device”
- 答：第 1 步的账户没删干净，请注销您手机上所有的账户，包括 Google 账号和系统自带的如小米账户、三星账户等。注意：如果您的设备是 Xperia 或 ZUK，请尝试拔出 SIM 卡，待配置完成后再插上。

- 问：提示 “Not allowed to ... already several users on the device”
- 答：第 2 步的多用户没删干净，请删除或关闭所有多用户/访客模式/应用双开。

- 问：MIUI 用户提示 “Neither user xxx nor current process has android.permission.MANAGE_DEVICE_ADMINS”
- 答：MIUI 用户请手动在系统设置- 开发者设置里，开启「USB 调试（安全设置）」。


#### 已设置成功，但是？

- 问：设置完后，自带的双开不能用了？
- 答：这是部分手机系统（如三星）自身的安全限制：设备管理员和双开不能共存。请给三星或其他厂商反馈。或者考虑切换到 Shizuku Manager/黑阈等模式使用冰箱。

- 问：设置完成后手机通知栏出现提示「手机被管理」，这是正常的吗？
- 答：正常的，这正是冰箱的免 Root 工作原理。

- 问：我不想用了，怎么解除冰箱的权限？
- 答：请先解冻所有的应用，然后到冰箱设置里点击「卸载」，确认后即可解除授权。

