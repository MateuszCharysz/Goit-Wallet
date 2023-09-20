import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
const mysvg = './public/vite.svg'
// css

const Navigation = () => {
  return (
    <nav>
      <img src={mysvg} alt="svg"/>
        <br></br>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/diagram">
        Statistics
      </NavLink>
    </nav>
  )
};


export default Navigation