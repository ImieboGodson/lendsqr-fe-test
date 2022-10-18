import React, { useState } from 'react'
import './Signin.scss';
import { Link, redirect } from "react-router-dom";
import { Profiles } from '../../db';
import Toast from '../../components/Toast/Toast';

const Signin: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  
  const onEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if(e.target.value.includes('@') && e.target.value[e.target.value.length - 1] !== '.' && e.target.value[e.target.value.length - 1] !== '@') {
      setIsEmailValid(true);
    }else {
      setIsEmailValid(false);
    }
    console.log(e.target.value, e.target.value.length, e.target.value[e.target.value.length - 1])
  }

  const onPasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if(e.target.value.length > 0) {
      setIsPasswordValid(true);
    }else {
      setIsPasswordValid(false);
    }
  }


  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(!email || !password) {
        console.log("You can't leave any field empty")
    } else {

      if (isEmailValid && isPasswordValid) {

        if(Profiles[0].email === email && Profiles[0].password === password) {
          redirect('/dashbord');
          setEmail('');
          setPassword('');
          setIsEmailValid(false);
          setIsPasswordValid(false);
        } else {
          console.log('Invalid user login');
        }
      }
      
    }
  }

  const setPasswordVisibility = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  }


  return (
    <div className='signin'>
      <Toast />
      <Link to='/'><img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt='logo'  className='logo'/></Link>
      <div className='signin_left'>
        <img src={process.env.PUBLIC_URL + '/images/pablo.svg'} alt='illustration' className='signin_page_illustration'/>
      </div>
      <div className='signin_right'>
        <div className='signin_form_wrapper'>
          <p className='signin_welcome-text'>Welcome!</p>
          <p className='signin_welcome-subtext'>Enter details to login.</p>
          <form className='signin_form' onSubmit={(e) => onFormSubmit(e)} autoComplete='off'>
              <div className='signin_form__input-wrapper'>
                <input type='email' name='email' placeholder='Email' className='email_input' value={email} onChange={onEmailInputChange} />
              </div>
              <div className='signin_form__input-wrapper'>
                <button className='show-password_button' onClick={(e) => setPasswordVisibility(e)}>SHOW</button>
                <input type={(showPassword) ? 'text' : 'password'} name='password' placeholder='Password' className='password_input' value={password} onChange={onPasswordInputChange} />
              </div>
              <Link to='/' className='forgot-password_link'>FORGOT PASSWORD?</Link>
              <button type='submit' className={`form_submit_button ${(isEmailValid && isPasswordValid) ? 'form_submit_button_hover' : 'disabled'}`} disabled={(isEmailValid && isPasswordValid) ? false : true}>LOG IN</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signin;