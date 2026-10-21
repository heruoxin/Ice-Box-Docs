---
title: Web 版有効化ツールで Ice Box を有効化
short: Web 版有効化ツール
description: ソフトをインストールせず、パソコンのブラウザから WebUSB で Ice Box の Device Owner モードまたは ADB モードを有効化できます。Windows、macOS、Linux で使え、Chrome がおすすめです。
section: guide
group: activate
order: 3
howto: true
related: guide/device-owner, guide/activator, guide/adb
---

Web 版有効化ツールは [@web1n](https://github.com/web1n) さんが開発したもので、機能は exe 版の有効化ツールと同じです。パソコンの OS を問わず使えます。ブラウザは Chrome がおすすめです。

[Web 版有効化ツールを開く](https://adb.http.gs/icebox.html)

Web 版有効化ツールでは、次の 2 つのモードを有効化できます。

- **Device Owner モード**：一度有効化すればずっと使えますが、一部の端末では副作用が出ることがあります。
- **ADB モード**：副作用はありませんが、端末を再起動したり、システムの USB 設定を変更したりするたびに、パソコンにつないで有効化し直す必要があります。

## Device Owner モードで起こりうる副作用 {#side-effects}

中国メーカー製端末や Samsung 端末のシステムは Android に独自のカスタマイズを加えていることが多く、Device Owner モードとの互換性に問題が出ることがあります。よくある例は次のとおりです。

- Samsung 端末では、システムによってパスワードがロックされることがあります（これまでに寄せられた報告は約 20 万分の 4 の割合です）。先に [Samsung 端末に関する注意事項](/guide/samsung-device-owner/)をお読みください。
- アプリを凍結するたびにアンインストールのメッセージが、解凍するたびに権限のリクエストが表示されます（Huawei、Smartisan）。
- 通知領域に「デバイス管理者が有効です。タップしてオフにします」といった通知が点滅します（OPPO、vivo）。
- システム標準のデュアルアプリ（アプリの複製）機能が使えなくなります（Huawei、MIUI）。
- 解凍した直後のアプリがネットワークに接続できないことがあります。アプリを閉じて開き直せば直ります（OnePlus、Smartisan など）。

上記の問題を受け入れられない場合は、ADB モードを選んでください。こちらも root 化は不要ですが、端末を再起動するたびにパソコンで有効化し直す必要があります。

## 有効化の手順 {#steps}

1. 端末に Ice Box がインストールされていることを確認します。画面ロックは「なし」にしておきます。Sony 端末は SIM カードを取り出し、Xiaomi 端末は「USB デバッグ（セキュリティ設定）」をオンにして「MIUI 最適化」をオフにします。
2. USB ケーブルで端末をパソコンにつなぎ、パソコンのセキュリティソフトやスマートフォン管理ソフトなどを終了します。
3. パソコンの Chrome で [Web 版有効化ツール](https://adb.http.gs/icebox.html)を開き、デバイスを接続して有効化します。

Device Owner モードを有効化する前には、ほかの方法と同じく、端末のすべてのアカウントからログアウトしておく必要があります。詳しくは [Device Owner モードの設定](/guide/device-owner/#steps)をご覧ください。
