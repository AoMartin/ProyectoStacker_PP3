import { Avatar, Box, Button, Grid, Menu, MenuItem, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openImagenModal, openLoginModal, userLogout } from '../../../redux/slices/usuarioSlice';
import ModalLogin from '../../Modals/ModalLogin/ModalLogin';
import ModalUsuarioCambiarImagen from '../../Modals/ModalUsuarioCambiarImagen/ModalUsuarioCambiarImagen';

const Usuario = (props) => {
  const dispatch = useDispatch();

  const userName = useSelector((state) => state.usuario.login.userName);
  const img = useSelector((state) => state.usuario.login.img);
  const lastLoginDate = useSelector((state) => state.usuario.login.lastLoginDate);

  //TODO formatear fechas

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl && userName != '');

  const handleClick = (event) => {
    if (userName == '') return;
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleImgChange = () => {
    dispatch(openImagenModal());
    setAnchorEl(null);
  }

  const logout = () => {
    dispatch(userLogout());
    sessionStorage.removeItem('session');
  }

  const handleLoginModalOpen = () => {
    dispatch(openLoginModal());
    setAnchorEl(null);
  }

  return (
    <Box sx={{ width: 350, height: 80, backgroundColor: grey[200], borderRadius: '10px' }}>
      <Grid container>
        <Grid item xs={3} mt={1} ml={2} >
          <Avatar src={img}
            onClick={(e) => handleClick(e)} sx={{ width: 60, height: 60, color: (theme) => theme.palette.info.light }}></Avatar>
        </Grid>
        <Grid mt={1} onClick={(e) => handleClick(e)} sx={{ fontSize: 40 }} item xs={8}>
          <Typography id="user" component="h4" variant="h5" sx={{ color: 'black' }}>
            {userName}
          </Typography>
          {userName == ''
            ?
            <Button onClick={handleLoginModalOpen} variant="outlined" color="info">No se ha iniciado sesión</Button>
            :
            <Typography id="login-date" sx={{ fontSize: 12, color: (theme) => theme.palette.info.light }}>
              <strong>Inicio sesion: {lastLoginDate}</strong>
            </Typography>
          }
        </Grid>
      </Grid>
      {userName != '' &&
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={() => handleImgChange()}>Asociar Imagen</MenuItem>
          <MenuItem onClick={() => logout()}>Salir</MenuItem>
        </Menu>
      }
      <ModalLogin/>
      <ModalUsuarioCambiarImagen/>
    </Box>
  );
};

export default Usuario;
