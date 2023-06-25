import { useEffect, useState } from "react";
import styled from "styled-components";
import { FiArrowUpCircle } from "react-icons/fi";
import { motion } from "framer-motion";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 1500) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {visible && (
        <TopButton
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          exit={{ scale: 0, opacity: 0 }}
          onClick={scrollToTop}
        >
          <FiArrowUpCircle size='2em' />
        </TopButton>
      )}
    </div>
  );
}

const TopButton = styled(motion.button)`
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 60px;
  right: 30px;
  background-color: #272727;
  color: #fff;
  border: none;
  border-radius: 50%;
  text-align: center;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  z-index: 1000;
  transition: background-color 0.3s ease;
  opacity: 0.6;

  &:hover {
    background-color: #000;
    opacity: 0.8;
  }

  svg {
    margin-top: 5px;
  }

  @media (max-width: 480px) {
    width: 38px;
    height: 38px;
    bottom: 18px;
    right: 12px;

    svg {
      margin-top: 6px;
    }
  }
`;

export default ScrollToTopButton;
