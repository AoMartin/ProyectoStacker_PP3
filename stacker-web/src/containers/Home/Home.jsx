import { Grid, Slide, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PublicacionCard from '../../components/PublicacionCard/PublicacionCard';
import { abrirModalAvisoUsuario } from '../../redux/slices/avisoSlice';
import { cargarPublicaciones } from '../../redux/slices/publicacionSlice';
import PublicacionService from '../../services/PublicacionService';


export default function Home(props) {
  const { tipo } = props;
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(true);

  const listaPublicaciones = useSelector((state) => state.pubs.listaPubs);
  const topRef = useRef(null);
  
  useEffect(() => {
    //topRef.current.scrollIntoView();
    handleReload();
    cargarListaPubs();
  }, [tipo]);

  const handleReload = () => {
    setChecked(false);
    setTimeout(function () {
      setChecked(true);
    }, 100);
  };

  const cargarListaPubs = async () => {
    try {
      let response = [];

      switch (tipo) {
        case 'Home':
          response = await PublicacionService.obtenerTodoPuntaje();
          break;
        case 'Tendencia':
          response = await PublicacionService.obtenerTodoUltimaActualizacion();
          break;
        case 'Nuevos':
          response = await PublicacionService.obtenerTodoHoraCreacion();
          break;
      }

      dispatch(cargarPublicaciones(response));
    } catch (err) {
      dispatch(abrirModalAvisoUsuario(err));
    }
  }

  return (
    <Box ref={topRef}>
      <Grid container component="main" >
        {listaPublicaciones.map((pub, index) =>
          <PublicacionCard key={index} data={pub} />
        )}
      </Grid>
    </Box>
  );
}
