import React, { useState, useEffect } from 'react';
import Cards from '../components/cards';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import products from '../public/products.json';
import Grid from '@mui/material/Grid';

function Home() {
  const initProfile = {
    cardsName: "nada aun...",
  };

  const [zapas, setZapas] = useState({});

  const handleClick = (cardsName) => {
    setZapas({ cardsName });
  };

   useEffect(() => {
<<<<<<< HEAD
=======
     
>>>>>>> bb8987037b7334de1440fa93b31f31f90532a10c
     document.title = zapas.cardsName;
   }, [zapas]);
  
     useEffect(() => {
     setZapas(initProfile);
   }, []);

  return (
    <div>
      <Navbar />
      {/* <div className="nav-container">
        <div className="nav-logo">Logo!</div>
        <div className="nav-right">
          <h3>Has seleccionado: {zapas.cardsName}</h3>
        </div>
      </div> */}
      <Grid container spacing={2} p="20px 24px">
        {products.map((datos, id) => (
          <Grid item xs={12} sm={6} md={3} xl={3}>
          <Card 
            cardsName={datos.cardsName}
            cardsDesc={datos.cardsDesc}
            cardsImage={datos.cardsImage}
            key={id}
            handleClick={handleClick}
          />
          </Grid>
        ))}
        </Grid>
    </div>
  );
}

export default Home;
