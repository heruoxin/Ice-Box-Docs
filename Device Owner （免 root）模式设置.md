<script src="/main.js?raw=true"></script>

## 冰箱免 Root（设备管理员模式）手动配置方法

如果您的手机已经 Root 请直接打开冰箱使用，无需折腾。如果手机无法 Root，请务必连接电脑，仔细阅读下文：

#### 国产手机及三星系统请注意：

国产手机系统时常添加各种中国特色功能，因此其与设备管理员模式的兼容性或多或少存在一些问题，常见如下：

- 三星有可能被系统锁定密码，请参考[这里](https://iceboxdoc.catchingnow.com/Device%20Owner%20%E4%B8%89%E6%98%9F%E7%89%B9%E5%88%AB%E8%AF%B4%E6%98%8E)
- 每次冻结 App 弹出卸载提示，解冻弹出权限请求（华为、锤子）
- 通知栏闪烁「设备管理员已开启，点击关闭」（OPPO、VIVO）
- 自带的双开无法使用（华为、MIUI）
- 偶尔刚解冻的 App 无法联网，关掉 App 重开即可（一加、锤子等）


如不能接受上述问题，请考虑使用 [普通 ADB ](https://iceboxdoc.catchingnow.com/%E4%B8%80%E9%94%AE%E6%BF%80%E6%B4%BB%E5%99%A8%EF%BC%88%E6%99%AE%E9%80%9A%20ADB%20%E6%A8%A1%E5%BC%8F%EF%BC%89)等模式使用冰箱。也可免 Root ，但每次重启手机都需要连电脑再配一次。

设备管理员模式则不需要反复连接电脑设置，一次配置，终身有效，重启或升级系统都没有影响。

### 什么是设备管理员？

设备管理员是 Android 企业框架下的一个功能，提供了免 root 冻结解冻任意 app 的能力。一台手机仅能同时设置一个管理员。请勿在手机上直接开关，这是无效的，无法获取此功能权限。

### 使用命令行，还是使用激活器？

如果您不熟悉 ADB 和命令行操作，请首先考虑使用[自动激活器](https://iceboxdoc.catchingnow.com/%E4%B8%80%E9%94%AE%E6%BF%80%E6%B4%BB%E5%B7%A5%E5%85%B7)。如果您熟悉的话，可以直接使用下列命令行。

### 没有电脑怎么办？

可以尝试 [免电脑二维码设置](https://iceboxdoc.catchingnow.com/%E5%85%8D%20Root%20%E5%85%8D%E7%94%B5%E8%84%91%E8%AE%BE%E7%BD%AE) ，效果完全相同，但是：

1. 需要把手机恢复出厂设置
2. 仅支持 7.0 及以上系统版本，诸多国产手机很可能阉割了此功能。


### 命令行设置步骤

再次提醒：如果您不知道如何使用命令行，请使用[一键激活器](https://iceboxdoc.catchingnow.com/%E4%B8%80%E9%94%AE%E6%BF%80%E6%B4%BB%E5%B7%A5%E5%85%B7)。下面的内容是命令行的设置步骤：

1. 首先确保您的手机 Android 版本大于等于 5.0，您已经知道如何操作 [adb](https://sspai.com/post/23509) 命令。并且已经阅读完整篇教程。
2. 索尼手机取出手机 SIM 卡；小米用户请开启「USB 调试（安全设置）」关闭「MIUI 优化」。
3. 进入手机「设置 - 帐户」，删除 #所有# 的帐户，包括你的 Google/小米/华为等系统帐号（之后可以再登录回来）。
4. 如果您之前设置过多用户或手机自带访客模式、应用双开等，也需要一并关闭或删除（之后可以打开）。
5. 在电脑上执行（手机终端模拟器不行）`adb shell dpm set-device-owner com.catchingnow.icebox/.receiver.DPMReceiver` 

如果显示 Success 之类的字样，那么即可打开冰箱使用，也可以把之前删除的帐号加回来了。

#### 其他事项

adb 工具可以在下列地址下载：

- Google 官方地址 （[Win](https://dl.google.com/android/repository/platform-tools-latest-windows.zip) [Mac](https://dl.google.com/android/repository/platform-tools-latest-darwin.zip) [Linux](https://dl.google.com/android/repository/platform-tools-latest-linux.zip)）

### 常见问题：

#### 未设置成功？

- 问：提示 “adb不是内部或外部命令 也不是可运行程序”
- 答：您可能不熟悉电脑操作命令行相关的知识。建议直接使用[一键激活工具](https://iceboxdoc.catchingnow.com/%E4%B8%80%E9%94%AE%E6%BF%80%E6%B4%BB%E5%B7%A5%E5%85%B7)激活。

- 问：激活器一直载入中？
- 答：请把激活器压缩包内的所有文件都解压到电脑上后再操作，不要解压到手机存储卡上，不要直接双击 zip 里的 exe

- 问：提示 “error: no devices/emulators found”
- 答：手机未连接上电脑，请检查手机是否开启 USB 调试，电脑是否正确安装了对应的驱动，有没有QQ/管家/杀毒软件阻止了连接。

- 问：提示 “Not allowed to ... already several accounts on the device”
- 答：第 1 步的账户没删干净，请注销您手机上所有的账户，包括 Google 账号和系统自带的如小米账户、华为账户等，索尼手机请拔 SIM 卡重启。MIUI 13手机可能还需暂时卸载支付宝app。

- 问：提示 “Not allowed to ... already several users on the device”
- 答：第 2 步的多用户或应用双开没删干净，请删除或关闭所有多用户/访客模式/应用双开。

- 问：提示 “Trying to set the device owner, but device owner is already set.”？
- 答：您已设置其他 app 为设备管理员。一台手机上只能有一个设备管理员。如果您设置的管理员是 Island 或小黑屋等与冰箱互联互通的 app，那么直接在冰箱中选择对应选项即可直接使用。

- 问：MIUI 用户提示 “Neither user xxx nor current process has android.permission.MANAGE_DEVICE_ADMINS”
- 答：MIUI 用户请手动在系统设置- 开发者设置里，开启「USB 调试（安全设置）」，如仍不可以请关闭 MIUI 优化。


#### 已设置成功，但是？

- 问：设置完成后手机通知栏出现提示「手机被管理」，这是正常的吗？
- 答：正常的，这正是冰箱的设备管理员模式的工作原理。

- 问：有些手机设置里提示设备管理员可以读取日历电子邮件个人信息等，冰箱会吗？
- 答：不会。冰箱仅调用设备管理员下的「冻结应用」等权限，不调用任何无关权限，更不会读取日历邮件等信息，请放心使用。

- 问：我不想用了，怎么解除冰箱的权限？
- 答：请先解冻所有的应用，然后到冰箱设置里点击「卸载」，确认后即可解除管理员授权，并卸载冰箱。

- 问：我之前用 Root，或者普通 ADB 权限冻结的程序怎么解冻不了？
- 答：每种冻结模式之间不兼容，请在冰箱实验室中切换引擎，哪种模式冻结的就在哪种模式里解冻。
