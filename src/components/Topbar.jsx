import React from 'react'
import { Box, IconButton, InputBase } from '@mui/material'
import { useColorMode, useColors } from '../contexts/theme';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from "@mui/icons-material/Search";
import { DARK_THEME } from '../configs/meta/colorPalette';
import { useSceenWidth } from '../contexts/screenWidth';



const Topbar = () => {
  const { colors } = useColors();
  const { mode, colorMode } = useColorMode();

  const { breakpoints, windowWidth } = useSceenWidth();

  return (
    <Box
      sx={{
        backgroundColor: colors.elementBg,
        display: 'flex',
        justifyContent: 'space-between',
        padding: '18px'

      }}
    >
      {/* SEARCH AND MENU*/}
      <Box sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
        {/* MENU OPEN ICON */}
        {windowWidth <= breakpoints.MD ?
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
              border: `1px solid ${colors.grey[800]}`,
              borderRadius: '20px',
              width: '626px',
            }}
          >
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search' />
            <IconButton type='button' sx={{ p: 1, color: colors.grey[100] }} >
              <SearchIcon />
            </IconButton>
          </Box>}


        {/* SEARCH */}

      </Box>


      {/* ICONS */}
      <Box>
        {
          windowWidth <= breakpoints.MD
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
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Topbar
