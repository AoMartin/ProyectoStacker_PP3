import { Button, Grid, Modal, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cargarPublicaciones, ocultarModalCrearPub } from '../../../redux/slices/publicacionSlice';
import PublicacionService from '../../../services/PublicacionService';
import PublicacionCard from '../../PublicacionCard/PublicacionCard';


const pubData = {
    titulo: '',
    imagen: '',
    descripcion: '',
    puntaje: 0,
    fechaHoraCreacion: null,
    usuario: { idLogin: -1 },
}

const ModalCrearPublicacion = (props) => {
    let navigate = useNavigate();
    const showModalCrearPub = useSelector((state) => state.pubs.showModalCrearPub);
    const idLogin = useSelector((state) => state.usuario.login.id);
    const img = useSelector((state) => state.usuario.login.img);
    const dispatch = useDispatch();

    const [values, setValues] = useState({
        titulo: '',
        descripcion: '',
        imagenUrl: '',
    });

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1000,
        bgcolor: 'background.paper',
        border: '10px solid #999',
        borderRadius: 5,
        boxShadow: 24,
        p: 2,
    };

    const handleClose = () => {
        setValues({
            titulo: '',
            descripcion: '',
            imagenUrl: '',
        });
        dispatch(ocultarModalCrearPub());
    }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = async () => {
        try {
            let data = pubData;
            data.titulo = values.titulo;
            data.descripcion = values.descripcion;
            data.imagen = values.imagenUrl;
            data.usuario.idLogin = idLogin;

            const response = await PublicacionService.guardar(data);
            window.location.reload()
            handleClose();
        } catch (err) {
            //TODO manejar casos de error
        }
    }

    return (
        <>
            <Modal open={showModalCrearPub} onClose={handleClose}>
                <Box sx={style}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
                        <Typography id="titulo" variant="h6">
                            Crear nueva publicación
                        </Typography>
                    </Box>

                    <Grid container>

                        <Grid item xs={6}>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <TextField
                                        id="txt-tit"
                                        label="Titulo"
                                        fullWidth
                                        value={values.titulo}
                                        onChange={handleChange('titulo')}
                                        inputProps={{ maxLength: 60 }}
                                    />

                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="filled-multiline-flexible"
                                        label="Descripcion"
                                        multiline
                                        rows={4}
                                        fullWidth
                                        value={values.descripcion}
                                        onChange={handleChange('descripcion')}
                                        inputProps={{ maxLength: 255 }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="txt-url"
                                        label="Url imagen"
                                        value={values.imagenUrl}
                                        onChange={handleChange('imagenUrl')}
                                        error={values.sendDisabled}
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={6}>
                            <Box sx={{ ml:1, display: 'flex', justifyContent: 'center', border: '5px dashed grey',  }}>
                                {
                                    values.imagenUrl != ''
                                        ?
                                        <img

                                            style={{ aspectRatio: 4 / 3 }}
                                            src={values.imagenUrl}
                                            alt="No se pudo cargar la imagen."
                                        />
                                        :
                                        <Box sx={{ display: 'flex', justifyContent: 'center', m: 1}}>
                                            <Typography id="titulo" variant="body">
                                                Imagen
                                            </Typography>
                                        </Box>
                                }
                            </Box>
                        </Grid>

                    </Grid>

                    <Box sx={{ m: 1, display: 'flex', justifyContent: 'center' }}>
                        <Box>
                            <Button onClick={handleSubmit} variant="contained" color="info"
                                disabled={values.titulo == '' || values.descripcion == '' || values.imagenUrl == '' || values.imagenUrl.length > 2048}>
                                Publicar
                            </Button>
                        </Box>
                        <Box pl={5}>
                            <Button onClick={handleClose} variant="contained" color="action">
                                Cancelar
                            </Button>
                        </Box>
                    </Box>

                </Box>
            </Modal>
        </>
    );
};

export default ModalCrearPublicacion;
