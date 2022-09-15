import {
  ctx,
  direction,
  frames,
  isLoaded,
  position,
  time,
  x
} from "../../types";
import { akumaAnimationDelay } from "./akuma/utils";
import { constants, fighterState } from "./utils";

/**
 * Fighter Sprite Class
 * @constructor
 * @param {string} name - name of the fighter.
 * @param {string} image - image source.
 * @param {position} position - fighters current position.
 * @param {direction} direction - fighters facing direction.
 */
export class Sprite {
  /* name of fighter */
  name: string;
  /* sprite image */
  image: HTMLImageElement;
  /* sprite X and Y position */
  position: position;
  /* animation frames */
  frames: frames;
  /* sprite image loaded state */
  isLoaded: isLoaded;
  /* current animation frame */
  animationFrame: number;
  /* local animation time */
  animationTimer: number;
  /* current state of fighter */
  currentState: string;
  /* collection of fighters animation frame states */
  states: {};
  /* collection of fighters animation frame states */
  animations: {};
  /* direction the fighter is facing */
  direction: direction;
  /* sprite velocity */
  velocity: { x: number; y: number };
  /* initial velocity */
  initialVelocity: {
    x: x;
    /* initial jump velocity */
    jump: number;
  };
  /* force applied to position X */
  gravity: number;

  constructor(
    name: string,
    image: string,
    position: position,
    direction: direction
  ) {
    this.name = name;
    this.image = new Image();
    this.image.src = image;
    this.image.onload = () => {
      this.isLoaded = true;
    };
    this.velocity = { x: 0, y: 0 };
    this.initialVelocity = { x: {}, jump: -420 };
    this.currentState = fighterState.IDLE;
    this.gravity = 0;
    this.position = position;
    this.direction = direction;
    this.frames = {};
    this.animationFrame = 0;
    this.animationTimer = 0;
    this.animations = {};

    this.states = {
      [fighterState.IDLE]: {
        init: this.handleIdleInit.bind(this),
        update: this.handleIdleState.bind(this),
        isValidStateToTransitionFrom: [
          fighterState.IDLE,
          fighterState.WALK_FORWARD,
          fighterState.WALK_BACKWARD,
          fighterState.JUMP_FORWARD,
          fighterState.JUMP_BACKWARD
        ]
      },
      [fighterState.WALK_FORWARD]: {
        init: this.handleMoveInit.bind(this),
        update: this.handleMoveState.bind(this),
        isValidStateToTransitionFrom: [
          fighterState.IDLE,
          fighterState.WALK_FORWARD,
          fighterState.WALK_BACKWARD,
          fighterState.JUMP_FORWARD,
          fighterState.JUMP_BACKWARD
        ]
      },
      [fighterState.WALK_BACKWARD]: {
        init: this.handleMoveInit.bind(this),
        update: this.handleMoveState.bind(this),
        isValidStateToTransitionFrom: [
          fighterState.IDLE,
          fighterState.WALK_FORWARD,
          fighterState.WALK_BACKWARD,
          fighterState.JUMP_FORWARD,
          fighterState.JUMP_BACKWARD
        ]
      },
      [fighterState.JUMP_UP]: {
        init: this.handleJumpInit.bind(this),
        update: this.handleJumpState.bind(this),
        isValidStateToTransitionFrom: [fighterState.IDLE]
      },
      [fighterState.JUMP_FORWARD]: {
        init: this.handleJumpInit.bind(this),
        update: this.handleJumpState.bind(this),
        isValidStateToTransitionFrom: [
          fighterState.IDLE,
          fighterState.WALK_FORWARD
        ]
      },
      [fighterState.JUMP_BACKWARD]: {
        init: this.handleJumpInit.bind(this),
        update: this.handleJumpState.bind(this),
        isValidStateToTransitionFrom: [
          fighterState.IDLE,
          fighterState.WALK_BACKWARD,
          fighterState.JUMP_FORWARD,
          fighterState.JUMP_BACKWARD
        ]
      }
    };

    this.changeState(fighterState.IDLE);
  }

  /**
   * Update animation state.
   * @return string
   * */
  changeState(newState: string) {
    if (
      newState === this.currentState ||    // @ts-ignore

      !this.states[newState].isValidStateToTransitionFrom.includes(
        this.currentState
      )
    ) {
      return;
    }

    this.currentState = newState;
    this.animationFrame = 0;
    // @ts-ignore
    this.states[this.currentState].init();
  }

  /**
   * Update sprite's animation
   * @param {{ previous: number; secondsPassed: number }} time frame time
   * @param {CanvasRenderingContext2D} ctx context
   * @return void
   * */
  update(time: { previous: number; secondsPassed: number }, ctx: ctx) {
    this.updatePositionX(time);
    this.updatePositionY(time);
    this.updateAnimation(time);
    // @ts-ignore
    this.states[this.currentState].update(time, ctx);
    this.updateStageConstraints(ctx);
  }

