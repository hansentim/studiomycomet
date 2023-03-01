import { Menu, SubMenu, Item } from "burger-menu";
import "burger-menu/lib/index.css";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)}>
        <BiMenu style={{ fontSize: "2rem" }} />
      </div>
      <Menu
        className='burger-menu'
        isOpen={isOpen}
        selectedKey={"entry"}
        onClose={() => setIsOpen(false)}
      >
        <div
          className='container'
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <nav>
            <ul>
              <li>
                <NavLink
                  to='/'
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='about'
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to='contact'>
                  {({ isActive }) => (
                    <span className={isActive ? activeClassName : undefined}>
                      Contact
                    </span>
                  )}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </Menu>
    </>
  );
};

export default Burger;
