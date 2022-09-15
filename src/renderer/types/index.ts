import { fighterDirection } from "../entities/fighters/utils";

export type position = { x: number; y: number };

export type frames = Map<string, number[][]> | {};

export type isLoaded = boolean | undefined;

export type ctx = CanvasRenderingContext2D;

export type direction = fighterDirection;

export type time = { previous: number; secondsPassed: number };

export type x = {
  [key: string]: number;
};
