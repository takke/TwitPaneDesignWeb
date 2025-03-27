// タイムラインのデータ
const timelineData = [
  {
    id: 2,
    avatar: "https://media.mstdn.jp/accounts/avatars/109/963/443/434/037/779/original/8462b24b5edd1464.png",
    userName: "そーぺん",
    userId: "zonepane",
    timestamp: "2023/03/04 14:52",
    content: "ZonePaneの公式アカウントです 😀",
    source: "Web",
    stars: 2
  },
  {
    id: 3,
    avatar: "https://media.mstdn.jp/accounts/avatars/109/963/443/434/037/779/original/8462b24b5edd1464.png",
    userName: "そーぺん",
    userId: "zonepane",
    timestamp: "2023/03/04 14:59",
    content: "画像を添付するとこのようになります。",
    source: "Web",
    stars: 2,
    image: "https://media.mstdn.jp/media_attachments/files/109/963/480/573/110/072/small/ad9b7eb76627855c.jpeg"
  },
  {
    id: 1,
    avatar: "https://s3.fedibird.com/accounts/avatars/109/840/802/093/976/825/original/b0b40bdad26adb88.jpg",
    userName: "たけうちひろあき🐘",
    userId: "takke",
    timestamp: "2023/03/04 14:56",
    content: "<span class='url'>@zonepane</span> よろしくお願いします😊 こちらは Web でプレビューしています！",
    source: "Web",
    stars: 6,
    hasMention: true
  },
  {
    id: 4,
    avatar: "https://fakeimg.pl/48x48/ddd/fff?text=T",
    userName: "たっけ",
    userId: "takke@fedibird.com",
    timestamp: "2023/03/04 15:02",
    content: "缶バッジとアクキー 😽 <span class='hashtag'>#ZonePane</span>",
    source: "",
    stars: 1,
    images: [
      "https://media.mstdn.jp/cache/media_attachments/files/109/963/493/832/514/129/small/ea2b1f37dd808f82.jpeg",
      "https://media.mstdn.jp/cache/media_attachments/files/109/963/494/137/901/038/small/abaea065cc1e32bc.jpeg"
    ],
    boost: {
      user: "そーぺん",
      count: "3BT",
      icon: "https://media.mstdn.jp/accounts/avatars/109/963/443/434/037/779/original/8462b24b5edd1464.png"
    }
  }
];

// テーマごとのアクションバーテキストカラー
const themeActionbarTextColors = {
  'Light': '000000',
  'Black': 'ffffff',
  'ResearchGreen': '000000',
  'Sakura': '000000',
  'CoralPink': '000000',
  'CafeLatte': '000000',
  'Mammoth': '000000',
  'Tai': '000000',
  'Paris': 'ffffff',
  'Green': 'ffffff',
  'Char': 'ffffff',
};

