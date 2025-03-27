// タイムラインのデータ
const timelineData = [
  {
    id: 1,
    avatar: "https://fakeimg.pl/48x48/ddd/fff?text=T",
    userName: "たけうちひろあき🐘",
    userId: "takke",
    timestamp: "2023/03/04 14:56",
    content: "@zonepane よろしくお願いします 😊 こちらは fedibird なので 🐘 のようなカスタム絵文字も使えています 🤔",
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

document.addEventListener('DOMContentLoaded', function() {
  // タイムラインの初期表示
  const timelineContainer = document.querySelector('.timeline');
  timelineContainer.innerHTML = generateTimelineHTML(timelineData);

  // 配色カスタマイズ機能
  const colorPreview = document.getElementById('colorPreview');
  const bgColorInput = document.getElementById('bgColor');
  const textColorInput = document.getElementById('textColor');
  const accentColorInput = document.getElementById('accentColor');
  const borderColorInput = document.getElementById('borderColor');
  const applyButton = document.querySelector('.btn-primary');

  // プレビューの更新
  function updatePreview() {
    colorPreview.style.backgroundColor = bgColorInput.value;
    colorPreview.style.border = `1px solid ${borderColorInput.value}`;
  }

  // 配色の適用
  function applyColors() {
    const timeline = document.querySelector('.timeline');
    const posts = document.querySelectorAll('.timeline-post');
    const userNames = document.querySelectorAll('.user-name');
    const postTexts = document.querySelectorAll('.post-text');

    posts.forEach(post => {
      post.style.backgroundColor = bgColorInput.value;
    });

    postTexts.forEach(text => {
      text.style.color = textColorInput.value;
    });
    userNames.forEach(name => {
      name.style.color = textColorInput.value;
    });

    document.querySelectorAll('.timeline-post::before').forEach(line => {
      line.style.backgroundColor = accentColorInput.value;
    });
    document.querySelectorAll('.action-button:hover').forEach(button => {
      button.style.color = accentColorInput.value;
    });

    timeline.style.borderColor = borderColorInput.value;
    posts.forEach(post => {
      post.style.borderBottomColor = borderColorInput.value;
    });
  }

  // イベントリスナーの設定
  [bgColorInput, textColorInput, accentColorInput, borderColorInput].forEach(input => {
    input.addEventListener('input', updatePreview);
  });

  applyButton.addEventListener('click', applyColors);

  // 初期プレビューの表示
  updatePreview();
});
