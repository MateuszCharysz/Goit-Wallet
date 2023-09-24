import React from 'react';
import { useState } from 'react';
import Input from '../Input';
import ButtonMain from '../ButtonMain';
import ButtonSecondary from '../ButtonSecondary';
import css from './LoginForm.module.css';
import { Link } from 'react-router-dom';
import Notiflix from 'notiflix';
import Svg from '../../utils/Svg/Svg';

const LoginForm = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const handleChange = ev => {
    ev.preventDefault();
    const { name, value } = ev.currentTarget;
    // console.log(ev.currentTarget.value);
    setInputs(data => ({ ...data, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email.includes('@') && email.length >= 3) {
      Notiflix.Notify.success('Email OK');
    } else {
      Notiflix.Notify.failure(
        "Email has to include '@' and be at least 3 characters long!"
      );
    }
    if (password.length >= 6 && password.length <= 12) {
      Notiflix.Notify.success('Password OK');
    } else {
      Notiflix.Notify.failure(
        'Password must be between 6-12 characters!'
      );
    }
    if (!email || !password) {
      Notiflix.Notify.warning('Fill out all fields!');
    }
    setInputs({ email: '', password: '' });
  };

  return (
    <form className={css.loginForm} onSubmit={handleSubmit}>
      <div class={css.loginInputs}>
        <Input
          className={css.loginInput}
          text={
            <div className={css.loginLabel}>
              <Svg
                className={css.icon}
                icon='email'
                fill='#e0e0e0'
                size='24'
              />
              <span>E-mail</span>
            </div>
          }
          name='email'
          type='email'
          value={inputs.email}
          onChange={handleChange}
          required
        />
        <Input
          text={
            <div className={css.loginLabel}>
              <Svg
                className={css.icon}
                icon='password'
                fill='#e0e0e0'
                size='24'
              />
              <span>Password</span>
            </div>
          }
          name='password'
          type='password'
          value={inputs.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className={css.buttons}>
        <ButtonMain
          className={css.loginBtn}
          text='LOG IN'
          type='submit'
        />
        <div className={css.spacingBt}></div>
        <Link to='/Goit-Wallet/register'>
          <ButtonSecondary text='REGISTER' />
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
