// Simple colorful confetti falling animation on canvas

const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
let W, H;

function resize() {
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;
}
window.addEventListener('resize', resize);
resize();

const colors = [
  '#ff4081', '#ff80ab', '#ff1744', '#f50057',
  '#ea80fc', '#d500f9', '#651fff', '#311b92',
  '#2979ff', '#00b0ff', '#00e5ff', '#1de9b6',
  '#00c853', '#64dd17', '#aeea00', '#ffd600',
  '#ff6d00', '#ff3d00', '#bf360c'
];

class Confetti {
  constructor() {
    this.x = Math.random() * W;
    this.y = Math.random() * H - H;
    this.size = Math.random() * 8 + 4;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.speed = Math.random() * 3 + 1;
    this.tilt = Math.random() * 10 - 10;
    this.tiltSpeed = Math.random() * 0.1 + 0.05;
  }

  update() {
    this.y += this.speed;
    this.tilt += this.tiltSpeed;
    if (this.y > H) {
      this.x = Math.random() * W;
      this.y
