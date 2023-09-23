import React from 'react';
import { useState } from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import logo from '../images/logo.svg';
import css from '../components/LoginForm/LoginForm.module.css';
import Notiflix from 'notiflix';

const Login = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState('');

  // const handleSubmit = ev => {
  //   console.log('login submit');
  //   ev.preventDefault();
  // }
  //   if (email && password) {
  //     setEmail('');
  //     setPassword('');
  //   } else {
  //     error;
  //     setError({
  //       email: !validation.email,
  //       password: !validation.password,
  //     });
  //   }
  // };

  // const validation = () => {
  //   if (email.indexOf('@') !== -1 && email.length > 3) {
  //     setEmail(ev.target.value);
  //   } else {
  //     Notiflix.Notify.warning(
  //       "Email must include '@' and be at least 3 letters long!"
  //     );
  //     setEmail('');
  //   }

  //   if (password.length >= 6 && password.length < 12) {
  //     setPassword(ev.target.value);
  //   } else {
  //     Notiflix.Notify.warning(
  //       'Password must be min 6 and max 12 letters long!'
  //     );
  //     setPassword('');
  //   }
  // };

  return (
    <>
      <div className={css.logoContainer}>
        <img
          className={css.logo}
          src={logo}
          alt='wallet-logo'></img>
      </div>
      <LoginForm />
    </>
  );
};

export default Login;
