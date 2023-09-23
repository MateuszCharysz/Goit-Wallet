import React from 'react'
import css from './LogoutModal.module.css'
import Svg from '../../utils/Svg/Svg'

const LogoutModal = () => {
  const close = () => {
    console.log('Abort logout/close modal')
  }
  const logout = () => {
    console.log('Confirm logout')
  }
  return (
    <div className={css.backdrop} data-logout>
      <div className={css.logoutModal}>
        <button onClick={close}>
          <Svg className={css.logoutClose} icon='close' stroke='#000' size='16' data-logout-close />
        </button>
        <p className={css.logoutQuestion}>Are you sure?</p>
        <ul className={css.logoutList}>
          <li><button onClick={logout}>Yes</button></li>
          <li><button onClick={close} data-logout-close>No</button></li>
        </ul>
      </div>
    </div>
  )
};

export default LogoutModal