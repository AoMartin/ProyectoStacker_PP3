import { Avatar, Box, Grid, Menu, MenuItem, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../../redux/slices/usuarioSlice';

const Usuario = (props) => {
  const dispatch = useDispatch();

  const userName = useSelector((state) => state.usuario.userName);
  const img = useSelector((state) => state.usuario.img);
  const lastLoginDate = useSelector((state) => state.usuario.lastLoginDate);

  //TODO formatear fechas

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    //dispatch(userLogin());
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleImgChange = () => {
    //TODO user img change 
  }

  const logout = () => {
    dispatch(userLogout());
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
          <Typography id="login-date" sx={{ fontSize: 12, color: (theme) => theme.palette.info.light }}>
            <strong>Inicio sesion: {lastLoginDate}</strong>
          </Typography>
        </Grid>
      </Grid>
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
    </Box>
  );
};

export default Usuario;
