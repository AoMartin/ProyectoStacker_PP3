import { Box, CssBaseline, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import Publicacion from '../../components/Publicacion/Publicacion';

export default function Home(props) {
  
  return (
    <Grid container component="main">
     <Publicacion m={5}/>
     <Publicacion/>
     <Publicacion/>
     <Publicacion/>
     <Publicacion/>
     <Publicacion/>
     <Publicacion/>
     <Publicacion/>
     <Publicacion/>
     <Publicacion/>
    </Grid>
  );
}
