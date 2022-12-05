import { Button, Grid, Modal, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actualizarFiltro, filtrar, ocultarModalFiltrar } from '../../../redux/slices/publicacionSlice';


const filterData = {
    titulo: '',
    cantidadComentarios: null,
    puntaje: null,
    usuario: '',
}

const ModalFiltrar = (props) => {
    const showModalFiltrar = useSelector((state) => state.pubs.showModalFiltrar);
    const actualFilter = useSelector((state) => state.pubs.actualFilter);
    const dispatch = useDispatch();

    useEffect(() => {
        applyFilter();
    }, [actualFilter]);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '30%',
        transform: 'translate(-30%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '10px solid #999',
        borderRadius: 5,
        p: 2,
    };

    const handleClose = () => {
        dispatch(ocultarModalFiltrar());
    }

    const handleChange = (prop) => (event) => {
        dispatch(actualizarFiltro({prop: prop, value:event.target.value}));
    };

    const applyFilter = () => {
        dispatch(filtrar({
            titulo: actualFilter.titulo,
            cantidadComentarios: actualFilter.cantidadComentarios == null ? null : actualFilter.cantidadComentarios,
            puntaje: actualFilter.puntaje == null ? null : actualFilter.puntaje,
            usuario: actualFilter.usuario,
        }));
    }

    return (
        <>
            <Modal open={showModalFiltrar} onClose={handleClose}>
                <Box sx={style}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
                        <Typography id="titulo" variant="h6">
                            Filtrar
                        </Typography>
                    </Box>

                    <Grid container spacing={1}>

                        <Grid item xs={12}>
                            <TextField
                                label="Titulo"
                                value={actualFilter.titulo}
                                onChange={handleChange('titulo')}
                                inputProps={{ maxLength: 60 }}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Nombre de usuario"
                                value={actualFilter.usuario}
                                onChange={handleChange('usuario')}
                                inputProps={{ maxLength: 255 }}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Puntaje minimo"
                                value={actualFilter.puntaje != null ? actualFilter.puntaje : 0}
                                type="number"
                                onChange={handleChange('puntaje')}
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                label="Cantidad minima de comentarios"
                                value={actualFilter.cantidadComentarios != null ? actualFilter.cantidadComentarios : 0}
                                type="number"
                                onChange={handleChange('cantidadComentarios')}
                                fullWidth
                            />
                        </Grid>

                    </Grid>

                    <Box sx={{ m: 1, display: 'flex', justifyContent: 'center' }}>
                        <Box pl={5}>
                            <Button onClick={handleClose} variant="contained" color="action">
                                Cerrar
                            </Button>
                        </Box>
                    </Box>

                </Box>
            </Modal>
        </>
    );
};

export default ModalFiltrar;
