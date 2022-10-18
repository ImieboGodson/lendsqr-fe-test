import './Toast.scss'
import { MdError, MdClose } from "react-icons/md";
import { useEffect } from 'react';

interface ToastProps {
    showErrorMessage: boolean;
    setShowErrorMessage: React.Dispatch<React.SetStateAction<boolean>>;
}

const Toast: React.FC<ToastProps> = ({ showErrorMessage, setShowErrorMessage }) => {


useEffect(() => {
    const interval = setInterval(() => {
        setShowErrorMessage(false)
    }, 7000);
    
    return () => {
        clearInterval(interval);
    }

}, [setShowErrorMessage]);

  return (
    <div className={`notification_wrapper ${(showErrorMessage) ? 'display' : ''}`}>
        <div className='notification__icon_wrapper'>
            <MdError className='notification_icon'/>
        </div>
        <div className='notification__message_wrapper'>
            <p className='notification__message_title'>Could not log in</p>
            <p className='notification__message_body'>Invalid email or password</p>
        </div>
        <div className='notification__close-button_wrapper'>
            <button className='notification__close-button'>
                <MdClose className='notification__close-button_icon' onClick={() => setShowErrorMessage(false)}/>
            </button>
        </div>
        
    </div>
  )
}

export default Toast;