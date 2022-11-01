import { useState } from 'react';
import Row from '../Row/Row';
import './Table.scss';
import { User } from '../../utils/model';
import TableFilterOptions from '../TableFilterOptions/TableFilterOptions';

interface TableProps {
  currentUsers: User[] | null;
  users: User[] | null;
}

const Table: React.FC<TableProps> = ({ currentUsers, users }) => {
  const [displayTableFilter, setDisplayTableFilter] = useState<boolean>(false); 

  return (
    <>
      <>
        {
          (users) ?
          ''
          :
          <img src={process.env.PUBLIC_URL + `/images/pulse-loader.gif`} alt='loader'  className='table-loader'/>
        }
      </>
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
            (!users) ?
            ''
            :
            (
              currentUsers?.map(user => {
                return <Row key={user.id} user={user}/>
              })
            )
          }
        </tbody>
      </table>
    </>
    
  )
}

export default Table;