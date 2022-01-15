/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Paper from '../components/pieces/Paper';
import Test from '../components/pieces/Test';
import WaterColourDrops from '../components/pieces/WaterColourDrops';

const articles = [
  {
    uid: '1',
    title: 'Paper texture',
    type: 'replication',
    image: './example/paper-1.png',
    subImages: [
      './example/paper-1.png',
      './example/paper-1.png',
      './example/paper-1.png',
    ],
    component: <Paper />,
  },
  {
    uid: '2',
    title: 'Water colour drops',
    type: 'replication',
    image: './example/water-colour-1.png',
    subImages: [
      './example/water-colour-1.png',
      './example/water-colour-1.png',
      './example/water-colour-1.png',
    ],
    component: <WaterColourDrops />,
  },
  {
    uid: '3',
    title: 'Test sketch',
    type: 'replication',
    image: './example/water-colour-1.png',
    subImages: [
      './example/water-colour-1.png',
      './example/water-colour-1.png',
      './example/water-colour-1.png',
    ],
    component: <Test />,
  },
];

export default articles;
