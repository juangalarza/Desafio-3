import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar({
  cardsImage,
  cardsName,
  cardsDesc,
  handleClick,
}) {
  return (
    <div className="nav-container">
        <div className="nav-logo">Logo!</div>
        <div className="nav-right">
          <h3>Has seleccionado: {zapas.cardsName}</h3>
        </div>
      </div>
  );
}