// テーマのデフォルトURL
const themeDefaultUrls = {
  'Light': 'https://twitpane.com/d/?theme=Light&bg=fcfcfc&mentionbg=f8f0f0&rtbg=f0f0ff&mymsgbg=f0f0ff&otmsgbg=f8f0f0&title=000000&date=888888&body=000000&mention=009944&mytweet=009944&read=505050&url=2477b3&tab=33b5e5&actionbar=e6e6e6&statusbar=333333&cw=ffe164&more=8f9193',
  'Black': 'https://twitpane.com/d/?theme=Black&bg=303030&mentionbg=343440&rtbg=343440&mymsgbg=1a237e&otmsgbg=263238&title=ffffff&date=a0a0a0&body=ffffff&mention=9bc88c&mytweet=9bc88c&read=b0b0b0&url=4187aa&tab=33b5e5&actionbar=333333&statusbar=333333&cw=ceb95f&more=646869',
  'ResearchGreen': 'https://twitpane.com/d/?theme=ResearchGreen&bg=fcfcfc&mentionbg=e4f1e3&rtbg=e0e0e0&mymsgbg=f0f0ff&otmsgbg=f8f0f0&title=000000&date=5b5b5b&body=000000&mention=009944&mytweet=009944&read=000000&url=1478ff&tab=4da166&actionbar=83c095&statusbar=333333&cw=ffe164&more=8f9193',
  'Sakura': 'https://twitpane.com/d/?theme=Sakura&bg=fff0f7&mentionbg=fff8f8&rtbg=f0f0ff&mymsgbg=f0f0ff&otmsgbg=f8f0f0&title=66665e&date=9ca274&body=944855&mention=f27318&mytweet=f27318&read=9ca274&url=2477b3&tab=e5a0bc&actionbar=ffd4d9&statusbar=ffd4d9&cw=ffe164&more=8f9193',
  'CoralPink': 'https://twitpane.com/d/?theme=CoralPink&bg=fcfcfc&mentionbg=f8f0f0&rtbg=e0e0e0&mymsgbg=f0f0ff&otmsgbg=f8f0f0&title=000000&date=5b5b5b&body=000000&mention=009944&mytweet=009944&read=000000&url=1478ff&tab=ff9595&actionbar=ffb2b2&statusbar=333333&cw=ffe164&more=8f9193',
  'CafeLatte': 'https://twitpane.com/d/?theme=CafeLatte&bg=fcfcfc&mentionbg=f8f0f0&rtbg=e0e0e0&mymsgbg=f0f0ff&otmsgbg=f8f0f0&title=000000&date=5b5b5b&body=000000&mention=009944&mytweet=009944&read=000000&url=1478ff&tab=a4816e&actionbar=d0b1a2&statusbar=333333&cw=ffe164&more=8f9193',
  'Mammoth': 'https://twitpane.com/d/?theme=Mammoth&bg=e9dddf&mentionbg=f8f0f0&rtbg=e0e0e0&mymsgbg=f0f0ff&otmsgbg=f8f0f0&title=000000&date=585858&body=000000&mention=009944&mytweet=009944&read=000000&url=1478ff&tab=655454&actionbar=b5a0a0&statusbar=333333&cw=ffe164&more=8f9193',
  'Tai': 'https://twitpane.com/d/?theme=Tai&bg=f0f0f0&mentionbg=f8f0f0&rtbg=e0e0e0&mymsgbg=f0f0ff&otmsgbg=f8f0f0&title=000000&date=585858&body=000000&mention=009944&mytweet=009944&read=000000&url=1478ff&tab=655454&actionbar=b5a0a0&statusbar=333333&cw=ffe164&more=8f9193',
  'Paris': 'https://twitpane.com/d/?theme=Paris&bg=303030&mentionbg=343440&rtbg=343440&mymsgbg=1a237e&otmsgbg=263238&grad=-10&title=decfa6&date=14a589&body=decfa6&mention=f94b06&mytweet=f94b06&read=baae8c&url=14a589&tab=1f446a&actionbar=1f446a&statusbar=1f446a&cw=ceb95f&more=646869',
  'Green': 'https://twitpane.com/d/?theme=Green&bg=263838&mentionbg=263838&rtbg=263838&mymsgbg=1a237e&otmsgbg=263238&grad=-10&title=177975&date=b9b9b9&body=dfdfdf&mention=7bb026&mytweet=7bb026&read=e3e3e3&url=419190&tab=1c908b&actionbar=1c908b&statusbar=1c908b&cw=ceb95f&more=646869',
  'Char': 'https://twitpane.com/d/?theme=Char&bg=202020&mentionbg=202020&rtbg=202020&mymsgbg=1a237e&otmsgbg=263238&grad=-10&title=a0a0a0&date=a0a0a0&body=ffffff&mention=ff4444&mytweet=ff4444&read=a0a0a0&url=f2aab2&tab=771818&actionbar=ff4444&statusbar=ff4444&cw=ceb95f&more=646869',
};

// HTMLを生成する関数
function generateTimelineHTML(posts) {
  return posts.map(post => {
    const boostHeader = post.boost ? `
      <div class="boost-header">
        <img src="${post.boost.icon}" class="boost-icon" alt="Boost Icon" />
        <span>${post.boost.user}さんがブーストしました (${post.boost.count})</span>
      </div>
    ` : '';

    const images = post.images ? `
      <div class="post-images">
        ${post.images.map(img => `<img src="${img}" alt="Post image" />`).join('')}
      </div>
    ` : '';

    const singleImage = post.image ? `
      <img src="${post.image}" class="post-image" alt="Post image" />
    ` : '';

    const sourceText = post.stars ? `★ ${post.stars}${post.source ? ` ${post.source}から` : ''}` : '';

    return `
      <div class="timeline-post${post.hasMention ? ' mention' : ''}${post.boost ? ' rt' : ''}">
        ${boostHeader}
        <div class="d-flex">
          <div class="me-3">
            <img src="${post.avatar}" class="avatar" alt="User Avatar" />
          </div>
          <div class="flex-grow-1">
            <div class="post-header">
              <div class="user-info">
                <a href="#" class="user-name">${post.userName}</a>
                <a href="#" class="user-id">@${post.userId}</a>
              </div>
              <a href="#" class="post-time">${post.timestamp}</a>
            </div>
            <div class="post-text">${post.content}</div>
            ${singleImage}
            ${images}
            ${sourceText ? `<a href="#" class="web-source">${sourceText}</a>` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 配色を適用する関数
function applySelectedColors() {
  const colorInputs = document.querySelectorAll('input[type="color"]');

  colorInputs.forEach(input => {
    const colorId = input.dataset.colorId;
    const value = input.value;

    // カスタムプロパティ名を生成
    const propertyName = `--${colorId.replace(/([A-Z])/g, '-$1').toLowerCase()}-color`;

    // デバッグログを追加
    //    console.log(`Setting ${propertyName} to ${value} (from ${colorId})`);

    // カスタムプロパティを設定
    document.documentElement.style.setProperty(propertyName, value);
  });
}

const colorMap = {
  'bg': 'bgColor',
  'mentionbg': 'mentionBgColor',
  'rtbg': 'rtBgColor',
  'title': 'titleColor',
  'date': 'dateColor',
  'body': 'bodyColor',
  'mention': 'mentionColor',
  'mytweet': 'myTweetColor',
  'read': 'readColor',
  'url': 'urlColor',
  'cw': 'cwColor',
  'more': 'moreColor',
  'statusbar': 'statusBarColor',
  'actionbar': 'actionBarColor',
  'tab': 'tabColor'
};


// URLからカラーパラメータを取得して適用する関数
function applyColorsFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);

  // テーマの処理
  const theme = urlParams.get('theme');
  if (theme) {
    document.getElementById('themeSelect').value = theme;
  }

  // 各カラーパラメータを処理
  Object.entries(colorMap).forEach(([paramName, inputId]) => {
    const colorValue = urlParams.get(paramName);
    if (colorValue) {
      const input = document.getElementById(inputId);
      if (input) {
        const normalizedColor = colorValue.length === 6 ? colorValue : colorValue.padStart(6, '0');
        input.value = `#${normalizedColor}`;
      }
    }
  });

  applySelectedColors();
}

