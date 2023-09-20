import { NavLink } from 'react-router-dom';
const mysvg = './icons.svg#wallet'
const mysvg2 = './icons.svg#password'
// css

const Navigation = () => {
  return (
    <nav>
      <svg width="24" height="24">
        <use href={mysvg}></use>
        <br />
      </svg>
      <svg width="42" height="42">
        <use href={mysvg2} fill="purple"></use>
      </svg>
      <br />
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