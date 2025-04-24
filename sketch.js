let balloons = [];
let textColor;
let lastColorChangeTime = 0; // 上次顏色變化的時間
const colorChangeInterval = 1000; // 顏色變化間隔（毫秒）

function setup() {
  createCanvas(windowWidth, windowHeight);

  // 初始化氣球
  for (let i = 0; i < 20; i++) {
    balloons.push({
      x: random(width),
      y: random(height),
      size: random(30, 60),
      color: color(random(255), random(255), random(255)),
      speed: random(1, 3),
    });
  }

  // 初始化文字顏色
  textColor = color(random(255), random(255), random(255));
}

function draw() {
  background(200, 230, 255); // 淡藍色背景

  // 繪製氣球
  for (let balloon of balloons) {
    fill(balloon.color);
    noStroke();
    ellipse(balloon.x, balloon.y, balloon.size);

    // 氣球向上飄動
    balloon.y -= balloon.speed;

    // 如果氣球超出畫布，重置到底部
    if (balloon.y < -balloon.size) {
      balloon.y = height + balloon.size;
      balloon.x = random(width);
      balloon.size = random(30, 60);
      balloon.color = color(random(255), random(255), random(255));
      balloon.speed = random(1, 3);
    }
  }

  // 每隔一段時間更新文字顏色
  if (millis() - lastColorChangeTime > colorChangeInterval) {
    textColor = color(random(255), random(255), random(255));
    lastColorChangeTime = millis();
  }

  // 設定文字樣式
  textSize(40); // 加大文字
  textAlign(CENTER, CENTER);
  fill(textColor); // 使用更新後的文字顏色

  // 顯示自我介紹文字
  text("蔡宥淇", width / 2, height / 2 - 60);
  text("就讀科系：教育科技學系", width / 2, height / 2);
  text("班級：一A", width / 2, height / 2 + 60);
}

// 當視窗大小改變時，重新調整畫布大小
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
