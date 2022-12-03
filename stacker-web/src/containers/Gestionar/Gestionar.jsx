import { Box, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PublicacionGestionarData from '../../components/PublicacionGestionarData/PublicacionGestionarData';
import { abrirModalAvisoUsuario } from '../../redux/slices/avisoSlice';
import { cargarPublicaciones } from '../../redux/slices/publicacionSlice';
import PublicacionService from '../../services/PublicacionService';


export default function Gestionar(props) {
    const myRef = useRef(null);
    const dispatch = useDispatch();

    const listaPublicaciones = useSelector((state) => state.pubs.listaPubs);
    const idLogin = useSelector((state) => state.usuario.login.id);

    useEffect(() => {
        myRef.current.scrollIntoView({ behavior: 'smooth' });
        cargarListaPubs();
    }, []);

    const cargarListaPubs = async () => {
        try {
            let response = await PublicacionService.obtenerTodoUsuario(idLogin);
            dispatch(cargarPublicaciones(response));
        } catch (err) {
            dispatch(abrirModalAvisoUsuario(err));
        }
    }

    return (
        <Grid container component="main" ref={myRef}>

            <Grid item xs={12}>
                <Stack spacing={2}>
                    {
                        listaPublicaciones.length == 0 &&
                        <Box sx={{ ml: 1, display: 'flex', justifyContent: 'center', border: '5px dashed grey', }}>
                            <Typography id="titulo" variant="body" m={2}>
                                No hay publicaciones creadas por el usuario.
                            </Typography>
                        </Box>
                    }
                    {listaPublicaciones.map((pub, index) =>
                        <PublicacionGestionarData key={index} data={pub} />
                    )}
                </Stack>
            </Grid>

        </Grid>
    );
}
