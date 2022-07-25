import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({ cardsImage, cardsName, cardsDesc, handleClick }) {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia
        component="img"
        height="100%"
        image={cardsImage}
        alt="Nothing"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cardsName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cardsDesc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => handleClick(cardsName)} size="small">Comprar</Button>
      </CardActions>
    </Card>
  );
}
