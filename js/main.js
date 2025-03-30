// タイムラインのデータ
const timelineData = [
  {
    id: 10,
    avatar: "https://s3.fedibird.com/accounts/avatars/109/840/802/093/976/825/original/b0b40bdad26adb88.jpg",
    userName: "たけうちひろあき🐘",
    userId: "takke",
    timestamp: "2025/03/28 14:56",
    content: "自分の投稿です",
    source: "Web",
    stars: 12,
    myTweet: true
  },
  {
    id: 2,
    avatar: "https://media.mstdn.jp/accounts/avatars/109/963/443/434/037/779/original/8462b24b5edd1464.png",
    userName: "そーぺん",
    userId: "zonepane",
    timestamp: "2025/03/28 14:52",
    content: "他人の投稿です😀 本文(未読)が使われます。",
    source: "Web",
    stars: 2
  },
  {
    id: 1,
    avatar: "https://media.mstdn.jp/accounts/avatars/109/963/443/434/037/779/original/8462b24b5edd1464.png",
    userName: "そーぺん",
    userId: "zonepane",
    timestamp: "2025/03/28 14:56",
    content: "<span class='url'>@takke</span> 自分宛の返信です",
    source: "Web",
    stars: 6,
    hasMention: true
  },
  {
    id: 4,
    avatar: "https://pbs.twimg.com/profile_images/1353904257951387650/xhD0NnOm_400x400.jpg",
    userName: "たっけ",
    userId: "takke@fedibird.com",
    timestamp: "2025/03/28 15:02",
    content: "ハッシュタグを含む投稿です。ブーストされています。 <span class='hashtag'>#ZonePane</span>",
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
  },
  {
    id: 3,
    avatar: "https://media.mstdn.jp/accounts/avatars/109/963/443/434/037/779/original/8462b24b5edd1464.png",
    userName: "そーぺん",
    userId: "zonepane",
    timestamp: "2025/03/28 14:59",
    content: "画像を添付するとこのようになります。",
    source: "Web",
    stars: 2,
    image: "https://media.mstdn.jp/media_attachments/files/109/963/480/573/110/072/small/ad9b7eb76627855c.jpeg"
  },
  {
    id: 8,
    avatar: "https://media.mstdn.jp/accounts/avatars/109/963/443/434/037/779/original/8462b24b5edd1464.png",
    userName: "そーぺん",
    userId: "zonepane",
    timestamp: "2025/03/28 14:52",
    content: "既読の投稿です",
    source: "ZonePane",
    stars: 2,
    isRead: true
  },
];

// 各テーマの名前、アクションバーテキストカラー、ボタンのカラー(CSSクラス名)
const themeProperty = {
  'Light': {
    'name': 'Light',
    'actionbar': '333',
    'buttonClass': 'text-dark',
  },
  'Black': {
    'name': 'Dark',
    'actionbar': 'eee',
    'buttonClass': 'text-light',
  },
  'ResearchGreen': {
    'name': 'ResearchGreen(L)',
    'actionbar': '333',
    'buttonClass': 'text-dark',
  },
  'Sakura': {
    'name': 'Sakura(L)',
    'actionbar': '333',
    'buttonClass': 'text-dark',
  },
  'CoralPink': {
    'name': 'CoralPink(L)',
    'actionbar': '333',
    'buttonClass': 'text-dark',
  },
  'CafeLatte': {
    'name': 'CafeLatte(L)',
    'actionbar': '333',
    'buttonClass': 'text-dark',
  },
  'Mammoth': {
    'name': 'Mammoth(L)',
    'actionbar': '333',
    'buttonClass': 'text-dark',
  },
  'Tai': {
    'name': 'Tai(L)',
    'actionbar': '333',
    'buttonClass': 'text-dark',
  },
  'Paris': {
    'name': 'Paris(D)',
    'actionbar': 'eee',
    'buttonClass': 'text-light',
  },
  'Green': {
    'name': 'Green(D)',
    'actionbar': 'eee',
    'buttonClass': 'text-light',
  },
  'Char': {
    'name': 'Char(D)',
    'actionbar': 'eee',
    'buttonClass': 'text-light',
  },
}

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
            <div class="post-text${post.myTweet ? ' mytweet' : ''}${post.hasMention ? ' mention' : ''}${post.isRead ? ' read' : ''}">${post.content}</div>
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

  // テーマを追加
  params.append('theme', document.getElementById('themeSelect').value);

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
  const actionbarTextColor = themeProperty[themeName].actionbar || '000000';
  document.documentElement.style.setProperty('--actionbar-text-color', `#${actionbarTextColor}`);

  // アクションバーのアイコンにも適用
  const actionbarButtonClass = themeProperty[themeName].buttonClass || 'text-light';
  document.querySelectorAll('.app-title button i').forEach(button => {
    button.classList.remove('text-light', 'text-dark');
    button.classList.add(actionbarButtonClass);
  });

  applySelectedColors();
}

