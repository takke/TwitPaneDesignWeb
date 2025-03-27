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

| theme (項目ID) | テーマ名 | テーマ系統 | デフォルト値のURL
| --- | --- | --- |
| Light          | Light                 | L | https://twitpane.com/d/?theme=Light&bg=fcfcfc&mentionbg=f8f0f0&rtbg=f0f0ff&mymsgbg=f0f0ff&otmsgbg=f8f0f0&title=000000&date=888888&body=000000&mention=009944&mytweet=009944&read=505050&url=2477b3&tab=33b5e5&actionbar=e6e6e6&statusbar=333333&cw=ffe164&more=8f9193
| Black          | Dark                  | D | https://twitpane.com/d/?theme=Black&bg=303030&mentionbg=343440&rtbg=343440&mymsgbg=1a237e&otmsgbg=263238&title=ffffff&date=a0a0a0&body=ffffff&mention=9bc88c&mytweet=9bc88c&read=b0b0b0&url=4187aa&tab=33b5e5&actionbar=333333&statusbar=333333&cw=ceb95f&more=646869
| ResearchGreen  | ResearchGreen(L)      | L | https://twitpane.com/d/?theme=ResearchGreen&bg=fcfcfc&mentionbg=e4f1e3&rtbg=e0e0e0&mymsgbg=f0f0ff&otmsgbg=f8f0f0&title=000000&date=5b5b5b&body=000000&mention=009944&mytweet=009944&read=000000&url=1478ff&tab=4da166&actionbar=83c095&statusbar=333333&cw=ffe164&more=8f9193
| Sakura         | Sakura(L)             | L | https://twitpane.com/d/?theme=Sakura&bg=fff0f7&mentionbg=fff8f8&rtbg=f0f0ff&mymsgbg=f0f0ff&otmsgbg=f8f0f0&title=66665e&date=9ca274&body=944855&mention=f27318&mytweet=f27318&read=9ca274&url=2477b3&tab=e5a0bc&actionbar=ffd4d9&statusbar=ffd4d9&cw=ffe164&more=8f9193
| CoralPink      | CoralPink(L)          | L | https://twitpane.com/d/?theme=CoralPink&bg=fcfcfc&mentionbg=f8f0f0&rtbg=e0e0e0&mymsgbg=f0f0ff&otmsgbg=f8f0f0&title=000000&date=5b5b5b&body=000000&mention=009944&mytweet=009944&read=000000&url=1478ff&tab=ff9595&actionbar=ffb2b2&statusbar=333333&cw=ffe164&more=8f9193
| CafeLatte      | CafeLatte(L)          | L | https://twitpane.com/d/?theme=CafeLatte&bg=fcfcfc&mentionbg=f8f0f0&rtbg=e0e0e0&mymsgbg=f0f0ff&otmsgbg=f8f0f0&title=000000&date=5b5b5b&body=000000&mention=009944&mytweet=009944&read=000000&url=1478ff&tab=a4816e&actionbar=d0b1a2&statusbar=333333&cw=ffe164&more=8f9193
| Mammoth        | Mammoth(L)            | L | https://twitpane.com/d/?theme=Mammoth&bg=e9dddf&mentionbg=f8f0f0&rtbg=e0e0e0&mymsgbg=f0f0ff&otmsgbg=f8f0f0&title=000000&date=585858&body=000000&mention=009944&mytweet=009944&read=000000&url=1478ff&tab=655454&actionbar=b5a0a0&statusbar=333333&cw=ffe164&more=8f9193
| Tai            | Tai(L)                | L | https://twitpane.com/d/?theme=Tai&bg=f0f0f0&mentionbg=f8f0f0&rtbg=e0e0e0&mymsgbg=f0f0ff&otmsgbg=f8f0f0&title=000000&date=585858&body=000000&mention=009944&mytweet=009944&read=000000&url=1478ff&tab=655454&actionbar=b5a0a0&statusbar=333333&cw=ffe164&more=8f9193
| Paris          | Paris(D)              | D | https://twitpane.com/d/?theme=Paris&bg=303030&mentionbg=343440&rtbg=343440&mymsgbg=1a237e&otmsgbg=263238&grad=-10&title=decfa6&date=14a589&body=decfa6&mention=f94b06&mytweet=f94b06&read=baae8c&url=14a589&tab=1f446a&actionbar=1f446a&statusbar=1f446a&cw=ceb95f&more=646869
| Green          | Green(D)              | D | https://twitpane.com/d/?theme=Green&bg=263838&mentionbg=263838&rtbg=263838&mymsgbg=1a237e&otmsgbg=263238&grad=-10&title=177975&date=b9b9b9&body=dfdfdf&mention=7bb026&mytweet=7bb026&read=e3e3e3&url=419190&tab=1c908b&actionbar=1c908b&statusbar=1c908b&cw=ceb95f&more=646869
| Char           | Char(D)               | D | https://twitpane.com/d/?theme=Char&bg=202020&mentionbg=202020&rtbg=202020&mymsgbg=1a237e&otmsgbg=263238&grad=-10&title=a0a0a0&date=a0a0a0&body=ffffff&mention=ff4444&mytweet=ff4444&read=a0a0a0&url=f2aab2&tab=771818&actionbar=ff4444&statusbar=ff4444&cw=ceb95f&more=646869

| 項目 | テーマ系統=L | テーマ系統=D |
| --- | --- | ---
| タイトルバーの文字色 | #000000 | #ffffff
| ステータスバーの文字色 | #000000 | #ffffff
