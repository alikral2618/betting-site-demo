import GameScene from './gameScene.js';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container',
  physics: {
    default: 'arcade',
    arcade: { debug: false, gravity: { y: 0 } }
  },
  scene: [GameScene]
};

window.game = new Phaser.Game(config);
