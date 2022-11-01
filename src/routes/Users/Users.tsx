import { useState } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import Table from '../../components/Table/Table';
import UsersStatsCard from '../../components/UsersStatsCard/UsersStatsCard';
import './Users.scss';
import { useAppSelector } from '../../utils/hooks';
import { UsersDataArray } from '../../db';




const Users: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [usersPerPage, setUsersPerPage] = useState<number>(10);


  const { users, loading } = useAppSelector(state => state.users);

  const totalUsers = (users) ? users.length : 0;
  console.log(totalUsers);
  

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users?.slice(indexOfFirstUser, indexOfLastUser);
  const lastPage = Math.ceil(totalUsers / usersPerPage);
  console.log('Last Page', lastPage);


  return (
    <div className='users'>
      <div className='users__content-wrapper'>
        <p className='users__header_text'>Users</p>
        <div className='users__stats-boxes_container'>
          {
            UsersDataArray.map(data => {
              return <UsersStatsCard key={data.id} card={data}/>
            })
          }
        </div>

        <div className={`users__table_wrapper ${(loading || !users) ? 'loading-padding' : ''}`}>
          <Table currentUsers={currentUsers || null} users={users}/>
        </div>

        <>
          {
            (lastPage <= 1 || !loading) ?
            <Pagination usersPerPage={usersPerPage} totalUsers={totalUsers} currentPage={currentPage} setCurrentPage={setCurrentPage} setUsersPerPage={setUsersPerPage}/>
            :
            ''
          }
        </>
      </div>
    </div>
  )
}

export default Users;