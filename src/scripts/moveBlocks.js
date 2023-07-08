export const moveBlocks = (blocks) => {
  for (let block of blocks) {
    block.move();
  }
}