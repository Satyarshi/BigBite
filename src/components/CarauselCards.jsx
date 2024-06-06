import React from "react";

const CarauselCards = ({ image }) => {
  return (
    <img
      className="w-36 h-36 mr-14 ml-5 rounded-full card-img"
      src={image}
      alt="img"
    />
  );
};

export default CarauselCards;
