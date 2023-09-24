import { NavLink, Outlet } from 'react-router-dom';
import Svg from '../../utils/Svg/Svg';
import css from './Navigation.module.css';
import { Suspense } from 'react';

const Navigation = () => {
  return (
    <nav>
      <ul className={css.navList}>
        <li>
          <NavLink to="" className={css.navLink}>
            <Svg className={css.icon} icon="home" fill="#6E78E8" size="44" />
            <p className={css.text}>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="diagram" className={css.navLink}>
            <Svg className={css.icon} icon="diagram" fill="#6E78E8" size="44" />
            <p className={css.text}>Statistics</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="currency" className={css.navLink}>
            <Svg
              className={css.icon}
              icon="currency"
              fill="#6E78E8"
              size="44"
            />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation