/* game constant values */
const constants = {
  /* Game viewport values */
  GameViewport: {
    WIDTH: 384,
    HEIGHT: 224,
  },
  MILLISECONDS: 1000,
  STAGE_FLOOR: 200,
};

/* directional enumerated values */
enum fighterDirection {
  LEFT = -1,
  RIGHT = 1,
}

/* fighter enumerated states */
enum fighterState {
  IDLE = 'idle',
  WALK_FORWARD = 'walkForwards',
  WALK_BACKWARD = 'walkBackwards',
  JUMP_UP = 'jump',
  JUMP_FORWARD = 'jumpForwards',
  JUMP_BACKWARD = 'jumpBackwards',
  CROUCH = 'crouch',
  CROUCH_UP = 'crouchUp',
  CROUCH_DOWN = 'crouchDown',
}

export { fighterDirection, fighterState, constants };
