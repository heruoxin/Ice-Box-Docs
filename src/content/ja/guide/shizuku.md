---
title: Shizuku で Ice Box を有効化
short: Shizuku モード
description: Shizuku をインストールしてワイヤレスデバッグで起動すれば、Ice Box を root 化なし、パソコンなしで使えます。root 化済みの端末では Sui も使えます。有効化の手順と注意事項を紹介します。
section: guide
group: activate
order: 7
howto: true
related: guide/wireless-debugging, guide/adb, guide/root
---

[Shizuku](https://shizuku.rikka.app/) は、ほかのアプリがシステム権限を取得できるようにするツールです。Shizuku をインストールすれば、システムの「ワイヤレス デバッグ」機能を使って、root 化なし、パソコンなしで Ice Box を有効化できます。

使う前に、次の点をご確認ください。

- ワイヤレスデバッグで Shizuku を起動するには、Android 11 以降のシステムが必要です。
- 端末を再起動したら、Shizuku を起動し直す必要があります。起動し直さないと、Ice Box でアプリを凍結・解凍できません。
- Shizuku のサービスが止まっている間は、凍結済みのアプリも解凍できません。Shizuku のサービスが再開すれば、通常どおり操作できます。

## 有効化の手順 {#steps}

1. 端末に Shizuku をインストールします。入手先は [Google Play](https://play.google.com/store/apps/details?id=moe.shizuku.privileged.api) か、中国の Android アプリストアである [CoolApk](https://www.coolapk.com/) です。
2. [Shizuku の公式ガイド](https://shizuku.rikka.app/guide/setup/#start-via-wireless-debugging)に従い、ワイヤレスデバッグ機能を使って Shizuku を起動します。
3. Ice Box を開き、「Switch Work Mode」（動作モードの切り替え）で Shizuku モード（「Shizuku Manager」）を選びます。Shizuku の確認画面が表示されたら、Ice Box の使用を許可します。

これで通常どおり使えるようになります。端末を再起動したときは、まず Shizuku を起動し直してください。

## root 化済みの端末：Sui を使う {#sui}

Sui は Shizuku の root 版です。Magisk モジュールとして動作し、再起動後に自動で起動します。Ice Box は Sui にも対応しています。Sui をインストールしたら、Ice Box の「Switch Work Mode」で「Sui」を選んでください。

root 化済みの端末では、[Root モード](/guide/root/)をそのまま使うこともできます。

## よくある質問 {#faq}

### 「Failure to grant Shizuku permission」と表示される

Shizuku のサービスが起動していることを確認し、Shizuku で Ice Box に権限を与えてください。

### Xiaomi 端末で Shizuku と組み合わせて使えない

MIUI 11 以降では、サードパーティ製アプリ同士の権限のやり取りがうまくいかないことがあります。まず「MIUI 最適化」をオフにしてから、ホーム画面で Ice Box のアイコンを長押ししてアプリ情報を開き、権限の設定で「その他の権限」を手動でオンにしてください。
