import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MessageIcon from '@mui/icons-material/Message';
import { CardActionArea, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { abrirModalAvisoUsuario } from '../../redux/slices/avisoSlice';
import { selectPub } from '../../redux/slices/publicacionSlice';
import PublicacionService from '../../services/PublicacionService';
import ValoracionFechaHora from '../ValoracionFechaHora/ValoracionFechaHora';

const PublicacionGestionarData = (props) => {
    const { data } = props;
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleCardClick = () => {
        dispatch(selectPub(data));
        navigate('/publicacion');
    }

    const handleDelete = (idPublicacion) => {
        try {
            let response = PublicacionService.borrar(idPublicacion);
        } catch (err) {
            dispatch(abrirModalAvisoUsuario(err));
        }
    }

    return (
        <Box m={.5} width={'100%'}>
            <Card sx={{ display: 'flex' }}>
                <Box pl={1}>
                    <IconButton color="info" onClick={() => handleDelete(data.idPublicacion)}>
                        <DeleteForeverIcon />
                    </IconButton>
                </Box>
                <CardActionArea onClick={handleCardClick}>
                    <Box sx={{ display: 'flex', alignItems: 'center', m: 1 }}>
                        <Box>
                            <Typography ml={1} component="div" variant="h5" color='#000000' >
                                {data.titulo}
                            </Typography>
                        </Box>
                        <Box pl={1} sx={{ display: 'flex', alignItems: 'center' }}>
                            <MessageIcon pl={1} />
                            <Typography pl={1} variant="subtitle1" color="text.secondary">
                                {data.cantidadComentarios == null | undefined ? 0 : data.cantidadComentarios}
                            </Typography>
                        </Box>
                        <ValoracionFechaHora puntaje={data.puntaje} fechaHora={data.fechaHoraCreacion} />
                    </Box>

                </CardActionArea>
            </Card>
        </Box>
    );
}

export default PublicacionGestionarData;