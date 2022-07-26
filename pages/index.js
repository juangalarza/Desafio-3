import React, { useState, useEffect } from 'react';
//import Cards from '../components/oldcards';
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
/*
   useEffect(() => {
     document.title = zapas.cardsName;
   }, []);
  

   useEffect(() => {
     setZapas(initProfile);
   }); */
   

  return (
    <div>
      <Navbar cardsName={zapas.cardsName} />
      
      <Grid container spacing={2} p="20px 24px">
        {products.map((datos, id) => (
          
          <Grid item xs={12} sm={6} md={3} xl={3}>
          <div key={id}>
          <Card 
            cardsName={datos.cardsName}
            cardsDesc={datos.cardsDesc}
            cardsImage={datos.cardsImage}

            handleClick={handleClick}
          />
             
          </Grid>
         </div>
        ))}
        </Grid>
    
    </div>
  );
}

export default Home;
