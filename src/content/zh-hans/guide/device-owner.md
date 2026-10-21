---
title: 设备管理员模式设置
short: 设备管理员模式
description: 冰箱免 Root 的设备管理员（Device Owner）模式设置方法：暂时删除帐号，用电脑执行一条 ADB 命令。设置一次，重启或升级系统后依然有效。
section: guide
group: activate
order: 1
howto: true
faq: true
related: guide/activator, guide/web-activator, guide/qr-code, guide/samsung-device-owner
---

如果你的手机已经 Root，直接打开冰箱使用即可，无需折腾。如果手机无法 Root，又希望设置一次就长期有效，可以使用设备管理员模式。设置时需要连接电脑，请先完整阅读本文。

## 什么是设备管理员？ {#what}

设备管理员（Device Owner）是 Android 企业管理框架中的一项功能，可以在不 Root 的情况下冻结和解冻任意 App。冰箱只使用其中「冻结应用」等相关能力。

- 一台手机同时只能设置一个设备管理员。
- 只能通过 ADB 命令或二维码设置。在手机设置里直接开关「设备管理器」是无效的，无法获得这项权限。
- 设置完成后，重启或升级系统都不需要重新设置。

## 用前必读 {#before}

国产手机系统时常加入各种定制功能，与设备管理员模式的兼容性或多或少存在一些问题，常见的有：

- 三星手机有可能被系统锁定密码，请务必先阅读[三星设备特别说明](/guide/samsung-device-owner/)。
- 每次冻结 App 时弹出卸载提示，解冻时弹出权限请求（华为、锤子）。
- 通知栏闪烁「设备管理员已开启，点击关闭」（OPPO、vivo）。
- 系统自带的应用双开无法使用（华为、MIUI）。
- 刚解冻的 App 偶尔无法联网，关掉 App 重新打开即可（一加、锤子等）。

如果不能接受上述问题，可以考虑使用 [ADB 模式](/guide/adb/) 或[无线调试模式](/guide/wireless-debugging/)。它们同样免 Root，但每次重启手机后都需要重新激活。

## 使用激活器，还是命令行？ {#tools}

如果你不熟悉 ADB 和命令行操作，请优先使用激活工具，效果与命令行完全相同：

- [一键激活器](/guide/activator/)：Windows 电脑使用。
- [网页版激活器](/guide/web-activator/)：Windows、macOS、Linux 都能用，推荐 Chrome 浏览器。
- [秋之盒](/guide/autumnbox/)：Windows 电脑使用。

没有电脑的话，可以尝试[二维码设置](/guide/qr-code/)，效果完全相同，但需要先恢复出厂设置，且部分国产系统不支持。

## 命令行设置步骤 {#steps}

1. 确认手机系统为 Android 7.0 及以上，并已安装最新版冰箱。确认你已经知道如何使用 [ADB](https://developer.android.com/tools/adb?hl=zh-cn) 命令，并已读完本文。
2. 索尼手机请取出 SIM 卡；小米手机请在开发者选项中开启「USB 调试（安全设置）」，并关闭「MIUI 优化」。
3. 进入手机「设置 - 帐户」，删除所有的帐户，包括 Google、小米、华为等系统帐号。设置完成后可以再登录回来。
4. 如果设置过多用户、访客模式或应用双开，也需要一并关闭或删除。设置完成后可以再打开。
5. 在电脑上执行下面的命令（手机上的终端模拟器不行）。

```
adb shell dpm set-device-owner com.catchingnow.icebox/.receiver.DPMReceiver
```

如果显示 Success 之类的字样，就设置成功了。打开冰箱即可使用，也可以把之前删除的帐号加回来。

ADB 工具可以从 Google 官方下载：[Windows](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)、[macOS](https://dl.google.com/android/repository/platform-tools-latest-darwin.zip)、[Linux](https://dl.google.com/android/repository/platform-tools-latest-linux.zip)。

## 设置没有成功？ {#faq #常见问题}

### 提示「adb 不是内部或外部命令，也不是可运行的程序」

你可能不熟悉电脑命令行的相关操作，建议直接使用[一键激活器](/guide/activator/)或[网页版激活器](/guide/web-activator/)激活。

### 激活器一直显示载入中

请把激活器压缩包内的所有文件都解压到电脑上再操作。不要解压到手机存储里，也不要直接双击压缩包里的 exe。

### 提示「error: no devices/emulators found」

手机没有连接上电脑。请检查手机是否开启了 USB 调试，电脑是否正确安装了手机驱动，以及有没有手机助手、管家或杀毒软件阻止了连接。

### 提示「Not allowed to ... already several accounts on the device」

第 3 步的帐户没有删干净。请退出手机上所有的帐户，包括 Google 帐号和系统自带的小米帐号、华为帐号等。索尼手机请取出 SIM 卡后重启。

### 提示「Not allowed to ... already several users on the device」

第 4 步的多用户或应用双开没有删干净。请删除或关闭所有多用户、访客模式和应用双开。

### 提示「Trying to set the device owner, but device owner is already set.」

手机上已经有其他 App 被设置为设备管理员，一台手机只能有一个设备管理员。如果设置的是炼妖壶 Island 或小黑屋等与冰箱互通的 App，在冰箱中切换到对应的工作模式即可直接使用，详见[其他工作模式](/guide/other-modes/)。

### 小米手机提示「Neither user xxx nor current process has android.permission.MANAGE_DEVICE_ADMINS」

请在系统设置的开发者选项里，手动开启「USB 调试（安全设置）」。如果仍然不行，请关闭「MIUI 优化」后再试。

## 已经设置成功，但是？ {#faq-after}

### 通知栏出现「设备由您所在单位管理」之类的提示，正常吗？

正常，这正是设备管理员模式的工作原理。这段文字由系统显示，无法删除，但可以在冰箱的「实验室」中把单位名称改成任何你喜欢的文字。

### 有些手机设置里提示设备管理员可以读取日历、电子邮件等个人信息，冰箱会读取吗？

不会。冰箱只调用设备管理员下的「冻结应用」等相关权限，不调用无关权限，更不会读取日历、邮件等信息。

### 不想用了，怎么解除冰箱的权限？

请先解冻所有 App，然后在冰箱设置里点击「卸载」，确认后即可解除设备管理员授权并卸载冰箱。详见[卸载冰箱](/guide/uninstall/)。

### 之前用 Root 或 ADB 模式冻结的 App 怎么解冻不了？

不同工作模式之间互不兼容。请在冰箱「实验室」中切换回原来的工作模式，哪种模式冻结的 App，就在哪种模式下解冻。
