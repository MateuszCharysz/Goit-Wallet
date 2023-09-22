import React from 'react';
import Input from '../Input';
import ButtonMain from '../ButtonMain';
import ButtonSecondary from '../ButtonSecondary';
import css from './LoginForm.module.css';
import email from '../../images/email.svg';
import lock from '../../images/lock.svg';
import { Link } from 'react-router-dom';

const LoginForm = ({ submit, value, change, onClick }) => {
  return (
    <form className={css.loginForm} onSubmit={submit}>
      <Input
        text={
          <div className={css.loginLabel}>
            <img src={email} alt='email'></img>
            <span>E-mail</span>
          </div>
        }
        name='email'
        value={value}
        onChange={change}
      />
      <Input
        text={
          <div className={css.loginLabel}>
            <img src={lock} alt='lock'></img>
            <span>Password</span>
          </div>
        }
        name='password'
        value={value}
        onChange={change}
      />
      <div className={css.spacing}></div>
      <ButtonMain
        className={css.buttonLogin}
        text='LOG IN'
        onClick={onClick}
      />
      <Link to='/Goit-Wallet/register'>
        <ButtonSecondary text='REGISTER' />
      </Link>
    </form>
  );
};

export default LoginForm;
