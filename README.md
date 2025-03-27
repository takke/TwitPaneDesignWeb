# TwitPaneDesignWeb

TwitPaneシリーズのデザインを行うWebページです。

## リポジトリ

https://github.com/takke/TwitPaneDesignWeb

## URL

下記のような URL でアクセスされます。

http://twitpane.com/d/?theme=Black&bg=303030&mentionbg=343440&rtbg=343440&mymsgbg=1a237e&otmsgbg=263238&grad=00&title=ffffff&date=a0a0a0&body=ffffff&mention=9bc88c&mytweet=9bc88c&read=b0b0b0&url=4187aa&tab=8e24aa&actionbar=333333&statusbar=333333&cw=ceb95f&more=646869

## 編集可能な項目

| 項目ID | 項目の種別 | 項目 |
| --- | --- | --- | --- |
| theme     | テーマ | テーマ名 |
| bg        | カラー | 背景色
| mentionbg | カラー | 背景色(自分宛の返信)
| rtbg      | カラー | 背景色(RT)
| title     | カラー | 名前(未読)
| date      | カラー | 日付
| body      | カラー | 本文(未読)
| mention   | カラー | 本文(自分宛の返信)
| mytweet   | カラー | 本文(自分の投稿)
| read      | カラー | 本文、名前(既読)
| url       | カラー | @名前・URL・ハッシュタグ
| cw        | カラー | 「もっと見る」ボタン(CW用)
| more      | カラー | 「もっと見る」ボタン(省略用)
| statusbar | カラー | ステータスバー
| actionbar | カラー | タイトルバー
| tab       | カラー | タブ

- 項目IDは URL のパラメータに使われます
- 「項目」は Web 上で選択項目の名前になります

## テーマについて

- テーマは配色の基準となるもので、一部の配色はテーマの種類により決まり変更できません。

| theme (項目ID) | テーマ名 | テーマ系統
| --- | --- | --- |
| Light          | Light                 | L
| Black          | Dark                  | D
| Paris          | Paris(D)              | D
| Green          | Green(D)              | D
| Sakura         | Sakura(L)             | L
| Char           | Char(D)               | D
| ResearchGreen  | ResearchGreen(L)      | L
| CoralPink      | CoralPink(L)          | L
| CafeLatte      | CafeLatte(L)          | L
| Mammoth        | Mammoth(L)            | L
| Tai            | Tai(L)                | L

| 項目 | テーマ系統=L | テーマ系統=D |
| --- | --- | ---
| タイトルバーの文字色 | #000000 | #ffffff
| ステータスバーの文字色 | #000000 | #ffffff
