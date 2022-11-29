import { Grid } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import CajaComentario from '../../components/DetallePublicacion/CajaComentario/CajaComentario';
import Comentario from '../../components/DetallePublicacion/Comentario/Comentario';
import DetallePublicacion from '../../components/DetallePublicacion/DetallePublicacion/DetallePublicacion';
import { limpiarListaComents } from '../../redux/slices/comentarioSlice';
import ComentarioService from '../../services/ComentarioService';

export default function Publicacion(props) {
  const location = useLocation();
  const data = location.state;

  const dispatch = useDispatch();
  const listaComents = useSelector((state) => state.coments.listaComents);

  useEffect(() => {
    cargarListaComentarios();

    return () => {
      dispatch(limpiarListaComents());
    };
  });

  const cargarListaComentarios = async () => {
    try {
      const response = await ComentarioService.obtenerTodoPorIdPub();
      dispatch(cargarListaComentarios(response));
    } catch (err) {
      //TODO manejar casos de error
    }
  }

  const procesarComentario = (com) => {
    let respondiendo = null;

    if(com.idRespuesta){
      respondiendo = listaComents.find(c => com.idRespuesta == c.idComentario);
    }

    return <Comentario data={com} respondiendo={respondiendo}/>;
  }

  return (
    <Grid container component="main">

      <Grid item xs={12}>
        <DetallePublicacion data={data} />
      </Grid>

      <Grid item xs={12}>
        <CajaComentario />
      </Grid>

      <Grid item xs={12}>
        <Stack spacing={2}>
          {listaComents.map((com) =>
            procesarComentario(com)
          )}
        </Stack>
      </Grid>

    </Grid>
  );
}
