import PlusOneIcon from '@mui/icons-material/PlusOne';
import { Avatar, Box, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actualizarPuntajePubs } from '../../../redux/slices/publicacionSlice';
import PublicacionService from '../../../services/PublicacionService';
import ValoracionFechaHora from '../../ValoracionFechaHora/ValoracionFechaHora';
import '../detalle.css';

const DetallePublicacion = (props) => {
    const dispatch = useDispatch();
    const { data } = props;

    const userName = useSelector((state) => state.usuario.login.userName);
    const [plusOneTrigger, setPlusOneTrigger] = useState(0);

    const puntuarHandle = async () => {
        try {
            setPlusOneTrigger(1);
            const response = await PublicacionService.puntuarPub(data.idPublicacion);
            dispatch(actualizarPuntajePubs({id:data.idPublicacion, puntaje:response}));
        } catch (err) {
            //TODO manejar casos de error
        }
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <Box m={2}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar src={data.usuario.imagenUrl}></Avatar>
                    <Typography ml={2}>{data.usuario.user}</Typography>
                    <ValoracionFechaHora puntaje={data.puntaje} fechaHora={data.fechaHoraCreacion} />
                </Box>
                <Typography variant="h4" component="div" color='#000000' >
                    {data.titulo}
                    {
                        userName != '' &&
                        <IconButton
                            className="plusOneAnim"
                            color="info"
                            onClick={puntuarHandle}
                            onAnimationEnd={() => setPlusOneTrigger(0)}
                            plusOneTrigger={plusOneTrigger}
                        >
                            <PlusOneIcon sx={{ fontSize: 40 }} />
                        </IconButton>
                    }
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
