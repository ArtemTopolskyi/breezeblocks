import { sign } from './math.helpers.js';
import { TWO_PI, SUPERELLIPSE_N } from './constants.js';
import { Point } from './entities/point.js';

export const superellipse = (ctx, middlePoint, radius, color) => {
  ctx.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;

  ctx.beginPath();

  for (let angle = 0; angle < TWO_PI; angle += 0.1) {
    const { x, y } = getCoords(angle, radius, SUPERELLIPSE_N);

    ctx.lineTo(
      x + middlePoint.x,
      y + middlePoint.y,
    );
  }

  ctx.fill();
};

/*
  x(t) = (|cos t| ^ 2/n) * a * sgn(cos t);
  y(t) = (|sin t| ^ 2/n) * b * sgn(sin t);
*/
function getCoords(angle, size, n) {
  const na = 2 / n;

  const x = (
    Math.pow(Math.abs(Math.cos(angle)), na) * size * sign(Math.cos(angle))
  );
  const y = (
    Math.pow(Math.abs(Math.sin(angle)), na) * size * sign(Math.sin(angle))
  );

  return new Point(x, y);
}

