import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import Stjarna from "../assets/book/uppslag_stjarna.jpg";
import HanderMagi from "../assets/book/uppslag_hander_magi.jpg";
import Berg from "../assets/book/uppslag_berg.jpg";
import Gemenskap from "../assets/book/uppslag_gemenskap.jpg";
import HanderOga from "../assets/book/uppslag_hander_oga.jpg";
import Trapphus from "../assets/book/uppslag_trapphus.jpg";

const fadeIn = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
  transition: { duration: 0.6 },
};

const FadeInWhenVisible = ({ children }) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={animation}
      variants={fadeIn}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

function Prints() {
  return (
    <>
      <PrintContainer>
        <FadeInWhenVisible>
          <img className='book-images' src={Stjarna} alt='illustration-star' />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <img className='book-images' src={Trapphus} alt='illustration-star' />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <img className='book-images' src={Berg} alt='illustration-star' />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <img
            className='book-images'
            src={Gemenskap}
            alt='illustration-star'
          />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <img
            className='book-images'
            src={HanderOga}
            alt='illustration-star'
          />
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <img
            className='book-images'
            src={HanderMagi}
            alt='illustration-star'
          />
        </FadeInWhenVisible>
      </PrintContainer>
    </>
  );
}

const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
  largeScreen: "3024px",
};

const PrintContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  margin-bottom: 5rem;

  .book-images {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${breakpoints.mobile}) {
    //grid-template-columns: 1fr;
    grid-gap: 0.5rem;
  }
`;

export default Prints;
