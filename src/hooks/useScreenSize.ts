'use client';

import { useEffect, useState } from 'react';

const useScreenSize = () => {
  const [windowSize, setWindowSize] = useState([1080, 720]);

  useEffect(() => {
    const windowSizeHandler = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', windowSizeHandler);

    return () => {
      window.removeEventListener('resize', windowSizeHandler);
    };
  }, []);

  return windowSize;
};

export { useScreenSize };
