
import './Dashboard.scss';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import SideNavbar from '../../components/SideNavbar/SideNavbar';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { fetchUsers } from '../../redux/slices/usersSlice';

const Dashboard: React.FC = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const fetchedUsers = useAppSelector(state => state.users.users);

  useEffect(() => {
    navigate('/dashboard');
    dispatch(fetchUsers());
    localStorage.setItem('users', JSON.stringify(fetchedUsers));
  }, [])
  

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