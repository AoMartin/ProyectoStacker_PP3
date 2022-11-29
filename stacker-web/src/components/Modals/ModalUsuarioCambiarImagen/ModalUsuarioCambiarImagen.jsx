import { Avatar, Button, Modal, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeImagenModal, userImgUpdate } from '../../../redux/slices/usuarioSlice';
import UsuarioService from '../../../services/UsuarioService';

const ModalUsuarioCambiarImagen = (props) => {
    const idLogin = useSelector((state) => state.usuario.login.id);
    const { imagenModalOpen } = useSelector((state) => state.usuario);
    const dispatch = useDispatch();

    const [values, setValues] = useState({
        imagenUrl: '',
        sendDisabled: false,
    });

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        border: '10px solid #999',
        borderRadius: 5,
        boxShadow: 24,
        p: 2,
    };

    const handleClose = () => {
        setValues({
            imagenUrl: '',
            sendDisabled: false,
        });
        dispatch(closeImagenModal());
    }

    const handleChange = (prop) => (event) => {
        
        if (event.target.value.length > 2048) {
            setValues({ ...values, sendDisabled: true });
            return;
        } 
        setValues({ ...values, sendDisabled: false, [prop]: event.target.value });
    };

    const handleSubmit = async () => {
        try {
            const response = await UsuarioService.cambiarImagen({id:idLogin,url:values.imagenUrl});
            dispatch(userImgUpdate(response));
            handleClose();
        } catch (err) {
            //TODO manejar casos de error
        }
    }

    return (
        <>
            <Modal open={imagenModalOpen} onClose={handleClose}>
                <Box sx={style}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography id="titulo" variant="h6">
                            Asociar imagen
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography id="descripcion" variant="body2">
                            Ingrese la URL de la imagen que desea asociar a su perfil de usuario:
                        </Typography>
                    </Box>

                    <Box sx={{ m: 1, display: 'flex', justifyContent: 'center' }}>
                        <Box sx={{
                            '& > :not(style)': { m: 1 },
                            display: 'flex', justifyContent: 'center'
                        }}>
                            <Avatar src={values.imagenUrl} sx={{ width: 60, height: 60 }} />
                        </Box>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: 300 },
                                display: 'flex', justifyContent: 'center'
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="txt-url"
                                label="Url"
                                value={values.imagenUrl}
                                onChange={handleChange('imagenUrl')}
                                error={values.sendDisabled}
                                fullWidth
                            />
                        </Box>
                    </Box>
                    {
                        values.sendDisabled &&
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Typography id="descripcion" variant="body2" color="error">
                                La url supera el máximo de 2048 caráteres permitido.
                            </Typography>
                        </Box>
                    }

                    <Box sx={{ m: 1, display: 'flex', justifyContent: 'center' }}>
                        <Box>
                            <Button onClick={handleSubmit} variant="contained" color="info"
                                disabled={values.imagenUrl == '' || values.sendDisabled}>
                                Aceptar
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

export default ModalUsuarioCambiarImagen;
