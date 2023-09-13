import { Box, IconButton, InputBase, useTheme } from '@mui/material'
import React from 'react'
import { tokens, useColorMode } from '../contexts/theme';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const colorMode = useColorMode();

  return (
    <Box backgroundColor={colors.elementBg} display={'flex'} justifyContent={'space-between'} p={2}>
      {/* SEARCH */}
      <Box display={'flex'} border={`1px solid ${colors.grey[800]}`} borderRadius={'20px'} minWidth={'300px'}>
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search' />
        <IconButton type='button' sx={{ p: 1 , color:colors.grey[100] }} >
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark'
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
