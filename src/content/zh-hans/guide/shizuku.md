---
title: 使用 Shizuku 激活冰箱
short: Shizuku 模式
description: 安装 Shizuku 并通过无线调试启动它，冰箱就能免 Root、免电脑工作。已 Root 的手机还可以使用 Sui。附步骤与注意事项。
section: guide
group: activate
order: 7
howto: true
related: guide/wireless-debugging, guide/adb, guide/root
---

[Shizuku](https://shizuku.rikka.app/zh-hans/) 是一个帮助其他 App 获取系统权限的工具。安装 Shizuku 后，可以使用系统的「无线调试」功能免 Root、免电脑地激活冰箱。

使用前请了解：

- 通过无线调试启动 Shizuku 需要 Android 11 及以上的系统。
- 重启手机后需要重新启动 Shizuku，否则冰箱无法冻结和解冻 App。
- Shizuku 服务中断期间，已冻结的 App 也无法解冻，恢复 Shizuku 服务后即可正常操作。

## 激活步骤 {#steps}

1. 在手机上安装 Shizuku：[Google Play](https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api) 或[酷安](https://www.coolapk.com/)。
2. 按照 [Shizuku 官方教程](https://shizuku.rikka.app/zh-hans/guide/setup/#%E9%80%9A%E8%BF%87%E6%97%A0%E7%BA%BF%E8%B0%83%E8%AF%95%E5%90%AF%E5%8A%A8)，使用无线调试功能启动它。
3. 打开冰箱，在「切换工作模式」中选择 Shizuku 模式，并在 Shizuku 的提示中允许冰箱使用。

之后即可正常使用。重启手机后，请先重新启动 Shizuku。

## 已 Root 的手机：使用 Sui {#sui}

Sui 是 Shizuku 的 Root 版本，以 Magisk 模块的形式运行，重启后会自动启动。冰箱同样支持 Sui，安装后在冰箱的「切换工作模式」中选择 Sui 即可。

已经 Root 的手机也可以直接使用 [Root 模式](/guide/root/)。

## 常见问题 {#faq}

### 提示「获取 Shizuku 权限失败」

请确认 Shizuku 服务已经启动，并在 Shizuku 中为冰箱授权。

### 小米手机无法配合 Shizuku 使用

MIUI 11 起，第三方 App 之间的权限跳转可能失效。请先关闭「MIUI 优化」，再在桌面长按冰箱图标，进入应用信息，在权限设置中手动打开「其他权限」。
