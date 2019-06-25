/**
 * @author Conor Irwin <https://github.com/RetroVX> 
 * @license {@link http://opensource.org/licenses/MIT|MIT License}
 * @classdesc 
 * GitHub: https://github.com/retroVX/phaser3Juice <br>
 * Create juice effects with Phaser 3
 * @example 
 * this.juice = new phaserJuice(this);
 * this.juice.shake(target);
 * @version: 1.1.0
 * @class phaserJuice
 * @param {Phaser.Scene} scene - The Scene the phaserJuice will be created in (this)
 */

export default class phaserJuice {

    constructor(scene) {

        /**
         * Get 'this' from scene
         * @name phaserJuice.scene
         * @type {Object}
         * @since 1.0.0
         */

        this.scene = scene;

         
        /**
         * Tween options that can be overidden depending on effect settings. <br>
         * Every tweenable effect has access to the delay, paused, onStart and onComplete parameters.
         * Depending on which parameters the effect uses, you can edit each effect using the optional
         * config parameter inside each effect. <br>
         * For example. To edit the shake effect to shake left and right instead of up and down <br>
         * .shake(sprite, {
         *     x: 5,
         *     y: 0
         * })
         * @name phaserJuice.options
         * @type {function}
         * @returns {object} returns the object containg the tween options 
         * @param {object} effectOptions - the default options selected for each effect
         * @param {object} option - user passed in config to edit an effect
         * @returns {object} Returns the config options for tweens
         * @since 1.0.0
         */

        this.options = function(effectOptions, option) {

            option = option || {};

            // Fixes an issue where x or y is set to 0 then its ignored and uses the effectOption instead
            if(option.x === 0) {
                option.x = 0.00001;
            }
            else if(option.y === 0) {
                option.y = 0.00001;
            }

            const config = {
                x: option.x || effectOptions.x,
                y: option.y || effectOptions.y,
                alpha: option.alpha || effectOptions.alpha,
                scaleX: option.scaleX || effectOptions.scaleX,
                scaleY: option.scaleY || effectOptions.scaleY,
                angle: option.angle || effectOptions.angle,
                duration: option.duration || effectOptions.duration,
                yoyo: option.yoyo || effectOptions.yoyo,
                repeat: option.repeat || effectOptions.repeat,
                ease: option.ease || effectOptions.ease,
                delay: option.delay || effectOptions.delay,
                paused: option.paused || effectOptions.paused,
                onStart: option.onStart || effectOptions.onStart,
                onComplete: option.onComplete || effectOptions.onComplete
            }

            return config;
        }          

    }


    /**
    * @method phaserJuice.add
    * @type {function}
    * @param {object} target - sprite to chain
    * @return {function} for method chaining
    * @since 1.1.0 
    */

    add(target) {
        this.target = target;

        return this;
    }


    /**
     * Shake a sprite <br>
     * The shake default config and options to overide if using the config parameter <br>
     * const shakeConfig = {
     *       x: 5,
     *       y: 0,
     *       duration: 50,
     *       yoyo: true,
     *       repeat: 8,
     *       ease: 'Bounce.easeInOut',
     *       delay: 0,
     *       paused: false,
     * }
     * @method phaserJuice.shake
     * @type {function}
     * @param {object} target - sprite to shake
     * @param {object} [config] - config to make edits to the effect
     * @param {boolean} [destroy=false] - destroy the tween when the onComplete event fires
     * @return {function} for method chaining
     * @since 1.0.0 
     */

    shake(target, config, destroy) {
        const scene = this.scene;
        // target is being chained
        if(target === undefined || target === null) {target = this.target;}
        if(destroy === undefined || destroy === null) {destroy = false;}

        const shakeConfig = {
            x: 5,
            y: 0,
            duration: 50,
            yoyo: true,
            repeat: 8,
            ease: 'Bounce.easeInOut',
            delay: 0,
            paused: false,
        }

        let options = this.options(shakeConfig, config);
        this.shakeTween = scene.tweens.add({
            targets: target,
            x: target.x + options.x,
            y: target.y - options.y,
            duration: options.duration,
            yoyo: options.yoyo,
            repeat: options.repeat,
            ease: options.ease,
            delay: options.delay,
            paused: options.paused,
            onStart: function(tween, target) {
                if(options.onStart !== undefined) {options.onStart(tween, target)};
            },
            onComplete: function(tween, target) {
                // run onComplete function if created
                if(options.onComplete !== undefined) {options.onComplete(tween, target);}

                if(destroy) {
                    shake.remove();
                }
                
            }
        });

        return this;
    }


