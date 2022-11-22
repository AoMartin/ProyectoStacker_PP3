import PlusOneIcon from '@mui/icons-material/PlusOne';
import { Avatar, Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import ValoracionFechaHora from '../../ValoracionFechaHora/ValoracionFechaHora';

const DetallePublicacion = (props) => {



    return (
        <Box item sx={{ display: 'flex' }}>
            <Box m={2}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar></Avatar>
                    <Typography ml={2}>Usuario</Typography>
                    <ValoracionFechaHora />
                </Box>
                <Typography variant="h4" component="div" color='#000000' >
                    Live From Space
                    <IconButton color="info">
                        <PlusOneIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                </Typography>
                <Typography variant="h5" component="div" color='#000000' mt={1}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit blandit cubilia sociis netus, porta tempor curabitur himenaeos cum neque hendrerit sagittis pulvinar placerat. Nulla erat viverra iaculis magnis et at urna, magna congue maecenas accumsan integer sem.
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
                    src="https://i.ytimg.com/vi/ZuzrrZkgC8Q/maxresdefault.jpg"
                />
            </Box>
        </Box>
    );
};

export default DetallePublicacion;
