import React from 'react';
import { useState } from 'react';
import css from './RegistrationForm.module.css';
import Input from '../Input';
import ButtonMain from '../ButtonMain';
import ButtonSecondary from '../ButtonSecondary';
import email from '../../images/email.svg';
import lock from '../../images/lock.svg';
import user from '../../images/user.svg';
import { Link } from 'react-router-dom';
import Notiflix from 'notiflix';

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

    if (password.length >= 6 && password.length <= 12) {
      console.log('pswrd ok');
    } else {
      console.log('pswrd bad');
    }
    if (email.includes('@') && email.length >= 3) {
      console.log('email ok');
    } else {
      console.log('email bad');
    }
    if (confirm === password) {
      console.log('confirm ok');
    } else {
      console.log('confirm not matching');
    }
    if (name.length > 0) {
      console.log('name ok');
    } else {
      console.log('enter name');
    }
    if (!email || !password || !confirm || !name) {
      console.log('fill out empty fields!');
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
      <Input
        text={
          <div className={css.registerLabel}>
            <img src={email} alt='email'></img>
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
            <img src={lock} alt='lock'></img>
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
            <img src={lock} alt='lock'></img>
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
            <img src={user} alt='user'></img>
            <span>First Name</span>
          </div>
        }
        name='name'
        type='text'
        value={inputs.name}
        onChange={handleChange}
        required
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
