import styled from 'styled-components';

const PageWrapper = styled.div`
  width: 90vw;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100vw;
    padding: 6rem 1rem 1rem; /* Padding for mobile view */
  }
`;

export default PageWrapper;
