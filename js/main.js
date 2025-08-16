// 使用するフォント名の配列
const fonts = [
  'Borel, cursive',
  'Butcherman, cursive',
  'Comic Relief, cursive',
  'Crimson Text, serif',
  'Geo, sans-serif',
  'Gugi, cursive',
  'Julius Sans One, sans-serif',
  'M PLUS 1p, sans-serif',
  'Monoton, cursive',
  'Monsieur La Doulaise, cursive',
  'Noto Sans JP, sans-serif',
  'Silkscreen, sans-serif'
];

// .item p（Sketch 1, Sketch 2 など）にランダムでフォントを適用
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.item p').forEach(el => {
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    el.style.fontFamily = randomFont;
  });
});