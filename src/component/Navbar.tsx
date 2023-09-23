import { useState } from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <CollapseButton toggle={isOpen} onClick={() => setIsOpen(!isOpen)}>Btn</CollapseButton>
    <NavbarContent toggle={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <QuitButtonContainer>
        <QuitButton>Quit</QuitButton>
      </QuitButtonContainer>
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
    </NavbarContent>
    </>
  )
}

export default Navbar

const NavbarContent = styled.nav`
transform: translateX(${({ toggle }) => (toggle ? "-250px" : "0")});
position: fixed;
height: 100vh;
width: 250px;
z-index: 2;
display: flex;
flex-direction: column;
background-color: #333;
transition: transform 0.3s ease-in-out;`

const CollapseButton = styled.button`
  background-color: ${({ toggle }) => (toggle ? "red" : "blue")};
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
`;

const QuitButton = styled.button`
  positon: absolute;`

const QuitButtonContainer = styled.div`
  text-align: end;
  background-color: #333;
  justify-content: flex-end;
`