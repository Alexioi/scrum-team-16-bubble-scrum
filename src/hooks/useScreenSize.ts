'use client';

import { useEffect, useState } from 'react';

const useScreenSize = () => {
  const [windowSize, setWindowSize] = useState([0, 0]);

  useEffect(() => {
    const windowSizeHandler = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    if (windowSize[0] === 0) {
      windowSizeHandler();
    }

    window.addEventListener('resize', windowSizeHandler);

    return () => {
      window.removeEventListener('resize', windowSizeHandler);
    };
  }, [windowSize]);

  return windowSize;
};

export { useScreenSize };
