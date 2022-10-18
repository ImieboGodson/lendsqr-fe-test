import { useEffect, useState } from 'react'
import './Signin.scss';
import { Link, redirect } from "react-router-dom";
import { Profiles } from '../../db';

const Signin: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');



  // useEffect(() => {
  //   fetch('../../db.json')
  //   .then((response) => response.json())
  //   .then(user => console.log(user))
  // }, [])

  
  const onEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const onPasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if(!email || !password) {
        console.log("You can't leave any field empty")
    } else {
      console.log({ email, password });
      console.log(Profiles)

      if(Profiles[0].email === email && Profiles[0].password) {
        redirect('/dashbord');
      } else {
        console.log('details are incorrect');
      }
    }

  }


  return (
    <div className='signin'>
      <Link to='/'><img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt='logo'  className='logo'/></Link>
      <div className='signin_left'>
        <img src={process.env.PUBLIC_URL + '/images/pablo.svg'} alt='illustration' className='signin_page_illustration'/>
      </div>
      <div className='signin_right'>
        <div className='signin_form_wrapper'>
          <p className='signin_welcome-text'>Welcome!</p>
          <p className='signin_welcome-subtext'>Enter details to login.</p>
          <form className='signin_form' onSubmit={(e) => onFormSubmit(e)}>
              <input type='email' name='email' placeholder='Email' className='email_input' onChange={onEmailInputChange} />
              <input type='password' name='password' placeholder='Password' className='password_input' onChange={onPasswordInputChange} />
              <Link to='/' className='forgot-password_link'>FORGOT PASSWORD?</Link>
              <button type='submit' className='form_submit_button'>LOG IN</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signin;