// カラーパレットの設定
function setupColorPicker() {
  const overlay = document.querySelector('.color-picker-overlay');
  const grid = document.querySelector('.color-grid');
  const cancelButton = document.querySelector('.color-picker-button.cancel');
  let currentInput = null;

  // 色相ごとに行を生成
  const values = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, "A100", "A200", "A400", "A700"];
  const hues = ['Red', 'Pink', 'Purple', 'Deep Purple', 'Indigo', 'Blue', 'Light Blue', 'Cyan',
    'Teal', 'Green', 'Light Green', 'Lime', 'Yellow', 'Amber', 'Orange', 'Deep Orange', 'Brown', 'Grey', 'Blue Grey',
    'Black and White'];

  hues.forEach(hue => {
    const row = document.createElement('div');
    row.className = 'color-row';

    // 色相名のラベル
    const label = document.createElement('div');
    label.className = 'color-row-label';
    if (hue === "Black and White") {
      label.textContent = "";
    } else {
      label.textContent = hue;
    }
    row.appendChild(label);

    // 色セルのコンテナ
    const cells = document.createElement('div');
    cells.className = 'color-cells';

    // 濃度ごとにセルを生成
    values.forEach(value => {

      // Brown, Grey, Blue Grey は A 系をスキップする(空のセルを追加する)
      if (hue === "Brown" || hue === "Grey" || hue === "Blue Grey") {
        if (value === "A100" || value === "A200" || value === "A400" || value === "A700") {
          const emptyCell = document.createElement('div');
          emptyCell.className = 'color-cell empty';
          emptyCell.textContent = '';
          cells.appendChild(emptyCell);
          return;
        }
      }

      // Black and White は白と黒のみを表示
      if (hue === "Black and White") {
        if (value !== 50 && value !== 100) {
          const emptyCell = document.createElement('div');
          emptyCell.className = 'color-cell empty';
          emptyCell.textContent = '';
          cells.appendChild(emptyCell);
          return;
        }
      }

      const div = document.createElement('div');
      div.className = 'color-cell';

      let color;
      if (hue === "Black and White") {
        if (value === 50) {
          color = `var(--md-sys-color-white)`;
        } else if (value === 100) {
          color = `var(--md-sys-color-black)`;
        }
      } else {
        // Black and White 以外はカラーを文字列表記
        color = `var(--md-sys-color-${hue.toLowerCase().replace(' ', '-')}-${value})`;
        div.textContent = value;
        div.title = `${hue}-${value}`;
      }

      div.style.backgroundColor = color;
      div.addEventListener('click', () => {

        // 色を直接適用
        if (currentInput) {
          // コンピュートされたスタイルから実際の色を取得
          const computedColor = getComputedStyle(div).backgroundColor;
          currentInput.value = rgbToHex(computedColor);
          currentInput.dispatchEvent(new Event('input'));

          // オーバーレイを閉じる
          overlay.style.display = 'none';
          currentInput = null;
        }
      });
      cells.appendChild(div);
    });

    row.appendChild(cells);
    grid.appendChild(row);
  });

  // カラー入力フィールドのイベント設定
  document.querySelectorAll('input[type="color"]').forEach(input => {
    // 各入力要素の前にラッパー要素を作成して配置する
    const wrapper = document.createElement('div');
    wrapper.className = 'color-input-wrapper';
    wrapper.style.position = 'relative';
    wrapper.style.width = '100%';
    wrapper.style.height = '100%';

    // 入力要素をラッパーで包む
    input.parentNode.insertBefore(wrapper, input);
    wrapper.appendChild(input);

    // 左側オーバーレイ（標準カラーピッカー）
    const nativePicker = document.createElement('div');
    nativePicker.className = 'native-picker-overlay';
    nativePicker.style.position = 'absolute';
    nativePicker.style.top = '0';
    nativePicker.style.left = '0';
    nativePicker.style.width = '10%';
    nativePicker.style.height = '100%';
    nativePicker.style.cursor = 'pointer';
    nativePicker.title = '標準カラーピッカー';

    // 中央オーバーレイ（カスタムパレット）
    const customPicker = document.createElement('div');
    customPicker.className = 'custom-picker-overlay';
    customPicker.style.position = 'absolute';
    customPicker.style.top = '0';
    customPicker.style.left = '10%';
    customPicker.style.width = '80%';
    customPicker.style.height = '100%';
    customPicker.style.cursor = 'pointer';
    customPicker.title = 'Material カラーパレット';

    // 右側オーバーレイ（テーマのデフォルト値に戻す）
    const resetPicker = document.createElement('div');
    resetPicker.className = 'reset-picker-overlay';
    resetPicker.style.position = 'absolute';
    resetPicker.style.top = '0';
    resetPicker.style.right = '0';
    resetPicker.style.width = '10%';
    resetPicker.style.height = '100%';
    resetPicker.style.cursor = 'pointer';
    resetPicker.title = 'テーマのデフォルト値に戻す';
    wrapper.appendChild(nativePicker);
    wrapper.appendChild(customPicker);
    wrapper.appendChild(resetPicker);

    // 標準カラーピッカーを表示するイベント
    nativePicker.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      // ネイティブのカラーピッカーを直接起動
      input.click();
    });

    // カスタムパレット表示のイベント
    customPicker.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      currentInput = input;
      overlay.style.display = 'flex';
    });

    // テーマのデフォルト値に戻すイベント
    resetPicker.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      // 現在のテーマを取得
      const currentTheme = document.getElementById('themeSelect').value;
      const themeUrl = themeDefaultUrls[currentTheme];

      if (!themeUrl) return;

      // テーマのデフォルトURLからカラーコードを取得
      const url = new URL(themeUrl);
      const params = new URLSearchParams(url.search);

      // このカラー入力に対応するパラメータ名を特定
      const colorId = input.dataset.colorId;
      const defaultColor = params.get(colorId);

      if (defaultColor) {
        const normalizedColor = defaultColor.length === 6 ? defaultColor : defaultColor.padStart(6, '0');
        input.value = `#${normalizedColor}`;
        input.dispatchEvent(new Event('input'));
      }
    });

    // 元のクリックイベントは削除
    input.removeEventListener('click', () => { });
  });

  // キャンセルボタン
  cancelButton.addEventListener('click', () => {
    overlay.style.display = 'none';
    currentInput = null;
  });

  // オーバーレイのクリックでキャンセル
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.style.display = 'none';
      currentInput = null;
    }
  });
}

