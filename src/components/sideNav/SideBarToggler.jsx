import React from 'react';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Box } from '@mui/material';
import { useColorMode, useColors } from '../../contexts/theme';
import { DARK_THEME } from '../../configs/meta/colorPalette';

const SideBarToggler = ({ setSidebarCollapsed }) => {

  const { colors } = useColors();
  const {mode} = useColorMode();

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0, right: 0,
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        color: colors.blueAccent[500],
        borderTop: `1px solid ${mode === DARK_THEME ? colors.grey[800] : colors.grey[900] }`,
        backgroundColor: colors.elementBg,
        padding: '15px'
      }}

      onClick={() => setSidebarCollapsed(prev => !prev)}
    >
      <MenuOpenIcon />
    </Box>
  )
}

export default SideBarToggler
