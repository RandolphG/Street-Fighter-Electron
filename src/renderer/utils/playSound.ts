/**
 * play sound
 * @param sound
 */
export function playSound(sound: HTMLMediaElement) {
  sound.pause();
  sound.currentTime = 0;
  sound.play();
}
