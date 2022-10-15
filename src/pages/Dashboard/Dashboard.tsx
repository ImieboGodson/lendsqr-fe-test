
import './Dashboard.scss';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import SideNavbar from '../../components/SideNavbar/SideNavbar';

const Dashboard: React.FC = () => {
  return (
    <div className='dashboard'>
        <Header />
        <SideNavbar />
        <main className='dashboard__main_area'>
          <Outlet />
        </main>
    </div>
  )
}

export default Dashboard;