import { Avatar, CardActionArea, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import ValoracionFechaHora from '../ValoracionFechaHora/ValoracionFechaHora';

const PublicacionCard = (props) => {
    const { data } = props;
    let navigate = useNavigate();

    const handleCardClick = () => {
        navigate('/publicacion', { state: data })
    }

    return (
        <Box m={.5} width={'49%'}>
            <Card sx={{ display: 'flex' }}>
                <CardActionArea onClick={handleCardClick}>
                    <Box sx={{ display: 'flex', alignItems: 'center', m: 1 }}>
                        <Avatar src={data.usuario.imagenUrl}></Avatar>
                        <Typography ml={1} component="div" variant="h5" color='#000000' >
                            {data.titulo}
                        </Typography>
                    </Box>
                    <Grid container>
                        <Grid item xs={6}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Box sx={{ display: 'flex', alignItems: 'top' }}>
                                    <Typography paragraph variant="subtitle1" color="text.secondary" component="div">
                                        {data.descripcion}
                                    </Typography>
                                </Box>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'bottom', p: 1 }}>
                                <ValoracionFechaHora puntaje={data.puntaje} fechaHora={data.fechaHoraCreacion} />
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <CardMedia
                                onClick={handleCardClick}
                                style={{ aspectRatio: 4 / 3 }}
                                component="img"
                                image={data.imagen}
                                alt="No se pudo cargar la imagen!"
                            />
                        </Grid>
                    </Grid>
                </CardActionArea>
            </Card>
        </Box>
    );
}

export default PublicacionCard;