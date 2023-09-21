import { NavLink } from 'react-router-dom';
import Svg from '../../utils/Svg/Svg';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={({ isActive }) => (isActive ? css.active : css.inactive)}>
        <Svg className={css.icon}
          icon='home'
          fill='#6E78E8'
          size='44' />
        <p className={css.text}>Home</p>
      </NavLink>
      <NavLink to="/diagram" className={css.navLink}>
        <Svg className={css.icon}
          icon='diagram'
          fill='#6E78E8'
          size='44' />
        <p className={css.text}>Statistics</p>
      </NavLink>
      <NavLink to="/currency" className={css.navLink}>
        <Svg className={css.icon}
          icon='currency'
          fill='#6E78E8'
          size='44' />
      </NavLink>
    </nav>
  )
};

export default Navigation