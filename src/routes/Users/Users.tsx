import UsersStatsCard from '../../components/UsersStatsCard/UsersStatsCard';
import './Users.scss';


const Users: React.FC = () => {
  return (
    <div className='users'>
      <p className='users__header_text'>Users</p>

      <div className='users__stats-boxes_container'>
        <UsersStatsCard card={{icon: '/icons/users-icon.svg', color: 'rgba(223, 24, 255, 0.1)', title: 'users', value: '2,453'}}/>
        <UsersStatsCard card={{icon: '/icons/active-users-icon.svg', color: 'rgba(87, 24, 255, 0.1)', title: 'active users', value: '2,345'}}/>
        <UsersStatsCard card={{icon: '/icons/users-with-loans-icon.svg', color: 'rgba(245, 95, 68, 0.1)', title: 'users with loans', value: '12,453'}}/>
        <UsersStatsCard card={{icon: '/icons/users-with-savings-icon.svg', color: 'rgba(255, 51, 102, 0.1)', title: 'users with savings', value: '102,453'}}/>
      </div>
    </div>
  )
}

export default Users;