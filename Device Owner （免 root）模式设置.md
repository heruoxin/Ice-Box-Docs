## 冰箱免 Root（设备管理员模式）使用配置方法

如果您的手机已经 Root 请直接打开冰箱使用，无需折腾。如果手机无法 Root，请务必仔细阅读下文：

#### 国产手机及三星系统请注意：

国产手机系统时常添加各种中国特色功能，因此其与设备管理员模式的兼容性或多或少存在一些问题，常见如下：

- 每次冻结 App 弹出卸载提示，解冻弹出权限请求（华为）
- 通知栏闪烁「设备管理员已开启，点击关闭」（OPPO、VIVO）
- 自带的双开无法使用（华为、MIUI）
- 安全文件夹被系统禁用（三星）
- 偶尔刚解冻的 App 无法联网，关掉重开就好了（一加等）


如不能接受上述问题，请考虑使用 [Shizuku Manager](https://www.coolapk.com/apk/moe.shizuku.privileged.api) /[黑阈](https://www.coolapk.com/apk/me.piebridge.brevent)等模式使用冰箱。也是免 Root 的，但是每次重启手机都需要连电脑再配一次。[Shizuku 使用教程](https://jingyan.baidu.com/article/e52e361568e6d540c60c5108.html)

设备管理员模式则不需要反复连接电脑设置，一次配置，终身有效，重启或升级系统都没有影响。


### 设备管理员设置步骤

0. 首先确保您的手机 Android 版本大于等于 5.0，您已经知道如何操作 [adb](https://sspai.com/post/23509) 命令。并且已经阅读完整篇教程。
1. 进入手机「设置 - 帐户」，删除 #所有# 的帐户，包括你的 Google 帐户（之后可以再登录回来）。
2. 如果您之前设置过多用户或手机自带访客模式、应用双开等，也需要一并关闭或删除（之后可以打开）。
3. 取出手机 SIM 卡，三星手机如果之前没有设置过锁屏手势/指纹/密码，请先设置一个密码。
4. 在电脑上执行（手机终端模拟器不行）`adb shell dpm set-device-owner com.catchingnow.icebox/.receiver.DPMReceiver` 
5. 如果显示 Success 之类的字样，那么重启您的手机。之后即可打开冰箱使用，也可以把之前删除的帐号加回来了。


### 常见问题：

#### 未设置成功？

- 问：提示 “Not allowed to ... already several accounts on the device”
- 答：第 1 步的账户没删干净，请注销您手机上所有的账户，包括 Google 账号和系统自带的如小米账户、三星账户等。

- 问：提示 “Not allowed to ... already several users on the device”
- 答：第 2 步的多用户没删干净，请删除或关闭所有多用户/访客模式/应用双开。

- 问：MIUI 用户提示 “Neither user xxx nor current process has android.permission.MANAGE_DEVICE_ADMINS”
- 答：MIUI 用户请手动在系统设置- 开发者设置里，开启「USB 调试（安全设置）」。


#### 已设置成功，但是？

- 问：设置完成后手机通知栏出现提示「手机被管理」，这是正常的吗？
- 答：正常的，这正是冰箱的免 Root 工作原理。

- 问：我不想用了，怎么解除冰箱的权限？
- 答：请先解冻所有的应用，然后到冰箱设置里点击「卸载」，确认后即可解除授权。

