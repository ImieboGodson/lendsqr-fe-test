import './SidebarToggleButton.scss';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";


interface SidebarToggleButtonProps {
    navbarOpen: boolean;
    setNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarToggleButton: React.FC<SidebarToggleButtonProps> = ({ setNavbarOpen, navbarOpen }) => {
  return (
    <button className={`sidebar-toggle_button ${navbarOpen ? 'onSidebarOpen' : 'onSidebarClose'}`} onClick={() => setNavbarOpen(!navbarOpen)}>
        {
            (navbarOpen) ? 
            (
                <AiOutlineDoubleLeft className='sidebar-toggle_button_icons' />
            ) : 
            (
                <AiOutlineDoubleRight className='sidebar-toggle_button_icons' />
            )
        }
    </button>
  )
}

export default SidebarToggleButton;