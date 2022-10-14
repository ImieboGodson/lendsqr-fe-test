import './Signin.scss';
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className='signin'>
      <Link to='/signin'><img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt='logo'  className='logo'/></Link>
      <div className='signin_left'>
        <img src={process.env.PUBLIC_URL + '/images/pablo.svg'} alt='illustration' className='signin_page_illustration'/>
      </div>
      <div className='signin_right'>
        <div className='signin_form_wrapper'>
          <p className='signin_welcome-text'>Welcome!</p>
          <p className='signin_welcome-subtext'>Enter details to login.</p>
          <form className='signin_form'>
              <input type='email' name='email' placeholder='Email' className='email_input' />
              <input type='password' name='password' placeholder='Password' className='password_input' />
              <Link to='/signin' className='forgot-password_link'>FORGOT PASSWORD?</Link>
              <button type='submit' className='form_submit_button'>LOG IN</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signin;