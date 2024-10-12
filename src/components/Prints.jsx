import styled from 'styled-components';

import Stjarna from '../assets/book/uppslag_stjarna.jpg';
import HanderMagi from '../assets/book/uppslag_hander_magi.jpg';
import Berg from '../assets/book/uppslag_berg.jpg';
import Gemenskap from '../assets/book/uppslag_gemenskap.jpg';
import HanderOga from '../assets/book/uppslag_hander_oga.jpg';
import Trapphus from '../assets/book/uppslag_trapphus.jpg';
import framsida from '../assets/book/book_framsida.jpg';
import colophon from '../assets/book/book_colophon.jpg';

function Prints() {
  return (
    <>
      <PrintContainer>
        <div>
          <img className='book-images' src={Stjarna} alt='illustration-star' />
        </div>
        <div>
          <img className='book-images' src={Trapphus} alt='illustration-star' />
        </div>
        <div>
          <img className='book-images' src={Berg} alt='illustration-star' />
        </div>
        <div>
          <img
            className='book-images'
            src={Gemenskap}
            alt='illustration-star'
          />
        </div>
        <div>
          <img
            className='book-images'
            src={HanderOga}
            alt='illustration-star'
          />
        </div>
        <div>
          <img
            className='book-images'
            src={HanderMagi}
            alt='illustration-star'
          />
        </div>
      </PrintContainer>
      <Cover>
        <div className='box'>
          <div>
            <img
              className='cover-images'
              src={framsida}
              alt='illustration-star'
            />
          </div>
          <div>
            <img
              className='cover-images'
              src={colophon}
              alt='illustration-star'
            />
          </div>
        </div>
      </Cover>
    </>
  );
}

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  largeScreen: '3024px',
};

const PrintContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  margin-bottom: 2rem;

  .book-images {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-gap: 0.5rem;
    margin-bottom: 1rem;
  }
`;

const Cover = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  place-content: center;

  .box {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .cover-images {
    width: 100%;
    height: auto;
    padding: 1rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    .box {
      width: 100%;
    }
  }
`;

export default Prints;
