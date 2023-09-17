import React from 'react';
import { Box, IconButton, InputBase, useMediaQuery } from '@mui/material'
import { useColorMode, useColors } from '../../contexts/theme';
import { useSceenWidth } from '../../contexts/screenWidth';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from "@mui/icons-material/Search";
import { DARK_THEME } from '../../configs/meta/colorPalette';
import { useTheme } from '@emotion/react';

const SearchAndMenu = () => {
  const { colors } = useColors();
  const { mode } = useColorMode();
  const theme = useTheme();
  const matchesDownLg = useMediaQuery(theme.breakpoints.down('lg'));

  
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    }}>
      {/* MENU OPEN ICON */}
      {matchesDownLg ?
        <Box
          sx={{
            display: 'flex',
            justifyItems: 'center',
            alignItems: 'center',
          }}
        >
          <MenuIcon />
        </Box> :
        <Box
          sx={{
            display: 'flex',
            border: `1px solid ${mode === DARK_THEME ? colors.grey[800] : colors.grey[900]}`,
            borderRadius: '25px',
            width: '626px',
            padding: '5px'
          }}
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search' />
          <IconButton type='button' sx={{ p: 1, color: colors.grey[200] }} >
            <SearchIcon />
          </IconButton>
        </Box>}


      {/* SEARCH */}
    </Box>
  )
}

export default SearchAndMenu
