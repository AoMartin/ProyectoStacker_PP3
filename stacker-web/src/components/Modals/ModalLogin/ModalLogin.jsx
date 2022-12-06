import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, Modal, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { abrirModalAvisoUsuario } from '../../../redux/slices/avisoSlice';
import { closeLoginModal, userLogin, userLogout } from '../../../redux/slices/usuarioSlice';
import LoginService from '../../../services/LoginService';

const ModalLogin = (props) => {
    const { loginModalOpen } = useSelector((state) => state.usuario);
    const dispatch = useDispatch();

    const [loginError, setLoginError] = useState('');

    const [values, setValues] = useState({
        user: '',
        password: '',
        showPassword: false,
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
            user: '',
            password: '',
            showPassword: false,
        });
        dispatch(closeLoginModal());
    }

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = async () => {
        try {
            const response = await LoginService.autenticarUsuario({ username: values.user, password: values.password });
            sessionStorage.setItem('session', JSON.stringify(response));
            dispatch(userLogin(response));
            setLoginError('');
            handleClose();

            setTimeout(function () {
                sessionStorage.clear();
                dispatch(abrirModalAvisoUsuario("La sesión ha expirado, por favor vuelva a loguearse."))
                dispatch(userLogout());
            }, 899000);

        } catch (err) {
            console.log(JSON.stringify(err))
            setLoginError(err);
        }
    }

    return (
        <>
            <Modal open={loginModalOpen} onClose={handleClose}>
                <Box sx={style}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography id="titulo" variant="h6">
                            Login Usuario
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography id="descripcion" variant="body2">
                            Si es la primera vez y el nombre de usuario
                            se encuentra disponible se creará una cuenta nueva.
                        </Typography>
                    </Box>

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                            display: 'flex', justifyContent: 'center', m: 2
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="txt-usuario"
                            label="Usuario"
                            value={values.user}
                            onChange={handleChange('user')}
                        />

                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                            <OutlinedInput
                                id="txt-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Contraseña"
                            />
                        </FormControl>
                    </Box>

                    {loginError != '' &&
                        <Box sx={{ display: 'flex', justifyContent: 'center', m: 1 }}>
                            <Typography id="descripcion" variant="body2" color="error">
                                {loginError}
                            </Typography>
                        </Box>
                    }

                    <Box sx={{ m: 1, display: 'flex', justifyContent: 'center' }}>
                        <Box>
                            <Button onClick={handleSubmit} variant="contained" color="info"
                                disabled={values.user.length < 3 || values.password == ''}>
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

export default ModalLogin;
