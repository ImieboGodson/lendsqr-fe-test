import './SideNavbar.scss';
import { Link, NavLink, useMatch, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { signOut } from '../../redux/slices/authSlice';
import { resetUser } from '../../redux/slices/userSlice';
import { resetUsers } from '../../redux/slices/usersSlice';


interface SideNavbarProps {
    navbarOpen: boolean;
    setNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideNavbar: React.FC<SideNavbarProps> = ({ navbarOpen, setNavbarOpen }) => {

    const navigate = useNavigate();
    const isMatch = useMatch(`/`);

    const dispatch = useAppDispatch();
    const { user } = useAppSelector(state => state.user);
    const { users } = useAppSelector(state => state.users);


    const handleUserLogout = () => {
        dispatch(resetUser());
        dispatch(resetUsers());
        dispatch(signOut());
        (user === null && users === null) && navigate('/signin');
    }


  return (
    <div className={`side-navbar ${navbarOpen ? 'open' : 'close'}`}>
        <div className='side-navbar__switch-organisation_wrapper'>
            <img src={process.env.PUBLIC_URL + '/icons/briefcase-icon.svg'} alt='icon'  className='side-navbar__switch-organisation_icon'/>
            <p className='side-navbar__switch-organisation_text'>Switch Organisation</p>
            <img src={process.env.PUBLIC_URL + '/icons/dropdown-arrow-icon.svg'} alt='dropdown icon'  className='side-navbar__switch-organisation_dropdown-icon'/>
        </div>

        <div className='side-navbar__section'>
            <ul className='side-navbar__section_nav-links'>
                <Link to='' className={`side-navbar_section_nav-link ${(isMatch) ? 'active' : ''}`}>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/icons/dashboard-icon.svg'} alt='icon'  className='side-navbar__section_link_icon'/>
                        <p className='side-navbar__section_link_text'>Dashboard</p> 
                    </li>
                </Link>
            </ul>
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

        <div className='side-navbar__section'>
            <p className='side-navbar__section_title_text'>BUSINESSES</p>
            <ul className='side-navbar__section_nav-links'>
                <NavLink to='organisation' className={`side-navbar_section_nav-link ${({ isActive } : { isActive: boolean }) => isActive ? 'active' : ''}`}>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/icons/briefcase-icon.svg'} alt='icon'  className='side-navbar__section_link_icon'/>
                        <p className='side-navbar__section_link_text'>Organisation</p> 
                    </li>
                </NavLink>
                <NavLink to='loan_products' className={`side-navbar_section_nav-link ${({ isActive } : { isActive: boolean }) => isActive ? 'active' : ''}`}>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/icons/loans-icon.svg'} alt='icon'  className='side-navbar__section_link_icon'/>
                        <p className='side-navbar__section_link_text'>Loan Products</p> 
                    </li>
                </NavLink>
                <NavLink to='savings_products' className={`side-navbar_section_nav-link ${({ isActive } : { isActive: boolean }) => isActive ? 'active' : ''}`}>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/icons/savings-icon.svg'} alt='icon'  className='side-navbar__section_link_icon'/>
                        <p className='side-navbar__section_link_text'>Savings Products</p> 
                    </li>
                </NavLink>
                <NavLink to='fees_and_charges' className={`side-navbar_section_nav-link ${({ isActive } : { isActive: boolean }) => isActive ? 'active' : ''}`}>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/icons/coins-solid-icon.svg'} alt='icon'  className='side-navbar__section_link_icon'/>
                        <p className='side-navbar__section_link_text'>Fees and Charges</p> 
                    </li>
                </NavLink>
                <NavLink to='transactions' className={`side-navbar_section_nav-link ${({ isActive } : { isActive: boolean }) => isActive ? 'active' : ''}`}>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/icons/transaction-icon.svg'} alt='icon'  className='side-navbar__section_link_icon'/>
                        <p className='side-navbar__section_link_text'>Transactions</p> 
                    </li>
                </NavLink>
                <NavLink to='services' className={`side-navbar_section_nav-link ${({ isActive } : { isActive: boolean }) => isActive ? 'active' : ''}`}>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/icons/services-icon.svg'} alt='icon'  className='side-navbar__section_link_icon'/>
                        <p className='side-navbar__section_link_text'>Services</p>
                    </li>
                </NavLink>
                <NavLink to='service_account' className={`side-navbar_section_nav-link ${({ isActive } : { isActive: boolean }) => isActive ? 'active' : ''}`}>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/icons/user-cog-icon.svg'} alt='icon'  className='side-navbar__section_link_icon'/>
                        <p className='side-navbar__section_link_text'>Service Account</p>
                    </li>
                </NavLink>
                <NavLink to='settlements' className={`side-navbar_section_nav-link ${({ isActive } : { isActive: boolean }) => isActive ? 'active' : ''}`}>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/icons/scroll-icon.svg'} alt='icon'  className='side-navbar__section_link_icon'/>
                        <p className='side-navbar__section_link_text'>Settlements</p> 
                    </li>
                </NavLink>
                <NavLink to='reports' className={`side-navbar_section_nav-link ${({ isActive } : { isActive: boolean }) => isActive ? 'active' : ''}`}>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/icons/chart-bar-icon.svg'} alt='icon'  className='side-navbar__section_link_icon'/>
                        <p className='side-navbar__section_link_text'>Reports</p> 
                    </li>
                </NavLink>
            </ul>
        </div>

        <div className='side-navbar__section'>
            <p className='side-navbar__section_title_text'>SETTINGS</p>
            <ul className='side-navbar__section_nav-links'>
                <NavLink to='preferences' className={`side-navbar_section_nav-link ${({ isActive } : { isActive: boolean }) => isActive ? 'active' : ''}`}>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/icons/sliders-icon.svg'} alt='icon'  className='side-navbar__section_link_icon'/>
                        <p className='side-navbar__section_link_text'>Preferences</p> 
                    </li>
                </NavLink>
                <NavLink to='fees_and_pricing' className={`side-navbar_section_nav-link ${({ isActive } : { isActive: boolean }) => isActive ? 'active' : ''}`}>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/icons/badge-percent-icon.svg'} alt='icon'  className='side-navbar__section_link_icon'/>
                        <p className='side-navbar__section_link_text'>Fees and Pricing</p> 
                    </li>
                </NavLink>
                <NavLink to='audit_logs' className={`side-navbar_section_nav-link ${({ isActive } : { isActive: boolean }) => isActive ? 'active' : ''}`}>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/icons/clipboard-list-icon.svg'} alt='icon'  className='side-navbar__section_link_icon'/>
                        <p className='side-navbar__section_link_text'>Audit Logs</p> 
                    </li>
                </NavLink>
                <NavLink to='system_messages' className={`side-navbar_section_nav-link ${({ isActive } : { isActive: boolean }) => isActive ? 'active' : ''}`}>
                    <li>
                        <img src={process.env.PUBLIC_URL + '/icons/tire-icon.svg'} alt='icon'  className='side-navbar__section_link_icon'/>
                        <p className='side-navbar__section_link_text'>Systems Messages</p> 
                    </li>
                </NavLink>
            </ul>
        </div>

        <div className='side-navbar__logout_button' onClick={() => handleUserLogout()}>
            <img src={process.env.PUBLIC_URL + '/icons/sign-out-icon.svg'} alt='icon'  className='side-navbar__logout_button_icon'/>
            <p className='side-navbar__logout_button_text'>Log out</p> 
        </div>
    </div>
  )
}

export default SideNavbar;