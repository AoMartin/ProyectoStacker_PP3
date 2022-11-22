import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarRateIcon from '@mui/icons-material/StarRate';
import { Typography } from '@mui/material';
import { Box } from "@mui/system";
import React from 'react';

const ValoracionFechaHora = (props) => {
    const {puntaje, fechaHora} = props;

    return (
        <Box sx={{ display: 'flex', alignItems: 'left', pl: 1 }}>
            <StarRateIcon color='#000000'></StarRateIcon>
            <Typography pl={1} variant="subtitle1" color="text.secondary">
                {puntaje}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'right', pl: 1 }}>
                <AccessTimeIcon color='#000000'></AccessTimeIcon>
                <Typography pl={1} variant="subtitle1" color="text.secondary">
                    {fechaHora}
                </Typography>
            </Box>
        </Box>
    );
};

export default ValoracionFechaHora;




