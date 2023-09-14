import React from 'react'
import SideNav from '../sideNav/SideNav'
import Topbar from '../Topbar'

const Dashboard = ({ children }) => {
  return (
    <div className='dashboard'>
      <SideNav />
      <main className="content">
        <Topbar />
        <section>
          {children}
        </section>
      </main>
    </div>
  )
}

export default Dashboard
