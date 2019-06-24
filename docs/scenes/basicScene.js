import phaserJuice from "../lib/phaserJuice.min.js";
/**
 * Standard Scene to display the player and effects
 */
export default class basicScene extends Phaser.Scene {
    constructor() {
        super({key: 'basicScene'});
    }

    preload() {
        this.load.image('player', 'assets/Phaser-Logo-Small.png');
    }

    create() {
        // get the camera
        const cam = this.cameras.main;

        const juice = new phaserJuice(this);
      
        let player = this.add.sprite(240, 200, 'player');

        // display code
        const code = document.getElementById('code');

        // buttons
        const reset = document.getElementById('resetBtn').addEventListener('click', function(e) {
            player.setPosition(240, 200);
            juice.reset(player);
            code.textContent = 'juice.reset(sprite)';
        });
        const shake = document.getElementById('shakeBtn').addEventListener('click', function(e) {
            juice.shake(player);
            code.textContent = 'juice.shake(sprite);'
        });
        const shakeY = document.getElementById('shakeYBtn').addEventListener('click', function(e) {
            juice.shakeY(player);
            code.textContent = 'juice.shakeY(sprite);'
        });
        const wobble = document.getElementById('wobbleBtn').addEventListener('click', function(e) {
            juice.wobble(player);
            code.textContent = 'juice.wobble(sprite);'
        });
        const wobbleY = document.getElementById('wobbleYBtn').addEventListener('click', function(e) {
            juice.wobbleY(player);
            code.textContent = 'juice.wobbleY(sprite);'
        });
        const flash = document.getElementById('flashBtn').addEventListener('click', function(e) {
            juice.flash(player);
            code.textContent = 'juice.flash(sprite);'
        });
        const grow = document.getElementById('growBtn').addEventListener('click', function(e) {
            juice.scaleUp(player);
            code.textContent = 'juice.scaleUp(sprite);'
        });
        const shrink = document.getElementById('shrinkBtn').addEventListener('click', function(e) {
            juice.scaleDown(player);
            code.textContent = 'juice.scaleDown(sprite);'
        });
        const pulse = document.getElementById('pulseBtn').addEventListener('click', function(e) {
            juice.pulse(player);
            code.textContent = 'juice.pulse(sprite);'
        });
        const fadeIn = document.getElementById('fadeInBtn').addEventListener('click', function(e) {
            player.setAlpha(0);
            juice.fadeIn(player);
            code.textContent = 'juice.fadeIn(sprite);'
        });
        const fadeOut = document.getElementById('fadeOutBtn').addEventListener('click', function(e) {
            juice.fadeOut(player);
            code.textContent = 'juice.fadeOut(sprite);'
        });
        const fadeInOut = document.getElementById('fadeInOutBtn').addEventListener('click', function(e) {
            juice.fadeInOut(player);
            code.textContent = 'juice.fadeInOut(sprite);';
        });
        let flipXCounter = true;
        const flipX = document.getElementById('flipXBtn').addEventListener('click', function(e) {
            if(flipXCounter) {
                juice.flipX(player);
                code.textContent = 'juice.flipX(sprite);';
                flipXCounter = false;
            }
            else if(!flipXCounter) {
                juice.flipX(player, false);
                code.textContent = 'juice.flipX(sprite, false);';
                flipXCounter = true;
            }
        
        });
        let flipYCounter = true;
        const flipY = document.getElementById('flipYBtn').addEventListener('click', function(e) {
            if(flipYCounter) {
                juice.flipY(player);
                code.textContent = 'juice.flipY(sprite);';
                flipYCounter = false;
            }
            else if(!flipYCounter) {
                juice.flipY(player, false);
                code.textContent = 'juice.flipY(sprite, false);';
                flipYCounter = true;  
            }
        });
        let spinXCounter = true;
        const spinX = document.getElementById('spinXBtn').addEventListener('click', function(e) {
            if(spinXCounter) {
                juice.spinX(player);
                code.textContent = 'juice.spinX(sprite);';
                spinXCounter = false;
            }
            else if(!spinXCounter) {
                juice.spinX(player, false);
                code.textContent = 'juice.spinX(sprite, false);';
                spinXCounter = true;
            }
        });
        let spinYCounter = true;
        const spinY = document.getElementById('spinYBtn').addEventListener('click', function(e) {
            if(spinYCounter) {
                juice.spinY(player);
                code.textContent = 'juice.spinY(sprite);';
                spinYCounter = false;
            }
            else if(!spinYCounter) {
                juice.spinY(player, false);
                code.textContent = 'juice.spinY(sprite, false);';
                spinYCounter = true;

            }
        });
        const rotate = document.getElementById('rotateBtn').addEventListener('click', function(e) {
            juice.rotate(player);
            code.textContent = 'juice.rotate(sprite);'
        });
        const bounce = document.getElementById('bounceBtn').addEventListener('click', function(e) {
            juice.bounce(player);
            code.textContent = 'juice.bounce(sprite);'
        });
        const damage = document.getElementById('dmgBtn').addEventListener('click', function(e) {
            juice.shake(player);
            juice.flash(player);
            code.textContent = 'juice.shake(sprite); juice.flash(sprite);'
        });

    }

    update(time, delta) {

    }
}