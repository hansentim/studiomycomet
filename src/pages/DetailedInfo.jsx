import { useParams } from "react-router-dom";
import { portfolioData } from "../data";

const DetailedInfo = () => {
  let { id } = useParams();
  let portfolioItem = portfolioData.find((item) => item.id === +id);

  return (
    <div>
      <>
        <h3 style={{ color: "black" }}>{portfolioItem.title}</h3>
        <p>{portfolioItem.about}</p>
        <p>{portfolioItem.details}</p>
        <img src={portfolioItem.image} alt={portfolioItem.title} />
        <img src={portfolioItem.image_2} alt={portfolioItem.title} />
      </>
    </div>
  );
};

export default DetailedInfo;
