// タイムラインのデータ
const timelineData = [
  {
    id: 1,
    avatar: "https://fakeimg.pl/48x48/ddd/fff?text=T",
    userName: "たけうちひろあき🐘",
    userId: "takke",
    timestamp: "2023/03/04 14:56",
    content: "@zonepane よろしくお願いします😊 こちらは Web でプレビューしています！",
    source: "Web",
    stars: 6
  },
  {
    id: 2,
    avatar: "https://fakeimg.pl/48x48/ddd/fff?text=Z",
    userName: "そーぺん",
    userId: "zonepane",
    timestamp: "2023/03/04 14:52",
    content: "ZonePaneの公式アカウントです 😀",
    source: "Web",
    stars: 2
  },
  {
    id: 3,
    avatar: "https://fakeimg.pl/48x48/ddd/fff?text=Z",
    userName: "そーぺん",
    userId: "zonepane",
    timestamp: "2023/03/04 14:59",
    content: "画像を添付するとこのようになります。",
    source: "Web",
    stars: 2,
    image: "https://fakeimg.pl/600x400/ddd/fff?text=Beach+Photo"
  },
  {
    id: 4,
    avatar: "https://fakeimg.pl/48x48/ddd/fff?text=T",
    userName: "たけうち ちひろあき",
    userId: "takke@fedibird.com",
    timestamp: "2023/03/04 15:02",
    content: "缶バッジとアクキー 😽 #ZonePane",
    source: "",
    stars: 1,
    images: [
      "https://fakeimg.pl/300x300/ddd/fff?text=Badge",
      "https://fakeimg.pl/300x300/ddd/fff?text=Acrylic"
    ],
    boost: {
      user: "そーぺん",
      count: "3BT",
      icon: "https://fakeimg.pl/16x16/ddd/fff?text=Z"
    }
  }
];

// テーマごとのアクションバーテキストカラー
const themeActionbarTextColors = {
  'Light': '000000',
  'Black': 'ffffff',
  'Paris': 'ffffff',
  'Green': 'ffffff',
  'Sakura': '000000',
  'Char': 'ffffff',
  'ResearchGreen': '000000',
  'CoralPink': '000000',
  'CafeLatte': '000000',
  'Mammoth': '000000',
  'Tai': '000000'
};

