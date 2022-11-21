import { Avatar, CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import ValoracionFechaHora from '../ValoracionFechaHora/ValoracionFechaHora';

const Publicacion = () => {

    return (
        <Box m={.5} width={700}>
            <Card sx={{ display: 'flex' }}>
                <CardActionArea>
                    <CardContent >
                        <Box sx={{ display: 'flex', alignItems: 'center', pb: 1 }}>
                            <Avatar></Avatar>
                            <Typography ml={1} component="div" variant="h5" color='#000000' >
                                Live From Space
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'top', pl: 6 }}>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit blandit cubilia sociis netus, porta tempor curabitur himenaeos cum neque hendrerit sagittis pulvinar placerat. Nulla erat viverra iaculis magnis et at urna, magna congue maecenas accumsan integer sem.
                            </Typography>
                            <Box width={1000}>
                                <CardMedia
                                    component="img"
                                    height={150}
                                    src="https://i.ytimg.com/vi/ZuzrrZkgC8Q/maxresdefault.jpg"
                                />
                            </Box>
                        </Box>
                        <ValoracionFechaHora/>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
}

export default Publicacion;