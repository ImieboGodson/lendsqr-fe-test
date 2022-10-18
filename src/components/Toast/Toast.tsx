import './Toast.scss'
import { MdError, MdClose } from "react-icons/md";

const Toast: React.FC = () => {
  return (
    <div className='notification_wrapper'>
        <div className='notification__icon_wrapper'>
            <MdError className='notification_icon'/>
        </div>
        <div className='notification__message_wrapper'>
            <p className='notification__message_title'>Could not log in</p>
            <p className='notification__message_body'>Invalid email or password</p>
        </div>
        <div className='notification__close-button_wrapper'>
            <button className='notification__close-button'>
                <MdClose className='notification__close-button_icon'/>
            </button>
        </div>
        
    </div>
  )
}

export default Toast;