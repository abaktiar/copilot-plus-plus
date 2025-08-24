import React from 'react';
import { LoadingSpinnerProps } from '../types';

export function LoadingSpinner({ size = 'medium', message }: LoadingSpinnerProps) {
  const sizeClass = {
    small: 'spinner-small',
    medium: 'spinner-medium', 
    large: 'spinner-large'
  }[size];

  return (
    <div className="loading-container">
      <div className={`spinner ${sizeClass}`}></div>
      {message && <p className="loading-message">{message}</p>}
    </div>
  );
}