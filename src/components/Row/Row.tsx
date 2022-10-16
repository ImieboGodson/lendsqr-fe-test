import './Row.scss'
import { User } from '../../model';
import { formatDate } from '../../utils/formatDate'

interface Props {
    user: User;
}

const Row: React.FC<Props> = ({ user }) => {


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
        <td><img src={process.env.PUBLIC_URL + '/icons/options-icon.svg'} alt='icon'  className='table__user-options_icon'/></td>
    </tr>
)
}

export default Row;