import { Menu } from 'burger-menu';
import 'burger-menu/lib/index.css';
import React, { useState } from 'react';
import { VscMenu } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavWrapper>
        {/* My Comét on the left side */}
        {!isOpen && <CometLabel>My Comét</CometLabel>}

        {/* Burger menu icon on the right side */}
        <BurgerWrapper>
          <VscMenu
            style={{ fontSize: '1.5rem', cursor: 'pointer' }}
            onClick={() => setIsOpen(!isOpen)}
          />
        </BurgerWrapper>
      </NavWrapper>

      <Menu
        className='burger-menu'
        isOpen={isOpen}
        selectedKey={'entry'}
        onClose={() => setIsOpen(false)}
      >
        <Container>
          <StyledNav>
            <ul>
              <li>
                <NavLinkStyled to='/' onClick={() => setIsOpen(false)}>
                  Home
                </NavLinkStyled>
              </li>
              <li>
                <NavLinkStyled to='/contact' onClick={() => setIsOpen(false)}>
                  About / Contact
                </NavLinkStyled>
              </li>
              <li>
                <NavLinkStyled to='/cv' onClick={() => setIsOpen(false)}>
                  CV
                </NavLinkStyled>
              </li>
            </ul>
          </StyledNav>
        </Container>
      </Menu>
    </>
  );
};

// Styled components

const NavWrapper = styled.div`
  position: fixed;
  top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between; /* Space between the label and the burger icon */
  align-items: center;
  padding: 0 1rem;
  z-index: 1000;
`;

const BurgerWrapper = styled.div`
  cursor: pointer;
`;

const CometLabel = styled.span`
  color: #757575;
  font-size: 0%.9;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  height: 100vh;
`;

const StyledNav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      margin: 0.5rem 0;
      a {
        text-decoration: none;
        color: #222;
        font-size: 1.5rem;
      }
    }
  }
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #222;
  font-size: 1.5rem;
  &.active {
    text-decoration: underline;
  }
`;

export default Burger;
