import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MessageIcon from '@mui/icons-material/Message';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import { Avatar, Card, CardActionArea, Grid, Grow, IconButton, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Box } from "@mui/system";
import React, { useImperativeHandle, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actualizarPuntajeComent } from '../../../redux/slices/comentarioSlice';
import ComentarioService from '../../../services/ComentarioService';
import ValoracionFechaHora from '../../ValoracionFechaHora/ValoracionFechaHora';
import '../detalle.css';


const Comentario = React.forwardRef((props, ref) => {
    const dispatch = useDispatch();
    const { data, respondiendo, handleSelect, handleReplyClick, index, blockDelete } = props;

    const idLogin = useSelector((state) => state.usuario.login.id);
    const userName = useSelector((state) => state.usuario.login.userName);
    const [plusOneTrigger, setPlusOneTrigger] = useState(0);

    const [selectedTrigger, setSelectedTrigger] = useState(true);

    useImperativeHandle(ref, () => ({
        triggerComentSelected: ()=> {
            setSelectedTrigger(false);
            setTimeout(function () {
                setSelectedTrigger(true);
            }, 500);
        }
    }));

    const puntuarHandle = async () => {
        try {
            setPlusOneTrigger(1);
            const response = await ComentarioService.puntuarComent(data.idComentario);
            dispatch(actualizarPuntajeComent({ id: data.idComentario, puntaje: response }));
        } catch (err) {
            //TODO manejar casos de error
        }
    }

    const handleDelete = () => {
        //TODO
    }

    return (
        <Box m={.5} ref={ref} id={`com#${index}`}>
            <Grow in={selectedTrigger} timeout={1000 + 10 * index} >
                <Grid container component="main" p={.5}>
                    <Grid item>
                        <Avatar src={data.usuario.imagenUrl}></Avatar>
                    </Grid>
                    <Grid item p={1}>
                        <Typography>{data.usuario.user}</Typography>
                    </Grid>
                    <Grid item p={1}>
                        <ValoracionFechaHora puntaje={data.puntaje} fechaHora={data.fechaHoraCreacion} />
                    </Grid>
                    {
                        (userName != '') &&
                        <>
                            <Grid item pl={1}>
                                <IconButton
                                    className="plusOneAnim"
                                    color="info"
                                    onClick={puntuarHandle}
                                    onAnimationEnd={() => setPlusOneTrigger(0)}
                                    plusonetrigger={plusOneTrigger}
                                    disabled={idLogin == data.usuario.idLogin ? true : undefined}
                                >
                                    <PlusOneIcon />
                                </IconButton>
                            </Grid>
                            <Grid item pl={1}>
                                <IconButton color="info" onClick={() => handleSelect(data.idComentario, data.mensaje)}>
                                    <MessageIcon />
                                </IconButton>
                            </Grid>
                        </>
                    }
                    {idLogin == data.usuario.idLogin &&
                        <Grid item pl={1}>
                            <IconButton disabled={blockDelete} color="info" onClick={handleDelete}>
                                <DeleteForeverIcon />
                            </IconButton>
                        </Grid>
                    }

                    {respondiendo != null &&
                        <Grid item xs={12} pl={1}>
                            <Box sx={{ backgroundColor: grey[200], borderRadius: '10px' }}
                                onClick={() => handleReplyClick(respondiendo.idComentario)}>
                                <Card variant="outlined">
                                    <CardActionArea>
                                        <Box p={.5}>
                                            <SubdirectoryArrowRightIcon sx={{ fontSize: 12 }} />
                                            <Typography variant="caption">
                                                {respondiendo.mensaje}
                                            </Typography>
                                        </Box>
                                    </CardActionArea>
                                </Card>
                            </Box>
                        </Grid>
                    }

                    <Grid item xs={12} pt={1}>
                        <Typography>
                            {data.mensaje}
                        </Typography>
                    </Grid>
                </Grid>
            </Grow>
        </Box>
    );
});

export default Comentario;