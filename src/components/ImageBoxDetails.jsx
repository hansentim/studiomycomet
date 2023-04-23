import headerImg from "../assets/mycomet_2.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function ImageBox() {
  const navigate = useNavigate();
  return (
    <Box onClick={() => navigate("/")}>
      <img src={headerImg} alt='header image' />
    </Box>
  );
}

const Box = styled.div`
  width: 200px;
  cursor: pointer;
  margin-bottom: 0.5rem;
  margin-top: -2.5rem;
  img {
    height: 100px;
  }
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    margin-top: 2rem;
    img {
      height: 40px;
    }
  }
`;

export default ImageBox;
