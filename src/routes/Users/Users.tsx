import { useState } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import Table from '../../components/Table/Table';
import UsersStatsCard from '../../components/UsersStatsCard/UsersStatsCard';
import './Users.scss';
import { useAppSelector } from '../../utils/hooks';
import { User } from '../../utils/model';




const Users: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [usersPerPage, setUsersPerPage] = useState<number>(10);


  const { users } = useAppSelector(state => state.users);
  

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users?.slice(indexOfFirstUser, indexOfLastUser);

  // const findUsersWithLoans: (users: User[]) => number = (users) => {
  //   users.
  // }


  return (
    <div className='users'>
      <div className='users__content-wrapper'>
        <p className='users__header_text'>Users</p>
        <div className='users__stats-boxes_container'>
          <UsersStatsCard card={{icon: '/icons/users-icon.svg', color: 'rgba(223, 24, 255, 0.1)', title: 'users', value: `${users?.length}`}}/>
          <UsersStatsCard card={{icon: '/icons/active-users-icon.svg', color: 'rgba(87, 24, 255, 0.1)', title: 'active users', value: '2,345'}}/>
          <UsersStatsCard card={{icon: '/icons/users-with-loans-icon.svg', color: 'rgba(245, 95, 68, 0.1)', title: 'users with loans', value: '12,453'}}/>
          <UsersStatsCard card={{icon: '/icons/users-with-savings-icon.svg', color: 'rgba(255, 51, 102, 0.1)', title: 'users with savings', value: '102,453'}}/>
        </div>

        <div className='users__table_wrapper'>
          <Table currentUsers={currentUsers || null} users={users}/>
        </div>

        <>
          {
            (users?.length) ?
            <Pagination usersPerPage={usersPerPage} totalUsers={users.length} currentPage={currentPage} setCurrentPage={setCurrentPage} setUsersPerPage={setUsersPerPage}/>
            :
            ''
          }
        </>
      </div>
    </div>
  )
}

export default Users;