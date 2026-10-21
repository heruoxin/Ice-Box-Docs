---
title: Device Owner モードの設定
short: Device Owner モード
description: Ice Box を root 化なしで使える Device Owner モードの設定方法です。アカウントを一時的に削除し、パソコンで ADB コマンドを 1 つ実行します。一度設定すれば、再起動やシステムアップデート後も有効です。
section: guide
group: activate
order: 1
howto: true
faq: true
related: guide/activator, guide/web-activator, guide/qr-code, guide/samsung-device-owner
---

端末を root 化済みなら、Ice Box を開くだけでそのまま使えます。面倒な設定は必要ありません。root 化できない端末で、一度設定すればずっと使える方法を探しているなら、Device Owner モードを利用できます。設定にはパソコンとの接続が必要です。始める前に、このページを最後までお読みください。

## デバイスオーナーとは {#what}

デバイスオーナー（Device Owner）は Android の企業向け管理フレームワークにある機能で、root 化しなくても任意のアプリを凍結・解凍できます。Ice Box が使うのは、このうち「アプリの凍結」などに関わる機能だけです。

- 1 台の端末に設定できるデバイスオーナーは、同時に 1 つだけです。
- 設定できるのは、ADB コマンドか QR コードを使う方法だけです。端末の設定で「デバイス管理アプリ」をオン・オフしても、この権限は得られません。
- 一度設定すれば、再起動やシステムアップデートのあとに設定し直す必要はありません。

## 始める前にお読みください {#before}

中国メーカー製端末のシステムには独自の機能が数多く加えられており、Device Owner モードとの互換性に多少の問題が出ることがあります。よくある例は次のとおりです。

- Samsung 端末では、システムによってパスワードがロックされることがあります。必ず先に [Samsung 端末に関する注意事項](/guide/samsung-device-owner/)をお読みください。
- アプリを凍結するたびにアンインストールのメッセージが、解凍するたびに権限のリクエストが表示されます（Huawei、Smartisan）。
- 通知領域に「デバイス管理者が有効です。タップしてオフにします」といった通知が点滅します（OPPO、vivo）。
- システム標準のデュアルアプリ（アプリの複製）機能が使えなくなります（Huawei、MIUI）。
- 解凍した直後のアプリがネットワークに接続できないことがあります。アプリを閉じて開き直せば直ります（OnePlus、Smartisan など）。

上記の問題を受け入れられない場合は、[ADB モード](/guide/adb/)や[ワイヤレスデバッグモード](/guide/wireless-debugging/)を検討してください。どちらも root 化は不要ですが、端末を再起動するたびに有効化し直す必要があります。

## 有効化ツールを使うか、コマンドラインを使うか {#tools}

ADB やコマンドラインの操作に慣れていない場合は、有効化ツールを優先して使ってください。結果はコマンドラインで設定したときとまったく同じです。

- [ワンクリック有効化ツール](/guide/activator/)：Windows パソコン用です。
- [Web 版有効化ツール](/guide/web-activator/)：Windows、macOS、Linux のいずれでも使えます。ブラウザは Chrome がおすすめです。
- [AutumnBox（秋之盒）](/guide/autumnbox/)：Windows パソコン用です。

パソコンがない場合は、[QR コードで設定](/guide/qr-code/)する方法を試せます。結果はまったく同じですが、先に端末を初期化する必要があり、中国メーカー製端末のシステムの一部では使えません。

## コマンドラインでの設定手順 {#steps}