// テーマのデフォルトURL
const themeDefaultUrls = {
  'Light': 'https://twitpane.com/d/?theme=Light&bg=ffffff&mentionbg=f8f8f8&rtbg=f8f8f8&title=000000&date=666666&body=000000&mention=2b5c45&mytweet=2b5c45&read=666666&url=1da1f2&tab=1d9bf0&actionbar=ffffff&statusbar=333333&cw=ceb95f&more=666666',
  'Black': 'https://twitpane.com/d/?theme=Black&bg=303030&mentionbg=343440&rtbg=343440&mymsgbg=1a237e&otmsgbg=263238&title=ffffff&date=a0a0a0&body=ffffff&mention=9bc88c&mytweet=9bc88c&read=b0b0b0&url=4187aa&tab=33b5e5&actionbar=333333&statusbar=333333&cw=ceb95f&more=646869',
  'Paris': 'https://twitpane.com/d/?theme=Paris&bg=303030&mentionbg=343440&rtbg=343440&title=ffffff&date=a0a0a0&body=ffffff&mention=9bc88c&mytweet=9bc88c&read=b0b0b0&url=4187aa&tab=8e24aa&actionbar=333333&statusbar=333333&cw=ceb95f&more=646869',
  'Green': 'https://twitpane.com/d/?theme=Green&bg=303030&mentionbg=343440&rtbg=343440&title=ffffff&date=a0a0a0&body=ffffff&mention=9bc88c&mytweet=9bc88c&read=b0b0b0&url=4187aa&tab=8e24aa&actionbar=333333&statusbar=333333&cw=ceb95f&more=646869',
  'Sakura': 'https://twitpane.com/d/?theme=Sakura&bg=ffffff&mentionbg=f8f8f8&rtbg=f8f8f8&title=000000&date=666666&body=000000&mention=2b5c45&mytweet=2b5c45&read=666666&url=1da1f2&tab=1d9bf0&actionbar=ffffff&statusbar=333333&cw=ceb95f&more=666869',
  'Char': 'https://twitpane.com/d/?theme=Char&bg=303030&mentionbg=343440&rtbg=343440&title=ffffff&date=a0a0a0&body=ffffff&mention=9bc88c&mytweet=9bc88c&read=b0b0b0&url=4187aa&tab=8e24aa&actionbar=333333&statusbar=333333&cw=ceb95f&more=646869',
  'ResearchGreen': 'https://twitpane.com/d/?theme=ResearchGreen&bg=ffffff&mentionbg=f8f8f8&rtbg=f8f8f8&title=000000&date=666666&body=000000&mention=2b5c45&mytweet=2b5c45&read=666666&url=1da1f2&tab=1d9bf0&actionbar=ffffff&statusbar=333333&cw=ceb95f&more=666666',
  'CoralPink': 'https://twitpane.com/d/?theme=CoralPink&bg=ffffff&mentionbg=f8f8f8&rtbg=f8f8f8&title=000000&date=666666&body=000000&mention=2b5c45&mytweet=2b5c45&read=666666&url=1da1f2&tab=1d9bf0&actionbar=ffffff&statusbar=333333&cw=ceb95f&more=666666',
  'CafeLatte': 'https://twitpane.com/d/?theme=CafeLatte&bg=ffffff&mentionbg=f8f8f8&rtbg=f8f8f8&title=000000&date=666666&body=000000&mention=2b5c45&mytweet=2b5c45&read=666666&url=1da1f2&tab=1d9bf0&actionbar=ffffff&statusbar=333333&cw=ceb95f&more=666666',
  'Mammoth': 'https://twitpane.com/d/?theme=Mammoth&bg=ffffff&mentionbg=f8f8f8&rtbg=f8f8f8&title=000000&date=666666&body=000000&mention=2b5c45&mytweet=2b5c45&read=666666&url=1da1f2&tab=1d9bf0&actionbar=ffffff&statusbar=333333&cw=ceb95f&more=666666',
  'Tai': 'https://twitpane.com/d/?theme=Tai&bg=ffffff&mentionbg=f8f8f8&rtbg=f8f8f8&title=000000&date=666666&body=000000&mention=2b5c45&mytweet=2b5c45&read=666666&url=1da1f2&tab=1d9bf0&actionbar=ffffff&statusbar=333333&cw=ceb95f&more=666666'
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
      <div class="timeline-post">
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

    // カスタムプロパティを設定
    document.documentElement.style.setProperty(propertyName, value);
  });

  // カラープレビューを更新
  document.getElementById('colorPreview').style.backgroundColor = document.getElementById('bgColor').value;
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
    return;
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

  // 配色を適用ボタンにもイベントリスナーを設定
  document.querySelector('.btn-primary').addEventListener('click', applySelectedColors);

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
    ['Paris', 'Paris(D)'],
    ['Green', 'Green(D)'],
    ['Sakura', 'Sakura(L)'],
    ['Char', 'Char(D)'],
    ['ResearchGreen', 'ResearchGreen(L)'],
    ['CoralPink', 'CoralPink(L)'],
    ['CafeLatte', 'CafeLatte(L)'],
    ['Mammoth', 'Mammoth(L)'],
    ['Tai', 'Tai(L)']
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

  // テーマセレクトの初期値を設定
  themeSelect.value = theme;
  themeSelect.dataset.prevValue = theme;

  // テーマのデフォルトURLから色を適用
  if (themeDefaultUrls[theme]) {
    applyThemeFromUrl(theme);
  } else {
    applyColorsFromUrl();
  }
});
