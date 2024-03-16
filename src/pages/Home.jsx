import { portfolioData } from "../data";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import ImageBox from ".././components/ImageBox";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WipeInWhenVisible = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      transition={{ duration: 0.8, delay: 0 }}
    >
      {children}
    </motion.div>
  );
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
        speed={100}
      >
        <p style={{ fontSize: "1rem" }}>
          {" "}
          More projects and info will be added soon... In the meantime, you can
          find me on social media (studiocomet on Instagram) or send me an email
          at <span style={{ fontWeight: "600" }}>
            studiomycomet@gmail.com
          </span>{" "}
          -
        </p>
      </Marquee>
      <PortfolioContainer>
        {portfolioData.map((item, index) => (
          <ItemContainer key={item.id}>
            <WipeInWhenVisible>
              <StyledImage
                src={item.image}
                alt={item.title}
                style={item.style}
                onClick={() => item.route && handleImageClick(item.route)}
                clickable={!!item.route}
              />
            </WipeInWhenVisible>
          </ItemContainer>
        ))}
      </PortfolioContainer>
      <div className='header'></div>
    </HomeWrapper>
  );
}

const StyledImage = styled.img`
  width: 100%;
  height: 55vh;
  object-fit: contain;
  cursor: ${(props) => (props.clickable ? "pointer" : "default")};
  transition: opacity 0.3s ease; /* Smooth transition for the opacity change */

  &:hover {
    opacity: 0.7; /* Fade out the image a bit to make it look dimmer */
  }

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
    gap: 2rem;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
`;

export default Home;
