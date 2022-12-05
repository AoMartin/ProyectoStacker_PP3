import { Grid, Slide, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PublicacionCard from '../../components/PublicacionCard/PublicacionCard';
import { abrirModalAvisoUsuario } from '../../redux/slices/avisoSlice';
import { cargarPublicaciones, limpiarListaPubs } from '../../redux/slices/publicacionSlice';
import PublicacionService from '../../services/PublicacionService';


export default function Buscador(props) {
    const dispatch = useDispatch();
    const [buscarTxt, setBuscarTxt] = useState('');

    const listaPublicaciones = useSelector((state) => state.pubs.listaPubs);

    useEffect(() => {
        dispatch(limpiarListaPubs());
      }, []);

    const handleChange = async (event) => {
        let buscar = event.target.value;
        setBuscarTxt(event.target.value);
        if(buscar.length < 3) return;

        try {
            let response = [];
            response = await PublicacionService.buscarTitulo(buscar);
            dispatch(cargarPublicaciones(response));
        } catch (err) {
            dispatch(abrirModalAvisoUsuario(err));
        }
    }

    return (
        <Box>
            <Grid item xs={12}>
                <TextField
                    id="txt-tit"
                    label="Buscar"
                    fullWidth
                    value={buscarTxt}
                    onChange={(e)=>handleChange(e)}
                    inputProps={{ maxLength: 60 }}
                />
            </Grid>
            <Grid container component="main" >
                {listaPublicaciones?.map((pub, index) =>
                    <PublicacionCard key={index} data={pub} />
                )}
            </Grid>
        </Box>
    );
}
