import { GamepadThumbStick, Control } from "../constants/control.js";

export const controls = [
  {
    gamePad: {
      [GamepadThumbStick.DEAD_ZONE]: 0.5,
      [GamepadThumbStick.HORIZONTAL_AXE_ID]: 0,
      [GamepadThumbStick.VERTICAL_AXE_ID]: 1,

      [Control.START]: 9,
      [Control.LEFT]: 14,
      [Control.RIGHT]: 15,
      [Control.UP]: 12,
      [Control.DOWN]: 13,
      [Control.LIGHT_PUNCH]: 0,
      [Control.MEDIUM_PUNCH]: 1,
      [Control.HEAVY_PUNCH]: 7,
      [Control.LIGHT_KICK]: 2,
      [Control.MEDIUM_KICK]: 3,
      [Control.HEAVY_KICK]: 6
    },
    keyboard: {
      [Control.START]: "Digit1",
      [Control.LEFT]: "ArrowLeft",
      [Control.RIGHT]: "ArrowRight",
      [Control.UP]: "ArrowUp",
      [Control.DOWN]: "ArrowDown",
      [Control.LIGHT_PUNCH]: "ControlLeft",
      [Control.MEDIUM_PUNCH]: "AltLeft",
      [Control.HEAVY_PUNCH]: "Space",
      [Control.LIGHT_KICK]: "ShiftLeft",
      [Control.MEDIUM_KICK]: "KeyZ",
      [Control.HEAVY_KICK]: "KeyX"
    }
  },
  {
    gamePad: {
      [GamepadThumbStick.DEAD_ZONE]: 0.5,
      [GamepadThumbStick.HORIZONTAL_AXE_ID]: 0,
      [GamepadThumbStick.VERTICAL_AXE_ID]: 1,

      [Control.START]: 9,
      [Control.LEFT]: 14,
      [Control.RIGHT]: 15,
      [Control.UP]: 12,
      [Control.DOWN]: 13,
      [Control.LIGHT_PUNCH]: 0,
      [Control.MEDIUM_PUNCH]: 1,
      [Control.HEAVY_PUNCH]: 7,
      [Control.LIGHT_KICK]: 2,
      [Control.MEDIUM_KICK]: 3,
      [Control.HEAVY_KICK]: 6
    },
    keyboard: {
      [Control.START]: "Digit2",
      [Control.LEFT]: "KeyF",
      [Control.RIGHT]: "KeyH",
      [Control.UP]: "KeyT",
      [Control.DOWN]: "KeyG",
      [Control.LIGHT_PUNCH]: "KeyQ",
      [Control.MEDIUM_PUNCH]: "KeyW",
      [Control.HEAVY_PUNCH]: "KeyE",
      [Control.LIGHT_KICK]: "KeyA",
      [Control.MEDIUM_KICK]: "KeyS",
      [Control.HEAVY_KICK]: "KeyD"
    }
  }
];
