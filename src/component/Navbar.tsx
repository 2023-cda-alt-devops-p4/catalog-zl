import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiAlignLeft, FiX } from "react-icons/fi";
import { FcHome, FcParallelTasks, FcServices } from "react-icons/fc";
import styled from "styled-components";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <CollapseButton
        $toggle={isOpen.toString()}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiAlignLeft size="3em" color="#FFF" />
      </CollapseButton>
      <NavbarContent
        $toggle={isOpen.toString()}
        onClick={() => setIsOpen(!isOpen)}
      >
        <QuitButtonContainer>
          <QuitButton
            $toggle={isOpen.toString()}
            onClick={() => setIsOpen(!isOpen)}
          >
            <FiX size="2.5em" color="#fff" />
          </QuitButton>
        </QuitButtonContainer>
        <NavLinkStyle
          to={"/"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FcHome size="2em" className="icon" />
          <p>Home</p>
        </NavLinkStyle>
        <NavLinkStyle
          to={"/UML"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FcParallelTasks size="2em" className="icon" />
          <p>UML</p>
        </NavLinkStyle>
        <NavLinkStyle
          to={"/Merise"}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FcServices size="2em" className="icon" />
          <p>Merise</p>
        </NavLinkStyle>
      </NavbarContent>
    </>
  );
};

export default Navbar;

const NavbarContent = styled.nav<{ $toggle: string }>`
  transform: translateX(
    ${({ $toggle }) => ($toggle === "true" ? "0" : "-170px")}
  );
  position: fixed;
  height: 100vh;
  width: 250px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  background-color: #333;
  transition: transform 0.2s ease-in-out;

  @media (max-width: 1160px) {
    transform: translateX(
      ${({ $toggle }) => ($toggle === "true" ? "0" : "-250px")}
    );
  }
`;

const CollapseButton = styled.button<{ $toggle: string }>`
  visibility: ${({ $toggle }) => ($toggle === "true" ? "hidden" : "visible")};
  opacity: ${({ $toggle }) => ($toggle === "true" ? "0" : "1")};
  background: none;
  border: none;
  position: absolute;
  top: 35px;
  left: 20px;
  z-index: 10;
  transition: visibility 0s, opacity 0.5s ease-in;
`;

const QuitButton = styled.button<{ $toggle: string }>`
  visibility: ${({ $toggle }) => ($toggle === "true" ? "visible" : "hidden")};
  positon: absolute;
  margin-top: 20px;
  margin-right: 20px;
  background: none;
  border: none;
`;

const QuitButtonContainer = styled.div`
  text-align: end;
  background-color: #333;
  justify-content: flex-end;
`;

const NavLinkStyle = styled(NavLink)`
  width: fit-content;
  color: #a1a1a1;
  text-decoration: none;
  margin: 2em 2em;
  display: flex;
  align-items: center;
  &:hover {
    color: white;
  }
  &.active {
    color: white;
    font-weight: bold;
  }
  .icon {
    margin-right: 1em;
  }
`;
