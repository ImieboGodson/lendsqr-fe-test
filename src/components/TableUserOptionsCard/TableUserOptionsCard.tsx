import { Link } from 'react-router-dom';
import './TableUserOptionsCard.scss';

interface Props {
    userId: string;
    displayOptionsCard: boolean;
    setDisplayOptionsCard: React.Dispatch<React.SetStateAction<boolean>>;
}

const TableUserOptionsCard: React.FC<Props> = ({ userId, displayOptionsCard, setDisplayOptionsCard }) => {
  return (
        <ul className={`table-user-options-card ${displayOptionsCard ? 'display' : ''}`}>
            <Link to={`${userId}`} className='table-user-options-card__user-profile_link'>
                <li className='table-user-options-card__option' onClick={() => setDisplayOptionsCard(false)}>
                    <img src={process.env.PUBLIC_URL + '/icons/view-details-icon.svg'} alt='icon'  className='table-user-options-card__option_icon'/>
                    <p className='table-user-options-card__option_text'>View Details</p> 
                </li>
            </Link>
            <li className='table-user-options-card__option' onClick={() => setDisplayOptionsCard(false)}>
                <img src={process.env.PUBLIC_URL + '/icons/blacklist-user-icon.svg'} alt='icon'  className='table-user-options-card__option_icon'/>
                <p className='table-user-options-card__option_text'>Blacklist User</p> 
            </li>
            <li className='table-user-options-card__option' onClick={() => setDisplayOptionsCard(false)}>
                <img src={process.env.PUBLIC_URL + '/icons/activate-user-icon.svg'} alt='icon'  className='table-user-options-card__option_icon'/>
                <p className='table-user-options-card__option_text'>Activate User</p> 
            </li>
        </ul>
  )
}

export default TableUserOptionsCard;