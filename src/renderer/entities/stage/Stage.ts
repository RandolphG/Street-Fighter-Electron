import { ctx } from '../../types';
import { STAGES } from '../../images/_index';

export class Stage {
  name: string;
  image: HTMLImageElement;

  constructor() {
    this.name = "Balrog's Stage";
    this.image = new Image();
    this.image.src = STAGES.ken;
  }
  update() {}

  draw(ctx: ctx) {
    ctx?.drawImage(this.image, 0, 0);
  }
}
