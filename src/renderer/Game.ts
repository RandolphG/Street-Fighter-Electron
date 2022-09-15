import { Akuma, Stage } from './entities/fighters/_index';
import {
  constants,
  fighterDirection,
  fighterImages,
} from './entities/fighters/utils';
import { FPSCounter } from './entities/overlays/FPSCounter';
import { generalConstants } from './constants/game';
import akumaImage from './akuma.png';
import iconFile from './icon.png';
/**
 * Game Class
 */
export class Game {
  context: CanvasRenderingContext2D;
  entities: any[];
  fighters: Akuma[];
  frameTime: { previous: number; secondsPassed: number };

  constructor() {
    console.log(fighterImages.akuma);
    this.context = this.getContext();

    /* reference to fighters */
    this.fighters = [
      new Akuma(
        'Akuma',
        akumaImage,
        {
          x: 80,
          y: constants.STAGE_FLOOR,
        },
        fighterDirection.LEFT
      ),
    ];

    this.entities = [new Stage(), ...this.fighters, new FPSCounter()];
    this.frameTime = { previous: 0, secondsPassed: 0 };
  }
  /**
   * Start game loop
   * */
  start() {
    Notification.requestPermission().then((permissions) => {
      if (permissions === generalConstants.GRANTED) {
        const notification = new Notification('Example Notification', {
          body: 'Game INITIALIZED',
          data: { WINS: 0, LOSE: 0, STREAK: 0 },
          icon: iconFile,
        });

        notification.addEventListener('close', (event) => {
          console.log('notification closed : ', event);
        });
      }
    });

    document.addEventListener('submit', (event: Event) => {
      this.handleFormSubmit(event);
    });

    window.requestAnimationFrame((time) => {
      this.frame(time);
    });
  }

  /**
   * Cycle through entities and call their update method.
   * @return void
   * */
  update() {
    for (const entity of this.entities) {
      if (!(entity instanceof Stage)) {
        entity.update(this.frameTime, this.context);
      }
    }
  }

  /**
   * Cycle through entities and call their draw method.
   * @return void
   * */
  draw() {
    for (const entity of this.entities) {
      entity.draw(this.context);
    }
  }

  /**
   * Get drawing context
   * @return CanvasRenderingContext2D
   */
  getContext(): CanvasRenderingContext2D {
    const canvas: HTMLCanvasElement = <HTMLCanvasElement>(
      document.querySelector('.gameCanvas')
    );
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
    ctx.imageSmoothingEnabled = false;
    canvas.width = constants.GameViewport.WIDTH;
    canvas.height = constants.GameViewport.HEIGHT;

    return ctx;
  }

  /**
   * Request animation frame
   * @param {number} time
   * @return void
   * */
  /*@ts-ignore*/
  frame(time?: number) {
    window.requestAnimationFrame((time) => {
      this.frameTime = {
        secondsPassed: (time - this.frameTime.previous) / 1000,
        previous: time,
      };

      this.update();
      this.draw();
      this.frame(time);
    });
  }

  /**
   * Add submit functionality.
   * @param {Event} event
   * */
  handleFormSubmit(event: Event) {
    event.preventDefault();

    const selectedCheckboxes = Array.from(
      /*@ts-ignore*/
      event.target!.querySelectorAll('input:checked')
      /*@ts-ignore*/
    ).map((checkbox) => checkbox.value);

    /*@ts-ignore*/
    const option = event.target.querySelector('select');

    this.fighters.forEach((fighter) => {
      if (selectedCheckboxes.includes(fighter.name)) {
        fighter.changeState(option.value);
      }
    });
  }
}
