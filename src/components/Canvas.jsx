import React from 'react';
import Sketch from 'react-p5';

export default function Canvas() {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(622, 500).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(0);
    p5.background(220);
    p5.ellipse(50, 50, 80, 80);
  };

  return (
    <Sketch setup={setup} draw={draw} />
  );
}