    /**
     * Helper alternative that shakes the sprite on y axis instead of x  
     * @method phaserJuice.shakeY
     * @type {function}
     * @param {object} target - sprite to shake
     * @return {function} for method chaining
     * @since 1.0.0 
     */

    shakeY(target) {
        // target is being chained
        if(target === undefined || target === null) {target = this.target;}

        const config = {
            x: 0,
            y: 5
        }
        let shake = this.shake(target, config);
    }


    /**
     * Add a slight wobble to a sprite <br>
     * The wobble default config and options to overide if using the config parameter <br>
     * const wobbleConfig = {
     *       x: 20,
     *       y: 0,
     *       duration: 150,
     *       yoyo: true,
     *       repeat: 5,
     *       ease: 'Sine.easeInOut',
     *       delay: 0,
     *       paused: false,
     * }
     * @method phaserJuice.wobble
     * @type {function}
     * @param {object} target - sprite to wobble
     * @param {object} [config] - config to make edits to the effect
     * @param {boolean} [destroy=false] - destroy the tween when the onComplete event fires
     * @return {function} for method chaining
     * @since 1.0.0 
     */

    wobble(target, config, destroy) {
        const scene = this.scene;
        // target is being chained
        if(target === undefined || target === null) {target = this.target;}
        if(destroy === undefined || destroy === null) {destroy = false;}

        const wobbleConfig = {
            x: 20,
            y: 0,
            duration: 150,
            yoyo: true,
            repeat: 5,
            ease: 'Sine.easeInOut',
            delay: 0,
            paused: false,
        }

        let options = this.options(wobbleConfig, config);

        this.wobbleTween = scene.tweens.add({
            targets: target,
            x: target.x + options.x,
            y: target.y + options.y,
            duration: options.duration,
            yoyo: options.yoyo,
            repeat: options.repeat,
            ease: options.ease,
            delay: options.delay,
            paused: options.paused,
            onStart: function(tween, target) {
                if(options.onStart !== undefined) {options.onStart(tween, target)};
            },
            onComplete: function(tween, target) {
                // run onComplete function if created
                if(options.onComplete !== undefined) {options.onComplete(tween, target);}

                if(destroy) {
                    wobble.remove();
                }
                
            }
        });

        return this;

    }


    /**
     * Helper alternative that wobbles the sprite on y axis instead of x  
     * @method phaserJuice.wobbleY
     * @type {function}
     * @param {object} target - sprite to wobble
     * @return {function} for method chaining
     * @since 1.0.0 
     */

    wobbleY(target) {
        // target is being chained
        if(target === undefined || target === null) {target = this.target;}

        const config = {
            x: 0,
            y: 20
        }
        let shake = this.wobble(target, config);
    }


    /**
     * Scale up a sprite <br>
     * The scaleUp default config and options to overide if using the config parameter <br>
     * const growConfig = {
     *      scaleX: target.scaleX + 0.25,
     *      scaleY: target.scaleY + 0.25,
     *      duration: 750,
     *      delay: 0,
     *      paused: false,
     * }
     * @method phaserJuice.scaleUp
     * @type {function}
     * @param {object} target - sprite to grow
     * @param {object} [config] - config to make edits to the effect
     * @param {boolean} [destroy=false] - destroy the tween when the onComplete event fires
     * @return {function} for method chaining
     * @since 1.0.0 
     */

    scaleUp(target, config, destroy) {
        const scene = this.scene;
        // target is being chained
        if(target === undefined || target === null) {target = this.target;}
        if(destroy === undefined || destroy === null) {destroy = false;}

        const growConfig = {
            scaleX: target.scaleX + 0.25,
            scaleY: target.scaleY + 0.25,
            duration: 750,
            delay: 0,
            paused: false,
        }

        let options = this.options(growConfig, config);

        this.scaleUpTween = scene.tweens.add({
            targets: target,
            scaleX: options.scaleX,
            scaleY: options.scaleY,
            duration: options.duration,
            ease: options.ease,
            delay: options.delay,
            paused: options.paused,
            onStart: function(tween, target) {
                if(options.onStart !== undefined) {options.onStart(tween, target)};
            },
            onComplete: function(tween, target) {
                // run onComplete function if created
                if(options.onComplete !== undefined) {options.onComplete(tween, target);}

                if(destroy) {
                    grow.remove();
                }
                
            }
        });

        return this;

    }


