import { intersectionOfTwoRangesLength } from './math.helpers.js';
import { Range } from './entities/range.js';

export const handleCollisions = (blocks, fieldEndPoint) => {
  for (let i = 0; i < blocks.length; i++) {
    handleCollisionWithFieldBorders(blocks[i], fieldEndPoint);
  }

  const iterations = blocks.length > 1
    ? blocks.length - 1
    : 1;

  for (let i = 0; i < iterations; i++) {
    for (let j = i + 1; j < blocks.length; j++) {
      handleTwoBlocksCollision(blocks[i], blocks[j]);
    }
  }

  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i].hadVerticalCollision) {
      blocks[i].hadVerticalCollision = false;
    } else {
      blocks[i].unlockVerticalInversion();
    }

    if (blocks[i].hadHorizontalCollision) {
      blocks[i].hadHorizontalCollision = false;
    } else {
      blocks[i].unlockHorizontalInversion();
    }
  }
}

function handleCollisionWithFieldBorders(block, fieldEndPoint) {
  const fieldWidth = fieldEndPoint.x;
  const fieldHeight = fieldEndPoint.y;

  if (block.getLeft() <= 0) {
    block.increaseXVelocity();
  }

  if (block.getRight() >= fieldWidth) {
    block.decreaseXVelocity();
  }

  if (block.getTop() <= 0) {
    block.increaseYVelocity();
  }

  if ( block.getBottom() >= fieldHeight) {
    block.decreaseYVelocity();
  }
}

function handleTwoBlocksCollision(firstBlock, secondBlock) {
  const horizontalIntersectionLength = intersectionOfTwoRangesLength(
    new Range(firstBlock.getLeft(), firstBlock.getRight()),
    new Range(secondBlock.getLeft(), secondBlock.getRight()),
  );

  const verticalIntersectionLength = intersectionOfTwoRangesLength(
    new Range(firstBlock.getTop(), firstBlock.getBottom()),
    new Range(secondBlock.getTop(), secondBlock.getBottom()),
  );

  if (horizontalIntersectionLength < 0 || verticalIntersectionLength < 0) {
    return;
  }

  if (verticalIntersectionLength > horizontalIntersectionLength) {
    firstBlock.inverseXVelocity();
    secondBlock.inverseXVelocity();

    firstBlock.lockHorizontalInversion();
    secondBlock.lockHorizontalInversion();
  } else if (horizontalIntersectionLength > verticalIntersectionLength) {
    firstBlock.inverseYVelocity();
    secondBlock.inverseYVelocity();

    firstBlock.lockVerticalInversion();
    secondBlock.lockVerticalInversion();
  } else {
    firstBlock.inverseXVelocity();
    firstBlock.inverseYVelocity();
    secondBlock.inverseXVelocity();
    secondBlock.inverseYVelocity();

    firstBlock.lockHorizontalInversion();
    secondBlock.lockHorizontalInversion();
    firstBlock.lockVerticalInversion();
    secondBlock.lockVerticalInversion();
  }
}