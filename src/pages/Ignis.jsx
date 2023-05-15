import ignisSvg from "../assets/ignis/IGNIS.svg";
import setDesign from "../assets/ignis/setdesignskulpturer_mindre.png";
import green from "../assets/ignis/green_set_small.png";
import orange from "../assets/ignis/frilagt_orange_ljus.png";
import ignis2023 from "../assets/ignis/Ignis2023_mindre.png";
import moodboard from "../assets/ignis/moodboard_emo2_frilagd_liten.png";
import collection from "../assets/ignis/frilagda_ljus.png";
import { useNavigate } from "react-router-dom";
import ImageBoxDetails from "../components/ImageBoxDetails";

import styled from "styled-components";

function Ignis() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <ImageBoxDetails
        onClick={() => {
          window.scrollTo(0, 0);
          navigate("/home");
        }}
      />
      <InnerWrapper>
        <div className='box-one'>
          <div className='svg-wrapper'>
            <img className='logo' src={ignisSvg} alt='logo that reads ignis' />
          </div>
          <img src={setDesign} alt='setdesign candles' />
        </div>
        <div className='box-two'>
          <img src={green} alt='handmade candle' />
          <img className='orange' src={orange} alt='orange handmade candle' />
        </div>

        <Main>
          <img src={ignis2023} alt='poster of cowork setdesign and candles' />
          <img src={moodboard} alt='set design' />
          <img src={collection} alt='collection of candles setdesign' />
        </Main>
        <Details>
          <h1>"Ignis</h1>
          <p>
            ”Ignis is a collaboration between designers Sophie Appelbäck and My
            Comét. This sculptural design project is crafted with materials that
            create a controversy in terms of their practical use - where fire is
            normally involved. Sophie Appelbäck created hand-tied sculptured
            candleholders out of rope, where every sculpture has their own
            unique look and size. My Comét made conceptual hand-carved candles,
            where it takes approximately the same time to carve them, as it does
            for them to burn out - changing their form in the process. In this
            collaboration, where candle and candleholder is the natural
            combination, this match is creating something new, with an ambiguous
            approach. Where sculpture meets sculpture - creating creatures,
            inhabiting their given space.” Set design, candles, props,
            photography, graphic design by My Comét Candleholders by Sophie
            Appelbäck (länk) February 2023
          </p>
        </Details>
      </InnerWrapper>
    </Wrapper>
  );
}

const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
  largeScreen: "3024px",
};

const Wrapper = styled.div`
  padding: 0 3rem;
`;

const InnerWrapper = styled.div`
  width: 70vw;
  justify-content: center;
  margin: 0 auto;
  background-color: pink;

  .box-one {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    margin-bottom: 5rem;

    .svg-wrapper {
      display: flex;
      align-items: center;
    }

    img {
      width: 100%;
      height: auto;
    }
  }

  .box-two {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5rem;
    margin-bottom: 5rem;

    img {
      width: 100%;
      height: auto;
    }

    .orange {
      width: 66%;
      height: auto;
    }
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
  }
`;

const Details = styled.div``;

export default Ignis;
