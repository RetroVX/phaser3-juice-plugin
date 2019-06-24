# Phaser 3 Juice

A class to create customizable juicy effects for sprites with Phaser 3

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features
* Shake
* Wobble
* Flash
* Scale Up
* Scale Down
* Pulse
* Rotate
* Bounce
* Fade In
* Fade Out
* Fade In & Out
* FlipX
* FlipY
* SpinX
* SpinY
* Reset
* Plug in and play approach
* Customize each effect

## Demo & Examples

https://retrovx.github.io/phaser3Juice/


## Getting Started

### Install

```
git clone https://github.com/RetroVX/phaser3Juice.git
```
Or download from Zip

#### Import into a Phaser scene

```javascript
import phaserJuice from "./path/to/phaserJuice.min.js";

// pass scene instance
const juice = new phaserJuice(this);

```

### Basic Examples
See the docs for each effects full list of features and config parameters

```javascript
const juice = new phaserJuice(this);

// shake
// .shake(target, config, destroyonComplete)
juice.shake(target);

// wobble
// .wobble(target, config, destroyonComplete)
juice.wobble(target);

// flash
// .flash(target, duration, color)
juice.flash(target);

// scale up
// .scaleUp(target, config, destroyonComplete)
juice.scaleUp(target);

// scale down
// .scaleDown(target, config, destroyonComplete)
juice.scaleDown(target);

// pulse
// .pulse(target, config, destroyonComplete)
juice.pulse(target);

// rotate
// .rotate(target, config, destroyonComplete)
juice.rotate(target);

// bounce
// .bounce(target, config, destroyonComplete)
juice.bounce(target);

// fade in
// .fadeIn(target, config, destroyonComplete)
juice.fadeIn(target);

// fade out
// .fadeOut(target, config, destroyonComplete)
juice.fadeOut(target);

// fade in and out
// .fadeInOut(target, config, destroyonComplete)
juice.fadeInOut(target);

// flipX
// .flipX(target, direction, config, destroyonComplete)
juice.flipX(target);

// flipY
// .flipY(target, direction, config, destroyonComplete)
juice.flipY(target);

// spinX
// .spinX(target, direction, config, destroyonComplete)
juice.spinX(target);

// spinY
// .spinY(target, direction, config, destroyonComplete)
juice.spinY(target);

// reset
juice.reset(target);
```

#### ShakeY & WobbleY
```javascript
// alternative helper functions to wobble and shake on the y axis instead of the x axis
juice.shakeY(target);
juice.wobbleY(target);
```

#### Small, Medium and Heavy Shake & Wobble
```javascript
// small 
juice.shake(target, {x:1});
juice.wobble(target, {x:5});

// medium
juice.shake(target);
juice.wobble(target);

// heavy
juice.shake(target, {x:10});
juice.wobble(target, {x:35});
```

#### Remove An Effect Once It has Finished Playing
```javascript
// the third paramter removes the tween on any effect. 
// Note: Some effects do not use tweens such as .flash();
juice.shake(target, null, true);
```

#### Get Effects Config
```javascript
// Each tweenable effect returns an object with the tween and the default effects config
let shake = juice.shake(target);
console.log(shake);
// -- {tween: the tween object, config: the default config}
```

#### Start Effect Paused or Delay Effect
```javascript
// if the effect is created via a tween then you can start the tween paused or delay it starting
let shake = juice.shake(target, {
    // start tween in paused state
    paused: true,
    // delay 2 seconds before starting
    delay: 2000
})

// play effect
shake.tween.play();
```

#### onStart and onComplete
```javascript
// if the effect is created via a tween then you can use the onStart and onComplete functions
juice.shake(target, {
    onStart: function(tween, target) {
        console.log('Effect Started');
    },
    onComplete: function(tween, target) {
        console.log('Effect Finished');
    }
})
```

#### Repeat Effect
```javascript
// If you need to keep the object shaking/wobbling such as mouse hovering over a button.
// This will work for all tweenable effects.
juice.shake(target, {
    repeat: -1
})

juice.wobble(target, {
    repeat: -1
})

//pulse
juice.pulse(target, {
    repeat: -1
})

```

#### Player Hit Example
```javascript
// shake and flash the tween to represent the player taking damage
let sprite = this.add.sprite(100, 100, 'player');
juice.shake(sprite);
// flash defaults to a white flash
juice.flash(sprite);

// flash red instead
juice.flash(sprite, null, '0xff0000');
```

#### Effects That Do NOT Use Tweens
The only effects that do not use a tween are ```.flash();``` and ```.reset();```

#### Warning Using FlipX/FlipY/SpinX/SpinY
These effects scale the image to create the flip/spin effect.
So they can mess with your sprites scale properties, be careful!


### Todo
- Convert to a Phaser plugin
- Convert to more es5 friendly code for compatibility 

## Made With [Phaser.io](https://phaser.io)
