/**
 * convert radians to degrees
 * @param {number} rads
 */
export const radToDeg = (rads: number) => (rads * 180) / Math.PI;

/**
 * calculate distance
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 */
export function distance(x1: number, y1: number, x2: number, y2: number) {
  return (x1 - x2) ** 2 + (y1 - y2) ** 2;
}
