import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MessageIcon from '@mui/icons-material/Message';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import { Avatar, Card, CardActionArea, Grid, IconButton, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Box } from "@mui/system";
import React from 'react';
import { useSelector } from 'react-redux';
import ValoracionFechaHora from '../../ValoracionFechaHora/ValoracionFechaHora';

const Comentario = (props) => {
    const { data, respondiendo } = props;
    const idLogin = useSelector((state) => state.usuario.login.id);

    const handleReplyClick = () => {
        alert("reply test!");
    }

    return (
        <Box m={.5}>


            <Grid container component="main" p={.5}>
                <Grid item>
                    <Avatar src={data.usuario.imagenUrl}></Avatar>
                </Grid>
                <Grid item p={1}>
                    <ValoracionFechaHora puntaje={data.puntaje} fechaHora={data.fechaHoraCreacion} />
                </Grid>
                <Grid item pl={1}>
                    <IconButton color="info">
                        <PlusOneIcon />
                    </IconButton>
                </Grid>
                <Grid item pl={1}>
                    <IconButton color="info">
                        <MessageIcon />
                    </IconButton>
                </Grid>
                { idLogin == data.usuario.idLogin &&
                    <Grid item pl={1}>
                        <IconButton color="info">
                            <DeleteForeverIcon />
                        </IconButton>
                    </Grid>
                }

                {respondiendo &&                
                    <Grid item pl={1}>
                        <Box sx={{ backgroundColor: grey[200], borderRadius: '10px' }}
                            onClick={handleReplyClick}>
                            <Card variant="outlined">
                                <CardActionArea>
                                    <Box p={.5}>
                                        <SubdirectoryArrowRightIcon sx={{ fontSize: 12 }} />
                                        <Typography variant="caption">
                                            {respondiendo}
                                        </Typography>
                                    </Box>
                                </CardActionArea>
                            </Card>
                        </Box>
                    </Grid>
                }

                <Grid item pt={1}>
                    <Typography>
                        {data.mensaje}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Comentario;
