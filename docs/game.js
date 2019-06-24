import basicScene from "./scenes/basicScene.js";

const config = {
  type: Phaser.AUTO,
  transparent: true,
  //backgroundColor: '#e9e9e9',
  width: 480,
  height: 400,
  //pixelArt: true,
  parent: "gameCanvas",
  scene: basicScene,
  title: 'Phaser Juice',
  url: 'https://github.com/RetroVX/phaser3Juice'

};

const game = new Phaser.Game(config);
