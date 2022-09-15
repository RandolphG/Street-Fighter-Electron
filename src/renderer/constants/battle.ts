export const TIME_DELAY = 600;
export const TIME_FLASH_DELAY = 50;
export const TIME_FRAME_KEYS = ["time", "time-flash"];

export const FIGHTER_HIT_POINTS = 144;
export const TRANSITION_SPEED = 4;
export const HIT_POINTS_CRITICAL = 45;

export const HEALTH_FRONT_COLOR = "#F3F300";
export const HEALTH_BACK_COLOR = "#F30000";

export const RoundStartOverlayState = {
  ROUND_IN: "round-in",
  ROUND: "round",
  ROUND_OUT: "round-out",
  FIGHT_IN: "fight-in",
  FIGHT: "fight",
  COMPLETED: "completed"
};

export const RoundEndOverlayState = {
  // TBD
};

export const BattleSceneState = {
  ROUND_START: "round-start",
  IN_BATTLE: "in-battle",
  ROUND_END: "round-end",
  COMPLETED: "completed"
};

export const BattleEndResult = {
  FIGHTER_DEFEATED: "fighter-defeated",
  TIMED_OUT: "time-over",
  DRAW: "draw",
  INTERRUPTED: "interrupted"
};
