---
title: QR コードで Ice Box を設定（root 化不要・パソコン不要）
short: QR コードで設定
description: パソコンがなくても、初期化後のセットアップ画面で QR コードを読み取れば、root 化なしで Ice Box をデバイスオーナーに設定できます。Android 7.0 以降の標準 Android と、それに近いシステムが対象です。
section: guide
group: activate
order: 8
howto: true
related: guide/device-owner, guide/wireless-debugging, guide/other-modes
---

> [!WARNING]
> この方法では**端末の初期化**が必要で、端末のデータはすべて消去されます。事前にバックアップしてください。使えるのは Android 7.0 以降の標準 Android と、それに近いシステムだけです。中国メーカー製端末のシステムの多くでは、この機能が削除されています。

パソコンがある場合は、できるだけ[ワンクリック有効化ツール](/guide/activator/)か [Web 版有効化ツール](/guide/web-activator/)で設定してください。結果はまったく同じで、初期化も必要ありません。

## 設定手順 {#steps}

0. 下の QR コードを別のスマートフォンやパソコンに保存するか、印刷して手元に用意しておきます。
1. 端末を初期化して、出荷時の状態に戻します。
2. 初期設定の最初の画面で、「ようこそ」の文字を続けて 6 回以上タップします。反応がない場合は、お使いのシステムからこの機能が削除されています。
3. 画面の案内に従って Wi-Fi に接続し、QR コードリーダーをダウンロードしてから、下の QR コードを読み取ります。端末に Ice Box が自動でインストールされ、設定されます。

![Ice Box の Device Owner モード設定用 QR コード](https://files.catchingnow.com/dpm/icebox_en.png)

## 注意事項 {#notes}

- 設定はデータを消去しない限りずっと有効で、再起動もシステムアップデートもできます。Ice Box をアンインストールするときは、Ice Box の設定で「Uninstall」をタップしてください。
- この方法で設定すると、プリインストールアプリは初期状態ではインストールされません。各種の広告アプリだけでなく、カメラなどの機能も含まれます。プリインストールアプリを戻したい場合は、Ice Box の設定の「Laboratory」（ラボ）で「Active Pre-installed System Apps」（プリインストールアプリの有効化）をタップし、インストールするアプリを選んでください。
- 設定の途中で端末にリセットが必要と表示された場合、たいていはネットワークが乗っ取られて、Ice Box のダウンロードに失敗したことが原因です。

## ほかのアプリ用の QR コード {#other-apps}

1 台の端末に設定できるデバイスオーナーは 1 つだけです。Island や BlackHouse（小黑屋）などのアプリをデバイスオーナーにしたい場合は、下の対応する QR コードを読み取ってください。

![Island、BlackHouse などのアプリをデバイスオーナーに設定するための QR コード](https://files.catchingnow.com/dpm/all_apps.png)
