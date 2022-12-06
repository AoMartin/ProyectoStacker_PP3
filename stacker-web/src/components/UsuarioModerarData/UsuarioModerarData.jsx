import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Avatar, CardActionArea, Chip, Grid, IconButton, Switch, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { abrirModalAvisoUsuario } from '../../redux/slices/avisoSlice';
import { eliminarPub, selectPub } from '../../redux/slices/publicacionSlice';
import PublicacionService from '../../services/PublicacionService';
import ValoracionFechaHora from '../ValoracionFechaHora/ValoracionFechaHora';

const UsuarioModerarData = (props) => {
    const { data, onSelect, disabled } = props;
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

    const formatearFecha = (fecha) => {
        const currentDate = new Date(fecha);
        const dia = currentDate.getDate();
        const mes = currentDate.getMonth(); // Be careful! January is 0, not 1
        const anio = currentDate.getFullYear();
        const horas = currentDate.getHours();
        const minutos = currentDate.getMinutes();
        const dateString = `${horas}:${minutos} - ${dia}/${mes + 1}/${anio}`;
        return dateString;
    }

    return (
        <Box m={.5} width={'100%'}>
            <Card sx={{ display: 'flex' }}>
                <CardActionArea onClick={()=>onSelect(data)} sx={{ display: 'flex' }} disabled={disabled}>
                    <Grid item m={1}>
                        <Avatar src={data.imagenUrl}></Avatar>
                    </Grid>
                    <Grid item p={1}>
                        <Typography>{data.user}</Typography>
                    </Grid>
                    {
                        data.tipoPermiso != null &&
                        <Grid item p={1}>
                            <Chip label={data.tipoPermiso} size="small"
                                color={data.tipoPermiso == 'BAN' ? 'error' : data.tipoPermiso == 'ADMIN' ? 'info' : undefined}>
                            </Chip>
                        </Grid>
                    }
                    <Grid item p={1}>
                        <Typography>Primer login: </Typography>
                    </Grid>
                    <Grid>
                        <Typography pl={1} variant="subtitle1" color="text.secondary">
                            {formatearFecha(data.fechaHoraCreacion)}
                        </Typography>
                    </Grid>
                    <Grid item p={1}>
                        <Typography>Ultimo login: </Typography>
                    </Grid>
                    <Grid>
                        <Typography pl={1} variant="subtitle1" color="text.secondary">
                            {formatearFecha(data.ultimoLogin)}
                        </Typography>
                    </Grid>
                </CardActionArea>
            </Card>
        </Box>
    );
}

export default UsuarioModerarData;