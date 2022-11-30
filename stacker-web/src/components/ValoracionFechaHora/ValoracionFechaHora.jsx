import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarRateIcon from '@mui/icons-material/StarRate';
import { Typography } from '@mui/material';
import { Box } from "@mui/system";
import React from 'react';

const ValoracionFechaHora = (props) => {
    const { puntaje, fechaHora } = props;

    const formatearFecha = (fecha) => {
        const currentDate = new Date(fecha);
        const dia = currentDate.getDate();
        const mes = currentDate.getMonth(); // Be careful! January is 0, not 1
        const anio = currentDate.getFullYear();
        const horas = currentDate.getHours();
        const minutos = currentDate.getMinutes();
        const dateString = `${horas}:${minutos} - ${dia}/${mes+1}/${anio}`;
        return dateString;
    }

    return (
        <Box sx={{ display: 'flex', alignItems: 'left', pl: 1 }}>
            <StarRateIcon color='#000000'></StarRateIcon>
            <Typography pl={1} variant="subtitle1" color="text.secondary">
                {puntaje}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'right', pl: 1 }}>
                <AccessTimeIcon color='#000000'></AccessTimeIcon>
                <Typography pl={1} variant="subtitle1" color="text.secondary">
                    {formatearFecha(fechaHora)}
                </Typography>
            </Box>
        </Box>
    );
};

export default ValoracionFechaHora;