1. 端末が Android 7.0 以降で、最新版の Ice Box がインストールされていることを確認します。あわせて、[ADB](https://developer.android.com/tools/adb?hl=ja) コマンドの使い方を理解していること、このページを最後まで読んだことも確認してください。
2. Sony 端末の場合は SIM カードを取り出します。Xiaomi 端末の場合は、開発者向けオプションで「USB デバッグ（セキュリティ設定）」をオンにし、「MIUI 最適化」をオフにします。
3. 端末の「設定」>「アカウント」を開き、Google、Xiaomi、Huawei などのシステムアカウントを含め、すべてのアカウントを削除します。設定が終わったら、もう一度ログインしてかまいません。
4. 複数ユーザー、ゲストモード、デュアルアプリを設定している場合は、それらもオフにするか削除します。設定が終わったら、また有効にしてかまいません。
5. パソコンで次のコマンドを実行します（端末上のターミナルエミュレータでは実行できません）。

```
adb shell dpm set-device-owner com.catchingnow.icebox/.receiver.DPMReceiver
```

Success のような文字が表示されれば、設定は完了です。Ice Box を開けばすぐに使えます。削除したアカウントを追加し直してもかまいません。

ADB ツールは Google の公式サイトからダウンロードできます：[Windows](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)、[macOS](https://dl.google.com/android/repository/platform-tools-latest-darwin.zip)、[Linux](https://dl.google.com/android/repository/platform-tools-latest-linux.zip)。

## 設定がうまくいかない場合 {#faq}

### 「'adb' は、内部コマンドまたは外部コマンド、操作可能なプログラムまたはバッチ ファイルとして認識されていません」と表示される

パソコンのコマンドライン操作に慣れていない可能性があります。[ワンクリック有効化ツール](/guide/activator/)か [Web 版有効化ツール](/guide/web-activator/)で有効化することをおすすめします。

### 有効化ツールが読み込み中のまま進まない

有効化ツールの圧縮ファイルに含まれるファイルを、すべてパソコンに展開してから操作してください。端末のストレージには展開しないでください。また、圧縮ファイル内の exe を直接ダブルクリックしないでください。

### 「error: no devices/emulators found」と表示される

端末がパソコンに接続されていません。端末で USB デバッグがオンになっているか、パソコンに端末のドライバが正しくインストールされているか、スマートフォン管理ソフトや PC 管理ソフト、ウイルス対策ソフトが接続を妨げていないかを確認してください。

### 「Not allowed to ... already several accounts on the device」と表示される

手順 3 のアカウントが削除しきれていません。Google アカウントや、システムに組み込まれた Xiaomi アカウント、Huawei アカウントなどを含め、端末のすべてのアカウントからログアウトしてください。Sony 端末の場合は、SIM カードを取り出してから再起動してください。

### 「Not allowed to ... already several users on the device」と表示される

手順 4 の複数ユーザーやデュアルアプリが削除しきれていません。複数ユーザー、ゲストモード、デュアルアプリをすべて削除するか、オフにしてください。

### 「Trying to set the device owner, but device owner is already set.」と表示される

端末ですでに別のアプリがデバイスオーナーに設定されています。1 台の端末に設定できるデバイスオーナーは 1 つだけです。設定されているのが Island や BlackHouse（小黑屋）など Ice Box と連携できるアプリなら、Ice Box で対応する動作モードに切り替えれば、そのまま使えます。詳しくは[その他の動作モード](/guide/other-modes/)をご覧ください。

### Xiaomi 端末で「Neither user xxx nor current process has android.permission.MANAGE_DEVICE_ADMINS」と表示される

端末の設定の開発者向けオプションで、「USB デバッグ（セキュリティ設定）」を手動でオンにしてください。それでも解決しない場合は、「MIUI 最適化」をオフにしてから、もう一度お試しください。

## 設定後によくある質問 {#faq-after}

### 通知領域に「このデバイスは組織によって管理されています」などと表示されるのは正常ですか？

正常です。これは Device Owner モードの仕組みによるものです。この文言はシステムが表示しているため消せませんが、Ice Box の「Laboratory」（ラボ）にある「Organization Name」（組織名）で、組織名を好きな文字に変更できます。

### 一部の端末の設定に、デバイスオーナーはカレンダーやメールなどの個人情報を読み取れると表示されます。Ice Box は読み取りますか？

読み取りません。Ice Box が使うのは、デバイスオーナーの権限のうち「アプリの凍結」などに関わるものだけです。関係のない権限は使わず、カレンダーやメールなどの情報を読み取ることもありません。

### 使うのをやめるとき、Ice Box の権限はどうやって解除しますか？

まずすべてのアプリを解凍してから、Ice Box の設定で「Uninstall」をタップします。確認すると、デバイスオーナーの権限が解除され、Ice Box がアンインストールされます。詳しくは [Ice Box のアンインストール](/guide/uninstall/)をご覧ください。

### 以前に Root モードや ADB モードで凍結したアプリを解凍できないのはなぜですか？

動作モード同士には互換性がありません。Ice Box の「Laboratory」で元の動作モードに切り替えてください。アプリは、凍結したときと同じモードで解凍する必要があります。
