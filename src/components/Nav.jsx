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
          <div className='box'>
            <NavList>
              <NavLinkStyled to='/contact'>About / Contact</NavLinkStyled>
              <NavLinkStyled to='/cv'>CV</NavLinkStyled>
            </NavList>
          </div>
        </NavContainer>
      )}
    </>
  );
};

const NavContainer = styled.nav`
  width: 100vw;
  height: 6vh;

  padding: 1rem 7rem 0 0;

  .box {
    height: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;

const NavList = styled.ul`
  list-style: none;
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
