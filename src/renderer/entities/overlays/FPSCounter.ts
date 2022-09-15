/**
 * Frames per second counter
 */
import { ctx } from "../../types";

/**
 * FPSCounter
 */
export class FPSCounter {
  fps: number;

  constructor() {
    this.fps = 0;
  }

  /**
   * Update
   * @param time
   * @param ctx
   */
  update(time: { previous: number; secondsPassed: number }, ctx?: ctx) {
    this.fps = Math.trunc(1 / time.secondsPassed);
  }

  /**
   * Draw
   * @param ctx
   */
  draw(ctx: CanvasRenderingContext2D) {
    ctx.font = "font 30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(`FPS:${this.fps}`, ctx.canvas.width / 2, 30);
  }
}
