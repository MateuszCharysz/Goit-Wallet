import React from 'react';
import css from './RegistrationForm.module.css';
import Input from '../Input';
import ButtonMain from '../ButtonMain';
import ButtonSecondary from '../ButtonSecondary';
import email from '../../images/email.svg';
import lock from '../../images/lock.svg';
import user from '../../images/user.svg';
import { Link } from 'react-router-dom';

const RegistrationForm = ({
  submit,
  value,
  change,
}) => {
  return (
    <form className={css.registerForm} onSubmit={submit}>
      <Input
        text={
          <div className={css.registerLabel}>
            <img src={email} alt='email'></img>
            <span>E-mail</span>
          </div>
        }
        value={value}
        onChange={change}
      />
      <Input
        text={
          <div className={css.registerLabel}>
            <img src={lock} alt='lock'></img>
            <span>Password</span>
          </div>
        }
        value={value}
        onChange={change}
      />
      <Input
        text={
          <div className={css.registerLabel}>
            <img src={lock} alt='lock'></img>
            <span>Confirm Password</span>
          </div>
        }
        value={value}
        onChange={change}
      />
      <Input
        text={
          <div className={css.registerLabel}>
            <img src={user} alt='user'></img>
            <span>First Name</span>
          </div>
        }
        value={value}
        onChange={change}
      />
      <div className={css.spacingIn}></div>
      <div className={css.buttons}>
        <ButtonMain text='REGISTER' type='submit' />
        <div className={css.spacingBt}></div>
        <Link to='/Goit-Wallet/login'>
          <ButtonSecondary text='LOG IN' />
        </Link>
      </div>
    </form>
  );
};

export default RegistrationForm;
