import React from 'react';
import { useState } from 'react';
import css from './RegistrationForm.module.css';
import Input from '../Input';
import ButtonMain from '../ButtonMain';
import ButtonSecondary from '../ButtonSecondary';
import { Link } from 'react-router-dom';
import Notiflix from 'notiflix';
import Svg from '../../utils/Svg/Svg';

const RegistrationForm = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    confirm: '',
    name: '',
  });

  const handleChange = ev => {
    ev.preventDefault();
    const { name, value } = ev.currentTarget;
    setInputs(data => ({ ...data, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const confirm = form.elements.confirm.value;
    const name = form.elements.name.value;

    if (email.includes('@') && email.length >= 3) {
      Notiflix.Notify.success('Email OK');
    } else {
      Notiflix.Notify.failure(
        'Email has to include "@" and be at least 3 characters long!'
      );
    }
    if (password.length >= 6 && password.length <= 12) {
      Notiflix.Notify.success('Password OK');
    } else {
      Notiflix.Notify.failure(
        'Password must be between 6-12 characters!'
      );
    }
    if (confirm === password) {
      Notiflix.Notify.success('Password OK');
    } else {
      Notiflix.Notify.failure('Passwords need to match!');
    }
    if (name.length > 0) {
      Notiflix.Notify.success('Name OK');
    } else {
      Notiflix.Notify.failure('Enter name!');
    }
    if (!email || !password || !confirm || !name) {
      Notiflix.Notify.warning('Fill out all fields!');
    } else {
      Notiflix.Notify.success('Form submitted!');
    }
    setInputs({
      email: '',
      password: '',
      confirm: '',
      name: '',
    });
  };
  return (
    <form
      className={css.registerForm}
      onSubmit={handleSubmit}>
      <div class={css.registerInputs}>
        <Input
          text={
            <div className={css.registerLabel}>
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
            <div className={css.registerLabel}>
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
        <Input
          text={
            <div className={css.registerLabel}>
              <Svg
                className={css.icon}
                icon='password'
                fill='#e0e0e0'
                size='24'
              />
              <span>Confirm Password</span>
            </div>
          }
          name='confirm'
          type='password'
          value={inputs.confirm}
          onChange={handleChange}
          required
        />
        <Input
          text={
            <div className={css.registerLabel}>
              <Svg
                className={css.icon}
                icon='name'
                fill='#e0e0e0'
                size='24'
              />
              <span>First Name</span>
            </div>
          }
          name='name'
          type='text'
          value={inputs.name}
          onChange={handleChange}
          required
        />
      </div>
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
