import React from 'react'
import { Box, IconButton, useMediaQuery } from '@mui/material'
import { useColorMode, useColors } from '../../contexts/theme';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { DARK_THEME } from '../../configs/meta/colorPalette';
import { BellIcon } from '../../assets/images/icons/icons';
import SearchAndMenu from './SearchAndMenu';
import NavProfile from './NavProfile';
import { useTheme } from '@emotion/react';



const Topbar = ({setSidebarCollapsed}) => {
  const { colors } = useColors();
  const { mode, colorMode } = useColorMode();
  const theme = useTheme();
  const matchesDownMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        backgroundColor: colors.elementBg,
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem 2rem'

      }}
    >
      {/* SEARCH AND MENU*/}
      <SearchAndMenu setSidebarCollapsed={setSidebarCollapsed}/>

      {/* ICONS */}
      <Box sx={{display: 'flex', alignItems: 'center', gap: '5px', justifyContent: 'flex-end'}}>
        {
          matchesDownMd
          &&
          <IconButton>
            <SearchIcon />
          </IconButton>
        }

        <IconButton onClick={colorMode.toggleColorMode}>
          {mode === DARK_THEME
            ? <DarkModeOutlinedIcon />
            : <LightModeOutlinedIcon />}
        </IconButton>
        <IconButton>
          <BellIcon
            color={mode === DARK_THEME ? colors.textColor : colors.blueAccent[500]}
            sx={{ height: '1.1rem', width: '1.1rem' }}
          />
        </IconButton>
       <NavProfile/>
      </Box>
    </Box>
  )
}

export default Topbar
