import './SideNavbar.scss';
import { NavLink } from 'react-router-dom';

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
                <NavLink to='users' className={`side-navbar_section_nav-link ${({ isActive } : { isActive: boolean }) => isActive ? 'active' : ''}`}>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/icons/users-nav-icon.svg'} alt='icon'  className='side-navbar__section_link_icon'/>
                        <p className='side-navbar__section_link_text'>Users</p> 
                    </li>
                </NavLink>
                <NavLink to='guarantors' className={`side-navbar_section_nav-link ${({ isActive } : { isActive: boolean }) => isActive ? 'active' : ''}`}>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/icons/guarantors-icon.svg'} alt='icon'  className='side-navbar__section_link_icon'/>
                        <p className='side-navbar__section_link_text'>Guarantors</p> 
                    </li>
                </NavLink>
                <NavLink to='loans' className={`side-navbar_section_nav-link ${({ isActive } : { isActive: boolean }) => isActive ? 'active' : ''}`}>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/icons/loans-icon.svg'} alt='icon'  className='side-navbar__section_link_icon'/>
                        <p className='side-navbar__section_link_text'>Loans</p> 
                    </li>
                </NavLink>
                <NavLink to='decision_making' className={`side-navbar_section_nav-link ${({ isActive } : { isActive: boolean }) => isActive ? 'active' : ''}`}>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/icons/decision-models-icon.svg'} alt='icon'  className='side-navbar__section_link_icon'/>
                        <p className='side-navbar__section_link_text'>Decision Models</p> 
                    </li>
                </NavLink>
                <NavLink to='savings' className={`side-navbar_section_nav-link ${({ isActive } : { isActive: boolean }) => isActive ? 'active' : ''}`}>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/icons/savings-icon.svg'} alt='icon'  className='side-navbar__section_link_icon'/>
                        <p className='side-navbar__section_link_text'>Savings</p> 
                    </li>
                </NavLink>
                <NavLink to='loan_requests' className={`side-navbar_section_nav-link ${({ isActive } : { isActive: boolean }) => isActive ? 'active' : ''}`}>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/icons/loan-request-icon.svg'} alt='icon'  className='side-navbar__section_link_icon'/>
                        <p className='side-navbar__section_link_text'>Loan Requests</p>
                    </li>
                </NavLink>
                <NavLink to='whitelist' className={`side-navbar_section_nav-link ${({ isActive } : { isActive: boolean }) => isActive ? 'active' : ''}`}>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/icons/whitelist-icon.svg'} alt='icon'  className='side-navbar__section_link_icon'/>
                        <p className='side-navbar__section_link_text'>Whitelist</p>
                    </li>
                </NavLink>
                <NavLink to='karma' className={`side-navbar_section_nav-link ${({ isActive } : { isActive: boolean }) => isActive ? 'active' : ''}`}>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/icons/karma-icon.svg'} alt='icon'  className='side-navbar__section_link_icon'/>
                        <p className='side-navbar__section_link_text'>Karma</p> 
                    </li>
                </NavLink>
            </ul>
        </div>
    </div>
  )
}

export default SideNavbar;