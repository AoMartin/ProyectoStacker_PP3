import { Grid } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import CajaComentario from '../../components/DetallePublicacion/CajaComentario/CajaComentario';
import Comentario from '../../components/DetallePublicacion/Comentario/Comentario';
import DetallePublicacion from '../../components/DetallePublicacion/DetallePublicacion/DetallePublicacion';
import { abrirModalAvisoUsuario } from '../../redux/slices/avisoSlice';
import { cargarComentarios, limpiarListaComents, responderA } from '../../redux/slices/comentarioSlice';
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
      dispatch(abrirModalAvisoUsuario(err));
    }
  }

  const procesarComentario = (com, index) => {
    refsDicc[com.idComentario] = { ref: React.createRef(), index: index };

    let respondiendo = null;
    if (com.idRespuesta != null) {
      respondiendo = listaComents.find(c => com.idRespuesta == c.idComentario);
    }

    let blockDelete = false;
    let cc = listaComents.find(c => com.idComentario == c.idRespuesta);
    if (null != cc) {
      blockDelete = true;
    }

    return <Comentario
      key={index}
      index={index}
      data={com}
      respondiendo={respondiendo}
      handleSelect={handleSelectToRespond}
      handleReplyClick={handleReplyClick}
      handleDelete={handleDelete}
      blockDelete={blockDelete}
      ref={refsDicc[com.idComentario].ref}
    />;
  }

  const handleReplyClick = (replyId) => {
    let respuestaRef = refsDicc[replyId].ref;
    let respuestaComIndex = refsDicc[replyId].index;

    let idToFind = document.getElementById(`com#${respuestaComIndex - 1}`) != null ? respuestaComIndex - 1 : respuestaComIndex;

    if (respuestaComIndex != 0) {
      document.getElementById(`com#${idToFind}`).scrollIntoView({ behavior: 'smooth' });
    } else {
      document.getElementById(`pub-detalle`).scrollIntoView({ behavior: 'smooth' });
    }

    respuestaRef.current.triggerComentSelected();
  }

  const handleSelectToRespond = (idComentario, msgRespuesta) => {
    dispatch(responderA({ id: idComentario, msgRespuesta: msgRespuesta }));

    myRef.current.scrollIntoView({ behavior: 'smooth' });
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
      cargarListaComentarios();
    } catch (err) {
      dispatch(abrirModalAvisoUsuario(err));
    }
  }

  const handleDelete = async (idToDelete) => {
    try {
      const response = await ComentarioService.borrar(idToDelete);
      cargarListaComentarios();
    } catch (err) {
      dispatch(abrirModalAvisoUsuario(err));
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
          handleReplyClick={handleReplyClick}
        />
      </Grid>

      <Grid item xs={12}>
        <Stack spacing={2}>
          {listaComents?.map((com, index) =>
            procesarComentario(com, index)
          )}
        </Stack>
      </Grid>

    </Grid>
  );
}
