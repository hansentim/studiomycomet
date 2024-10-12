import styled from 'styled-components';
import ImageBox from '../components/ImageBox';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
      <Container>
        <ImageBox />
        <header>
          <p style={{ marginBottom: '2rem' }}>More Info coming soon...</p>
          <p className='mail'>
            Mail me at:
            <a
              style={{
                color: '#333',
                textDecoration: 'none',
                fontWeight: 'bold',
                paddingLeft: '5px',
              }}
              href='mailto:studiomycomet@gmail.com'
            >
              Studio My Comét
            </a>
          </p>
          {/* Social Media Links */}
          <div style={{ marginTop: '20px' }}>
            <SocialLink
              href='https://www.instagram.com/studiomycomet/?igshid=YmMyMTA2M2Y%3D'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagram style={{ color: '#333' }} />
            </SocialLink>
            <SocialLink
              href='https://www.linkedin.com/in/my-com%C3%A9t-520112242/?originalSubdomain=se'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin style={{ color: '#333' }} />
            </SocialLink>
          </div>
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

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;

  svg {
    color: #333;
    font-size: 2.5rem; /* Default size */

    @media (max-width: 768px) {
      font-size: 2rem; /* Smaller size for screens less than 768px wide */
    }
  }
`;

export default Contact;
