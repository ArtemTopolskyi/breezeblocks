import { Point } from './entities/point.js';
import { Block } from './entities/block.js';
import { random, randomSign } from './math.helpers.js';
import { Color } from './entities/color.js';
import { defaultColors } from './constants.js';

export const initBlocks = ({
  numberOfBlocks,
  blockRadius,
  fieldEndPoint,
  initialVelocity = 2,
}) => {
  const blocks = Array.from({ length: numberOfBlocks }).map(() => {
    const initialCoord = new Point(
      random(blockRadius, fieldEndPoint.x - blockRadius),
      random(blockRadius, fieldEndPoint.y - blockRadius),
    );

    const velocity = new Point(
      randomSign(initialVelocity),
      randomSign(initialVelocity),
    );

    const color = new Color(...defaultColors[random(1, defaultColors.length) - 1]);

    return new Block(initialCoord, velocity, blockRadius, color);
  })

  return blocks;
};