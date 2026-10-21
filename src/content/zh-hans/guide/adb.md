---
title: ADB 模式：用电脑激活冰箱
short: ADB 模式
description: 不想删除帐号，或无法设置设备管理员时，可以用电脑通过 ADB 激活冰箱，也叫普通 ADB 模式。无需 Root，但每次重启手机后需要重新激活。
section: guide
group: activate
order: 6
howto: true
faq: true
related: guide/wireless-debugging, guide/activator, guide/web-activator, guide/device-owner
---

如果没能成功设置[设备管理员模式](/guide/device-owner/)，或者不想删除手机上的帐号，可以使用 ADB 模式（也叫普通 ADB 模式）。它与设备管理员模式的区别：

- **优点**：不需要删除帐号等复杂步骤，激活后直接使用。
- **缺点**：每次重启手机后都需要重新激活，否则无法冻结和解冻 App。

ADB 模式在冰箱中显示为「无线调试」工作模式。Android 11 及以上的手机也可以不用电脑，直接在手机上激活，详见[无线调试模式](/guide/wireless-debugging/)。

## 激活步骤 {#steps}

1. 确认已安装最新版冰箱。
2. 打开手机的 USB 调试，并保持始终开启；把 USB 连接方式设为「仅充电」。小米手机需要开启「USB 调试（安全设置）」。
3. 把手机连接到电脑，打开激活器，选择 ADB 模式激活即可。

[[activator-download]]

熟悉 ADB 命令的话，也可以不用激活器，直接在电脑上执行：

```
adb shell sh /sdcard/Android/data/com.catchingnow.icebox/files/start.sh
```

## 常见问题 {#faq}

### 激活器一直显示载入中

请把激活器压缩包内的所有文件都解压到电脑上再操作。不要解压到手机存储里，也不要直接双击压缩包里的 exe。

### 拔下数据线后不久，冰箱就失效了

请保持 USB 调试始终开启，USB 连接方式保持「仅充电」不要改动，小米手机还需要开启「USB 调试（安全设置）」。改动这些开关都会让系统自动收回冰箱的权限。

### 重启手机后无法冻结和解冻

这是 ADB 模式的正常现象。重启后请重新连接电脑激活，或者在 Android 11 及以上的手机上使用[无线调试](/guide/wireless-debugging/)重新激活。
