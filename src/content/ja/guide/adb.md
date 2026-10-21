---
title: ADB モード：パソコンで Ice Box を有効化
short: ADB モード
description: アカウントを削除したくない場合や Device Owner を設定できない場合は、パソコンから ADB で Ice Box を有効化できます（シンプル ADB モード）。root 化は不要ですが、再起動のたびに有効化し直す必要があります。
section: guide
group: activate
order: 6
howto: true
faq: true
related: guide/wireless-debugging, guide/activator, guide/web-activator, guide/device-owner
---

[Device Owner モード](/guide/device-owner/)をうまく設定できなかった場合や、端末のアカウントを削除したくない場合は、ADB モード（シンプル ADB モードとも呼びます）を使えます。Device Owner モードとの違いは次のとおりです。

- **メリット**：アカウントの削除などの面倒な手順が不要で、有効化すればすぐに使えます。
- **デメリット**：端末を再起動するたびに有効化し直す必要があります。有効化しないと、アプリを凍結・解凍できません。

Ice Box では、ADB モードは「Wireless Debugging」という動作モードとして表示されます。Android 11 以降の端末なら、パソコンを使わずに端末だけで有効化することもできます。詳しくは[ワイヤレスデバッグモード](/guide/wireless-debugging/)をご覧ください。

## 有効化の手順 {#steps}

1. 最新版の Ice Box がインストールされていることを確認します。
2. 端末の USB デバッグをオンにし、常にオンのままにしておきます。USB の接続モードは「充電のみ」（機種によっては「データ転送なし」）に設定します。Xiaomi 端末では「USB デバッグ（セキュリティ設定）」もオンにする必要があります。
3. 端末をパソコンに接続し、有効化ツールを開いて、ADB モードを選んで有効化します。

[[activator-download]]

ADB コマンドに慣れている場合は、有効化ツールを使わずに、パソコンで次のコマンドを直接実行してもかまいません。

```
adb shell sh /sdcard/Android/data/com.catchingnow.icebox/files/start.sh
```

## よくある質問 {#faq}

### 有効化ツールが読み込み中のまま進まない

有効化ツールの圧縮ファイルに含まれるファイルを、すべてパソコンに展開してから操作してください。端末のストレージには展開しないでください。また、圧縮ファイル内の exe を直接ダブルクリックしないでください。

### USB ケーブルを抜いてしばらくすると、Ice Box が使えなくなる

USB デバッグは常にオンのままにし、USB の接続モードも「充電のみ」から変更しないでください。Xiaomi 端末では「USB デバッグ（セキュリティ設定）」もオンにしておく必要があります。これらの設定を変更すると、システムが Ice Box の権限を自動で取り消してしまいます。

### 端末を再起動したら凍結・解凍できなくなった

ADB モードでは正常な動作です。再起動したあとは、パソコンにもう一度つないで有効化するか、Android 11 以降の端末なら[ワイヤレスデバッグ](/guide/wireless-debugging/)で有効化し直してください。
