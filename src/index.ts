const ONE_MILLISECOND = 1000;

type Setup = {
  parentElement: HTMLElement,
  canvasWidth: number,
  canvasHeight: number,
};

type InitializeCallback = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => void
type UpdateCallback = (deltaTime: number) => void
type DrawCallback = (ctx: CanvasRenderingContext2D) => void

class Duck2D {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  time: number;

  updateFunc: (deltaTime: number) => void;
  drawFunc: () => void;

  constructor(setup: Setup) {
    const canvas = document.createElement('canvas');
    canvas.width = setup.canvasWidth;
    canvas.height = setup.canvasHeight;

    // Setup for canvas and context.
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d') || new CanvasRenderingContext2D();
    setup.parentElement.appendChild(this.canvas);

    // Setup for fps and delta time.
    this.time = 0;

    // Setup for game loop.
    this.updateFunc = () => { };
    this.drawFunc = () => { };

    let lastUpdatedTime = 0;
    const gameLoop = () => {
      requestAnimationFrame((time: number) => {
        this.time = time / ONE_MILLISECOND;
        let currentTime = performance.now();
        let deltaTime = (currentTime - lastUpdatedTime) / ONE_MILLISECOND;

        this.updateFunc(deltaTime);
        this.drawFunc();
        gameLoop();
        lastUpdatedTime = currentTime;
      });
    };
    gameLoop();
  };

  initialize(callback: InitializeCallback) {
    callback(this.ctx, this.canvas);
  };

  update(callback: UpdateCallback) {
    this.updateFunc = (deltaTime) => {
      callback(deltaTime)
    };
  };

  draw(callback: DrawCallback) {
    this.drawFunc = () => {
      callback(this.ctx)
    };
  };
};

export default Duck2D;