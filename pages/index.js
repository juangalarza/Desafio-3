import React, { useState, useEffect } from 'react';
import Cards from '../components/cards';
import products from '../public/products.json';

function Home() {
  const initProfile = {
    cardsName: "nada aun...",
  };

  const [zapas, setZapas] = useState({});

  const handleClick = (cardsName) => {
    setZapas({ cardsName });
  };

  // useEffect(() => {
  //   setZapas(initProfile);
  //   document.title = `Inicio`;
  // }, []);

  return (
    <div>
      <div className="nav-container">
        <div className="nav-logo">Logo!</div>
        <div className="nav-right">
          <h3>Has seleccionado: {zapas.cardsName}</h3>
        </div>
      </div>
      <div className="cardsContainer">
        {products.map((datos, id) => (
          <Cards
            cardsName={datos.cardsName}
            cardsDesc={datos.cardsDesc}
            cardsImage={datos.cardsImage}
            key={id}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
