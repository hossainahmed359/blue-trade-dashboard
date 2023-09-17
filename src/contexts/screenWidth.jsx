import React, { createContext, useState, useEffect, useContext } from 'react';

const breakpoints = {
  XS: 0,
  SM: 600,
  MD: 960,
  LG: 1280,
  XL: 1920,
};



const ScreenWidthContext = createContext();

export const ScreenWidthProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ScreenWidthContext.Provider value={windowWidth}>
      {children}
    </ScreenWidthContext.Provider>
  );
};


export const useSceenWidth = () => {
  const windowWidth = useContext(ScreenWidthContext);
  return { breakpoints, windowWidth }
}
