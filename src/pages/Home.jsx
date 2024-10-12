import React, { useState } from 'react';
import styled from 'styled-components';
import { portfolioData } from '../data';
import Marquee from 'react-fast-marquee';
import { useNavigate } from 'react-router-dom';

// Modal Component
const Modal = ({ image, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <img src={image} alt='Large view' />
      </ModalContent>
    </ModalOverlay>
  );
};

function Home() {
  const navigate = useNavigate();
  const [modalImage, setModalImage] = useState(null); // State to store image for modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (route, image) => {
    // If route exists, navigate to it
    if (route) {
      navigate(route);
    } else {
      // If no route and on desktop, open modal
      if (window.innerWidth > 768) {
        setModalImage(image);
        setIsModalOpen(true);
      }
    }
  };

  return (
    <HomeWrapper>
      <Marquee
        style={{ marginBottom: '2.5rem' }}
        pauseOnHover={true}
        gradient={false}
        speed={100}
      >
        <p style={{ fontSize: '1rem' }}>
          More projects and info will be added soon... In the meantime, you can
          find me on social media (studiocomet on Instagram) or send me an email
          at <span style={{ fontWeight: '600' }}>studiomycomet@gmail.com</span>{' '}
          -
        </p>
      </Marquee>
      <PortfolioContainer>
        {portfolioData.map((item, index) => (
          <ItemContainer key={item.id}>
            <div>
              <StyledImage
                src={item.image}
                alt={item.title}
                style={item.style}
                onClick={() => handleImageClick(item.route, item.image)}
                clickable={!!item.route}
              />
            </div>
          </ItemContainer>
        ))}
      </PortfolioContainer>
      {/* Render the modal with the clicked image */}
      <Modal
        image={modalImage}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </HomeWrapper>
  );
}

// Modal Styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: hidden; /* Prevents scrollbars on the background */
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  position: relative;
  max-width: 85vw; /* Modal should not exceed 85% of the viewport width */
  max-height: 85vh; /* Modal should not exceed 85% of the viewport height */
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 80vh; /* Set a max-height for the image relative to the viewport height */
    object-fit: contain; /* Ensure the image scales while maintaining its aspect ratio */
  }
`;

// Position the CloseButton relative to the modal background, not on the image
const CloseButton = styled.span`
  position: absolute;
  top: -10px; /* Move it upwards by 10px to negate the padding */
  right: 1px; /* Move it rightwards by 10px to negate the padding */
  font-size: 2rem;
  cursor: pointer;
  color: #333;
`;

// Styled Components for the Home Page
const StyledImage = styled.img`
  width: 100%;
  height: 55vh;
  object-fit: contain;
  cursor: ${(props) => (props.clickable ? 'pointer' : 'default')};
  transition: opacity 0.3s ease;

  ${(props) =>
    !props.clickable &&
    `
    &:hover {
      opacity: 0.7;
    }
  `}

  @media (max-width: 768px) {
    height: 60vh;
  }
`;

const HomeWrapper = styled.div`
  width: 90vw;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100vw;
    padding: 1rem;
  }
`;

const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
`;

export default Home;
