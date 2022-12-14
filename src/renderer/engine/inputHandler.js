import { GamepadThumbStick, Control } from '../constants/control.js';
import { FighterDirection } from '../constants/fighter.js';
import { controls } from '../config/controls.js';

/* held keys */
const heldKeys = new Set();
/* pressed keys */
const pressedKeys = new Set();
/* a collection of gamepads */
const gamePads = new Map();
/* a collection of gamepad button pressed */
const gamePadsButtonPressed = new Map();
/* mapped keys */
const mappedKeys = controls
  .map(({ keyboard }) => Object.values(keyboard))
  .flat();

/**
 * handleKeyDown
 * @description handle key down actions
 * @param {Event} event
 * @return void
 */
function handleKeyDown(event) {
  if (!mappedKeys.includes(event.code)) return;

  event.preventDefault();
  heldKeys.add(event.code);
}

/**
 * handleKeyUp
 * @description handle key up actions
 * @param {Event} event
 * @return void
 */
function handleKeyUp(event) {
  if (!mappedKeys.includes(event.code)) return;

  event.preventDefault();
  heldKeys.delete(event.code);
  pressedKeys.delete(event.code);
}

/**
 * handleGamepadConnected
 * @description add connected gamepad
 * @param {Event} event
 * @return void
 */
function handleGamepadConnected(event) {
  const {
    gamepad: { index, axes, buttons },
  } = event;

  gamePads.set(index, { axes, buttons });
}

/**
 * handleGamepadDisconnected
 * @description delete connected gamepad
 * @param {Event} event
 * @return void
 */
function handleGamepadDisconnected(event) {
  const {
    gamepad: { index },
  } = event;

  gamePads.delete(index);
}

// Control event handlers ------------------------------------------------------

/**
 * registerKeyEvents
 * @description register key press
 * @param {Event} event
 * @return void
 */
export function registerKeyEvents() {
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('keyup', handleKeyUp);
}

/**
 * registerGamepadEvents
 * @description register gamepad connections
 * @return void
 */
export function registerGamepadEvents() {
  window.addEventListener('gamepadconnected', handleGamepadConnected);
  window.addEventListener('gamepaddisconnected', handleGamepadDisconnected);
}

/**
 * pollGamepads
 * @description polling for gamepad connection
 * @return void
 */
export function pollGamepads() {
  for (const gamePad of navigator.getGamepads()) {
    if (!gamePad) continue;

    if (gamePads.has(gamePad.index)) {
      const { index, axes, buttons } = gamePad;

      gamePads.set(index, { axes, buttons });
    }
  }
}

// Control helpers -------------------------------------------------------------

export const isKeyDown = (code) => heldKeys.has(code);
export const isKeyUp = (code) => !heldKeys.has(code);

/**
 * isKeyPressed
 * @description check for which key is pressed
 * @return boolean
 */
export const isKeyPressed = (code) => {
  if (heldKeys.has(code) && !pressedKeys.has(code)) {
    pressedKeys.add(code);
    return true;
  }

  return false;
};

export const isButtonDown = (padId, button) =>
  gamePads.get(padId)?.buttons[button].pressed;

export const isButtonUp = (padId, button) =>
  !gamePads.get(padId)?.buttons[button].pressed;

export const isButtonPressed = (padId, button) => {
  // TODO: ADD BUTTON PRESS FOR GAMEPADS
  return false;
};

export const isAxeGreater = (padId, axe, value) =>
  gamePads.get(padId)?.axes[axe] >= value;
export const isAxeLower = (padId, axe, value) =>
  gamePads.get(padId)?.axes[axe] <= value;

export const isControlDown = (id, control) =>
  isKeyDown(controls[id].keyboard[control]) ||
  isButtonDown(id, controls[id].gamePad[control]);

export const isControlPressed = (id, control) =>
  isKeyPressed(controls[id].keyboard[control]) ||
  isButtonPressed(id, controls[id].gamePad[control]);

export const isLeft = (id) =>
  isControlDown(id, Control.LEFT) ||
  isAxeLower(
    id,
    controls[id].gamePad[GamepadThumbStick.HORIZONTAL_AXE_ID],
    -controls[id].gamePad[GamepadThumbStick.DEAD_ZONE]
  );

export const isRight = (id) =>
  isControlDown(id, Control.RIGHT) ||
  isAxeGreater(
    id,
    controls[id].gamePad[GamepadThumbStick.HORIZONTAL_AXE_ID],
    controls[id].gamePad[GamepadThumbStick.DEAD_ZONE]
  );

export const isUp = (id) =>
  isControlDown(id, Control.UP) ||
  isAxeLower(
    id,
    controls[id].gamePad[GamepadThumbStick.VERTICAL_AXE_ID],
    -controls[id].gamePad[GamepadThumbStick.DEAD_ZONE]
  );

export const isDown = (id) =>
  isControlDown(id, Control.DOWN) ||
  isAxeGreater(
    id,
    controls[id].gamePad[GamepadThumbStick.VERTICAL_AXE_ID],
    controls[id].gamePad[GamepadThumbStick.DEAD_ZONE]
  );

export const isLightPunch = (id) => isControlPressed(id, Control.LIGHT_PUNCH);
export const isMediumPunch = (id) => isControlPressed(id, Control.MEDIUM_PUNCH);
export const isHeavyPunch = (id) => isControlPressed(id, Control.HEAVY_PUNCH);

export const isLightKick = (id) => isControlPressed(id, Control.LIGHT_KICK);
export const isMediumKick = (id) => isControlPressed(id, Control.MEDIUM_KICK);
export const isHeavyKick = (id) => isControlPressed(id, Control.HEAVY_KICK);

export const isForward = (id, direction) =>
  direction === FighterDirection.RIGHT ? isRight(id) : isLeft(id);
export const isBackward = (id, direction) =>
  direction === FighterDirection.LEFT ? isRight(id) : isLeft(id);

export const isIdle = (id) =>
  !(isLeft(id) || isRight(id) || isUp(id) || isDown(id));