    /**
     * Scale down a sprite <br>
     * The scaleDown default config and options to overide if using the config parameter <br>
     * const shrinkConfig = {
     *      scaleX: target.scaleX - 0.25,
     *      scaleY: target.scaleY - 0.25,
     *      duration: 750,
     *      delay: 0,
     *      paused: false,
     * }
     * @method phaserJuice.scaleDown
     * @type {function}
     * @param {object} target - sprite to shrink
     * @param {object} [config] - config to make edits to the effect
     * @param {boolean} [destroy=false] - destroy the tween when the onComplete event fires
     * @return {function} for method chaining
     * @since 1.0.0 
     */

    scaleDown(target, config, destroy) {
        const scene = this.scene;
        // target is being chained
        if(target === undefined || target === null) {target = this.target;}
        if(destroy === undefined || destroy === null) {destroy = false;}

        const shrinkConfig = {
            scaleX: target.scaleX - 0.25,
            scaleY: target.scaleY - 0.25,
            duration: 750,
            delay: 0,
            paused: false,
        }

        let options = this.options(shrinkConfig, config);
     
        this.scaleDown = scene.tweens.add({
            targets: target,
            scaleX: options.scaleX,
            scaleY: options.scaleY,
            duration: options.duration,
            ease: options.ease,
            delay: options.delay,
            paused: options.paused,
            onStart: function(tween, target) {
                if(options.onStart !== undefined) {options.onStart(tween, target)};
            },
            onComplete: function(tween, target) {
                // run onComplete function if created
                if(options.onComplete !== undefined) {options.onComplete(tween, target);}

                if(destroy) {
                    shrink.remove();
                }
                
            }
        });

        return this;

    }


    /**
     * Pulse a sprite <br>
     * The pulse default config and options to overide if using the config parameter <br>
     * const pulseConfig = {
     *      scaleX: target.scaleX * 1.25,
     *      scaleY: target.scaleY * 1.25,
     *      duration: 750,
     *      repeat: 2,
     *      yoyo: true,
     *      ease: 'Quad.easeInOut',
     *      delay: 0,
     *      paused: false,
     * }
     * @method phaserJuice.pulse
     * @type {function}
     * @param {object} target - sprite to pulse
     * @param {object} [config] - config to make edits to the effect
     * @param {boolean} [destroy=false] - destroy the tween when the onComplete event fires
     * @return {function} for method chaining
     * @since 1.0.0 
     */

    pulse(target, config, destroy) {
        const scene = this.scene;
        // target is being chained
        if(target === undefined || target === null) {target = this.target;}
        if(destroy === undefined || destroy === null) {destroy = false;}

        const pulseConfig = {
            scaleX: target.scaleX * 1.25,
            scaleY: target.scaleY * 1.25,
            duration: 750,
            repeat: 2,
            yoyo: true,
            ease: 'Quad.easeInOut',
            delay: 0,
            paused: false,
        }

        let options = this.options(pulseConfig, config);

        this.pulseTween = scene.tweens.add({
            targets: target,
            scaleX: options.scaleX,
            scaleY: options.scaleY,
            yoyo: options.yoyo,
            repeat: options.repeat,
            duration: options.duration,
            ease: options.ease,
            delay: options.delay,
            paused: options.paused,
            onStart: function(tween, target) {
                if(options.onStart !== undefined) {options.onStart(tween, target)};
            },
            onComplete: function(tween, target) {
                // run onComplete function if created
                if(options.onComplete !== undefined) {options.onComplete(tween, target);}

                if(destroy) {
                    pulse.remove();
                }
                
            }
        });

        return this;

    }

    
    /**
     * Flash a sprite <br>
     * Note: Flash does not use a tween
     * @method phaserJuice.flash
     * @type {function}
     * @param {object} target - sprite to flash
     * @param {number} [duration=150] - how long the effect lasts for. 
     * @param {string} [color='0xffffff'] - The color the sprite flashes.
     * @return {function} for method chaining
     * @since 1.0.0 
     */

