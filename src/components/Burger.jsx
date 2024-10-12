import { Menu } from 'burger-menu';
import 'burger-menu/lib/index.css';
import React, { useState } from 'react';
import { VscMenu } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  let activeStyle = {
    textDecoration: 'underline',
  };

  return (
    <>
      <BurgerWrapper onClick={() => setIsOpen(!isOpen)}>
        <VscMenu style={{ fontSize: '1.2rem' }} />
      </BurgerWrapper>
      <Menu
        className='burger-menu'
        isOpen={isOpen}
        selectedKey={'entry'}
        onClose={() => setIsOpen(false)}
      >
        <Container className='container'>
          <StyledNav>
            <ul>
              <li>
                <NavLink
                  to='/'
                  onClick={() => setIsOpen(false)}
                  style={({ isActive }) =>
                    isActive
                      ? activeStyle
                      : {
                          textDecoration: 'none',
                        }
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/contact'
                  onClick={() => setIsOpen(false)}
                  style={({ isActive }) =>
                    isActive
                      ? activeStyle
                      : {
                          textDecoration: 'none',
                        }
                  }
                >
                  About / Contact
                </NavLink>
              </li>

              {/* Add the CV page link here */}
              <li>
                <NavLink
                  to='/cv'
                  onClick={() => setIsOpen(false)}
                  style={({ isActive }) =>
                    isActive
                      ? activeStyle
                      : {
                          textDecoration: 'none',
                        }
                  }
                >
                  CV
                </NavLink>
              </li>
            </ul>
          </StyledNav>
        </Container>
      </Menu>
    </>
  );
};

const BurgerWrapper = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 1000;
  cursor: pointer;
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

export default Burger;