  /**
   * Draw sprite image
   * @param {CanvasRenderingContext2D } ctx
   * @return void
   * */
  draw(ctx: ctx) {
    const [frameKey] = akumaAnimationDelay[this.currentState][
      this.animationFrame
    ];
    /*@ts-ignore*/
    const [[x, y, width, height], [originX, originY]] = this.frames.get(
      frameKey
    );

    if (this.isLoaded) {
      ctx.scale(this.direction, 1);
      ctx.drawImage(
        this.image,
        x,
        y,
        width,
        height,
        Math.floor(this.position.x * this.direction) - originX,
        Math.floor(this.position.y) - originY,
        width,
        height
      );
      ctx.setTransform(1, 0, 0, 1, 0, 0);
    }

    /*const keyValue = getByValue(this.frames, `forward-0${this.animationFrame}`);*/

    this.drawDebug(ctx);
  }
  /**
   * Cycle through fighter animation frames.
   * @param {time} time
   * @return string
   * */
  updateAnimation(time: time) {
    const animation = akumaAnimationDelay[this.currentState];
    const [_, frameDelay] = animation[this.animationFrame];

    /*if current game time has surpassed out local animation timer value */
    if (time.previous > this.animationTimer + frameDelay) {
      this.setAnimationTimer(time);
      this.incrementFrame(frameDelay);
      this.shouldResetFrame(animation);
    }
  }

  /**
   * set animation timer
   * @param {time} time
   */
  setAnimationTimer = (time: time) => (this.animationTimer = time.previous);

  /**
   * cycle through animation frames
   */
  incrementFrame(frameDelay: any) {
    if (frameDelay > 0) {
      this.animationFrame++;
    }
  }

  /**
   * if frame is out of bounds reset
   * @param {any} animation
   */
  shouldResetFrame(animation: any) {
    if (this.animationFrame > animation.length - 1) {
      this.animationFrame = 0;
    }
  }

  /**
   * Draw debug
   * @param {CanvasRenderingContext2D } ctx
   * @return void
   * */
  drawDebug(ctx: ctx) {
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.moveTo(Math.floor(this.position.x) - 5.5, Math.floor(this.position.y));
    ctx.lineTo(Math.floor(this.position.x) + 4.5, Math.floor(this.position.y));
    ctx.moveTo(Math.floor(this.position.x), Math.floor(this.position.y) - 5.5);
    ctx.lineTo(Math.floor(this.position.x), Math.floor(this.position.y) + 4.5);
    ctx.stroke();
  }

  /**
   * Check to see if the fighter is at the right corner of the screen.
   * @param ctx
   * @param WIDTH
   * @return void
   */
  isFighterAtRightSide(ctx: ctx, WIDTH: number) {
    if (this.position.x > ctx.canvas.width - WIDTH) {
      this.position.x = ctx.canvas.width - WIDTH;
    }
  }

  /**
   * Check to see if the fighter is at the left corner of the screen.
   * @param {number} WIDTH
   * @return void
   */
  isFighterAtLeftSide(WIDTH: number) {
    if (this.position.x < WIDTH) {
      this.position.x = WIDTH;
    }
  }

  /**
   * Check to see if the fighter is touching the ground
   * @return void
   */
  private isFighterTouchGround() {
    if (this.position.y > constants.STAGE_FLOOR) {
      this.position.y = constants.STAGE_FLOOR;
      this.changeState(fighterState.IDLE);
    }
  }

  /**
   * Constrain the fighter to the constraints of the stage.
   * @param {CanvasRenderingContext2D} ctx context
   * @return void
   * */
  private updateStageConstraints(ctx: ctx) {
    const WIDTH = 32;
    this.isFighterAtRightSide(ctx, WIDTH);
    this.isFighterAtLeftSide(WIDTH);
  }

  /**
   * Update to idle.
   * @return void
   * */
  private handleIdleInit() {
    this.velocity.x = 0;
    this.velocity.y = 0;
  }

  private handleIdleState() {}

  /**
   * Update position X.
   * @return void
   * */
  private handleMoveInit() {
    this.velocity.x = this.initialVelocity.x[this.currentState] ?? 0;
  }

  private handleMoveState() {}

  /**
   * Update to jump.
   * @return void
   * */
  private handleJumpInit() {
    this.velocity.y = this.initialVelocity["jump"];
    this.handleMoveInit();
  }

  private handleJumpState(time: time) {
    this.velocity.y += this.gravity * time.secondsPassed;

    this.isFighterTouchGround();
  }

  /**
   * Update position X.
   * @return void
   * */
  private updatePositionX(time: time) {
    return (this.position.x +=
      this.velocity.x * this.direction * time.secondsPassed);
  }

  /**
   * Update position Y.
   * @return void
   * */
  private updatePositionY(time: time) {
    return (this.position.y += this.velocity.y * time.secondsPassed);
  }
}
