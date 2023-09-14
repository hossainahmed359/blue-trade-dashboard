import React from 'react'
import SideNav from '../sideNav/SideNav'
import Topbar from '../Topbar'
import { Box } from '@mui/material'

const Dashboard = ({ children }) => {
  return (
    <div className='app'>
      <SideNav />
      <main className="content">
        <Topbar />
        <Box m={'20px'}>
          {children}
        </Box>
      </main>
    </div>
  )
}

export default Dashboard
