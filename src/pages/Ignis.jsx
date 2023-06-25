import ignisSvg from "../assets/ignis/IGNIS.svg";
import setDesign from "../assets/ignis/setdesignskulpturer_mindre.png";
import green from "../assets/ignis/green_set_small.png";
import orange from "../assets/ignis/frilagt_orange_ljus.png";
import ignis2023 from "../assets/ignis/Ignis2023_mindre.png";
import moodboard from "../assets/ignis/moodboard_emo2_frilagd_liten.png";
import collection from "../assets/ignis/frilagda_ljus.png";
import { useNavigate } from "react-router-dom";
import ImageBoxDetails from "../components/ImageBoxDetails";
import { useEffect, useState, cloneElement } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/hind-madurai";

import styled from "styled-components";

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
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {cloneElement(children, {
        onLoad: () => setIsLoaded(true),
      })}
    </motion.div>
  );
};

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
          <WipeInWhenVisible>
            <img src={setDesign} alt='setdesign candles' />
          </WipeInWhenVisible>
        </div>
        <WipeInWhenVisible>
          <div className='box-two'>
            <img src={green} alt='handmade candle' />
            <img className='orange' src={orange} alt='orange handmade candle' />
          </div>
        </WipeInWhenVisible>
        <WipeInWhenVisible>
          <Main>
            <img src={ignis2023} alt='poster of cowork setdesign and candles' />
            <img src={moodboard} alt='set design' />
            <img src={collection} alt='collection of candles setdesign' />
          </Main>
        </WipeInWhenVisible>
        <Details>
          <h1>"Ignis"</h1>
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
            photography, graphic design by My Comét. Candleholders by{" "}
            <a
              href='https://www.sophieappelback.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              {" "}
              Sophie Appelbäck{" "}
            </a>{" "}
            <br /> February 2023{" "}
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
  @media (max-width: ${breakpoints.laptop}) {
    padding: 0 2rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 1rem;
  }
`;

const InnerWrapper = styled.div`
  width: 70vw;
  justify-content: center;
  margin: 0 auto;

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
  @media (max-width: ${breakpoints.laptop}) {
    width: 80vw;

    .box-one,
    .box-two {
      grid-template-columns: 1fr;
    }

    .box-two .orange {
      width: 100%;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 90vw;
    .box-two .orange {
      width: 80%;
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

const Details = styled.div`
  h1 {
    font-size: 2.5rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    margin: 2rem 0;
  }
  p {
    font-size: 1.2rem;
    font-family: "Hind Madurai", sans-serif;
    font-weight: 400;
    line-height: 1.5rem;
    margin-bottom: 5rem;
    a {
      color: #000;
      text-decoration: none;
      border-bottom: 1px solid #000;
      padding-left: 2px;
    }
  }

  @media (max-width: ${breakpoints.laptop}) {
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.2rem;
      line-height: 1.7rem;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export default Ignis;
