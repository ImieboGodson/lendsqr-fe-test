import React from 'react'
import Header from '../../components/Header/Header';
import SideNavbar from '../../components/SideNavbar/SideNavbar';

const Dashboard: React.FC = () => {
  return (
    <div className='dashboard'>
        <Header />
        <SideNavbar />
    </div>
  )
}

export default Dashboard;