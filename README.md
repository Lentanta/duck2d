# Duck2D - The HTML5 Canvas game framework.
Duck2D is a canvas-based minimal game framework that used CanvasRenderingContext2D API to render your game. 

Duck2D is open-source, licensed under the MIT License.

### About Duck2D
`Duck2D` will aim to be a minimal web game framework that is simple enough to not become a `game engine` nor a `graphic rendering framework`.

(This framework is still in the development stage so there will be more changes and updates in the future)

### Key features
- Minimize dependencies, using fewer dependencies as possible.
- Easy to custom and use what you need to develop your game.

### Future update
- Image loading support.
- Drawing image, shape.
- Typography.
- Timer.
- Mouse and keyboard support.
- Sprite and Sprite sheet and animation.
- Utility functions for game development (Collision, random...)
- Particle system.
- Sound.
- WebGL rendering.

#### NPM Install
```
npm install duck2d
```
---
### Basic setup and using
```typescript
import Duck2D from "duck2d";

const canvasWidth = 300;
const canvasHeight = 300;
const parentElement = document.body;

const duck = new Duck2D(parentElement, canvasWidth, canvasHeight);

duck.initialize((ctx) => {
  // Your initialize code here

  ctx.fillStyle = "black"
  ctx.fillRect(0,0, canvasWidth, canvasHeight);
})

duck.update((time, ctx) => {
  // Your update code here

  ctx.font = "50px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("Hello Duck2D!", 5, 50);
})
```
