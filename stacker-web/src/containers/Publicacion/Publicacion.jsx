import { Grid } from '@mui/material';
import { Stack } from '@mui/system';
import * as React from 'react';
import CajaComentario from '../../components/DetallePublicacion/CajaComentario/CajaComentario';
import Comentario from '../../components/DetallePublicacion/Comentario/Comentario';
import DetallePublicacion from '../../components/DetallePublicacion/DetallePublicacion/DetallePublicacion';

export default function Publicacion(props) {

  return (
    <Grid container component="main">

      <Grid item sx={12}>
        <DetallePublicacion/>
      </Grid>

      <Grid item sx={12}>
        <CajaComentario/>
      </Grid>

      <Grid item sx={12}>
        <Stack spacing={2}>
          <Comentario/>
          <Comentario/>
          <Comentario/>
        </Stack>
      </Grid>

    </Grid>
  );
}
