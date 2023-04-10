import styled from "styled-components";
import ImageBox from "../components/ImageBox";

const About = () => {
  return (
    <>
      <Container>
        <ImageBox />
        <header>
          <p>Info coming soon...</p>
        </header>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 90vw;
  justify-content: center;
  margin: 0 auto;
  header {
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 100vw;
    padding: 1rem;
    p {
      font-size: 1rem;
    }
  }
`;

export default About;
