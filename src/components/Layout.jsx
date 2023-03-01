import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className='App'>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
