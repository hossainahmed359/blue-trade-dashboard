import React from 'react'
import { ColorModeProvider } from './theme'

const Providers = ({ children }) => {
  return (
    <ColorModeProvider>
      {children}
    </ColorModeProvider>
  )
}

export default Providers;
