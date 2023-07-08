import { Point } from './entities/point.js';
import { Block } from './entities/block.js';
import { random, randomSign } from './math.helpers.js';

export const initBlocks = ({
  numberOfBlocks,
  blockRadius,
  fieldEndPoint,
  initialVelocity = 3,
}) => {
  const blocks = Array.from({ length: numberOfBlocks }).map(() => {
    const initialCoord = new Point(
      random(blockRadius, fieldEndPoint.x - blockRadius),
      random(blockRadius, fieldEndPoint.y - blockRadius),
    );

    const velocity = new Point(
      randomSign(random(1, initialVelocity)),
      randomSign(random(1, initialVelocity)),
    );

    return new Block(initialCoord, velocity, blockRadius);
  })

  return blocks;
};