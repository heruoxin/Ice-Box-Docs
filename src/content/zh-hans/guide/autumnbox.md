---
title: 使用秋之盒激活冰箱
short: 秋之盒
description: 秋之盒是一个简化 ADB 操作的 Windows 工具箱，可以一键为冰箱激活设备管理员模式。附操作步骤与注意事项。
section: guide
group: activate
order: 4
howto: true
related: guide/device-owner, guide/activator, guide/web-activator
---

秋之盒是一个可以简化 ADB 操作的一键工具箱，感谢 [zsh2401](https://zsh2401.top/) 的辛勤开发。

秋之盒仅适用于 Windows 电脑。如果你的电脑是 macOS 或 Linux，请使用[网页版激活器](/guide/web-activator/)或参考[命令行设置步骤](/guide/device-owner/#steps)。

> [!NOTE]
> 秋之盒的官网目前无法访问，项目也已停止更新，源码与旧版本可以在 [GitHub](https://github.com/zsh2401/AutumnBox) 找到。推荐优先使用[一键激活器](/guide/activator/)或[网页版激活器](/guide/web-activator/)，效果相同。

## 用前必读 {#before}

国产手机系统时常加入各种定制功能，与设备管理员模式的兼容性或多或少存在一些问题，常见的有：

- 三星手机有可能被系统锁定密码（目前收到的反馈大约为二十万分之四），请先阅读[三星设备特别说明](/guide/samsung-device-owner/)。
- 每次冻结 App 时弹出卸载提示，解冻时弹出权限请求（华为、锤子）。
- 通知栏闪烁「设备管理员已开启，点击关闭」（OPPO、vivo）。
- 系统自带的应用双开无法使用（华为、MIUI）。
- 刚解冻的 App 偶尔无法联网，关掉 App 重新打开即可（一加等）。
- 索尼手机建议在升级 Android 9 之前设置好冰箱。Android 9 加入了难以删除的隐藏帐号，已升级的可以使用[二维码设置](/guide/qr-code/)。已经设置好的不受影响。

如果不能接受上述问题，可以使用 [Shizuku](/guide/shizuku/) 或 [ADB 模式](/guide/adb/)。同样免 Root，但每次重启手机都需要重新激活。

设备管理员模式则不需要反复连接电脑，设置一次长期有效，重启或升级系统都不受影响。

## 操作步骤 {#steps}

确定使用设备管理员模式激活冰箱后，请按下列步骤操作：

1. 确认手机上已安装冰箱。删除屏幕锁；索尼手机请取出 SIM 卡；小米手机请开启「USB 调试（安全设置）」并关闭「MIUI 优化」。
2. 在系统设置中删除所有帐号，如小米帐号、华为帐号、Google 帐号等。激活后可以再登录回来。
3. 下载并打开秋之盒。
4. 打开手机的 USB 调试并连接电脑。连不上的话，一般是驱动没有安装，或者与其他手机助手冲突，请检查驱动并关闭其他手机助手。
5. 点击秋之盒里的「激活冰箱」功能。

正常情况下，现在就可以打开冰箱使用了。遇到问题时，请先确认系统帐号是否都已删除。删除后仍无法使用的话，请对照输出日志，参考[设备管理员模式的常见问题](/guide/device-owner/#faq)。
