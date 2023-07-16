class Duck2D {
  canvasWidth: number;
  canvasHeight: number;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(
    wrapper: HTMLElement,
    canvasWidth: number,
    canvasHeight: number
  ) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;

    const canvas = document.createElement('canvas');

    this.canvas = canvas;
    this.canvas.width = canvasWidth;
    this.canvas.height = canvasHeight;

    this.ctx = canvas.getContext('2d') || new CanvasRenderingContext2D();

    wrapper.appendChild(this.canvas);
  };

  initialize(callback: (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => void) {
    callback(this.ctx, this.canvas);
  };

  update(callback: (time: number, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => void) {
    const gameLoop = () => {
      requestAnimationFrame((time: number) => {
        callback(time, this.ctx, this.canvas);
        gameLoop();
      });
    };
    gameLoop();
  };
};

export default Duck2D;