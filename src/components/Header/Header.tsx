import './Header.scss';
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className='header'>
        <Link to='/'><img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt='logo'  className='logo'/></Link>
        <div className='header-main-content-wrapper'>
            <div className='header-search-box'>
                <input type='search' name='search' placeholder='Search for anything' />
                <button type='submit'>
                <img src={process.env.PUBLIC_URL + '/images/search-icon.svg'} alt='search icon'  className='header-search-icon'/>
                </button>
            </div>
            <div className='header-nav-links'>
                <Link to='/'>Docs</Link>
                <span className='header-notification-icon-wrapper'>
                    <img src={process.env.PUBLIC_URL + '/images/bell-icon.svg'} alt='notification icon'  className='header-notification-icon'/>
                </span>
                <div>
                    <span className='header-user-profile-image-wrapper'>
                        <img src={process.env.PUBLIC_URL + '/images/profile-user-image.png'} alt='user'  className='header-user-image'/>
                    </span>
                    <p className='header-profile-user-name'>Adedeji</p>
                    <span className='header-dropdown-icon-wrapper'>
                        <img src={process.env.PUBLIC_URL + '/images/dropdown-icon.svg'} alt='dropdown icon'  className='header-dropdown-icon'/>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header;