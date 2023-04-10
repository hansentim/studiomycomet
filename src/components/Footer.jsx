import styled from "styled-components";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterText>
          &copy; {new Date().getFullYear()} - Studio My Comét
        </FooterText>
        <div>
          <SocialLink
            href='https://www.linkedin.com/in/my-com%C3%A9t-520112242/?originalSubdomain=se'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin style={{ color: "#333", fontSize: "1.5rem" }} />
          </SocialLink>
          <SocialLink
            href='https://www.instagram.com/studiomycomet/?igshid=YmMyMTA2M2Y%3D'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram style={{ color: "#333", fontSize: "1.5rem" }} />
          </SocialLink>
        </div>
      </FooterContainer>
    </FooterWrapper>
  );
};
const FooterWrapper = styled.div`
  margin-top: auto;
`;

const FooterContainer = styled.footer`
  background-color: #fff;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 50px;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 60px;
    padding: 0 10px;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

const SocialLink = styled.a`
  color: #fff;
  margin: 0 10px;
`;

export default Footer;
