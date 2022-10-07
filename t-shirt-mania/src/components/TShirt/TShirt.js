import React from "react";

const TShirt = ({ tshirt }) => {
  const { picture, name } = tshirt;
  return (
    <div>
      <img src={picture} alt="alt Img" />
    </div>
  );
};

export default TShirt;
