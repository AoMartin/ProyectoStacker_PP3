import { Box, CssBaseline, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import PublicacionCard from '../../components/PublicacionCard/PublicacionCard';

export default function Home(props) {
  
  return (
    <Grid container component="main">
     <PublicacionCard m={5}/>
     <PublicacionCard/>
     <PublicacionCard/>
     <PublicacionCard/>
     <PublicacionCard/>
     <PublicacionCard/>
     <PublicacionCard/>
     <PublicacionCard/>
     <PublicacionCard/>
     <PublicacionCard/>
     <PublicacionCard/>
     <PublicacionCard/>
    </Grid>
  );
}
