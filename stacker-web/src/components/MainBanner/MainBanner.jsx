import {
  Box, Container, CssBaseline, Grid, Typography
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { grey } from '@mui/material/colors';
import React from 'react';
import MenuPrincipal from '../MenuPrincipal/MenuPrincipal';
import Spinner from '../Spinner/Spinner';
import Usuario from '../Usuario/Usuario';

export default function MainBanner(props) {
  const { vista } = props;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />

      <AppBar position="absolute"
        elevation={0}
        sx={{
          minHeight: 100,
          maxHeight: 100,
          backgroundColor: grey[300],
          display: 'center',
          flexWrap: 'wrap',
          alignContent: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box m={2}>
          <Typography component="h4" variant="h4" style={{ color: '#000000' }} >
            Stacker
          </Typography>
        </Box>
        <Box m={2}>
          <Usuario />
        </Box>
      </AppBar>

      <Box sx={{ backgroundColor: (theme) => theme.palette.error.main }}>
        <Grid container spacing={0}>
          <Grid
            item
            xs={12}
            sx={{
              minHeight: 175,
              backgroundImage: `url()`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '65%',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12}>
            <MenuPrincipal />
          </Grid>
        </Grid>
      </Box>

      <Box
        component="main"
        sx={{
          backgroundColor: (theme) => theme.palette.grey[50],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Container maxWidth={false} sx={{ mt: 15 }}>
          {vista}
        </Container>
      </Box>

      <Spinner />
      {/* TODO: MODALES ETC */}
    </Box>
  );
}
