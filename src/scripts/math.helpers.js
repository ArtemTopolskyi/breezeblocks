export const sign = (value) => {
  if (value > 0) {
    return 1;
  }

  if (value < 0) {
    return -1;
  }

  return 0;
}

export const random = (left, right) => {
  return Math.floor(Math.random() * (right - left + 1) + left);
}

export const randomSign = (number) => {
  return Math.random > 0.5
    ? number
    : -number;
}

export const intersectionOfTwoRangesLength = (a, b) => {
  const min = a.start < b.start
    ? a
    : b;

  const max = a.end > b.end
    ? a
    : b;

  if (min.end < max.start) {
    return -1;
  }

  return Math.min(min.end, max.end) - max.start;
}