    flash(target, duration, color) {
        const scene = this.scene;
        // target is being chained
        if(target === undefined || target === null) {target = this.target;}
        if(duration === undefined || duration === null) {duration = 150;}
        if(color === undefined || color === null) {color = '0xffffff';}

        target.setTintFill(color);

        let flashTimer = scene.time.addEvent({delay: duration, callback: function(){
            target.setTint('0xffffff');
        }, callbackScope: this});

        return this;

    }


    /**
     * Rotate a sprite <br>
     * The rotate default config and options to overide if using the config parameter <br>
     * const rotateConfig = {
     *      angle: 360,
     *      duration: 500,
     *      ease: 'Circular.easeInOut',
     *      delay: 0,
     *      paused: false,
     * }
     * @method phaserJuice.rotate
     * @type {function}
     * @param {object} target - sprite to rotate
     * @param {object} [config] - config to make edits to the effect
     * @param {boolean} [destroy=false] - destroy the tween when the onComplete event fires
     * @return {function} for method chaining
     * @since 1.0.0 
     */

    rotate(target, config, destroy) {
        const scene = this.scene;
        // target is being chained
        if(target === undefined || target === null) {target = this.target;}
        if(destroy === undefined || destroy === null) {destroy = false;}

        const rotateConfig = {
            angle: 360,
            duration: 500,
            ease: 'Circular.easeInOut',
            delay: 0,
            paused: false,
        }

        let options = this.options(rotateConfig, config);

        this.rotateTween = scene.tweens.add({
            targets: target,
            angle: options.angle,
            yoyo: options.yoyo,
            repeat: options.repeat,
            duration: options.duration,
            ease: options.ease,
            delay: options.delay,
            paused: options.paused,
            onStart: function(tween, target) {
                if(options.onStart !== undefined) {options.onStart(tween, target)};
            },
            onComplete: function(tween, target) {
                // run onComplete function if created
                if(options.onComplete !== undefined) {options.onComplete(tween, target);}

                if(destroy) {
                    rotate.remove();
                }
                
            }
        });

        return this;

    }


    /**
     * Bounce a sprite <br>
     * The bounce default config and options to overide if using the config parameter <br>
     * const bounceConfig = {
     *      y: 25,
     *      duration: 1000,
     *      ease: 'Bounce',
     *      delay: 0,
     *      paused: false,
     * }
     * @method phaserJuice.bounce
     * @type {function}
     * @param {object} target - sprite to bounce
     * @param {object} [config] - config to make edits to the effect
     * @param {boolean} [destroy=false] - destroy the tween when the onComplete event fires
     * @return {function} for method chaining
     * @since 1.0.0 
     */

    bounce(target, config, destroy) {
        const scene = this.scene;
        // target is being chained
        if(target === undefined || target === null) {target = this.target;}
        if(destroy === undefined || destroy === null) {destroy = false;}

        const bounceConfig = {
            y: 25,
            duration: 1000,
            ease: 'Bounce',
            delay: 0,
            paused: false,
        }

        let options = this.options(bounceConfig, config);

        this.bounceTween = scene.tweens.add({
            targets: target,
            y: target.y + options.y,
            repeat: options.repeat,
            duration: options.duration,
            ease: options.ease,
            delay: options.delay,
            paused: options.paused,
            onStart: function(tween, target) {
                if(options.onStart !== undefined) {options.onStart(tween, target)};
            },
            onComplete: function(tween, target) {
                // run onComplete function if created
                if(options.onComplete !== undefined) {options.onComplete(tween, target);}

                if(destroy) {
                    bounce.remove();
                }
                
            }
        });

        return this;

    }


    /**
     * Fade in a sprite <br>
     * The fade in default config and options to overide if using the config parameter <br>
     * const fadeInConfig = {
     *      alpha: 1,
     *      duration: 750,
     *      ease: 'Circular.easeIn',
     *      delay: 0,
     *      paused: false,
     * }
     * @method phaserJuice.fadeIn
     * @type {function}
     * @param {object} target - sprite to fade in
     * @param {object} [config] - config to make edits to the effect
     * @param {boolean} [destroy=false] - destroy the tween when the onComplete event fires
     * @return {function} for method chaining
     * @since 1.0.0 
     */

