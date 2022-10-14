import './Header.scss';
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className='header'>
        <Link to='/'><img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt='logo'  className='header__logo'/></Link>
        <div className='header__main-content__wrapper'>
            <div className='header__search-box'>
                <input type='search' name='search' placeholder='Search for anything' className='header-search-box_input'/>
                <button type='submit' className='header__search-box_button'>
                    <img src={process.env.PUBLIC_URL + '/images/search-icon.svg'} alt='search icon'  className='header__search-icon'/>
                </button>
            </div>
            <div className='header__nav-links'>
                <Link to='/' className='header__docs-link'>Docs</Link>
                {/* <span className='header-notification-icon-wrapper'> */}
                    <img src={process.env.PUBLIC_URL + '/images/bell-icon.svg'} alt='notification icon'  className='header__notification-icon'/>
                {/* </span> */}
                <div className='header__profile-user-image-and-name'>
                    <span className='header__user-profile-image__wrapper'>
                        <img src={process.env.PUBLIC_URL + '/images/profile-user-image.png'} alt='user'  className='header__profile-user-image'/>
                    </span>
                    <p className='header__profile-user-name'>Adedeji</p>
                    {/* <span className='header-dropdown-icon-wrapper'> */}
                        <img src={process.env.PUBLIC_URL + '/images/dropdown-icon.svg'} alt='dropdown icon'  className='header__dropdown-icon'/>
                    {/* </span> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header;