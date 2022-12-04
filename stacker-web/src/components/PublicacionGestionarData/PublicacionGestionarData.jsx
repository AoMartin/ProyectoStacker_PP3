import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MessageIcon from '@mui/icons-material/Message';
import { CardActionArea, IconButton, Switch } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { abrirModalAvisoUsuario } from '../../redux/slices/avisoSlice';
import { eliminarPub, selectPub } from '../../redux/slices/publicacionSlice';
import PublicacionService from '../../services/PublicacionService';
import ValoracionFechaHora from '../ValoracionFechaHora/ValoracionFechaHora';

const PublicacionGestionarData = (props) => {
    const { data } = props;
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        setChecked(false);
    }, [data]);

    const handleCardClick = () => {
        dispatch(selectPub(data));
        navigate('/publicacion');
    }

    const handleDelete = (idPublicacion) => {
        try {
            setChecked(false);
            let response = PublicacionService.borrar(idPublicacion);
            dispatch(eliminarPub(idPublicacion));
        } catch (err) {
            dispatch(abrirModalAvisoUsuario(err));
        }
    }

    const handleChange = (event) => {
        setChecked(!checked);
    };

    return (
        <Box m={.5} width={'100%'}>
            <Card sx={{ display: 'flex' }}>
                <Box pl={1}>
                    <Switch
                        checked={checked}
                        onChange={handleChange}
                        color='error'
                    />
                </Box>
                <Box pl={1}>
                    <IconButton disabled={!checked} color="info" onClick={() => handleDelete(data.idPublicacion)}>
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