    fadeIn(target, config, destroy) {
        const scene = this.scene;
        // target is being chained
        if(target === undefined || target === null) {target = this.target;}
        if(destroy === undefined || destroy === null) {destroy = false;}

        const fadeInConfig = {
            alpha: 1,
            duration: 750,
            ease: 'Circular.easeIn',
            delay: 0,
            paused: false,
        }

        let options = this.options(fadeInConfig, config);

        this.fadeInTween = scene.tweens.add({
            targets: target,
            alpha: options.alpha,
            duration: options.duration,
            ease: options.ease,
            delay: options.delay,
            paused: options.paused,
            onStart: function(tween, target) {
                if(options.onStart !== undefined) {options.onStart(tween, target)};
            },
            onComplete: function(tween, target) {
                // run onComplete function if created
                if(options.onComplete !== undefined) {options.onComplete(tween, target);}

                if(destroy) {
                    fadeIn.remove();
                }
                
            }
        });

        return this;

    }


    /**
     * Fade out a sprite <br>
     * The fade out default config and options to overide if using the config parameter <br>
     * const fadeOutConfig = {
     *      alpha: 0,
     *      duration: 750,
     *      ease: 'Circular.easeOut',
     *      delay: 0,
     *      paused: false,
     * }
     * @method phaserJuice.fadeOut
     * @type {function}
     * @param {object} target - sprite to fade out
     * @param {object} [config] - config to make edits to the effect
     * @param {boolean} [destroy=false] - destroy the tween when the onComplete event fires
     * @return {function} for method chaining
     * @since 1.0.0 
     */

    fadeOut(target, config, destroy) {
        const scene = this.scene;
        // target is being chained
        if(target === undefined || target === null) {target = this.target;}
        if(destroy === undefined || destroy === null) {destroy = false;}

        const fadeOutConfig = {
            alpha: 0,
            duration: 750,
            ease: 'Circular.easeOut',
            delay: 0,
            paused: false,
        }

        let options = this.options(fadeOutConfig, config);
       
        this.fadeOutTween = scene.tweens.add({
            targets: target,
            alpha: options.alpha,
            duration: options.duration,
            ease: options.ease,
            delay: options.delay,
            paused: options.paused,
            onStart: function(tween, target) {
                if(options.onStart !== undefined) {options.onStart(tween, target)};
            },
            onComplete: function(tween, target) {
                // run onComplete function if created
                if(options.onComplete !== undefined) {options.onComplete(tween, target);}

                if(destroy) {
                    fadeOut.remove();
                }
                
            }
        });

        return this;

    }


    /**
     * Fade in and out a sprite <br>
     * The fade in & out default config and options to overide if using the config parameter <br>
     * const fadeInOutConfig = {
     *      alpha: 0,
     *      duration: 500,
     *      yoyo: true,
     *      repeat: 3,
     *      ease: 'Circular.easeInOut',
     *      delay: 0,
     *      paused: false,
     * }
     * @method phaserJuice.fadeInOut
     * @type {function}
     * @param {object} target - sprite to fade in and out
     * @param {object} [config] - config to make edits to the effect
     * @param {boolean} [destroy=false] - destroy the tween when the onComplete event fires
     * @return {function} for method chaining
     * @since 1.0.0 
     */

    fadeInOut(target, config, destroy) {
        const scene = this.scene;
        // target is being chained
        if(target === undefined || target === null) {target = this.target;}
        if(destroy === undefined || destroy === null) {destroy = false;}

        const fadeInOutConfig = {
            alpha: 0,
            duration: 500,
            yoyo: true,
            repeat: 3,
            ease: 'Circular.easeInOut',
            delay: 0,
            paused: false,
        }

        let options = this.options(fadeInOutConfig, config);

        this.fadeInOutTween = scene.tweens.add({
            targets: target,
            alpha: options.alpha,
            duration: options.duration,
            yoyo: options.yoyo,
            repeat: options.repeat,
            ease: options.ease,
            delay: options.delay,
            paused: options.paused,
            onStart: function(tween, target) {
                if(options.onStart !== undefined) {options.onStart(tween, target)};
            },
            onComplete: function(tween, target) {
                // run onComplete function if created
                if(options.onComplete !== undefined) {options.onComplete(tween, target);}

                if(destroy) {
                    fadeInOut.remove();
                }
                
            }
        });

        return this;

    }


