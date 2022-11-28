import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PublicacionCard from '../../components/PublicacionCard/PublicacionCard';
import { cargarPublicaciones } from '../../redux/slices/publicacionSlice';
import PublicacionService from '../../services/PublicacionService';

export default function Home(props) {
  const dispatch = useDispatch();

  const listaPublicaciones = useSelector((state) => state.pubs.listaPubs);

  useEffect(() => {
    cargarListaPubs();
    console.log("llamandoPugs")
  }, []);

  const cargarListaPubs = async() =>{
    try {
      const response = await PublicacionService.obtenerTodo();
      dispatch(cargarPublicaciones(response));
    } catch (err) {
      //TODO manejar casos de error
    }
  }

  return (
    <Grid container component="main">
      {listaPublicaciones.map(pub => {
        <PublicacionCard data={pub}></PublicacionCard>
      })}
    </Grid>
  );
}
