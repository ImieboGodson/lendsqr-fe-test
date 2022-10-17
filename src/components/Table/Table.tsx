import { useEffect, useState } from 'react';
import Row from '../Row/Row';
import './Table.scss';
import { User } from '../../model';
import TableFilterOptions from '../TableFilterOptions/TableFilterOptions';

const Table: React.FC = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [displayTableFilter, setDisplayTableFilter] = useState<boolean>(false);


    useEffect(() => {
      fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    

  return (
    <table className='table'>
        <thead>
            <tr>
                <th className='organisation_column'>organisation <img src={process.env.PUBLIC_URL + '/icons/filter-icon.svg'} alt='icon'  className='table__filter_icon' onClick={() => setDisplayTableFilter(!displayTableFilter)}/><TableFilterOptions users={users} displayTableFilter={displayTableFilter} setDisplayTableFilter={setDisplayTableFilter}/></th>
                <th className='username_column'>username <img src={process.env.PUBLIC_URL + '/icons/filter-icon.svg'} alt='icon'  className='table__filter_icon' onClick={() => setDisplayTableFilter(!displayTableFilter)}/></th>
                <th className='email_column'>email <img src={process.env.PUBLIC_URL + '/icons/filter-icon.svg'} alt='icon'  className='table__filter_icon' onClick={() => setDisplayTableFilter(!displayTableFilter)}/></th>
                <th className='phone-number_column'>phone number <img src={process.env.PUBLIC_URL + '/icons/filter-icon.svg'} alt='icon'  className='table__filter_icon' onClick={() => setDisplayTableFilter(!displayTableFilter)}/></th>
                <th className='date-joined_column'>date joined <img src={process.env.PUBLIC_URL + '/icons/filter-icon.svg'} alt='icon'  className='table__filter_icon' onClick={() => setDisplayTableFilter(!displayTableFilter)}/></th>
                <th className='status_column'>status <img src={process.env.PUBLIC_URL + '/icons/filter-icon.svg'} alt='icon'  className='table__filter_icon' onClick={() => setDisplayTableFilter(!displayTableFilter)}/></th>
                <th className='last_column'></th>
                
            </tr>
      </thead>
      <tbody>
            {
                users.map(user => {
                    return <Row key={user.id} user={user}/>
                })
            }
      </tbody>
    </table>
  )
}

export default Table;