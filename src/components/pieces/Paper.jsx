/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Sketch from 'react-p5';

export default function Paper() {
  const WIDTH = 500;
  const HEIGHT = 500;
  const BASE_H = 15;
  const BASE_S = 10;
  const BASE_B = 100;
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
  };

  const draw = () => {
  };

  return (
    <Sketch setup={setup} draw={draw} />
  );
}
