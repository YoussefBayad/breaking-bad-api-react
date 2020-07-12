import React from 'react';
import spinnerGif from '../img/spinner.gif';
const spinner = () => {
  return (
    <img
      src={spinnerGif}
      alt="isLoading..."
      style={{ width: '200px', margin: 'auto', display: 'block' }}
    />
  );
};

export default spinner;
