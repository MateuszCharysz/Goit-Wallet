import React from 'react';
import Input from '../Input';
import ButtonMain from '../ButtonMain';
import ButtonSecondary from '../ButtonSecondary';
import css from './LoginForm.module.css';
import email from '../../images/email.svg';
import lock from '../../images/lock.svg';

const LoginForm = ({ submit, value, change, click }) => {
  return (
    <form className={css.loginForm} onSubmit={submit}>
      <Input
        text={
          <div className={css.loginLabel}>
            <img src={email} alt='email'></img>
            <span>E-mail</span>
          </div>
        }
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
        value={value}
        onChange={change}
      />
      <ButtonMain text='LOG IN' onClick={click} />
      <ButtonSecondary text='REGISTER' onClick={click} />
    </form>
  );
};

export default LoginForm;
