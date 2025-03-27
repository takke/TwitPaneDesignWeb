document.addEventListener('DOMContentLoaded', function() {
  // 要素の取得
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

    // 背景色の適用
    posts.forEach(post => {
      post.style.backgroundColor = bgColorInput.value;
    });

    // テキスト色の適用
    postTexts.forEach(text => {
      text.style.color = textColorInput.value;
    });
    userNames.forEach(name => {
      name.style.color = textColorInput.value;
    });

    // アクセント色の適用
    document.querySelectorAll('.timeline-post::before').forEach(line => {
      line.style.backgroundColor = accentColorInput.value;
    });
    document.querySelectorAll('.action-button:hover').forEach(button => {
      button.style.color = accentColorInput.value;
    });

    // ボーダー色の適用
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
