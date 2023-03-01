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
            href='https://linkedin.com/example-username'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin style={{ color: "#333", fontSize: "1.5rem" }} />
          </SocialLink>
          <SocialLink
            href='https://instagram.com/example-username'
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
  background-color: #f2f2f2;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 50px;
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
