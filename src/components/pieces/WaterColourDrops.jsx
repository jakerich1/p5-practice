import React from 'react';
import Sketch from 'react-p5';

export default function WaterColourDropss() {
  const WIDTH = 500;
  const HEIGHT = 500;
  const BASE_H = 15;
  const BASE_S = 10;
  const BASE_B = 100;
  const NUM_DOTS = 100000;

  const drawSpot = (p5, x, y, radius, hue) => {
    p5.fill(
      hue,
      100,
      100,
      10,
    );
    p5.ellipse(x, y, radius, radius);
    p5.noFill();
    for (let i = 6; i > 0; i -= 1) {
      p5.stroke(
        hue,
        100,
        100,
        3,
      );
      p5.strokeWeight(i);
      p5.ellipse(x, y, radius - i, radius - i);
    }
  };

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

    for (let i = 0; i < 10; i += 1) {
      const hue = Math.random() * 100;
      const radius = Math.random() * 250 + 50;
      const x = Math.random() * WIDTH;
      const y = Math.random() * HEIGHT;
      drawSpot(p5, x, y, radius, hue);
    }
  };

  const draw = () => {
  };

  return (
    <Sketch setup={setup} draw={draw} />
  );
}
