import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PublicacionGestionarData from '../../components/PublicacionGestionarData/PublicacionGestionarData';
import UsuarioModerarData from '../../components/UsuarioModerarData/UsuarioModerarData';
import { abrirModalAvisoUsuario } from '../../redux/slices/avisoSlice';
import { cargarPublicaciones, limpiarListaPubs } from '../../redux/slices/publicacionSlice';
import { cargarListaUsuarios, limpiarListaUsuarios } from '../../redux/slices/usuarioSlice';
import LoginService from '../../services/LoginService';
import PermisoService from '../../services/PermisoService';
import PublicacionService from '../../services/PublicacionService';
import { PERMISO_ADMIN, PERMISO_BAN, PERMISO_MOD } from '../../utils/Constantes';


export default function Moderar(props) {
    const myRef = useRef(null);
    const dispatch = useDispatch();

    const [buscarTxt, setBuscarTxt] = useState('');
    const [selected, setSelected] = useState(null);

    const listaPublicaciones = useSelector((state) => state.pubs.listaPubs);
    const idLogin = useSelector((state) => state.usuario.login.id);
    const listaUsuarios = useSelector((state) => state.usuario.listaUsuarios);
    const tipoPermiso = useSelector((state) => state.usuario.login.tipoPermiso);

    useEffect(() => {
        myRef.current.scrollIntoView({ behavior: 'smooth' });
        dispatch(limpiarListaUsuarios());
        dispatch(limpiarListaPubs());
        setSelected(null);
    }, []);

    const handleChange = async (event) => {
        let buscar = event.target.value;
        setBuscarTxt(event.target.value);
        if (buscar.length < 3) return;

        try {
            let response = [];
            response = await LoginService.buscarUsuario(buscar);
            dispatch(cargarListaUsuarios(response));
        } catch (err) {
            dispatch(abrirModalAvisoUsuario(err));
        }
    }

    const userSelected = async (usr) => {
        try {
            let response = [];
            response = await PublicacionService.obtenerTodoUsuario(usr.idLogin);
            dispatch(cargarPublicaciones(response));
            setSelected(usr);
        } catch (err) {
            dispatch(abrirModalAvisoUsuario(err));
        }
    }


    const darPermiso = async (permiso) => {
        try {
            let response = await PermisoService.asignar({ admin: idLogin, usuarioObjetivo: selected.idLogin, tipoPermiso: permiso });
            setSelected({ ...selected, tipoPermiso: response.tipoPermiso });
        } catch (err) {
            dispatch(abrirModalAvisoUsuario(err));
        }
    }

    const quitarPermisos = async () => {
        try {
            let response = await PermisoService.borrar({ admin: idLogin, usuarioObjetivo: selected.idLogin, tipoPermiso: null });
            setSelected({ ...selected, tipoPermiso: response.tipoPermiso });
        } catch (err) {
            dispatch(abrirModalAvisoUsuario(err));
        }
    }

    return (
        <Grid container component="main" ref={myRef}>

            <Grid item xs={12}>
                <Grid item xs={12}>
                    <TextField
                        id="txt-tit"
                        label="Buscar usuario"
                        fullWidth
                        value={buscarTxt}
                        onChange={(e) => handleChange(e)}
                        inputProps={{ maxLength: 60 }}
                    />
                </Grid>

                <Grid m={2}>
                    <Typography m={1} variant="h4">Resultados: </Typography>
                </Grid>
                <Stack spacing={2}>
                    <Grid item  >
                        {listaUsuarios?.map((usr, index) =>
                            <UsuarioModerarData key={index} data={usr} onSelect={userSelected} disabled={false} />
                        )}
                    </Grid>
                </Stack>

                {
                    selected != null &&
                    <>
                        <Grid m={2}>
                            <Typography m={1} variant="h4">Seleccionado: </Typography>
                        </Grid>
                        <Grid item  >
                            <UsuarioModerarData key={'00#selected'} data={selected} disabled={true} />
                        </Grid>
                        <Box sx={{ ml: 1, display: 'flex', justifyContent: 'center', border: '5px dashed grey', }}>
                            {
                                selected.tipoPermiso != 'ADMIN' || tipoPermiso == 'ADMIN'
                                    ?
                                    <>
                                        {
                                            tipoPermiso == 'ADMIN' &&
                                            <>
                                                <Button onClick={() => darPermiso(PERMISO_ADMIN)} variant="outlined" p={1} color='info'>Dar ADMIN</Button>
                                                <Button onClick={() => darPermiso(PERMISO_MOD)} variant="outlined" p={1} color='secondary'>Dar MOD</Button>
                                            </>
                                        }
                                        <Button onClick={() => darPermiso(PERMISO_BAN)} variant="outlined" p={1} color='error'>Dar BAN</Button>
                                        <Typography p={1} variant="h4">-</Typography>
                                        <Button onClick={quitarPermisos} variant="outlined" p={1} color='error'>Quitar ban / permiso</Button>
                                    </>
                                    :
                                    <Typography id="titulo" variant="body" m={2}>
                                        Solo un admin puede ejecutar acciones sobre otros admin.
                                    </Typography>
                            }
                        </Box>
                    </>
                }

                <Grid m={2}>
                    <Typography m={1} variant="h4">Publicaciones del usuario: </Typography>
                </Grid>
                <Stack spacing={2}>
                    {
                        listaPublicaciones.length == 0 &&
                        <Box sx={{ ml: 1, display: 'flex', justifyContent: 'center', border: '5px dashed grey', }}>
                            <Typography id="titulo" variant="body" m={2}>
                                No hay publicaciones creadas por el usuario.
                            </Typography>
                        </Box>
                    }
                    {listaPublicaciones.map((pub, index) =>
                        <PublicacionGestionarData key={index} data={pub} />
                    )}
                </Stack>
            </Grid>

        </Grid>
    );
}
