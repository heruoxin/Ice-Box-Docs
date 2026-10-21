---
title: 使用网页版激活器激活冰箱
short: 网页版激活器
description: 不用安装任何软件，在电脑浏览器中通过 WebUSB 为冰箱激活设备管理员模式或 ADB 模式。Windows、macOS、Linux 均可使用，推荐 Chrome。
section: guide
group: activate
order: 3
howto: true
related: guide/device-owner, guide/activator, guide/adb
---

网页版激活器由 [@web1n](https://github.com/web1n) 开发，功能与 exe 版激活器一致，适用于各个电脑系统。推荐使用 Chrome 浏览器操作。

[打开网页版激活器](https://adb.http.gs/icebox.html)

网页版激活器支持激活两种模式：

- **设备管理员模式**：激活一次长期有效，但在部分手机上可能有副作用。
- **ADB 模式**：没有副作用，但每次重启手机或修改了系统的 USB 设置后，都需要重新连接电脑激活。

## 设备管理员模式可能的副作用 {#side-effects}

国产手机和三星的系统时常对 Android 进行定制，与设备管理员模式存在一些兼容性问题，常见的有：

- 三星手机有可能被系统锁定密码（目前收到的反馈大约为二十万分之四），请先阅读[三星设备特别说明](/guide/samsung-device-owner/)。
- 每次冻结 App 时弹出卸载提示，解冻时弹出权限请求（华为、锤子）。
- 通知栏闪烁「设备管理员已开启，点击关闭」（OPPO、vivo）。
- 系统自带的应用双开无法使用（华为、MIUI）。
- 刚解冻的 App 偶尔无法联网，关掉 App 重新打开即可（一加、锤子等）。

如果不能接受上述问题，请选择 ADB 模式。同样免 Root，但每次重启手机都需要用电脑重新激活。

## 激活方法 {#steps}

1. 确认手机上已安装冰箱。删除屏幕锁；索尼手机请取出 SIM 卡；小米手机请开启「USB 调试（安全设置）」并关闭「MIUI 优化」。
2. 用数据线把手机连上电脑，关掉电脑上的安全软件、手机助手和手机管家。
3. 在电脑上用 Chrome 浏览器打开[网页版激活器](https://adb.http.gs/icebox.html)，连接设备并激活。

激活设备管理员模式前，同样需要先退出手机上的所有帐号，详见[设备管理员模式设置](/guide/device-owner/#steps)。
