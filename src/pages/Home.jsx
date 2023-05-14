import { portfolioData } from "../data";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import ImageBox from ".././components/ImageBox";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, cloneElement } from "react";
import { useNavigate } from "react-router-dom";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const WipeInWhenVisible = ({ children }) => {
  const { ref, inView } = useInView();
  const [isLoaded, setIsLoaded] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView && isLoaded) {
      animation.start({
        WebkitMaskImage: visibleMask,
        maskImage: visibleMask,
      });
    }
  }, [animation, inView, isLoaded]);

  return (
    <motion.div
      ref={ref}
      initial={{ WebkitMaskImage: hiddenMask, maskImage: hiddenMask }}
      animate={animation}
      transition={{ duration: 0.8, delay: 0.7 }}
    >
      {cloneElement(children, {
        onLoad: () => setIsLoaded(true),
      })}
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
  transition: transform 0.3s ease;

  &:hover {
    transform: ${(props) => (props.clickable ? "scale(1.2)" : "none")};
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
  }
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
`;

export default Home;
