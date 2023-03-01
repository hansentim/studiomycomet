import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const activeStyles = {
    fontSize: "1.5em",
  };

  return (
    <>
      {width < 768 ? (
        <Burger />
      ) : (
        <NavContainer>
          <NavList>
            <NavItem>
              <NavLinkStyled to='/'>Home</NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to='about'>About</NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to='contact'>Contact</NavLinkStyled>
            </NavItem>
          </NavList>
        </NavContainer>
      )}
    </>
  );
};

const NavContainer = styled.nav`
  width: 100vw;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem 2rem;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 3rem;
`;

const NavLinkStyled = styled(NavLink)`
  color: #757575;
  text-decoration: none;
  border: 1px solid transparent;
  padding: 0.5rem;
  border-radius: 5px;
  transition: border 0.2s ease-in-out;

  &.active {
    color: #333;
    border: 1px solid #333;
  }
`;

export default Nav;
