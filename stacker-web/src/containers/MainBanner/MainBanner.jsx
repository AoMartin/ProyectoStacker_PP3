import LayersIcon from '@mui/icons-material/Layers';
import {
  Box, Button, Container, Grid, Typography
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { grey } from '@mui/material/colors';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Usuario from '../../components/Sistema//Usuario/Usuario';
import MenuPrincipal from '../../components/Sistema/MenuPrincipal/MenuPrincipal';
import Spinner from '../../components/Sistema/Spinner/Spinner';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';

export default function MainBanner(props) {
  const { vista } = props;
  const userName = useSelector((state) => state.usuario.login.userName);

  let navigate = useNavigate();
  const routeChange = () => {
    navigate('/home');
  }

  return (
    <Box sx={{ display: 'flex' }}>

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
          <Grid container onClick={routeChange}>
            <Grid item mt={1}>
              <LayersIcon sx={{ fontSize: 60 }} style={{ color: '#000000' }} />
            </Grid>
            <Grid item ml={1}>
              <Typography component="h2" variant="h2" style={{ color: '#000000' }} >
                Stacker
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box m={1.5}>
          <Usuario />
        </Box>
      </AppBar>

      <Box sx={{ backgroundColor: (theme) => theme.palette.info.light }}>
        <Grid container spacing={0} >
          <Grid
            item
            xs={12}
            sx={{
              minHeight: 100,
            }}
          />
          {
            userName != '' &&
            <>
              <Grid item mt={2} ml={2}>
                <Button color="info" variant="contained" startIcon={<PostAddIcon />} size="large" >
                  Publicar!
                </Button>
              </Grid>
              <Grid item mt={1} ml={2}>
                <Button color="info" variant="contained" startIcon={<AutoAwesomeMotionIcon />} size="large" >
                  Editar
                </Button>
              </Grid>
            </>
          }
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
