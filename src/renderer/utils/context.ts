import { ctx } from "../types";

export function getContext() {
  const canvasEl = document.querySelector("canvas");
  const context = canvasEl!.getContext("2d");

  context!.imageSmoothingEnabled = false;

  return context;
}

export function drawFrame(
  context: ctx,
  image: CanvasImageSource,
  dimensions: any,
  position: { x: number; y: number }
) {
  const [sourceX, sourceY, sourceWidth, sourceHeight] = dimensions;

  context.drawImage(
    image,
    sourceX,
    sourceY,
    sourceWidth,
    sourceHeight,
    position.x,
    position.y,
    sourceWidth,
    sourceHeight
  );
}

export function drawFrameScaled(
  context: ctx,
  image: CanvasImageSource,
  frame: any,
  position: { x: number; y: number },
  scale: number
) {
  const [
    [sourceX, sourceY, sourceWidth, sourceHeight],
    [originX, originY]
  ] = frame;

  context.drawImage(
    image,
    sourceX,
    sourceY,
    sourceWidth,
    sourceHeight,
    Math.floor(position.x - originX * scale),
    Math.floor(position.y - originY * scale),
    Math.floor(sourceWidth * scale),
    Math.floor(sourceHeight * scale)
  );
}

const removeBackground = (ctx: ctx) => {
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const data = imageData.data;
  const start = {
    red: data[0],
    green: data[1],
    blue: data[2]
  };

  // iterate over all pixels
  const tolerance = 150;
  for (let i = 0, n = data.length; i < n; i += 4) {
    let diff =
      Math.abs(data[i] - data[0]) +
      Math.abs(data[i + 1] - data[1]) +
      Math.abs(data[i + 2] - data[2]);
    if (diff < tolerance) {
      data[i + 3] = 0;
    }
  }

  ctx.putImageData(imageData, 0, 0);
};

/**
 * Get key value from Map
 * @param {Map<string, number[]>} map
 * @param {string} searchValue
 * @return void
 * */
export const getByValue = (
  map: Map<string, number[][]>,
  searchValue: string
) => {
  for (let [key, value] of map.entries()) {
    if (value.toString() === searchValue.toString()) {
      return key;
    }
  }
};
