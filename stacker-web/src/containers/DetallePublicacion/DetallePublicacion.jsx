import { Avatar, Box, Grid, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { Stack } from '@mui/system';
import * as React from 'react';
import CajaComentario from '../../components/CajaComentario/CajaComentario';
import Comentario from '../../components/Comentario/Comentario';
import ValoracionFechaHora from '../../components/ValoracionFechaHora/ValoracionFechaHora';

export default function DetallePublicacion(props) {

  return (
    <Grid container component="main">

      <Grid item sx={12}>
        <Box item sx={{ display: 'flex' }}>
          <Box m={2}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb:2 }}>
              <Avatar></Avatar>
              <Typography ml={2}>Usuario</Typography>
              <ValoracionFechaHora />
            </Box>
            <Typography variant="h4" component="div" color='#000000' >
              Live From Space
            </Typography>
            <Typography variant="h5" component="div" color='#000000' mt={2}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit blandit cubilia sociis netus, porta tempor curabitur himenaeos cum neque hendrerit sagittis pulvinar placerat. Nulla erat viverra iaculis magnis et at urna, magna congue maecenas accumsan integer sem.
            </Typography>
          </Box>

          <Box  m={2}>
            <img
              style={{
                display: 'block',
                maxWidth: 750,
                maxHeight: 750,
                width: 'auto',
                height: 'auto'
              }}
              src="https://i.ytimg.com/vi/ZuzrrZkgC8Q/maxresdefault.jpg"
            />
          </Box>
        </Box>
      </Grid>

      <Grid item>
        <CajaComentario></CajaComentario>
      </Grid>

      <Grid item>
        <Stack spacing={2}>
          <Comentario></Comentario>
          <Comentario></Comentario>
          <Comentario></Comentario>
        </Stack>
      </Grid>

    </Grid>
  );
}
