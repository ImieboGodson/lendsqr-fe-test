import { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';
import { User as UserModel } from '../../model';
import './User.scss';

const User = () => {
  const [user, setUser] = useState<UserModel | null>(null);

  let { id } = useParams()

  const navigate = useNavigate();

  const setUserTier = (tier: number) => {
    switch(tier) {
      case 3:
        return (
          <>
            <img src={process.env.PUBLIC_URL + '/icons/filled-star-icon.svg'} alt='icon'  className='user__profile-header__overview__details__user-tier_star_icon'/>
            <img src={process.env.PUBLIC_URL + '/icons/filled-star-icon.svg'} alt='icon'  className='user__profile-header__overview__details__user-tier_star_icon'/>
            <img src={process.env.PUBLIC_URL + '/icons/filled-star-icon.svg'} alt='icon'  className='user__profile-header__overview__details__user-tier_star_icon'/>
          </>
        )
      case 2:
        return (
          <>
            <img src={process.env.PUBLIC_URL + '/icons/filled-star-icon.svg'} alt='icon'  className='user__profile-header__overview__details__user-tier_star_icon'/>
            <img src={process.env.PUBLIC_URL + '/icons/filled-star-icon.svg'} alt='icon'  className='user__profile-header__overview__details__user-tier_star_icon'/>
            <img src={process.env.PUBLIC_URL + '/icons/lined-star-icon.svg'} alt='icon'  className='user__profile-header__overview__details__user-tier_star_icon'/>
          </>
        )
      case 1:
        return (
          <>
            <img src={process.env.PUBLIC_URL + '/icons/filled-star-icon.svg'} alt='icon'  className='user__profile-header__overview__details__user-tier_star_icon'/>
            <img src={process.env.PUBLIC_URL + '/icons/lined-star-icon.svg'} alt='icon'  className='user__profile-header__overview__details__user-tier_star_icon'/>
            <img src={process.env.PUBLIC_URL + '/icons/lined-star-icon.svg'} alt='icon'  className='user__profile-header__overview__details__user-tier_star_icon'/>
          </>
        )
      default:
        return (
          <>
            <img src={process.env.PUBLIC_URL + '/icons/lined-star-icon.svg'} alt='icon'  className='user__profile-header__overview__details__user-tier_star_icon'/>
            <img src={process.env.PUBLIC_URL + '/icons/lined-star-icon.svg'} alt='icon'  className='user__profile-header__overview__details__user-tier_star_icon'/>
            <img src={process.env.PUBLIC_URL + '/icons/lined-star-icon.svg'} alt='icon'  className='user__profile-header__overview__details__user-tier_star_icon'/>
          </>
        )
    }
  }


  useEffect(() => {
    // dispatch(fetchUsers())
    fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.log(err))
  }, [id])

  return (
    <div className='user'>
      <div className='user__back-button' onClick={() => navigate('/users')}>
        <img src={process.env.PUBLIC_URL + '/icons/back-arrow-icon.svg'} alt='icon'  className='user__back-button_icon'/>
        <p className='user__back_button_text'>Back to Users</p>
      </div>

      <div className='user__header_wrapper'>
        <p className='user__header_text'>User Details</p>
        <div className='user__header__buttons-wrapper'>
          <button id='blacklist-user_button' className='user__header_buttons'>BLACKLIST USER</button>
          <button id='activate-user_button' className='user__header_buttons'>ACTIVATE USER</button>
        </div>
      </div>

      <div className='user__profile-header__card'>
        <div className='user__profile-header__overview-wrapper'>
          <span className='user__profile-header__overview__image-wrapper'>
            <img src={`${user ? user?.profile.avatar : process.env.PUBLIC_URL + '/icons/user-icon.svg'}`} alt='icon'  className={`${user ? 'user__profile-header__overview__image' : 'user__profile-header__overview_placeholder-icon'}`}/>
          </span>
          <div className='user__profile-header__overview__details-wrapper'>
            <div className='user__profile-header__overview__details__wrappers'>
              <p className='user__profile-header__overview__details__name'>{user?.profile.firstName} {user?.profile.lastName}</p>
              <p className='user__profile-header__overview__details__account-number'>{user?.accountNumber}</p>
            </div>
            <div className='user__profile-header__overview__details__wrappers'>
              <p className='user__profile-header__overview__details__user-tier_text'>User's Tier</p>
              <div className='user__profile-header__overview__details__user-tier_stars__wrapper'>
                {
                  setUserTier(0)
                }
              </div>
            </div>
            <div className='user__profile-header__overview__details__wrappers'>
              <p className='user__profile-header__overview__details__account-balance'>{user?.accountBalance}</p>
              <p className='user__profile-header__overview__details__bank-details'>{user?.profile.bvn}/{user?.orgName || 'Providus Bank'}</p>
            </div>
          </div>
        </div>
        <ul className='user__profile-header__card__tabs-wrapper'>
          <NavLink to='/' className={`user__profile-header__card_tabs__link-tags ${({ isActive } : { isActive: boolean }) => isActive ? 'active' : ''}`}>
            <li className='user__profile-header__card_tabs'>General Details</li>
          </NavLink>
          <NavLink to='documents' className={`user__profile-header__card_tabs__link-tags ${({ isActive } : { isActive: boolean }) => isActive ? 'active' : ''}`}>
            <li className='user__profile-header__card_tabs'>Documents</li>
          </NavLink>
          <NavLink to='bank_details' className={`user__profile-header__card_tabs__link-tags ${({ isActive } : { isActive: boolean }) => isActive ? 'active' : ''}`}>
            <li className='user__profile-header__card_tabs'>Bank Details</li>
          </NavLink>
          <NavLink to='loans' className={`user__profile-header__card_tabs__link-tags ${({ isActive } : { isActive: boolean }) => isActive ? 'active' : ''}`}>
            <li className='user__profile-header__card_tabs'>Loans</li>
          </NavLink>
          <NavLink to='savings' className={`user__profile-header__card_tabs__link-tags ${({ isActive } : { isActive: boolean }) => isActive ? 'active' : ''}`}>
            <li className='user__profile-header__card_tabs'>Savings</li>
          </NavLink>
          <NavLink to='app_and_system' className={`user__profile-header__card_tabs__link-tags ${({ isActive } : { isActive: boolean }) => isActive ? 'active' : ''}`}>
            <li className='user__profile-header__card_tabs'>App and System</li>
          </NavLink>
        </ul>
      </div>

      <main className='user__main_area'>
        <Outlet />
      </main>
    </div>
  )
}

export default User;