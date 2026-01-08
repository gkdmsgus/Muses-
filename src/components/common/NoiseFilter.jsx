import React from 'react';

const NoiseFilter = () => (
  <svg style={{ display: 'none' }}>
    <filter id="noiseFilter">
      <feTurbulence type="fractalNoise" baseFrequency="0.6" stitchTiles="stitch" />
      <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.1 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="noise"/>
    </filter>
  </svg>
);

export default NoiseFilter;
