import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useAuth from '../../hook/useAuth';
import css from './RegistrationForm.module.css';
import Input from '../Input';
import ButtonMain from '../ButtonMain';
import ButtonSecondary from '../ButtonSecondary';
import { Link } from 'react-router-dom';
import { register } from '../../redux/auth/actions';
import Notiflix from 'notiflix';
import Svg from '../../utils/Svg/Svg';

const RegistrationForm = () => {
  const { isRegistered } = useAuth();
  const [confirmPass, setConfirmPass] = useState(false);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    confirm: '',
    name: '',
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (isRegistered) {
      setConfirmPass(false);
    }
  }, [isRegistered]);

  const handleChange = ev => {
    ev.preventDefault();
    const { name, value } = ev.currentTarget;
    setInputs(data => ({ ...data, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    const confirm = form.elements.confirm.value.trim();
    const name = form.elements.name.value.trim();

    if (
      !email.match(
        /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/
      )
    ) {
      return Notiflix.Notify.failure('Enter valid e-mail');
    }
    if (password.length < 6 || password.length > 12) {
      return Notiflix.Notify.failure(
        'Password must be between 6-12 characters'
      );
    }
    if (confirm !== password) {
      setConfirmPass(false);
      return Notiflix.Notify.failure(
        'Passwords need to match'
      );
    } else if (confirm === password) {
      setConfirmPass(true);
    }
    if (!name.length) {
      return Notiflix.Notify.failure('Enter name');
    }

    Notiflix.Notify.success(
      'Registration successful, please check your e-mail for confirmation'
    );

    dispatch(
      register({
        username: inputs.name,
        email: inputs.email,
        password: inputs.password,
      })
    );

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
      <div className={css.registerInputs}>
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
        {confirmPass ? (
          <div className={css.confirmPass}></div>
        ) : null}
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
        <Link to="/Goit-Wallet/">
          <ButtonSecondary text="LOG IN" />
        </Link>
      </div>
    </form>
  );
};

export default RegistrationForm;
