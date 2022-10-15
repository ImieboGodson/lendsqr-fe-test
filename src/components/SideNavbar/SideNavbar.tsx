import './SideNavbar.scss';
import { Link } from 'react-router-dom';

const SideNavbar: React.FC = () => {
  return (
    <div className='side-navbar'>
        <div className='side-navbar__switch-organisation_wrapper'>
            <img src={process.env.PUBLIC_URL + '/icons/briefcase-icon.svg'} alt='icon'  className='side-navbar__switch-organisation_icon'/>
            <p className='side-navbar__switch-organisation_text'>Switch Organisation</p>
            <img src={process.env.PUBLIC_URL + '/icons/dropdown-arrow-icon.svg'} alt='dropdown icon'  className='side-navbar__switch-organisation_dropdown-icon'/>
        </div>

        <div className='side-navbar__dashboard_wrapper'>
            <img src={process.env.PUBLIC_URL + '/icons/dashboard-icon.svg'} alt='icon'  className='side-navbar__dashboard_icon'/>
            <p className='side-navbar__dashboard_text'>Dashboard</p>
        </div>

        <div className='side-navbar__section'>
            <p className='side-navbar__section_title_text'>CUSTOMERS</p>
            <ul className='side-navbar__section_nav-links'>
                <Link to='/users' className='side-navbar_section_nav-link active'>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/icons/users-nav-icon.svg'} alt='icon'  className='side-navbar__section_link_icon'/>
                        <p className='side-navbar__section_link_text'>Users</p> 
                    </li>
                </Link>
                <Link to='/' className='side-navbar_section_nav-link'>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/icons/guarantors-icon.svg'} alt='icon'  className='side-navbar__section_link_icon'/>
                        <p className='side-navbar__section_link_text'>Guarantors</p> 
                    </li>
                </Link>
                <Link to='/' className='side-navbar_section_nav-link'>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/icons/loans-icon.svg'} alt='icon'  className='side-navbar__section_link_icon'/>
                        <p className='side-navbar__section_link_text'>Loans</p> 
                    </li>
                </Link>
                <Link to='/' className='side-navbar_section_nav-link'>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/icons/decision-models-icon.svg'} alt='icon'  className='side-navbar__section_link_icon'/>
                        <p className='side-navbar__section_link_text'>Decision Models</p> 
                    </li>
                </Link>
                <Link to='/' className='side-navbar_section_nav-link'>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/icons/savings-icon.svg'} alt='icon'  className='side-navbar__section_link_icon'/>
                        <p className='side-navbar__section_link_text'>Savings</p> 
                    </li>
                </Link>
                <Link to='/' className='side-navbar_section_nav-link'>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/icons/loan-request-icon.svg'} alt='icon'  className='side-navbar__section_link_icon'/>
                        <p className='side-navbar__section_link_text'>Loan Requests</p>
                    </li>
                </Link>
                <Link to='/' className='side-navbar_section_nav-link'>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/icons/whitelist-icon.svg'} alt='icon'  className='side-navbar__section_link_icon'/>
                        <p className='side-navbar__section_link_text'>Whitelist</p>
                    </li>
                </Link>
                <Link to='/' className='side-navbar_section_nav-link'>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/icons/karma-icon.svg'} alt='icon'  className='side-navbar__section_link_icon'/>
                        <p className='side-navbar__section_link_text'>Karma</p> 
                    </li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default SideNavbar;