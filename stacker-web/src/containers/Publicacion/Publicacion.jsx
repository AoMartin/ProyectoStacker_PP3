import { Grid } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import CajaComentario from '../../components/DetallePublicacion/CajaComentario/CajaComentario';
import Comentario from '../../components/DetallePublicacion/Comentario/Comentario';
import DetallePublicacion from '../../components/DetallePublicacion/DetallePublicacion/DetallePublicacion';
import { cargarComentarios, limpiarListaComents, limpiarMensajeAlEnviarNuevo, responderA } from '../../redux/slices/comentarioSlice';
import ComentarioService from '../../services/ComentarioService';

const comData = {
  idComentario: null,
  idPublicacion: null,
  idRespuesta: null,
  mensaje: '',
  puntaje: 0,
  fechaHoraCreacion: null,
  usuario: { idLogin: -1 },
}

export default function Publicacion(props) {
  const location = useLocation();
  const pubData = location.state;

  const myRef = useRef(null);
  const dispatch = useDispatch();

  const listaComents = useSelector((state) => state.coments.listaComents);

  const idRespuesta = useSelector((state) => state.coments.idRespuesta);
  const idLogin = useSelector((state) => state.usuario.login.id);
  const userName = useSelector((state) => state.usuario.login.userName);
  const userImg = useSelector((state) => state.usuario.login.img);

  let refsDicc = {};

  useEffect(() => {
    window.scrollTo(0, 0);
    cargarListaComentarios();

    return () => {
      dispatch(limpiarListaComents());
    };
  }, []);

  const cargarListaComentarios = async () => {
    try {
      const response = await ComentarioService.obtenerTodoPorIdPub(pubData.idPublicacion);
      dispatch(cargarComentarios(response));
    } catch (err) {
      //TODO manejar casos de error
    }
  }

  const procesarComentario = (com, index) => {
    refsDicc[com.idComentario] = React.createRef();

    let respondiendo = null;
    if (com.idRespuesta) {
      respondiendo = listaComents.find(c => com.idRespuesta == c.idComentario);
    }

    return <Comentario
      key={index}
      data={com}
      respondiendo={respondiendo}
      handleSelect={handleSelectToRespond}
      handleReplyClick={handleReplyClick}
      refSetter={refsDicc[com.idComentario]}
    />;
  }

  const handleReplyClick = (replyId) => {
    let respuestaRef = refsDicc[replyId];
    respuestaRef.current.scrollIntoView();
  }

  const handleSelectToRespond = (event, idComentario, comRef, msgRespuesta) => {
    dispatch(responderA({ id: idComentario, comRef: comRef, msgRespuesta: msgRespuesta }));

    myRef.current.scrollIntoView({top: 0, behavior:'smooth' });
  }

  const handleCurrentReplyClick = () => {
    myRef.current.scrollIntoView();
  }

  const handleEnviarComent = async (msg) => {
    try {
      let data = comData;
      data.usuario.idLogin = idLogin;
      data.usuario.user = userName;
      data.usuario.imagenUrl = userImg;
      data.idPublicacion = pubData.idPublicacion;
      data.idRespuesta = idRespuesta;
      data.mensaje = msg;

      const response = await ComentarioService.guardar(data);
      dispatch(limpiarMensajeAlEnviarNuevo(response));
    } catch (err) {
      //TODO manejar casos de error
    }
  }


  return (
    <Grid container component="main" ref={myRef}>

      <Grid item xs={12}>
        <DetallePublicacion data={pubData} />
      </Grid>

      <Grid item xs={12}  >
        <CajaComentario id='caja-comentario'
          handleSubmit={handleEnviarComent}
          handleCurrentReplyClick={handleCurrentReplyClick}
        />
      </Grid>

      <Grid item xs={12}>
        <Stack spacing={2}>
          {listaComents.map((com, index) =>
            procesarComentario(com, index)
          )}
        </Stack>
      </Grid>

    </Grid>
  );
}
