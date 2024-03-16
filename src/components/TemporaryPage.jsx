import headerImg from "../assets/mycomet_2.svg";
import styled from "styled-components";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const TemporaryPage = () => {
  return (
    <div>
      <ImageBox>
        <img src={headerImg} alt='header image' />
      </ImageBox>
      <TextBox>
        <h2>More projects and info will be added soon...</h2>
      </TextBox>
      <IconContainer>
        <p>In the meantime, you can find me on social media:</p>
        <IconBox>
          <SocialLink
            href='https://www.linkedin.com/in/my-com%C3%A9t-520112242/?originalSubdomain=se'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin
              className='social'
              style={{ color: "#333", fontSize: "2.5rem" }}
            />
          </SocialLink>
          <SocialLink
            href='https://www.instagram.com/studiomycomet/?igshid=YmMyMTA2M2Y%3D'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram
              className='social'
              style={{
                color: "#333",
                fontSize: "2.5rem",
              }}
            />
          </SocialLink>
        </IconBox>
        <p>
          Or mail me at:
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
      </IconContainer>
    </div>
  );
};

const ImageBox = styled.div`
  width: 40vw;
  img {
    width: 100%;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 1.3rem;
    text-align: center;
    color: #101010;
    font-weight: 300;
    letter-spacing: 1px;
    @media (max-width: 720px) {
      text-align: left;
      font-size: 0.8rem;
    }
  }
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;

  @media (max-width: 720px) {
    justify-content: flex-start;
  }
`;

const TextBox = styled.div`
  width: 40vw;
  h2 {
    font-size: 1.3rem;
    text-align: center;
    color: #101010;
    font-weight: 300;
    letter-spacing: 1px;
    @media (max-width: 720px) {
      text-align: left;
      font-size: 0.8rem;
    }
  }
`;

const SocialLink = styled.a`
  //color: #fff;
  margin: 0 10px;
`;

export default TemporaryPage;
