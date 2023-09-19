import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <div>
        <NavLink 

          to={'/'} 
          className={({ isActive }) =>
          isActive ? "navlink active" : "navlink"
          }>
            Home
        </NavLink>
        <NavLink 
          to={'/uml'} 
          className={({ isActive }) =>
          isActive ? "navlink active" : "navlink"
          }>
            UML
        </NavLink>
        <NavLink 
          to={'/merise'} 
          className={({ isActive }) =>
          isActive ? "navlink active" : "navlink"
          }>
            Merise
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar