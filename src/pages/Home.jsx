import { useNavigate } from "react-router-dom";
import { portfolioData } from "../data";
import styled from "styled-components";
import headerImg from "../assets/mycomet_2.svg";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import "tippy.js/themes/translucent.css";
import "tippy.js/themes/light.css";
import TemporaryPage from "../components/TemporaryPage";

function Home() {
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate(`/detailedinfo/${item.id}`);
  };

  return (
    <HomeWrapper>
      {/* <ImageBox>
        <img src={headerImg} alt='header image' />
      </ImageBox>
      <PortfolioContainer>
        {portfolioData.map((item, index) => (
          <PortfolioItem key={item.id} onClick={() => handleClick(item)}>
            <Tippy
              theme='light'
              animation='scale'
              arrow={false}
              content={
                <StyledTippyContainer>{item.title}</StyledTippyContainer>
              }
            >
              <StyledImage
                src={item.image}
                alt={item.title}
                style={item.style}
              />
            </Tippy>
          </PortfolioItem>
        ))}
      </PortfolioContainer> */}
      <div className='header'>
        <TemporaryPage />
      </div>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  width: 90vw;
  justify-content: center;
  margin: 0 auto;
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
  }
`;

const PortfolioContainer = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  @media (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const PortfolioItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const StyledImage = styled.img`
  /* max-width: 400px; */
  margin-bottom: 50px;

  @media (max-width: 720px) {
    max-width: 100%;
    margin-bottom: 20px;
    padding-bottom: 0;
  }
`;

const ImageBox = styled.div`
  width: 20%;
`;

const StyledTippyContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  color: #333;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
`;

export default Home;
