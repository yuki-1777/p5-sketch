// 使用するフォント名の配列
const fonts = [
  'Roboto, sans-serif',
  'Merriweather, serif',
  'Montserrat, sans-serif',
  'Noto Sans JP, sans-serif',
  'Lobster, cursive'
];

// .item p（Sketch 1, Sketch 2 など）にランダムでフォントを適用
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.item p').forEach(el => {
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    el.style.fontFamily = randomFont;
  });
});