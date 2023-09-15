import { ThemeProvider, createTheme, useTheme } from "@mui/material";
import { createContext, useContext, useMemo, useState } from "react";
import { DARK_THEME, LIGHT_THEME, colorPaletteDark, colorPaletteLight, colorPaletteWhiteAndBlack } from "../configs/meta/colorPalette";


// COLOR DESIGN TOKENS
const tokens = (mode) => ({
  ...colorPaletteWhiteAndBlack,
  ...(mode === DARK_THEME
    ? { ...colorPaletteDark }
    : { ...colorPaletteLight }),
});


// MUI THEME SETTINGS
const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === DARK_THEME
        ? {
          // palette values for dark mode
          primary: {
            main: colors.primary[500],
          },
          secondary: {
            main: colors.greenAccent[500],
          },
          neutral: {
            dark: colors.grey[700],
            main: colors.grey[500],
            light: colors.grey[100],
          },
          background: {
            default: colors.black[500],
          },
        }
        : {
          // palette values for light mode
          primary: {
            main: colors.primary[100],
          },
          secondary: {
            main: colors.greenAccent[500],
          },
          neutral: {
            dark: colors.grey[700],
            main: colors.grey[500],
            light: colors.grey[100],
          },
          background: {
            default: colors.white[500],
          },
        }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
      p: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 12,
      }
    },
  };
};

// COLOR CONTEXT
const ColorModeContext = createContext({
  toggleColorMode: () => { },
});


// USE MODE
const useMode = () => {
  const [mode, setMode] = useState(DARK_THEME);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === LIGHT_THEME ? DARK_THEME : LIGHT_THEME)),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return { mode, theme, colorMode };

}


// CONTEXT PROVIDER
const ColorModeProvider = ({ children }) => {
  const { mode, theme, colorMode } = useMode();
  return (
    <ColorModeContext.Provider value={{ mode, colorMode }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

// USE COLOR MODE CONTEXT HOOK
const useColorMode = () => {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error('useColorMode must be used within a MyContextProvider');
  }
  return context;
};

// USE COLORS
const useColors = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return { colors }
}

export { ColorModeProvider, useColorMode, tokens, useColors };