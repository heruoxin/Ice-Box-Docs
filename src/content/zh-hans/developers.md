---
title: 冰箱 SDK 开发者说明
short: 开发者
description: 冰箱 SDK 可以在装有冰箱的手机上，为第三方 App 提供冻结、解冻以及静默安装和卸载 APK 的能力。介绍接入方式、权限与主要接口。
section: about
priority: 0.5
related: use-cases/automation, features, about
---

冰箱 SDK 可以在已安装并启用了冰箱的设备上，为第三方 App 提供冻结和解冻 App 的能力。在设备管理员模式下，还可以静默安装和卸载 APK。

源码与完整文档：[github.com/heruoxin/IceBox-SDK](https://github.com/heruoxin/IceBox-SDK)

## 版本要求 {#requirements}

- 冻结和解冻：冰箱 3.6.0 及以上。
- 静默安装和卸载：冰箱 3.9.5 及以上，并且冰箱运行在设备管理员模式下。

## 权限 {#permission}

冻结、解冻和安装 APK 等操作类接口，需要先向用户请求冰箱 SDK 的权限；查询类接口不需要权限。

```java
if (ContextCompat.checkSelfPermission(this, IceBox.PERMISSION) != PackageManager.PERMISSION_GRANTED) {
    ActivityCompat.requestPermissions(this, new String[]{IceBox.PERMISSION}, 0x233);
}
```

## 主要接口 {#api}

### 查询工作模式

冰箱可能工作在 `pm disable-user` 或 `pm hide` 两种冻结方式下，不需要权限。

```java
IceBox.WorkMode workMode = IceBox.queryWorkMode(context);
```

### 查询 App 的冻结状态

返回正常、`pm disable` 冻结、`pm hide` 冻结或两者兼有，不需要权限。

```java
IceBox.getAppEnabledSetting(context, packageName);
```

### 冻结或解冻 App

需要权限，支持批量操作。

```java
IceBox.setAppEnabledSettings(context, enable, packageNames);
```

### 静默安装与卸载

冰箱运行在设备管理员模式下时可用。可以先查询当前是否支持：

```java
IceBox.querySupportSilentInstall(context);
```

接口的完整参数与返回值，请以 [GitHub 上的文档](https://github.com/heruoxin/IceBox-SDK)为准。

## 透明与授权 {#transparency}

第三方 App 通过冰箱进行的冻结、安装和卸载操作，都会记录在冰箱的日志中心里，用户可以随时查看。

## 其他联动方式 {#integrations}

- **在其他应用中配置**：冰箱支持 Android 的 `android.intent.action.SHOW_APP_INFO`，可以与 Greenify、AppOps 等应用联动。
- **炼妖壶 Island**：冰箱可以通过 Island 的权限工作，也可以安装在 Island 的工作资料中使用。
