import CancelIcon from '@mui/icons-material/Cancel';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import { Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { Box } from "@mui/system";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { escribirMensaje, limpiarResponder } from '../../../redux/slices/comentarioSlice';

const CajaComentario = (props) => {
    const { handleReplyClick, handleSubmit } = props;
    const dispatch = useDispatch();

    const userName = useSelector((state) => state.usuario.login.userName);

    const mensaje = useSelector((state) => state.coments.mensaje);
    const mensajeRespuesta = useSelector((state) => state.coments.msgRespuesta);
    const idRespuesta = useSelector((state) => state.coments.idRespuesta);

    const handleChange = (event) => {
        dispatch(escribirMensaje(event.target.value));
    }

    const handleCancelReply = () => {
        dispatch(limpiarResponder());
    }

    return (

        <Box
            sx={{
                width: 850,
                maxWidth: '100%',
                border: '5px dashed grey',
                m: 2,
                p: 2
            }}>
            {userName == ''
                ?
                <Box sx={{ textAlign: "center" }}>
                    <Typography variant="body2" >
                        Se necesita inciar sesión para poder enviar comentarios.
                    </Typography>
                </Box>
                :
                <>
                    {mensajeRespuesta != '' &&
                        <Box
                            sx={{
                                width: 850,
                                maxWidth: '100%', display: 'flex', alignItems: 'right',
                                mb: 1
                            }}>
                            <TextField
                                id="filled-multiline-flexible"
                                label="Responder a:"
                                multiline
                                fullWidth
                                disabled
                                value={mensajeRespuesta}
                                InputProps={{
                                    maxLength: 255, startAdornment: (
                                        <InputAdornment position="start">
                                            <SubdirectoryArrowRightIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                onClick={()=> handleReplyClick(idRespuesta)}
                            />
                            <Box sx={{ display: 'flex', alignItems: 'center', m: 1 }}>
                                <IconButton color="info" onClick={handleCancelReply}>
                                    <CancelIcon sx={{ fontSize: 40 }} />
                                </IconButton>
                            </Box>
                        </Box>
                    }
                    <Box
                        sx={{
                            width: 850,
                            maxWidth: '100%', display: 'flex', alignItems: 'right',
                        }}>

                        <TextField
                            id="filled-multiline-flexible"
                            label="Comentario"
                            multiline
                            fullWidth
                            inputProps={{ maxLength: 255 }}
                            onChange={handleChange}
                            value={mensaje}
                        />
                        <Box sx={{ display: 'flex', alignItems: 'center', m: 1 }}>
                            <Button
                                variant="contained"
                                color="info"
                                disabled={mensaje == ''}
                                onClick={() => handleSubmit(mensaje)}>
                                Enviar
                            </Button>
                        </Box>
                    </Box>
                </>
            }
        </Box>

    );
};

export default CajaComentario;