    /**
     * Flip a sprite on the x-axis <br>
     * The flipX default config and options to overide if using the config parameter <br>
     * Warning: This effect scales the sprite and can cause unintended side effects! <br>
     * const flipXConfig = {
     *      scaleX: direction,
     *      duration: 500,
     *      ease: 'Sine.easeInOut',
     *      delay: 0,
     *      paused: false,
     * }
     * @method phaserJuice.flipX
     * @type {function}
     * @param {object} target - sprite to flip
     * @param {boolean} [direction=true] - direction to flip the tween. True to flip, false to flip back
     * @param {object} [config] - config to make edits to the effect
     * @param {boolean} [destroy=false] - destroy the tween when the onComplete event fires
     * @return {function} for method chaining
     * @since 1.0.0 
     */

    flipX(target, direction, config, destroy) {
        const scene = this.scene;
        // target is being chained
        if(target === undefined || target === null) {target = this.target;}
        if(direction === undefined || direction === null) {direction = true;}
        if(destroy === undefined || destroy === null) {destroy = false;}

        if(direction) {
            direction = -1;
        }
        else {
            direction = 1;
        }

        const flipXConfig = {
            scaleX: direction,
            duration: 500,
            ease: 'Sine.easeInOut',
            delay: 0,
            paused: false,
        }

        let options = this.options(flipXConfig, config);

        this.flipXTween = scene.tweens.add({
            targets: target,
            scaleX: options.scaleX,
            duration: options.duration,
            ease: options.ease,
            delay: options.delay,
            paused: options.paused,
            onStart: function(tween, target) {
                if(options.onStart !== undefined) {options.onStart(tween, target)};
            },
            onComplete: function(tween, target) {
                // run onComplete function if created
                if(options.onComplete !== undefined) {options.onComplete(tween, target);}

                if(destroy) {
                    flipX.remove();
                }
                
            }
        });

        return this;

    }


    /**
     * Flip a sprite on the y-axis <br>
     * The flipY default config and options to overide if using the config parameter <br>
     * Warning: This effect scales the sprite and can cause unintended side effects! <br>
     * const flipYConfig = {
     *      scaleY: direction,
     *      duration: 500,
     *      ease: 'Sine.easeInOut',
     *      delay: 0,
     *      paused: false,
     * }
     * @method phaserJuice.flipY
     * @type {function}
     * @param {object} target - sprite to flip
     * @param {boolean} [direction=true] - direction to flip the tween. True to flip, false to flip back
     * @param {object} [config] - config to make edits to the effect
     * @param {boolean} [destroy=false] - destroy the tween when the onComplete event fires
     * @return {function} for method chaining
     * @since 1.0.0 
     */

    flipY(target, direction, config, destroy) {
        const scene = this.scene;
        // target is being chained
        if(target === undefined || target === null) {target = this.target;}
        if(direction === undefined || direction === null) {direction = true;}
        if(destroy === undefined || destroy === null) {destroy = false;}

        if(direction) {
            direction = -1;
        }
        else {
            direction = 1;
        }

        const flipYConfig = {
            scaleY: direction,
            duration: 500,
            ease: 'Sine.easeInOut',
            delay: 0,
            paused: false,
        }

        let options = this.options(flipYConfig, config);

        this.flipYTween = scene.tweens.add({
            targets: target,
            scaleY: options.scaleY,
            duration: options.duration,
            ease: options.ease,
            delay: options.delay,
            paused: options.paused,
            onStart: function(tween, target) {
                if(options.onStart !== undefined) {options.onStart(tween, target)};
            },
            onComplete: function(tween, target) {
                // run onComplete function if created
                if(options.onComplete !== undefined) {options.onComplete(tween, target);}

                if(destroy) {
                    flipY.remove();
                }
                
            }
        });

        return this;

    }


