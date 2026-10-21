---
title: Root モード
short: Root モード
description: root 化済みの端末なら、Ice Box を開いて root 権限を許可するだけで使えます。root エンジンの切り替え方、権限の取得に失敗したときの対処法、動作モードの変更方法を紹介します。
section: guide
group: activate
order: 9
faq: true
related: guide/shizuku, guide/other-modes, faq
---

端末を root 化済みなら、Ice Box を開き、root 管理アプリ（Magisk など）に表示される許可のリクエストで Ice Box を許可するだけです。ほかの設定は必要ありません。

Root モードは再起動後もそのまま使え、パソコンも必要ありません。

## root エンジン {#engines}

Ice Box には「Root (Fastest)」や「Root Classical」など、複数の root エンジンがあります。「Laboratory」（ラボ）の「Choose Root Engine」（root エンジンの選択）で切り替えられます。今のエンジンが端末でうまく動かない場合は、別のエンジンを試してみてください。

エンジンを切り替える前に、すべてのアプリが解凍されていることを確認してください。

## よくある質問 {#faq}

### 「Failed to get ROOT permission」と表示される

root 管理アプリを開いて Ice Box の許可の記録を削除してから、あらためて Ice Box に root 権限を許可してください。

### Root モードからほかの動作モードに切り替えたい

Ice Box の設定の「Switch Work Mode」（動作モードの切り替え）で変更できます。切り替える前に、すべてのアプリを解凍してください。モード同士には互換性がないため、アプリは凍結したときと同じモードで解凍する必要があります。

### 以前の「System Plugin」（権限昇格プラグイン）はどこへ行きましたか？

Google Play の要件に従い、「System Plugin」のモードはバージョン 3.22.0 で削除されました。root 化済みの端末では Root モードをそのまま使ってください。
