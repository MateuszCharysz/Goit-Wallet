import React from 'react';
import css from './LogoutModal.module.css';
import Svg from '../../utils/Svg/Svg';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/actions';

const LogoutModal = () => {
  const dispatch = useDispatch();
  const close = () => {
    console.log('Abort logout/close modal')
  }
  return (
    <div className={css.backdrop} data-logout onClick={close}>
      <div className={css.logoutModal}>
        <button onClick={close}>
          <Svg className={css.logoutClose} icon='close' stroke='#000' size='16' data-logout-close />
        </button>
        <p className={css.logoutQuestion}>Are you sure?</p>
        <ul className={css.logoutList}>
          <li><button onClick={() => dispatch(logout())}>Yes</button></li>
          <li><button onClick={close} data-logout-close>No</button></li>
        </ul>
      </div>
    </div>
  )
};

export default LogoutModal

// const teamModal = document.querySelector('[data-team]');
// const teamOpen = document.querySelector('[data-team-open]');
// const teamClose = document.querySelector('[data-team-close]');
// console.log(teamClose, teamModal, teamOpen);


// teamOpen.addEventListener("click", () => {
//     teamModal.classList.remove('team-hidden');
//     teamClose.classList.remove('is-hidden--x');
//     document.addEventListener('click', backdropClose);
//     teamClose.addEventListener("click", closeTeam);
// })

// const closeTeam = () => {
//         teamModal.classList.add('team-hidden');
//         teamClose.classList.add('is-hidden--x');
// };
// const backdropClose = () => {
//     document.addEventListener('click', (e) => {
//         if (e.target.classList.contains('team-backdrop')) {
//             closeTeam();
//             document.removeEventListener('click', backdropClose);
//         }
//     })
// };