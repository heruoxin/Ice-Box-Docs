# 一键激活器（普通 ADB 模式）

如果您未能成功配置[设备管理员模式](https://github.com/heruoxin/Ice-Box-Docs/blob/master/%E4%B8%80%E9%94%AE%E6%BF%80%E6%B4%BB%E5%B7%A5%E5%85%B7.md)的冰箱，则可以考虑使用普通 ADB 模式。相比管理员模式有以下区别：

- 优点：无需删除帐号等复杂步骤，直接使用
- 缺点：每次重启手机后必须要重新激活，否则无法冻结解冻 App

### 激活步骤

1. 确保您安装了最新版冰箱，版本号 >= 3.14.0，可在 [酷安网](https://www.coolapk.com/apk/com.catchingnow.icebox) 下载最新版
2. 保持 USB 调试始终打开，设置 USB 连接设置为「仅充电」（MIUI 需开启「USB 调试（安全设置）」）
3. 将手机连接到电脑，打开激活器，激活即可

 [激活器下载地址](http://files.catchingnow.com/%E5%86%B0%E7%AE%B1%E6%BF%80%E6%B4%BB%E5%99%A8-Windows.zip)
 
如果您不愿使用激活器，并且熟悉如何手动执行 ADB 命令的话，也可以手动执行： 
```
adb shell sh /sdcard/Android/data/com.catchingnow.icebox/files/start.sh
```

### 常见问答

- 问：激活器一直载入中？
- 答：请把激活器压缩包内的所有文件都解压到电脑上后再操作，不要解压到手机里，不要直接双击 zip 里的 exe

- 问：拔下数据线后不久冰箱失效了？
- 答：请保持 USB 调试始终打开，USB 连接设置为「仅充电」不要动，MIUI 需开启「USB 调试（安全设置）」，动了这些开关都会使系统自动回收冰箱的权限
