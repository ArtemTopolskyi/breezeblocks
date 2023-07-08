import { superellipse } from './superellipse.js';
import { Point } from './entities/point.js';

export const drawBlocks = (ctx, blocks) => {
  for (let block of blocks) {
    superellipse(ctx, new Point(block.x, block.y), block.radius);
  }
}