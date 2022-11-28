import { Avatar, CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';

import ValoracionFechaHora from '../ValoracionFechaHora/ValoracionFechaHora';

const PublicacionCard = (props) => {
    const data = props.data;

    return (
        <Box m={.5} width={700}>
            <Card sx={{ display: 'flex' }}>
                <CardActionArea component={
                    <Link
                        to={{
                            pathname: "/publicacion",
                            state: data
                        }}
                    />
                }>
                    <CardContent >
                        <Box sx={{ display: 'flex', alignItems: 'center', pb: 1 }}>
                            <Avatar src={data.usuario.imagenUrl}></Avatar>
                            <Typography ml={1} component="div" variant="h5" color='#000000' >
                                {data.titulo}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'top', pl: 6 }}>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                {data.descripcion}
                            </Typography>
                            <Box width={1000}>
                                <CardMedia
                                    component="img"
                                    height={150}
                                    src={data.imagen}
                                />
                            </Box>
                        </Box>
                        <ValoracionFechaHora puntaje={data.puntaje} fechaHora={data.fechaHoraCreacion}/>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
}

export default PublicacionCard;