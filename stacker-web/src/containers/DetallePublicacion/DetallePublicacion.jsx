import { Grid } from '@mui/material';
import { Stack } from '@mui/system';
import * as React from 'react';
import CajaComentario from '../../components/DetallePublicacion/CajaComentario/CajaComentario';
import Comentario from '../../components/DetallePublicacion/Comentario/Comentario';
import PublicacionDetallada from '../../components/DetallePublicacion/PublicacionDetallada/PublicacionDetallada';

export default function DetallePublicacion(props) {

  return (
    <Grid container component="main">

      <Grid item sx={12}>
        <PublicacionDetallada></PublicacionDetallada>
      </Grid>

      <Grid item sx={12}>
        <CajaComentario></CajaComentario>
      </Grid>

      <Grid item sx={12}>
        <Stack spacing={2}>
          <Comentario></Comentario>
          <Comentario></Comentario>
          <Comentario></Comentario>
        </Stack>
      </Grid>

    </Grid>
  );
}
