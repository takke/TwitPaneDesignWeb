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
  const bgColor = document.getElementById('bgColor').value;
  const textColor = document.getElementById('textColor').value;
  const accentColor = document.getElementById('accentColor').value;
  const borderColor = document.getElementById('borderColor').value;

  // CSSカスタムプロパティを更新
  document.documentElement.style.setProperty('--bg-color', bgColor);
  document.documentElement.style.setProperty('--text-color', textColor);
  document.documentElement.style.setProperty('--accent-color', accentColor);
  document.documentElement.style.setProperty('--border-color', borderColor);

  // カラープレビューを更新
  document.getElementById('colorPreview').style.backgroundColor = bgColor;
}

document.addEventListener('DOMContentLoaded', function () {
  // タイムラインの初期表示
  const timelineContainer = document.querySelector('.timeline');
  timelineContainer.innerHTML = generateTimelineHTML(timelineData);

  // 配色カスタマイズ機能
  const colorInputs = [
    document.getElementById('bgColor'),
    document.getElementById('textColor'),
    document.getElementById('accentColor'),
    document.getElementById('borderColor')
  ];

  // 各カラー入力に即時反映のイベントリスナーを設定
  colorInputs.forEach(input => {
    input.addEventListener('input', applySelectedColors);
  });

  // 配色を適用ボタンにもイベントリスナーを設定
  document.querySelector('.btn-primary').addEventListener('click', applySelectedColors);

  // 初期配色を適用
  applySelectedColors();
});
