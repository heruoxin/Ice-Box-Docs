---
title: Ice Box SDK 開発者向けドキュメント
short: 開発者向け
description: Ice Box SDK を使うと、Ice Box がインストールされた端末で、サードパーティ製アプリからアプリの凍結と解凍、APK のサイレントインストールとアンインストールを行えます。導入方法、権限、主な API を紹介します。
section: about
priority: 0.5
related: use-cases/automation, features, about
---

Ice Box SDK を使うと、Ice Box がインストールされて有効化されている端末で、サードパーティ製アプリがアプリを凍結・解凍できるようになります。Device Owner モードでは、APK のサイレントインストールとアンインストールもできます。

ソースコードと詳しいドキュメント：[github.com/heruoxin/IceBox-SDK](https://github.com/heruoxin/IceBox-SDK)

## 必要なバージョン {#requirements}

- 凍結と解凍：Ice Box 3.6.0 以降。
- サイレントインストールとアンインストール：Ice Box 3.9.5 以降で、Ice Box が Device Owner モードで動作していること。

## 権限 {#permission}

凍結、解凍、APK のインストールなどの操作系 API を使うには、先にユーザーに Ice Box SDK の権限をリクエストする必要があります。照会系 API には権限は必要ありません。

```java
if (ContextCompat.checkSelfPermission(this, IceBox.PERMISSION) != PackageManager.PERMISSION_GRANTED) {
    ActivityCompat.requestPermissions(this, new String[]{IceBox.PERMISSION}, 0x233);
}
```

## 主な API {#api}

### 動作モードを照会する

Ice Box は、`pm disable-user` と `pm hide` のどちらかの凍結方式で動作している可能性があります。権限は不要です。

```java
IceBox.WorkMode workMode = IceBox.queryWorkMode(context);
```

### アプリの凍結状態を照会する

正常（凍結されていない状態）、`pm disable` による凍結、`pm hide` による凍結、またはその両方のいずれかを返します。権限は不要です。

```java
IceBox.getAppEnabledSetting(context, packageName);
```

### アプリを凍結・解凍する

権限が必要です。一括操作に対応しています。

```java
IceBox.setAppEnabledSettings(context, enable, packageNames);
```

### サイレントインストールとアンインストール

Ice Box が Device Owner モードで動作しているときに使えます。現在対応しているかどうかは、先に次の方法で照会できます：

```java
IceBox.querySupportSilentInstall(context);
```

API のすべての引数と戻り値については、[GitHub のドキュメント](https://github.com/heruoxin/IceBox-SDK)の記載に従ってください。

## 透明性と許可 {#transparency}

サードパーティ製アプリが Ice Box を通じて行った凍結、インストール、アンインストールの操作はすべて Ice Box のログセンター（「SDK Log」）に記録され、ユーザーはいつでも確認できます。

## その他の連携方法 {#integrations}

- **「Configure in other Apps」（ほかのアプリで設定）**：Ice Box は Android の `android.intent.action.SHOW_APP_INFO` に対応しており、Greenify や AppOps などのアプリと連携できます。
- **Island**：Ice Box は Island の権限で動作できるほか、Island の仕事用プロファイルにインストールして使うこともできます。
