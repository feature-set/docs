import React from 'react';

export const LogoRound = (props: any) => (
  <svg width="56" height="56" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g filter="url(#filter0_ddd)">
      <circle cx="31" cy="29" r="21" fill="#fff" />
    </g>
    <path fill="#3F51B5" d="M31 14.72l6.59 6.591L31 27.902l-6.59-6.59z" />
    <path fill="#3F51B5" fillOpacity=".25" d="M38.69 22.41L45.28 29l-6.59 6.591-6.591-6.59z" />
    <path fill="#3F51B5" fillOpacity=".75" d="M23.311 22.41l6.59 6.59-6.59 6.591-6.59-6.59z" />
    <path fill="#3F51B5" fillOpacity=".5" d="M31 30.098l6.59 6.591L31 43.28l-6.59-6.59z" />
    <defs>
      <filter
        id="filter0_ddd"
        x="0"
        y="0"
        width="56"
        height="56"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dy="10" />
        <feGaussianBlur stdDeviation="5" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="3.5" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0" />
        <feBlend in2="effect1_dropShadow" result="effect2_dropShadow" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset />
        <feGaussianBlur stdDeviation="4" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0" />
        <feBlend in2="effect2_dropShadow" result="effect3_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect3_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
);
