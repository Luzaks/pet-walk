import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/index.css';

const Progress = ({ color, endColor, progress }) => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_i)">
      <circle cx="20" cy="20" r="15" stroke="#E5E6E8" strokeWidth="10" />
    </g>
    <path className="circle" strokeDasharray={progress} d="M19 4.0845 a 10.9155 10.9155 0 0 1 0 29.831 a 10.9155 10.9155 0 0 1 0 -29.831" stroke={color} strokeWidth="9" strokeLinecap="round" />
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
      <linearGradient id="paint0_angular" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor={color} />
        <stop offset="100%" stopColor={endColor} />
      </linearGradient>
    </defs>
  </svg>
);

Progress.propTypes = {
  color: PropTypes.string.isRequired,
  endColor: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
};

export default Progress;
