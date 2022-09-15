/**
 * Timer Class
 * @constructor
 * @param {number} delay - timer delay
 * @param {number} start - starting time value
 */
export class Timer {
  constructor(delay = 0, start = false) {
    this.timer = performance.now();
    this.delay = delay;
    this.running = false;

    if (start) this.reset(delay);
  }

  /**
   * Reset
   * @param delay
   */
  reset(delay) {
    this.timer = performance.now();
    this.delay = delay ?? this.delay;
    this.running = true;
  }

  /**
   * Pause
   */
  pause() {
    this.running = false;
  }

  /**
   * Start
   */
  start() {
    this.running = true;
  }

  /**
   * Return the amount of time that has elapsed
   * @return {false|boolean}
   */
  hasElapsed = () =>
    performance.now() > this.timer + this.delay && this.running;

  time = () => (this.running ? performance.now() - this.timer : 0);
}
