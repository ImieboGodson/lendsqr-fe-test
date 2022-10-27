
import './Dashboard.scss';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import SideNavbar from '../../components/SideNavbar/SideNavbar';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { fetchUsers } from '../../redux/slices/usersSlice';
import SidebarToggleButton from '../../components/SidebarToggleButton/SidebarToggleButton';

const Dashboard: React.FC = () => {

  const [navbarOpen, setNavbarOpen] = useState<boolean>(true);

  const dispatch = useAppDispatch();
  const fetchedUsers = useAppSelector(state => state.users.users);

  useEffect(() => {
    dispatch(fetchUsers());
    localStorage.setItem('users', JSON.stringify(fetchedUsers));
  }, [])
  

  return (
    <div className='dashboard'>
        <Header />
        <SideNavbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <main className={`dashboard__main_area ${!navbarOpen ? 'expand' : ''}`}>
          <SidebarToggleButton navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
          <Outlet />
        </main>
    </div>
  )
}

export default Dashboard;