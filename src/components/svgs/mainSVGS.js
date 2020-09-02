import React from 'react';
import PropTypes from 'prop-types';

const Progress = ({ start, end }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_i)">
      <circle cx="20" cy="20" r="15" stroke="#E5E6E8" strokeWidth="10" />
    </g>
    <path d="M28.6251 7.72778C26.0992 5.95261 23.0873 5 20.0001 5" stroke="url(#paint0_angular)" strokeWidth="10" strokeLinecap="round" />
    <defs>
      <filter id="filter0_i" x="0" y="0" width="44" height="44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dx="4" dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.113725 0 0 0 0 0.423529 0 0 0 0 0.890196 0 0 0 0.16 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
      </filter>
      <radialGradient id="paint0_angular" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20 20) rotate(-176.186) scale(15.0333)">
        <stop stopColor={start} />
        <stop offset="1" stopColor={end} />
      </radialGradient>
    </defs>
  </svg>
);

Progress.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};

export default Progress;
