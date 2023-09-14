import React from 'react'
import { Box, IconButton, InputBase } from '@mui/material'
import { useColorMode, useColors } from '../contexts/theme';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { DARK_THEME } from '../configs/meta/colorPalette';

const Topbar = () => {
  const { mode, colors } = useColors();
  const { toggleColorMode } = useColorMode();

  return (
    <Box backgroundColor={colors.elementBg} display={'flex'} justifyContent={'space-between'} p={2}>
      {/* SEARCH */}
      <Box display={'flex'} border={`1px solid ${colors.grey[800]}`} borderRadius={'20px'} minWidth={'300px'}>
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search' />
        <IconButton type='button' sx={{ p: 1, color: colors.grey[100] }} >
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box>
        <IconButton onClick={toggleColorMode}>
          {mode === DARK_THEME
            ? <DarkModeOutlinedIcon />
            : <LightModeOutlinedIcon />}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Topbar
