import React from 'react';
import { IconProps } from '../types';

// Common SVG icons used in the extension
const icons = {
  copy: (
    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
  ),
  refresh: (
    <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
  ),
  check: (
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
  ),
  error: (
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  ),
  warning: (
    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
  ),
  info: (
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
  ),
  loading: (
    <path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/>
  ),
  chevronDown: (
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
  ),
  chevronUp: (
    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
  ),
  search: (
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  ),
  branch: (
    <path fillRule="evenodd" d="M10.5 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 1v3c0 2 1.34 3.657 3.962 4.138C7.972 11.044 8 11 8 11h1V7.138C6.34 6.657 5 3 5 3H4zm6.5 0v3c0 2-1.34 3.657-3.962 4.138C6.528 11.044 6.5 11 6.5 11H5.5V7.138C7.16 6.657 8.5 3 8.5 3h2z"/>
  )
};

export function Icon({ name, size = 24, className = '', color }: IconProps) {
  const iconPath = icons[name as keyof typeof icons];
  
  if (!iconPath) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <svg
      className={`icon icon-${name} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color || 'currentColor'}
      xmlns="http://www.w3.org/2000/svg"
    >
      {iconPath}
    </svg>
  );
}