// 現在の色設定をURLパラメータとして取得
function getColorParamsAsUrl() {
  const params = new URLSearchParams();
  document.querySelectorAll('input[type="color"]').forEach(input => {
    const colorId = input.dataset.colorId;
    const value = input.value.substring(1); // #を除去
    params.append(colorId, value);
  });
  return `${window.location.origin}${window.location.pathname}?${params.toString()}`;
}

// テーマを適用する関数（URLからロード）
function applyThemeFromUrl(themeName) {
  const themeUrl = themeDefaultUrls[themeName];
  if (!themeUrl) return;

  // URLからパラメータを取得
  const url = new URL(themeUrl);
  const params = new URLSearchParams(url.search);

  // 各カラーパラメータを適用
  Object.entries(colorMap).forEach(([paramName, inputId]) => {
    const colorValue = params.get(paramName);
    if (colorValue) {
      const input = document.getElementById(inputId);
      if (input) {
        const normalizedColor = colorValue.length === 6 ? colorValue : colorValue.padStart(6, '0');
        input.value = `#${normalizedColor}`;
      }
    }
  });

  // アクションバーのテキストカラーを設定
  const actionbarTextColor = themeActionbarTextColors[themeName] || '000000';
  document.documentElement.style.setProperty('--actionbar-text-color', `#${actionbarTextColor}`);

  applySelectedColors();
}

document.addEventListener('DOMContentLoaded', function () {
  // タイムラインの初期表示
  const timelineContainer = document.querySelector('.timeline');
  timelineContainer.innerHTML = generateTimelineHTML(timelineData);

  // 各カラー入力に即時反映のイベントリスナーを設定
  document.querySelectorAll('input[type="color"]').forEach(input => {
    input.addEventListener('input', () => {
      applySelectedColors();
      // URLを更新（ただしページ遷移はしない）
      const newUrl = getColorParamsAsUrl();
      window.history.replaceState({}, '', newUrl);
    });
  });

  // テーマの選択肢を追加
  const themeSelect = document.getElementById('themeSelect');
  themeSelect.innerHTML = ''; // 既存のオプションをクリア

  // デフォルトのLightテーマを追加
  const defaultOption = document.createElement('option');
  defaultOption.value = 'Light';
  defaultOption.textContent = 'Light';
  themeSelect.appendChild(defaultOption);

  // その他のテーマを追加
  [
    ['Black', 'Dark'],
    ['ResearchGreen', 'ResearchGreen(L)'],
    ['Sakura', 'Sakura(L)'],
    ['CoralPink', 'CoralPink(L)'],
    ['CafeLatte', 'CafeLatte(L)'],
    ['Mammoth', 'Mammoth(L)'],
    ['Tai', 'Tai(L)'],
    ['Paris', 'Paris(D)'],
    ['Green', 'Green(D)'],
    ['Char', 'Char(D)'],
  ].forEach(([value, text]) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = text;
    themeSelect.appendChild(option);
  });

  // テーマ選択時の処理
  themeSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    const prevValue = e.target.dataset.prevValue || 'Light';

    if (!value) {
      e.target.value = prevValue;
      return;
    }

    // 確認ダイアログを表示
    if (confirm('テーマを変更すると現在の色設定が初期化されます。\nよろしいですか？')) {
      // テーマのデフォルトURLを取得して遷移
      const themeUrl = themeDefaultUrls[value];
      if (themeUrl) {
        window.location.href = themeUrl;
      }
    } else {
      // キャンセルした場合は前の値に戻す
      e.target.value = prevValue;
    }
  });

  // URLからテーマを取得、なければLightを設定
  const urlParams = new URLSearchParams(window.location.search);
  const theme = urlParams.get('theme') || 'Light';

  console.log("theme", theme);

  // テーマセレクトの初期値を設定
  themeSelect.value = theme;
  themeSelect.dataset.prevValue = theme;

  // テーマのデフォルトURLから色を適用
  console.log("themeDefaultUrls[theme]", themeDefaultUrls[theme]);
  if (themeDefaultUrls[theme]) {
    applyThemeFromUrl(theme);
  }
  applyColorsFromUrl();
});
