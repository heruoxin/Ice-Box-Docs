---
title: AutumnBox（秋之盒）で Ice Box を有効化
short: AutumnBox
description: AutumnBox（秋之盒）は ADB の操作を簡単にする Windows 用のツールボックスで、ワンクリックで Ice Box の Device Owner モードを有効化できます。操作の手順と注意事項を紹介します。
section: guide
group: activate
order: 4
howto: true
related: guide/device-owner, guide/activator, guide/web-activator
---

AutumnBox（秋之盒）は、ADB の操作を簡単にするワンクリックのツールボックスです。開発者の [zsh2401](https://zsh2401.top/) さんに感謝します。

AutumnBox は Windows パソコン専用です。macOS や Linux のパソコンでは、[Web 版有効化ツール](/guide/web-activator/)を使うか、[コマンドラインでの設定手順](/guide/device-owner/#steps)を参考にしてください。

> [!NOTE]
> AutumnBox の公式サイトは現在アクセスできず、プロジェクトの更新も止まっています。ソースコードと過去のバージョンは [GitHub](https://github.com/zsh2401/AutumnBox) にあります。同じことができる[ワンクリック有効化ツール](/guide/activator/)か [Web 版有効化ツール](/guide/web-activator/)をおすすめします。

## 始める前にお読みください {#before}

中国メーカー製端末のシステムには独自の機能が数多く加えられており、Device Owner モードとの互換性に多少の問題が出ることがあります。よくある例は次のとおりです。

- Samsung 端末では、システムによってパスワードがロックされることがあります（これまでに寄せられた報告は約 20 万分の 4 の割合です）。先に [Samsung 端末に関する注意事項](/guide/samsung-device-owner/)をお読みください。
- アプリを凍結するたびにアンインストールのメッセージが、解凍するたびに権限のリクエストが表示されます（Huawei、Smartisan）。
- 通知領域に「デバイス管理者が有効です。タップしてオフにします」といった通知が点滅します（OPPO、vivo）。
- システム標準のデュアルアプリ（アプリの複製）機能が使えなくなります（Huawei、MIUI）。
- 解凍した直後のアプリがネットワークに接続できないことがあります。アプリを閉じて開き直せば直ります（OnePlus など）。
- Sony 端末は、Android 9 にアップデートする前に Ice Box を設定しておくことをおすすめします。Android 9 では削除しにくい隠しアカウントが追加されたためです。すでにアップデートした場合は、[QR コードで設定](/guide/qr-code/)する方法を使えます。設定済みの端末には影響ありません。

上記の問題を受け入れられない場合は、[Shizuku](/guide/shizuku/) や [ADB モード](/guide/adb/)を使ってください。どちらも root 化は不要ですが、端末を再起動するたびに有効化し直す必要があります。

一方、Device Owner モードなら、パソコンに何度もつなぐ必要はありません。一度設定すればずっと有効で、再起動やシステムアップデートの影響も受けません。

## 手順 {#steps}

Device Owner モードで Ice Box を有効化すると決めたら、次の手順で進めてください。

1. 端末に Ice Box がインストールされていることを確認します。画面ロックは「なし」にしておきます。Sony 端末は SIM カードを取り出し、Xiaomi 端末は「USB デバッグ（セキュリティ設定）」をオンにして「MIUI 最適化」をオフにします。
2. 端末の設定で、Xiaomi アカウント、Huawei アカウント、Google アカウントなど、すべてのアカウントを削除します。有効化が終わったら、もう一度ログインしてかまいません。
3. AutumnBox をダウンロードして起動します。
4. 端末の USB デバッグをオンにして、パソコンに接続します。接続できない場合は、たいていドライバがインストールされていないか、ほかのスマートフォン管理ソフトと競合しています。ドライバを確認し、ほかの管理ソフトを終了してください。
5. AutumnBox の「激活冰箱」（Ice Box を有効化）機能をクリックします。

通常は、これで Ice Box を開いて使えるようになります。問題が起きた場合は、まずシステムのアカウントがすべて削除されているか確認してください。削除しても解決しない場合は、出力されたログをもとに、[Device Owner モードのよくある質問](/guide/device-owner/#faq)を参照してください。
