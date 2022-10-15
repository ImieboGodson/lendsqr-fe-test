import './UsersStatsCard.scss';

type CardData = {
    icon: string;
    color: string;
    title: string;
    value: string;
}

interface CardProps {
    card: CardData;
  }

const UsersStatsCard: React.FC<CardProps> = ({ card }) => {
  return (
    <div className='users-stats-box'>
        <span className='users-stats-box__icon_wrapper' style={{ background: `${card.color}` }}>
            <img src={process.env.PUBLIC_URL + `${card.icon}`} alt='user'  className='users-stats-box__icon'/>
        </span>
        <p className='users-stats-box__text'>{card.title}</p>
        <p className='users-stats-box__value'>{card.value}</p>
    </div>
  )
}

export default UsersStatsCard;