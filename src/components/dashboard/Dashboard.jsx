import React, { useEffect, useState } from 'react'
import SideNav from '../sideNav/SideNav'
import Topbar from '../topBar/Topbar'
import { Box, useMediaQuery } from '@mui/material'
import { useTheme } from '@emotion/react'


const Dashboard = ({ children }) => {

  const theme = useTheme();
  const matchesUpLg = useMediaQuery(theme.breakpoints.up('lg'));
  const [sidebarCollapesed, setSidebarCollapsed] = useState(!matchesUpLg);

  return (
    <div className='app'>
      <SideNav
        sidebarCollapesed={sidebarCollapesed}
        setSidebarCollapsed={setSidebarCollapsed}
        collapsedWidth={matchesUpLg ? '4.5rem' : '0'}
      />
      <main className="content"
        style={{
          transition: 'all 0.2s linear',
          ...(matchesUpLg && {
            marginLeft: !sidebarCollapesed ? '250px' : '4.5rem'
          })

        }}>
        <Topbar setSidebarCollapsed={setSidebarCollapsed}/>
        <Box onClick={() => !matchesUpLg && setSidebarCollapsed(true)} sx={{ margin: '2rem' }}>
          {children}
        </Box>
      </main>
    </div>
  )
}

export default Dashboard
