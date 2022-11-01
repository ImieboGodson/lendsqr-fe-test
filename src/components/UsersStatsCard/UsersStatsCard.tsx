import { useAppSelector } from '../../utils/hooks';
import './UsersStatsCard.scss';

type CardData = {
  id: string;
  icon: string;
  color: string;
  title: string;
  value: string;
}

interface CardProps {
    card: CardData;
  }

const UsersStatsCard: React.FC<CardProps> = ({ card }) => {

  const { loading } = useAppSelector(state => state.users)

  return (
    <div className='users-stats-box'>
        <span className={`users-stats-box__icon_wrapper ${loading ? 'skeleton' : ''}`} style={{ background: `${loading ? 'none' : card.color}` }}>
            {
              (loading) ?
              ''
              :
              <img src={process.env.PUBLIC_URL + `${card.icon}`} alt='user'  className='users-stats-box__icon'/>
            }
        </span>
        {
          (loading) ?
          (
            <>
              <span className='users-stats-box__skeleton-loader skeleton'></span>
              <span className='users-stats-box__skeleton-loader skeleton'></span>
            </>
          )
          :
          (
            <>
              <p className='users-stats-box__text'>{card.title}</p>
              <p className='users-stats-box__value'>{card.value}</p>
            </>
          )
        }
    </div>
  )
}

export default UsersStatsCard;