/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Sketch from 'react-p5';

export default function Test() {
  const WIDTH = 500;
  const HEIGHT = 500;
  const BASE_H = 0;
  const BASE_S = 0;
  const BASE_B = 15;
  const NUM_DOTS = 100000;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(WIDTH, HEIGHT).parent(canvasParentRef);
    p5.colorMode(p5.HSB, 100);
    p5.frameRate(5);
    p5.background(BASE_H, BASE_S, BASE_B);

    for (let i = 0; i < NUM_DOTS; i += 1) {
      const x1 = Math.random() * WIDTH;
      const y1 = Math.random() * HEIGHT;
      const theta = Math.random() * 2 * Math.PI;
      const segmentLength = Math.random() * 5 + 2;
      const x2 = Math.cos(theta) * segmentLength + x1;
      const y2 = Math.sin(theta) * segmentLength + y1;
      p5.stroke(
        BASE_H,
        BASE_S - Math.random() * 5,
        BASE_B - Math.random() * 8,
        Math.random() * 30 + 50,
      );
      p5.line(x1, y1, x2, y2);
    }

    // create a loop from 50 to 450
    for (let i = 50; i < 455; i += 5) {
      const hue = Math.floor(i / 4 - 50);
      p5.stroke(hue, 40, 80);
      p5.line(50, i, i, 450);
      p5.line(i, 50, 450, i);
      p5.line(50, 500 - i, i, 50);
      p5.line(i, 450, 500 - i, 500 - i);
      p5.line(450, i, 500 - i, 500 - i);
    }
  };

  const draw = () => {
  };

  return (
    <Sketch setup={setup} draw={draw} />
  );
}
