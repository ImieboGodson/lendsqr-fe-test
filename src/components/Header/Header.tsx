import './Header.scss';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { CgClose } from "react-icons/cg";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";

const Header: React.FC = () => {
    const [navOpen, setNavOpen] = useState<boolean>(false);


  return (
    <div className='header'>
        <div className='header__logo__wrapper'>
            <Link to='/'><img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt='logo'  className='header__logo'/></Link>
            <button className='navlinks_toggle-button' onClick={() => setNavOpen(!navOpen)}>
                {
                    navOpen ?
                     <CgClose className='navlinks_toggle-button_icon'/>
                     : 
                     <HiOutlineBars3BottomLeft className='navlinks_toggle-button_icon'/>
                }
            </button>
        </div>
        
        <div className={`header__main-content__wrapper ${navOpen ? 'show' : ''}`}>
            <div className='header__search-box'>
                <input type='search' name='search' placeholder='Search for anything' className='header-search-box_input'/>
                <button type='submit' className='header__search-box_button'>
                    <img src={process.env.PUBLIC_URL + '/icons/search-icon.svg'} alt='search icon'  className='header__search-icon'/>
                </button>
            </div>
            <div className='header__nav-links'>
                <Link to='/' className='header__docs-link' onClick={() => setNavOpen(!navOpen)}>Docs</Link>
                {/* <span className='header-notification-icon-wrapper'> */}
                    <img src={process.env.PUBLIC_URL + '/icons/bell-icon.svg'} alt='notification icon'  className='header__notification-icon' onClick={() => setNavOpen(!navOpen)}/>
                {/* </span> */}
                <div className='header__profile-user-image-and-name' onClick={() => setNavOpen(!navOpen)}>
                    <span className='header__user-profile-image__wrapper'>
                        <img src={process.env.PUBLIC_URL + '/images/profile-user-image.png'} alt='user'  className='header__profile-user-image'/>
                    </span>
                    <p className='header__profile-user-name'>Adedeji</p>
                    {/* <span className='header-dropdown-icon-wrapper'> */}
                        <img src={process.env.PUBLIC_URL + '/icons/dropdown-icon.svg'} alt='dropdown icon'  className='header__dropdown-icon'/>
                    {/* </span> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header;