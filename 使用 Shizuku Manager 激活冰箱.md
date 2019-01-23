# 使用 Shizuku Manager 激活冰箱

使用 Shizuku Manager 配合免 root 激活冰箱相比设置设备管理员模式更为简便，成功率较高，但有以下局限：

1. 仅支持 Android 7.0 或更高版本系统
2. 每次重启后都需要重新连接电脑，否则冰箱将无法冻结和解冻 App

使用激活步骤如下：

1. 在手机上安装 Shizuku Manager，并打开一次: [Google Play](https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api)|[国内酷安市场](https://www.coolapk.com/apk/moe.shizuku.privileged.api)
2. 如果您了解如何使用 ADB 命令，那么直接在电脑删执行下列命令：

```
adb shell sh /sdcard/Android/data/moe.shizuku.privileged.api/files/start.sh
```

如果不了解，请[点此下载秋之盒一键激活工具](https://www.atmb.top/download/) ，运行并选择激活 Shizuku Manager。

之后打开冰箱，选择 Shizuku 模式即可使用。每次重启后都需要连接电脑执行步骤 2
