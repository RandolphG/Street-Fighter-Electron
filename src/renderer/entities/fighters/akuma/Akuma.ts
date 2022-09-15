import { position, direction } from "../../../types";
import { Sprite } from "../Sprite";
import { fighterState } from "../utils";
import { akumaAnimationDelay, akumaFrames } from "./utils";

/**
 * Akuma Class
 * @constructor
 * @param {string} name - name of the fighter.
 * @param {string} image - image source.
 * @param {{x:number,y:number}} position - fighters current position.
 * @param {direction} direction - fighters facing direction.
 */
export class Akuma extends Sprite {
  constructor(
    name: string,
    image: string,
    position: position,
    direction: direction
  ) {
    super(name, image, position, direction);

    this.initialVelocity = {
      x: {
        [fighterState.WALK_FORWARD]: 200,
        [fighterState.WALK_BACKWARD]: -150,
        [fighterState.JUMP_FORWARD]: 170,
        [fighterState.JUMP_BACKWARD]: -200
      },
      jump: -420
    };

    this.gravity = 1000;
    this.frames = akumaFrames;
    this.animations = akumaAnimationDelay;
  }
}
