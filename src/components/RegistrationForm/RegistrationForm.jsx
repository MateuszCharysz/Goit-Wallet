import React from 'react';
import css from './RegistrationForm.module.css';
import Input from '../Input';
import ButtonMain from '../ButtonMain';
import ButtonSecondary from '../ButtonSecondary';
import email from '../../images/email.svg';
import lock from '../../images/lock.svg';

const RegistrationForm = ({
  submit,
  value,
  change,
  click,
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
            <img src={lock} alt='lock'></img>
            <span>First Name</span>
          </div>
        }
        value={value}
        onChange={change}
      />

      <ButtonMain text='REGISTER' onClick={click} />
      <ButtonSecondary text='LOG IN' onClick={click} />
    </form>
  );
};

export default RegistrationForm;
