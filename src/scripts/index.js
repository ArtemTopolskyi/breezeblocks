import { Point } from './entities/point.js';
import {
  FIELD_HEIGHT,
  FIELD_WIDTH,
  BLOCK_RADIUS,
  NUMBER_OF_BLOCKS,
} from './constants.js';
import { initBlocks } from './initBlocks.js';
import { drawBlocks } from './drawBlocks.js';
import { moveBlocks } from './moveBlocks.js';
import { handleCollisions } from './handleCollisions.js';

const initCtx = () => {
  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = FIELD_WIDTH;
  canvas.height = FIELD_HEIGHT;

  return ctx;
}

const fieldEndPoint = new Point(FIELD_WIDTH, FIELD_HEIGHT);

const ctx = initCtx();

const blocks = initBlocks({
  numberOfBlocks: NUMBER_OF_BLOCKS,
  blockRadius: BLOCK_RADIUS,
  fieldEndPoint,
});

const animate = () => {
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.fillRect(0, 0, FIELD_WIDTH, FIELD_HEIGHT);

  drawBlocks(ctx, blocks);

  moveBlocks(blocks);

  handleCollisions(blocks, fieldEndPoint);

  window.requestAnimationFrame(animate);
}

animate();
