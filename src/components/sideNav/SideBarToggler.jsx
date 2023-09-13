import React from 'react';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Box } from '@mui/material';

const SideBarToggler = ({ colors, sidebarCollapesed, setSidebarCollapsed }) => {
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
        borderTop: `1px solid ${colors.grey[800]}`,
        padding: '15px'
      }}

      onClick={() => setSidebarCollapsed(prev => !prev)}
    >
      <MenuOpenIcon />
    </Box>
  )
}

export default SideBarToggler
