import { ctx, direction, position } from "../types";

export function drawDebug(
  fighter: { position: position; direction: direction },
  boxes: any,
  context: ctx,
  camera: any
) {
  const { push, hit, attack } = boxes;
  const { position, direction } = fighter;

  context.lineWidth = 1;

  // Push Box
  context.beginPath();
  context.strokeStyle = "#55FF55AA";
  context.fillStyle = "#55FF5544";
  context.fillRect(
    Math.floor(position.x + push.x * direction - camera.position.x) + 0.5,
    Math.floor(position.y + push.y - camera.position.y) + 0.5,
    push.width * direction,
    push.height
  );
  context.rect(
    Math.floor(position.x + push.x * direction - camera.position.x) + 0.5,
    Math.floor(position.y + push.y - camera.position.y) + 0.5,
    push.width * direction,
    push.height
  );
  context.stroke();

  // Hit Boxes
  for (const [hitBoxX, hitBoxY, hitBoxWidth, hitBoxHeight] of hit) {
    context.beginPath();
    context.strokeStyle = "#7777FFAA";
    context.fillStyle = "#7777FF44";
    context.fillRect(
      Math.floor(position.x + hitBoxX * direction - camera.position.x) + 0.5,
      Math.floor(position.y + hitBoxY - camera.position.y) + 0.5,
      hitBoxWidth * direction,
      hitBoxHeight
    );
    context.rect(
      Math.floor(position.x + hitBoxX * direction - camera.position.x) + 0.5,
      Math.floor(position.y + hitBoxY - camera.position.y) + 0.5,
      hitBoxWidth * direction,
      hitBoxHeight
    );
    context.stroke();
  }

  // Attack Box
  context.beginPath();
  context.strokeStyle = "#FF0000AA";
  context.fillStyle = "#FF000044";
  context.fillRect(
    Math.floor(position.x + attack.x * direction - camera.position.x) + 0.5,
    Math.floor(position.y + attack.y - camera.position.y) + 0.5,
    attack.width * direction,
    attack.height
  );
  context.rect(
    Math.floor(position.x + attack.x * direction - camera.position.x) + 0.5,
    Math.floor(position.y + attack.y - camera.position.y) + 0.5,
    attack.width * direction,
    attack.height
  );
  context.stroke();

  // Origin
  context.beginPath();
  context.strokeStyle = "white";
  context.moveTo(
    Math.floor(position.x - camera.position.x) - 4,
    Math.floor(position.y - camera.position.y) - 0.5
  );
  context.lineTo(
    Math.floor(position.x - camera.position.x) + 5,
    Math.floor(position.y - camera.position.y) - 0.5
  );
  context.moveTo(
    Math.floor(position.x - camera.position.x) + 0.5,
    Math.floor(position.y - camera.position.y) - 5
  );
  context.lineTo(
    Math.floor(position.x - camera.position.x) + 0.5,
    Math.floor(position.y - camera.position.y) + 4
  );
  context.stroke();
}
