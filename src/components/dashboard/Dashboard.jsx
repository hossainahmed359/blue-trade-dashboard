import React, { useState } from 'react'
import SideNav from '../sideNav/SideNav'
import Topbar from '../topBar/Topbar'
import { Box } from '@mui/material'


const Dashboard = ({ children }) => {

  const [sidebarCollapesed, setSidebarCollapsed] = useState(false);

  return (
    <div className='app'>

      <SideNav
        sidebarCollapesed={sidebarCollapesed}
        setSidebarCollapsed={setSidebarCollapsed}

      />
      <main className="content"
        style={{
          transition: 'all 0.2s ease-out',
          marginLeft: !sidebarCollapesed ? '250px' : '80px'
        }}>
        <Topbar />
        <Box sx={{ margin: '2rem' }}>
          {children}
        </Box>
      </main>
    </div>
  )
}

export default Dashboard
