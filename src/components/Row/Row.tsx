import './Row.scss'
import { User } from '../../model';
import { formatDate } from '../../utils/formatDate'
import TableUserOptionsCard from '../TableUserOptionsCard/TableUserOptionsCard';
import { useState } from 'react';

interface Props {
    user: User;
}

const Row: React.FC<Props> = ({ user }) => {

  const [displayOptionsCard, setDisplayOptionsCard] = useState<boolean>(false);


  return (
    <tr className='row'>
        <td>{user.orgName}</td>
        <td>{(user.profile.firstName || user.profile.lastName) ? (
            <>
              {user.profile.firstName}  {user.profile.lastName}
            </>
        ) : 'No name'}{" "}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{formatDate(user.createdAt)}</td>
        <td><span className='row__user_status'>Active</span></td>
        <td><img src={process.env.PUBLIC_URL + '/icons/options-icon.svg'} alt='icon'  className='table__user-options_icon' onClick={() => setDisplayOptionsCard(!displayOptionsCard)}/><TableUserOptionsCard displayOptionsCard={displayOptionsCard} setDisplayOptionsCard={setDisplayOptionsCard}/></td>
    </tr>
)
}

export default Row;