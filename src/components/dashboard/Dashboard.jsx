import React from 'react'
import SideNav from '../sideNav/SideNav'
import Topbar from '../topBar/Topbar'
import { Box } from '@mui/material'

const Dashboard = ({ children }) => {
  return (
    <div className='app'>
      {/* <SideNav /> */}
      <main className="content">
        <Topbar />
        <Box sx={{margin: '2rem'}}>
          {children}
        </Box>
      </main>
    </div>
  )
}

export default Dashboard
