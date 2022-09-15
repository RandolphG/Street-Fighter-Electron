import { ctx } from '../types';
import stage from './stage.png'

export class Stage {
  name: string;
  image: HTMLImageElement;

  constructor() {
    this.name = "Balrog's Stage";
    this.image = new Image();
    this.image.src = stage;
  }
  update() {}

  draw(ctx: ctx) {
    ctx?.drawImage(this.image, 0, 0);
  }
}
