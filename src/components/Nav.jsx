import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const activeStyles = {
    fontSize: '1.5em',
  };

  return (
    <>
      {width < 768 ? (
        <Burger />
      ) : (
        <NavContainer>
          <NavWrapper>
            {/* My Comét home button on the left side */}
            <NavLinkHome to='/'>My Comét</NavLinkHome>
            {/* Other links on the right side */}
            <NavList>
              <NavLinkStyled to='/cv'>CV</NavLinkStyled>
              <NavLinkStyled to='/contact'>About / Contact</NavLinkStyled>
            </NavList>
          </NavWrapper>
        </NavContainer>
      )}
    </>
  );
};

// Styled Components for Nav
const NavContainer = styled.nav`
  width: 100vw;
  height: 6vh;
  padding: 1rem 5rem 0 0;
  margin-bottom: 2rem; /* Adds space below the navigation */
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const NavLinkHome = styled(NavLink)`
  color: #757575;
  font-size: 1.2rem;
  text-decoration: none;
  padding: 0.5rem;
  margin-left: 1rem; /* Adds the same left space as the other buttons' right space */
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

const NavLinkStyled = styled(NavLink)`
  color: #757575;
  text-decoration: none;
  border: 1px solid transparent;
  padding: 0.5rem;
  margin-left: 1rem; /* Ensures equal spacing between the buttons */
  border-radius: 5px;
  transition: border 0.2s ease-in-out;

  &.active {
    color: #333;
    border: 1px solid #333;
  }
`;

export default Nav;
