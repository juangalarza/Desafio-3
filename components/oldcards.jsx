import React from "react";
// import Image from 'next/image';

function Cards({ cardsImage, cardsName, cardsDesc, handleClick }) {
  return (
    <div className="cards">
      <img className="cardsImg" src={cardsImage} alt="" />
      <div className="cardsContent">
        <h3>{cardsName}</h3>
        <p>{cardsDesc}</p>
        <button onClick={() => handleClick(cardsName)}>Comprar</button>
        </div>
    </div>
  );
}

export default Cards;
