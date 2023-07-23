class Duck2D {
  canvasWidth: number;
  canvasHeight: number;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  time: number | undefined;

  updateFunc: () => void;
  drawFunc: () => void;

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

    this.updateFunc = () => { };
    this.drawFunc = () => { };

    requestAnimationFrame((time: number) => {
      this.time = time;
      this.updateFunc();
      this.drawFunc();
    });
  };

  initialize(callback: (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => void) {
    callback(this.ctx, this.canvas);
  };

  update(callback: (time: number, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => void) {
    this.updateFunc = () => {
      callback(this.time || 0, this.ctx, this.canvas)
    };
  };

  draw(callback: (ctx: CanvasRenderingContext2D) => void) {
    this.drawFunc = () => {
      callback(this.ctx)
    };
  };
};

export default Duck2D;