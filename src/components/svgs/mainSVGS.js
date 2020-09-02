import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/index.css';

const Progress = ({ start, end }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_i)">
      <circle cx="20" cy="20" r="15" stroke="#E5E6E8" strokeWidth="10" />
    </g>
    <path className="circle" x="20" y="20" r="15" strokeDasharray="20, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" stroke="url(#paint0_angular)" strokeWidth="10" strokeLinecap="round" />
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
        <stop stopColor="#87ABE1" />
        <stop offset="1" stopColor="#CBE0FF" />
      </radialGradient>
    </defs>
  </svg>
);

Progress.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};

export default Progress;
