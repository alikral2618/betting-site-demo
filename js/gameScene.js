export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  preload() {
    this.load.image('ball1', 'assets/balls/ball1.png');
    this.load.image('ball2', 'assets/balls/ball2.png');
    this.load.image('ball3', 'assets/balls/ball3.png');
    this.load.audio('pop', 'assets/sounds/pop.mp3');
  }

  create() {
    this.score = 0;
    this.timeLeft = 30;
    this.gameOver = false;

    this.balls = this.physics.add.group();

    for (let i = 0; i < 5; i++) {
      this.createBall();
    }

    this.clickSound = this.sound.add('pop');

    this.scoreText = document.getElementById('score');
    this.timerText = document.getElementById('timer');
    this.restartBtn = document.getElementById('restartBtn');

    this.updateScore();
    this.updateTimer();

    this.restartBtn.style.display = 'none';
    this.restartBtn.onclick = () => {
      this.scene.restart();
      document.getElementById('info').querySelector('h2').textContent = 'Topları Yakala! (Zaman: 30 saniye)';
      document.getElementById('info').querySelector('h3').textContent = 'Puan: 0';
      this.restartBtn.style.display = 'none';
    };

    this.timerEvent = this.time.addEvent({
      delay: 1000,
      callback: this.onTimerTick,
      callbackScope: this,
      loop: true
    });

    this.difficultyTimer = this.time.addEvent({
      delay: 5000,
      callback: () => { if(!this.gameOver) this.createBall(true); },
      loop: true
    });
  }

  createBall(harder = false) {
    const colors = ['ball1', 'ball2', 'ball3'];
    const x = Phaser.Math.Between(50, 750);
    const y = Phaser.Math.Between(50, 550);
    const key = colors[Phaser.Math.Between(0, colors.length - 1)];

    const ball = this.balls.create(x, y, key);
    ball.setCollideWorldBounds(true);
    ball.setBounce(1);

    let speed = Phaser.Math.Between(100, 200);
    if (harder) speed += 50;

    let vx = Phaser.Math.Between(-speed, speed);
    let vy = Phaser.Math.Between(-speed, speed);

    if (Math.abs(vx) < 80) vx = vx < 0 ? -80 : 80;
    if (Math.abs(vy) < 80) vy = vy < 0 ? -80 : 80;

    ball.setVelocity(vx, vy);
    ball.setScale(1);
    ball.setInteractive();

    ball.on('pointerdown', () => {
      if (this.gameOver) return;
      this.score += 10;
      this.updateScore();
      this.clickSound.play();

      this.tweens.add({
        targets: ball,
        scale: 1.5,
        duration: 100,
        yoyo: true,
        onComplete: () => {
          ball.x = Phaser.Math.Between(50, 750);
          ball.y = Phaser.Math.Between(50, 550);

          let newSpeed = Phaser.Math.Between(100, 250);
          let newVx = Phaser.Math.Between(-newSpeed, newSpeed);
          let newVy = Phaser.Math.Between(-newSpeed, newSpeed);
          if (Math.abs(newVx) < 80) newVx = newVx < 0 ? -80 : 80;
          if (Math.abs(newVy) < 80) newVy = newVy < 0 ? -80 : 80;

          ball.setVelocity(newVx, newVy);
          ball.setScale(1);
        }
      });
    });
  }

  updateScore() {
    this.scoreText.textContent = this.score;
  }

  updateTimer() {
    this.timerText.textContent = this.timeLeft;
  }

  onTimerTick() {
    this.timeLeft--;
    this.updateTimer();
    if (this.timeLeft <= 0) this.endGame();
  }

  endGame() {
    this.gameOver = true;
    this.balls.clear(true, true);
    this.timerEvent.remove(false);
    this.difficultyTimer.remove(false);

    const infoDiv = document.getElementById('info');
    infoDiv.querySelector('h2').textContent = 'Oyun Bitti! Toplam Puanınız: ' + this.score;
    this.restartBtn.style.display = 'inline-block';
  }

  update() {
    if (!this.gameOver) {
      let c = Phaser.Display.Color.HSLToColor((Date.now() % 10000) / 10000, 0.5, 0.15);
      this.cameras.main.setBackgroundColor(c.color);
    }
  }
}
