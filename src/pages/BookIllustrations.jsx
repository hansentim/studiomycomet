import Stjarnskott from '../assets/book/Print_A_stjarnskott_LITEN.jpg';
import Trappor from '../assets/book/PrintA_trappor_LITEN.jpg';
import Berg from '../assets/book/Berg.jpg';
import Gemenskap from '../assets/book/Gemenskap.jpg';
import HandOga from '../assets/book/HandOga.jpg';
import HanderMagi from '../assets/book/HanderMagi.jpg';
import ImageBoxDetails from '../components/ImageBoxDetails';
import { useNavigate } from 'react-router-dom';
import Prints from '../components/Prints';
import styled from 'styled-components';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/hind-madurai';

function BookIllustrations() {
  const navigate = useNavigate();

  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <h1>
          Illustrations for the book <br /> ”Patterns of Light and Dark”
        </h1>
        <p className='subtitle'>
          Commissioned work to create six illustrations, one for each chapter,
          for the book ”Patterns of Light and Dark”.
        </p>
        <p className='second-subtitle'>
          Customer: Media Evolution, Malmö March 2023
        </p>

        <ImageWrapper>
          <div>
            <img
              className='header-images'
              src={Stjarnskott}
              alt='illustration-star'
              onContextMenu={handleContextMenu}
            />
          </div>
          <div>
            <img
              className='header-images'
              src={Trappor}
              alt='illustration-star'
              onContextMenu={handleContextMenu}
            />
          </div>
          <div>
            <img
              className='header-images'
              src={Berg}
              alt='illustration-star'
              onContextMenu={handleContextMenu}
            />
          </div>
          <div>
            <img
              className='header-images'
              src={Gemenskap}
              alt='illustration-star'
              onContextMenu={handleContextMenu}
            />
          </div>
          <div>
            <img
              className='header-images'
              src={HandOga}
              alt='illustration-star'
              onContextMenu={handleContextMenu}
            />
          </div>
          <div>
            <img
              className='header-images'
              src={HanderMagi}
              alt='illustration-star'
              onContextMenu={handleContextMenu}
            />
          </div>
        </ImageWrapper>
        <p className='layout-info'>
          Spreads with illustrations from, ”Patterns of Light and Dark”. <br />{' '}
          Layout:
          <a
            href='https://linneapaulsson.se/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Linnea Paulsson Neppelberg
          </a>
        </p>

        <Prints />
      </InnerWrapper>
    </Wrapper>
  );
}

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  largeScreen: '3024px',
};

const Wrapper = styled.div`
  padding: 0 3rem;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 6rem 1rem 1rem;
  }
`;

const InnerWrapper = styled.div`
  width: 65vw;
  justify-content: center;
  margin: 0 auto;

  h1 {
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  .subtitle,
  .second-subtitle {
    font-size: 1rem;
    font-family: 'Hind Madurai', sans-serif;
    font-weight: 400;
    line-height: 1rem;
    margin-bottom: 1rem;
  }

  .second-subtitle {
    margin-bottom: 2rem;
  }

  .layout-info {
    font-size: 1.1rem;
    font-weight: 400;
    margin-bottom: 1rem;
    margin-top: 3rem;
  }

  a {
    color: #000;
    text-decoration: none;
    border-bottom: 1px solid #000;
    padding-left: 2px;
  }

  @media only screen and (max-width: ${breakpoints.mobile}) {
    width: 100%;
    h1 {
      font-size: 1.5rem;
    }
    .subtitle,
    .second-subtitle {
      font-size: 0.8rem;
    }
    .layout-info {
      font-size: 1rem;
    }
  }
`;

const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  margin-bottom: 5rem;

  .header-images {
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 0.7rem;
    margin-bottom: 2rem;
  }
`;

export default BookIllustrations;
