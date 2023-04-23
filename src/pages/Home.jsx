import { portfolioData } from "../data";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import ImageBox from ".././components/ImageBox";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const fadeIn = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
  transition: { duration: 0.6 },
};

function Home() {
  const navigate = useNavigate();

  const handleImageClick = (route) => {
    navigate(route);
  };

  return (
    <HomeWrapper>
      <ImageBox />
      <Marquee
        style={{ marginBottom: "2.5rem" }}
        pauseOnHover={true}
        gradient={false}
        speed={50}
      >
        <p style={{ fontSize: "1rem" }}>
          {" "}
          This site is under construction. More info about the projects will be
          added soon... In the meantime, you can find me on social media or send
          me an email at{" "}
          <span style={{ fontWeight: "600" }}>studiomycomet@gmail.com</span> -
        </p>
      </Marquee>
      <PortfolioContainer>
        {portfolioData.map((item, index) => (
          <ItemContainer key={item.id}>
            <FadeInWhenVisible>
              <StyledImage
                src={item.image}
                alt={item.title}
                style={item.style}
                onClick={() => handleImageClick(item.route)}
              />
            </FadeInWhenVisible>
          </ItemContainer>
        ))}
      </PortfolioContainer>
      <div className='header'></div>
    </HomeWrapper>
  );
}

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

const StyledImage = styled.img`
  width: 100%;
  height: 55vh;
  object-fit: contain;
  @media (max-width: 768px) {
    height: 60vh;
  }
`;

const HomeWrapper = styled.div`
  width: 90vw;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100vw;
    padding: 1rem;
  }
`;

const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
`;

export default Home;
