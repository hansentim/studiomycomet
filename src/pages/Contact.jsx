import styled from "styled-components";
import ImageBox from "../components/ImageBox";

const Contact = () => {
  return (
    <>
      <Container>
        <ImageBox />
        <header>
          <p style={{ marginBottom: "2rem" }}>More Info coming soon...</p>
          <p className='mail'>
            Contact me at:
            <a
              style={{
                color: "#333",
                textDecoration: "none",
                fontWeight: "bold",
                paddingLeft: "5px",
              }}
              href='mailto:studiomycomet@gmail.com'
            >
              Studio My Comét
            </a>
          </p>
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  p {
    font-size: 1.5rem;
  }

  .mail {
    font-size: 1.8rem;
    text-align: center;
    color: #101010;
    font-weight: 300;
    letter-spacing: 1px;
    @media (max-width: 720px) {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 768px) {
    width: 100vw;
    padding: 1rem;
    p {
      font-size: 1rem;
    }
  }
`;

export default Contact;