    /**
     * Spin a sprite on the x-axis <br>
     * The spinX default config and options to overide if using the config parameter <br>
     * Warning: This effect scales the sprite and can cause unintended side effects! <br>
     * const spinXConfig = {
     *      scaleX: direction,
     *      duration: 500,
     *      yoyo: true,
     *      repeat: 3,
     *      ease: 'Sine.easeInOut',
     *      delay: 0,
     *      paused: false,
     * }
     * @method phaserJuice.spinX
     * @type {function}
     * @param {object} target - sprite to spin
     * @param {boolean} [direction=true] - direction to spin the tween. True to spin right, false to spin back
     * @param {object} [config] - config to make edits to the effect
     * @param {boolean} [destroy=false] - destroy the tween when the onComplete event fires
     * @return {function} for method chaining
     * @since 1.0.0 
     */

    spinX(target, direction, config, destroy) {
        const scene = this.scene;
        // target is being chained
        if(target === undefined || target === null) {target = this.target;}
        if(direction === undefined || direction === null) {direction = true;}
        if(destroy === undefined || destroy === null) {destroy = false;}

        if(direction) {
            direction = -1;
        }
        else {
            direction = 1;
        }

        const spinXConfig = {
            scaleX: direction,
            duration: 500,
            yoyo: true,
            repeat: 3,
            ease: 'Sine.easeInOut',
            delay: 0,
            paused: false,
        }

        let options = this.options(spinXConfig, config);

        this.spinXTween = scene.tweens.add({
            targets: target,
            scaleX: options.scaleX,
            yoyo: options.yoyo,
            repeat: options.repeat,
            duration: options.duration,
            ease: options.ease,
            delay: options.delay,
            paused: options.paused,
            onStart: function(tween, target) {
                if(options.onStart !== undefined) {options.onStart(tween, target)};
            },
            onComplete: function(tween, target) {
                // run onComplete function if created
                if(options.onComplete !== undefined) {options.onComplete(tween, target);}

                if(destroy) {
                    spinX.remove();
                }
                
            }
        });

        return this;

    }


    /**
     * Spin a sprite on the y-axis
     * The spinY default config and options to overide if using the config parameter <br>
     * Warning: This effect scales the sprite and can cause unintended side effects! <br>
     * const spinYConfig = {
     *      scaleY: direction,
     *      duration: 500,
     *      yoyo: true,
     *      repeat: 3,
     *      ease: 'Sine.easeInOut',
     *      delay: 0,
     *      paused: false,
     * }
     * @method phaserJuice.spinY
     * @type {function}
     * @param {object} target - sprite to spin
     * @param {boolean} [direction=true] - direction to spin the tween. True to spin right, false to spin back
     * @param {object} [config] - config to make edits to the effect
     * @param {boolean} [destroy=false] - destroy the tween when the onComplete event fires
     * @return {function} for method chaining
     * @since 1.0.0 
     */

    spinY(target, direction, config, destroy) {
        const scene = this.scene;
        // target is being chained
        if(target === undefined || target === null) {target = this.target;}
        if(direction === undefined || direction === null) {direction = true;}
        if(destroy === undefined || destroy === null) {destroy = false;}

        if(direction) {
            direction = -1;
        }
        else {
            direction = 1;
        }

        const spinYConfig = {
            scaleY: direction,
            duration: 500,
            yoyo: true,
            repeat: 3,
            ease: 'Sine.easeInOut',
            delay: 0,
            paused: false,
        }

        let options = this.options(spinYConfig, config);

     
        this.spinYTween = scene.tweens.add({
            targets: target,
            scaleY: options.scaleY,
            yoyo: options.yoyo,
            repeat: options.repeat,
            duration: options.duration,
            ease: options.ease,
            delay: options.delay,
            paused: options.paused,
            onStart: function(tween, target) {
                if(options.onStart !== undefined) {options.onStart(tween, target)};
            },
            onComplete: function(tween, target) {
                // run onComplete function if created
                if(options.onComplete !== undefined) {options.onComplete(tween, target);}

                if(destroy) {
                    spinY.remove();
                }
            
            }
        });

        return this;

    }


    /**
     * Helper function to reset a sprite back to original <br>
     * Resets the sprite to alpha 1, scale 1, angle 0, tint none 
     * @method phaserJuice.reset
     * @type {function}
     * @param {object} target - sprite to reset
     * @return {function} for method chaining
     * @since 1.0.0 
     */

    reset(target) {
        // target is being chained
        if(target === undefined || target === null) {target = this.target;}

        target.setAlpha(1);
        target.setScale(1);
        target.setAngle(0);
        target.setTint('0xffffff');

        return this;

    }

}