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
    if (route) {
      navigate(route);
    } else {
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
            <ImageWrapper>
              <StyledImage
                src={item.image}
                alt={item.title}
                style={item.style}
                onClick={() => handleImageClick(item.route, item.image)}
                clickable={!!item.route}
              />
              {item.route && <TextOverlay>Tap to View More</TextOverlay>}
            </ImageWrapper>
          </ItemContainer>
        ))}
      </PortfolioContainer>
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
  overflow: hidden;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  position: relative;
  max-width: 85vw;
  max-height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 80vh;
    object-fit: contain;
  }
`;

const CloseButton = styled.span`
  position: absolute;
  top: -10px;
  right: 1px;
  font-size: 2rem;
  cursor: pointer;
  color: #333;
`;

const HomeWrapper = styled.div`
  width: 90vw;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100vw;
    padding: 6rem 1rem 1rem;
  }
`;

// Image and Overlay Styles
const ImageWrapper = styled.div`
  position: relative;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 55vh;
  object-fit: contain;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    height: 60vh;
    &:hover {
      opacity: 1;
    }
  }
`;

// Text Overlay for mobile
const TextOverlay = styled.div`
  position: absolute;
  bottom: 5px;
  right: 1px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 0.3rem;
  font-size: 0.8rem;
  border-radius: 3px;

  @media (min-width: 768px) {
    display: none; /* Hide on desktop */
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
