import {
  SCROLL_BOUNDARY,
  STAGE_WIDTH,
  STAGE_HEIGHT,
  STAGE_PADDING
} from "../constants/stage.js";
import { ctx, position, time } from "../types";

/**
 * Camera Class
 * @description Controls camera viewport
 * @constructor
 * @param {number} X - x position value
 * @param {number} y - y position value
 * @param {any[]} fighters - y position value
 */
export class Camera {
  private position: position;
  fighters: any[];
  startPosition: { x: number; y: number };

  constructor(x: number, y: number, fighters: any[]) {
    this.position = { x, y };
    this.startPosition = { x, y };
    this.fighters = fighters;
  }

  /**
   * Update
   * @param time
   * @param context
   */
  update(time: time, context: ctx) {
    this.position.y =
      -6 +
      Math.floor(
        Math.min(this.fighters[0].position.y, this.fighters[1].position.y) / 10
      );

    const lowX = Math.min(
      this.fighters[0].position.x,
      this.fighters[1].position.x
    );

    const highX = Math.max(
      this.fighters[0].position.x,
      this.fighters[1].position.x
    );

    if (highX - lowX > context.canvas.width - SCROLL_BOUNDARY * 2) {
      const midPoint = (highX - lowX) / 2;
      this.position.x = lowX + midPoint - context.canvas.width / 2;
    } else {
      for (const fighter of this.fighters) {
        if (
          (fighter.position.x < this.position.x + SCROLL_BOUNDARY &&
            fighter.velocity.x * fighter.direction < 0) ||
          (fighter.position.x >
            this.position.x + context.canvas.width - SCROLL_BOUNDARY &&
            fighter.velocity.x * fighter.direction > 0)
        ) {
          this.position.x +=
            fighter.velocity.x * fighter.direction * time.secondsPassed;
        }
      }
    }

    // MAX LIMITS
    if (this.position.x < STAGE_PADDING) this.position.x = STAGE_PADDING;
    if (this.position.x > STAGE_WIDTH + STAGE_PADDING - context.canvas.width) {
      this.position.x = STAGE_WIDTH + STAGE_PADDING - context.canvas.width;
    }
    if (this.position.y < 0) this.position.y = 0;
    if (this.position.y > STAGE_HEIGHT - context.canvas.height) {
      this.position.y = STAGE_HEIGHT - context.canvas.height;
    }
  }

  /**
   * Reset
   */
  reset() {
    this.position = { ...this.startPosition };
  }
}
