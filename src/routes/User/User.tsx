import { useEffect } from 'react';
import { Link, NavLink, Outlet, useMatch, useNavigate, useParams } from 'react-router-dom';
import { fetchUser } from '../../redux/slices/userSlice';
import { formatCurrency } from '../../utils/formatCurrency';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import './User.scss';

const User = () => {

  let { id } = useParams();
  const isMatch = useMatch(`/users/${id}`);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user } = useAppSelector(state => state.user);


  useEffect(() => {
    dispatch(fetchUser(id!));
  }, [])
  
  

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



  return (
    <div className='user'>
      {
        (!user || user?.id !== id) ?
        (
          <div>LOADING...</div>
        ) :
        (
          <>
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
                        setUserTier(2)
                      }
                    </div>
                  </div>
                  <div className='user__profile-header__overview__details__wrappers'>
                    <p className='user__profile-header__overview__details__account-balance'>{formatCurrency(Number(user?.accountBalance))}</p>
                    <p className='user__profile-header__overview__details__bank-details'>{user?.profile.bvn}/{user?.orgName || 'Providus Bank'}</p>
                  </div>
                </div>
              </div>
              <ul className='user__profile-header__card__tabs-wrapper'>
                <Link to='' className={`user__profile-header__card_tabs__link-tags ${(isMatch) ? 'active' : ''}`}>
                  <li className='user__profile-header__card_tabs'>General Details</li>
                </Link>
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
          </>
        )
      }
    </div>
  )
}

export default User;