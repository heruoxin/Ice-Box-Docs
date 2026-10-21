---
title: 三星手机设置设备管理员的风险提示
short: 三星设备特别说明
description: 三星手机设置设备管理员（Device Owner）后，可能出现安全文件夹、应用双开失效，甚至锁屏密码被重置的情况。三星用户请先阅读本文再决定。
section: guide
group: trouble
order: 2
related: guide/root, guide/shizuku, guide/wireless-debugging, guide/devices
---

冰箱是基于 Android 原生的设备管理员相关功能开发的。而在 Android 阵营中，三星非常特殊，它自行实现了一套名为 KNOX 的安全框架。

在三星手机上设置并激活基于 Android 原生设备管理员的免 Root 方案后，可能会遇到下列问题：

- 部分 KNOX 功能，如安全文件夹，可能无法使用。
- 系统自带的应用双开失效。
- 锁屏密码被系统重置，导致不得不恢复出厂设置，丢失数据。

以上问题均非必现。以最为严重的锁屏密码重置问题为例，在 2018 年使用冰箱的约 20 万名三星用户中，一共收到 6 例反馈，实际出现问题的人数可能大于这个数字。三星发布 One UI 后，遇到这个问题的用户似乎有所增多，因此不建议 One UI 系统的用户使用设备管理员模式。

针对上述问题，目前既不清楚具体原因，也没有很好的解决方案。

> [!CAUTION]
> 三星用户请谨慎，谨慎，再谨慎地考虑使用设备管理员模式。

## 三星用户推荐的模式 {#recommended}

- 已 Root：使用 [Root 模式](/guide/root/)。
- 未 Root、Android 11 及以上：使用[无线调试模式](/guide/wireless-debugging/)或 [Shizuku 模式](/guide/shizuku/)。
- 未 Root、有电脑：使用 [ADB 模式](/guide/adb/)。

这些模式都不需要设置设备管理员。除 Root 模式外，每次重启手机后都需要重新激活。
