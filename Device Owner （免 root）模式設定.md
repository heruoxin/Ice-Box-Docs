## 冰箱免 Root（裝置管理員模式）使用配置方法

如果您的手機已經 Root 請直接打開冰箱使用，無需折騰。如果手機無法 Root，請務必仔細閱讀下文：

#### 國產手機及三星系統請注意：

國產手機系統時常新增各種中國特色功能，因此其與裝置管理員模式的相容性或多或少存在一些問題，常見如下：

- 每次凍結 App 彈出移除提示，解凍彈出權限請求（華為、錘子）
- 通知欄閃爍「裝置管理員已開啟，點擊關閉」（OPPO、VIVO）
- 自帶的雙開無法使用（華為、MIUI）
- 安全資料夾被系統禁用（三星）
- 偶爾剛解凍的 App 無法聯網，關掉重開就好了（一加等）


如不能接受上述問題，請考慮使用 [Shizuku Manager](https://www.coolapk.com/apk/moe.shizuku.privileged.api) /[黑閾](https://www.coolapk.com/apk/me.piebridge.brevent)等模式使用冰箱。也是免 Root 的，但是每次重啟手機都需要連電腦再配一次。

[Shizuku 使用教學](https://jingyan.baidu.com/article/e52e361568e6d540c60c5108.html)

裝置管理員模式則不需要反覆連線電腦設定，一次配置，終身有效，重啟或升級系統都沒有影響。


### 裝置管理員設定步驟

0. 首先確保您的手機 Android 版本大於等於 5.0，您已經知道如何操作 [adb](https://sspai.com/post/23509) 指令。並且已經閱讀完整篇教學。
1. 取出手機 SIM 卡，三星手機如果之前沒有設定過鎖定螢幕手勢/指紋/密碼，請先設定一個密碼。
2. 進入手機「設定 - 帳戶」，刪除 #所有# 的帳戶，包括你的 Google 帳戶（之後可以再登入回來）。
3. 如果您之前設定過多使用者或手機自帶訪客模式、程式雙開等，也需要一併關閉或刪除（之後可以打開）。
4. 在電腦上執行（手機終端模擬器不行）`adb shell dpm set-device-owner com.catchingnow.icebox/.receiver.DPMReceiver` 
5. 如果顯示 Success 之類的字樣，那麼重啟您的手機。之後即可打開冰箱使用，也可以把之前刪除的帳號加回來了。

#### 其他事項

adb 工具可以在下列地址下載：

- Google 官方地址 （[Win](https://dl.google.com/android/repository/platform-tools-latest-windows.zip) [Mac](https://dl.google.com/android/repository/platform-tools-latest-darwin.zip) [Linux](https://dl.google.com/android/repository/platform-tools-latest-linux.zip)）

- 國內[百度盤](https://pan.baidu.com/s/1q9SWiK9Loivyt6zvr98seQ)


### 常見問題：

#### 未設定成功？

- 問：提示 “Not allowed to ... already several accounts on the device”
- 答：第 1 步的帳戶沒刪乾淨，請登出您手機上所有的帳戶，包括 Google 帳號和系統自帶的如小米帳戶、三星帳戶等。

- 問：提示 “Not allowed to ... already several users on the device”
- 答：第 2 步的多使用者沒刪乾淨，請刪除或關閉所有多使用者/訪客模式/程式雙開。

- 問：MIUI 使用者提示 “Neither user xxx nor current process has android.permission.MANAGE_DEVICE_ADMINS”
- 答：MIUI 使用者請手動在系統設定- 開發者設定裡，開啟「USB 偵錯（安全設定）」。


#### 已設定成功，但是？

- 問：設定完成後手機通知欄出現提示「手機被管理」，這是正常的嗎？
- 答：正常的，這正是冰箱的免 Root 工作原理。

- 問：我不想用了，怎麼解除冰箱的權限？
- 答：請先解凍所有的程式，然後到冰箱設定裡點擊「移除」，確認後即可解除授權。

