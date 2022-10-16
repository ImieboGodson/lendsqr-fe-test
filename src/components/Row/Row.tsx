import React from 'react'
import { User } from '../../model';

interface Props {
    user: User;
}

const Row: React.FC<Props> = ({ user }) => {

    const formatDate: (date: Date) => Date = (date) => {
        let formatedDate = new Date(date)
        console.log(formatedDate)
        return formatedDate;
    }


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
        <td>{user.createdAt}</td>
        <td>Active</td>
        <td><img src={process.env.PUBLIC_URL + '/icons/options-icon.svg'} alt='icon'  className='table__user-options_icon'/></td>
    </tr>
)
}

export default Row;