import PlusOneIcon from '@mui/icons-material/PlusOne';
import { Avatar, Box, IconButton, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import ValoracionFechaHora from '../../ValoracionFechaHora/ValoracionFechaHora';

const DetallePublicacion = (props) => {
    const data = props.location.state;

    useEffect(() => {
        cargarListaComentarios();
    }, []);

    const cargarListaComentarios = async () => {
        try {
            //const response = await PublicacionService.obtenerTodo();
            //dispatch(cargarPublicaciones(response));
        } catch (err) {
            //TODO manejar casos de error
        }
    }

    return (
        <Box item sx={{ display: 'flex' }}>
            <Box m={2}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar src={data.usuario.imagenUrl}></Avatar>
                    <Typography ml={2}>{data.usuario.user}</Typography>
                    <ValoracionFechaHora puntaje={data.puntaje} fechaHora={data.fechaHoraCreacion} />
                </Box>
                <Typography variant="h4" component="div" color='#000000' >
                    {data.titulo}
                    <IconButton color="info">
                        <PlusOneIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                </Typography>
                <Typography variant="h5" component="div" color='#000000' mt={1}>
                    {data.descripcion}
                </Typography>

                <Box xs={12} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                </Box>
            </Box>

            <Box m={2}>
                <img
                    style={{
                        display: 'block',
                        maxWidth: 750,
                        maxHeight: 750,
                        width: 'auto',
                        height: 'auto'
                    }}
                    src={data.imagen}
                />
            </Box>
        </Box>
    );
};

export default DetallePublicacion;
