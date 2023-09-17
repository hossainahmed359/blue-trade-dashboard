import React from 'react'
import { ColorModeProvider } from './theme'
import { ScreenWidthProvider } from './screenWidth';

const Providers = ({ children }) => {

  return (
    <ScreenWidthProvider>
      <ColorModeProvider>
        {children}
      </ColorModeProvider>
    </ScreenWidthProvider>

  )
}

export default Providers;
