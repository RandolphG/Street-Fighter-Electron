export const PUSH_FRICTION = 66;
export const FIGHTER_START_DISTANCE = 88;

export const FighterDirection = {
  LEFT: -1,
  RIGHT: 1,
};

export const FighterId = {
  KEN: 'ken',
  RYU: 'ryu',
  CHUN_LI: 'chun-li',
};

export const FighterType = {
  PLAYER: 'player',
  CPU: 'cpu',
};

export const FighterStateType = {
  STAND: 'stand',
  AIR: 'air',
  CROUCH: 'crouch',
  ATTACK: 'attack',
  DEFENSE: 'defense',
  HURT: 'hurt',
  STUN: 'stun',
};

export const FighterAttackType = {
  PUNCH: 'punch',
  KICK: 'kick',
  THROW: 'throw',
  SPECIAL: 'special',
};

export const FighterAttackDamage = {
  LIGHT: 'light',
  MEDIUM: 'medium',
  HEAVY: 'heavy',
};

export const FighterState = {
  IDLE: 'idle',
  WALK_FORWARD: 'walk-forwards',
  WALK_BACKWARD: 'walk-backwards',
  CROUCH: 'crouch',
  CROUCH_DOWN: 'crouch-down',
  CROUCH_UP: 'crouch-up',
  JUMP_START: 'jump-start',
  JUMP_UP: 'jump-up',
  JUMP_FORWARD: 'jump-forwards',
  JUMP_BACKWARD: 'jump-backwards',
  JUMP_LAND: 'jump-land',
  IDLE_TURN: 'idleTurn',
  CROUCH_TURN: 'crouchTurn',
  LIGHT_PUNCH: 'lightPunch',
  MEDIUM_PUNCH: 'mediumPunch',
  HEAVY_PUNCH: 'heavyPunch',
  LIGHT_KICK: 'lightKick',
  MEDIUM_KICK: 'mediumKick',
  HEAVY_KICK: 'heavyKick',
  CROUCH_LIGHT_PUNCH: 'crouchLightPunch',
  CROUCH_MEDIUM_PUNCH: 'crouchMediumPunch',
  CROUCH_HEAVY_PUNCH: 'crouchHeavyPunch',
  CROUCH_LIGHT_KICK: 'crouchLightKick',
  CROUCH_MEDIUM_KICK: 'crouchMediumKick',
  CROUCH_HEAVY_KICK: 'crouchHeavyKick',
  JUMP_UP_LIGHT_PUNCH: 'jumpUpLightPunch',
  JUMP_UP_MEDIUM_PUNCH: 'jumpUpMediumPunch',
  JUMP_UP_HEAVY_PUNCH: 'jumpUpHeavyPunch',
  JUMP_UP_LIGHT_KICK: 'jumpUpLightKick',
  JUMP_UP_MEDIUM_KICK: 'jumpUpMediumKick',
  JUMP_UP_HEAVY_KICK: 'jumpUpHeavyKick',
  JUMP_FORWARD_LIGHT_PUNCH: 'jumpForwardsLightPunch',
  JUMP_FORWARD_MEDIUM_PUNCH: 'jumpForwardsMediumPunch',
  JUMP_FORWARD_HEAVY_PUNCH: 'jumpForwardsHeavyPunch',
  JUMP_FORWARD_LIGHT_KICK: 'jumpForwardsLightKick',
  JUMP_FORWARD_MEDIUM_KICK: 'jumpForwardsMediumKick',
  JUMP_FORWARD_HEAVY_KICK: 'jumpForwardsHeavyKick',
  JUMP_BACKWARD_LIGHT_PUNCH: 'jumpBackwardsLightPunch',
  JUMP_BACKWARD_MEDIUM_PUNCH: 'jumpBackwardsMediumPunch',
  JUMP_BACKWARD_HEAVY_PUNCH: 'jumpBackwardsHeavyPunch',
  JUMP_BACKWARD_LIGHT_KICK: 'jumpBackwardsLightKick',
  JUMP_BACKWARD_MEDIUM_KICK: 'jumpBackwardsMediumKick',
  JUMP_BACKWARD_HEAVY_KICK: 'jumpBackwardsHeavyKick',
  HIT_FACE_LIGHT: 'hitFaceLight',
  HIT_FACE_MEDIUM: 'hitFaceMedium',
  HIT_FACE_HEAVY: 'hitFaceHeavy',
  HIT_STOMACH_LIGHT: 'hitStomachLight',
  HIT_STOMACH_MEDIUM: 'hitStomachMedium',
  HIT_STOMACH_HEAVY: 'hitStomachHeavy',
  HIT_IN_AIR: 'hitInAir',
  HIT_CROUCH_LIGHT: 'hitCrouchLight',
  HIT_CROUCH_MEDIUM: 'hitCrouchMedium',
  HIT_CROUCH_HEAVY: 'hitCrouchHeavy',
  HIT_SWEEP: 'hit-sweep',
  KNOCKDOWN_RECOVER: 'knockdown-recover',
};

export const FrameDelay = {
  FREEZE: 0,
  TRANSITION: -1,
};

export const PushBox = {
  IDLE: [-16, -80, 32, 78],
  JUMP: [-16, -91, 32, 66],
  BEND: [-16, -58, 32, 58],
  CROUCH: [-16, -50, 32, 50],
};

export const HitBox = {
  IDLE: [[-8, -88, 24, 16], [-26, -74, 40, 42], [-26, -31, 40, 32]],
  BACKWARD: [[-19, -88, 24, 16], [-26, -74, 40, 42], [-26, -31, 40, 32]],
  FORWARD: [[-3, -88, 24, 16], [-26, -74, 40, 42], [-26, -31, 40, 32]],
  JUMP: [[-13, -106, 28, 18], [-26, -90, 40, 42], [-22, -66, 38, 18]],
  BEND: [[-2, -68, 24, 18], [-16, -53, 44, 24], [-16, -24, 44, 24]],
  CROUCH: [[6, -61, 24, 18], [-16, -46, 44, 24], [-16, -24, 44, 24]],
  PUNCH: [[11, -94, 24, 18], [-7, -77, 40, 43], [-7, -33, 40, 33]],
  JUMP_ATTACK: [[-13, -106, 28, 18], [-26, -90, 40, 42], [-26, -55, 40, 26]],
  JUMP_KICK_EXTEND: [[-13, -106, 28, 18], [-26, -90, 40, 42], [-30, -72, 64, 28]],
  CROUCH_KICK: [[3, -61, 24, 18], [-16, -46, 44, 24], [-16, -24, 44, 24]],
  CROUCH_KICK_EXTEND: [[3, -61, 24, 18], [-16, -46, 44, 24], [-12, -24, 68, 24]],
  NONE: undefined,
};