// RGB形式の色をHEX形式に変換する関数
function rgbToHex(rgb) {
  // rgb(r, g, b) 形式の文字列から数値を抽出
  const [r, g, b] = rgb.match(/\d+/g).map(Number);

  // 16進数に変換して結合
  const toHex = (n) => {
    const hex = n.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

let shareText = "";

function updateShareText() {
  shareText = `#TwitPane 配色デザイン\r\n${location.href}`;
  document.getElementById('shareText').value = shareText;
}

document.addEventListener('DOMContentLoaded', function () {
  // タイムラインの初期表示
  const timelineContainer = document.querySelector('.timeline');
  timelineContainer.innerHTML = generateTimelineHTML(timelineData);

  // カラーピッカー初期化
  setupColorPicker();

  // シェアテキストを初期化
  updateShareText()

  // 各カラー入力に即時反映のイベントリスナーを設定
  document.querySelectorAll('input[type="color"]').forEach(input => {
    input.addEventListener('input', () => {
      applySelectedColors();
      // URLを更新（ただしページ遷移はしない）
      const newUrl = getColorParamsAsUrl();
      window.history.replaceState({}, '', newUrl);

      // シェアテキストを更新
      updateShareText()
    });
  });

  //--------------------------------------------------
  // テーマの選択肢を追加
  //--------------------------------------------------
  const themeSelect = document.getElementById('themeSelect');
  themeSelect.innerHTML = ''; // 既存のオプションをクリア

  // デフォルトのLightテーマを追加
  const defaultOption = document.createElement('option');
  defaultOption.value = 'Light';
  defaultOption.textContent = 'Light';
  themeSelect.appendChild(defaultOption);

  // その他のテーマを追加
  Object.entries(themeProperty).forEach(([key, value]) => {
    if (key === 'Light') {
      // skip
      return;
    }

    const option = document.createElement('option');
    option.value = key;
    option.textContent = value.name;
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

// 共有関連

function shareToX() {
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
  window.open(url, '_blank');
}

function shareToBluesky() {
  const url = `https://bsky.app/intent/compose?text=${encodeURIComponent(shareText)}`;
  window.open(url, '_blank');
}

function shareToMastodon(domain) {
  const url = `https://${domain}/share?text=${encodeURIComponent(shareText)}`;
  window.open(url, '_blank');
}

function shareToMisskey() {
  const url = `https://misskey.io/share?text=${encodeURIComponent(shareText)}`;
  window.open(url, '_blank');
}

function copyToClipboard() {
  navigator.clipboard.writeText(shareText)
    .then(() => {
      document.getElementById('copyText').style.display = 'block';
      setTimeout(() => {
        document.getElementById('copyText').style.display = 'none';
      }, 2000);
    })
    .catch(err => alert("コピーに失敗しました"));
}
