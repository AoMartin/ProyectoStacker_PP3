import LayersIcon from '@mui/icons-material/Layers';
import {
  Box, Chip, Container, Divider, Grid, Slide, Typography
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { grey } from '@mui/material/colors';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ModalAvisoUsuario from '../../components/Modals/ModalAvisoUsuario/ModalAvisoUsuario';
import ModalCrearPublicacion from '../../components/Modals/ModalCrearPublicacion/ModalCrearPublicacion';
import ModalFiltrar from '../../components/Modals/ModalFiltrar/ModalFiltrar';
import Usuario from '../../components/Sistema//Usuario/Usuario';
import MenuOpciones from '../../components/Sistema/MenuOpciones/MenuOpciones';
import MenuPrincipal from '../../components/Sistema/MenuPrincipal/MenuPrincipal';
import Spinner from '../../components/Sistema/Spinner/Spinner';
import { mostrarModalCrearPub } from '../../redux/slices/publicacionSlice';

export default function MainBanner(props) {
  const { vista, tipo } = props;
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.usuario.login.userName);
  const [checked, setChecked] = useState(true);

  let navigate = useNavigate();

  useEffect(() => {
    handleReload();
  }, [tipo]);

  const handleReload = () => {
    setChecked(false);
    setTimeout(function () {
      setChecked(true);
    }, 100);
  };

  const routeChange = () => {
    navigate('/home');
  }

  const handleOpenModalCrearPublicacion = () => {
    dispatch(mostrarModalCrearPub());
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
            <Grid item ml={1}>
              {(tipo != 'Home' && tipo != '' && tipo != undefined) &&
                <Slide direction="down" in={checked} mountOnEnter unmountOnExit>
                  <Typography component="h2" variant="h2" style={{ color: '#000000' }} >
                    {` > ${tipo}`}
                  </Typography>
                </Slide>
              }
            </Grid>
          </Grid>
        </Box>
        <Box m={1.5}>
          <Usuario />
        </Box>
      </AppBar>

      <Box sx={{ minWidth:'15%', backgroundColor: (theme) => theme.palette.info.light }}>
        <Grid container spacing={0} >
          <Grid item xs={12}  sx={{ minHeight: 100 }}/>
          <Grid item xs={12}>
            {
              userName != '' &&
              <MenuOpciones handleOpenModalCrearPublicacion={handleOpenModalCrearPublicacion} />
            }
            <MenuPrincipal tipo={tipo}/>
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

      <ModalCrearPublicacion />
      <ModalAvisoUsuario />
      <ModalFiltrar />
      <Spinner />

    </Box >
  );
}
