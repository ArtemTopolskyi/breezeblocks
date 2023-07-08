import { Color } from './entities/color.js';

export const mixColors = (c1, c2) => {
  return new Color(
    c1.r * 0.5 + c2.r * 0.5,
    c1.g * 0.5 + c2.g * 0.5,
    c1.b * 0.5 + c2.b * 0.5,
  );
}
