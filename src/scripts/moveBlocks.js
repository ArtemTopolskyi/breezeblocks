export const moveBlocks = (blocks) => {
  for (let block of blocks) {
    if (block.xv === 0) {
      console.log('zero xv');
    }

    if (block.yv === 0) {
      console.log('zero yv');
    }
    block.move();
  }
}