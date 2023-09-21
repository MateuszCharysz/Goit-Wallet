import { NavLink } from 'react-router-dom';
import Svg from '../../utils/Svg/Svg';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/">
        <Svg class={'home'} icon='home' fill='#4A56E2' size='44' />
        <p className="text">Home</p>
      </NavLink>
      <NavLink to="/diagram">
        <Svg class='diagram' icon='diagram' fill='#4A56E2' size='44' />
        <p className="text">Statistics</p>
      </NavLink>
      <NavLink to="/currency">
        <Svg class='currency' icon='currency' fill='#4A56E2' size='44' />
      </NavLink>
    </nav>
  )
};

export default Navigation