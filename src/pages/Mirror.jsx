import styled from "styled-components";
import ImageBoxDetails from "../components/ImageBoxDetails";
import { useNavigate } from "react-router-dom";

import mirrorChair from "../assets/mirror/spegel_stol.jpg";
import mirrorDetails from "../assets/mirror/spegel_details.png";
import mirrorFrame from "../assets/mirror/spegel_closeup.jpg";

function Mirror() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <ImageBoxDetails onClick={() => navigate("/home")} />
      <MirrorContainer>
        <h1>”This is Fine / Is This Fine?”</h1>
        <p>February 2023. Hand sculpted and hand painted frame with mirror.</p>
        <p>March 2023</p>

        <img src={mirrorChair} alt='designed mirror on chair' />
        <img src={mirrorDetails} alt='handpainet mirror' />
        <img src={mirrorFrame} alt='hand sculpted mirror frame' />
      </MirrorContainer>
    </Wrapper>
  );
}

const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
  medium: "1920px",
  largeScreen: "3024px",
};

const Wrapper = styled.div`
  padding: 0 1rem;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 0 3rem;
  }
`;

const MirrorContainer = styled.div`
  width: 90vw;
  justify-content: center;
  margin: 0 auto;
  padding: 0.5rem 1rem;

  h1 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    padding: 0;
  }

  p {
    font-size: 0.8rem;
    margin-bottom: 1rem;
    padding: 0;
  }

  img {
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    width: 60vw;
    padding: 0.5rem 3rem;

    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.9rem;
    }

    img {
      margin-bottom: 2rem;
    }
  }

  @media (min-width: ${breakpoints.laptop}) {
    width: 40vw;
    padding: 0.5rem 6rem;

    h1 {
      font-size: 1.8rem;
    }
  }
  @media (min-width: ${breakpoints.medium}) {
    width: 38vw;
    padding: 0.5rem 6rem;

    h1 {
      font-size: 2rem;
    }

    img {
      margin-bottom: 3rem;
    }
  }
  @media (min-width: ${breakpoints.largeScreen}) {
    width: 37vw;
    padding: 0.5rem 6rem;

    h1 {
      font-size: 4rem;
    }

    p {
      font-size: 1.5rem;
    }

    img {
      margin-bottom: 3rem;
    }
  }
`;

export default Mirror;