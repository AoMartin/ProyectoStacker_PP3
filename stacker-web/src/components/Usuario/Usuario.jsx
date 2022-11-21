import { Avatar, Box, Grid, Menu, MenuItem, Typography } from '@mui/material';
import React, { useState } from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import { grey } from '@mui/material/colors';

const Usuario = (props) => {


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    //dispatch(userLogout());
  }

  return (
    <Box sx={{ width: 350, height: 80, backgroundColor: grey[200], borderRadius: '10px' }}>
      <Grid container>
        <Grid item xs={3} mt={1} ml={2} >
          <Avatar src=""
            onClick={(e) => handleClick(e)} sx={{ width: 60, height: 60, color: (theme) => theme.palette.info.light }}></Avatar>
        </Grid>
        <Grid mt={1} onClick={(e) => handleClick(e)} sx={{ fontSize: 40 }} item xs={8}>
          <Typography id="user" component="h4" variant="h5" sx={{ color: 'black' }}>
            {"TODO!"}
          </Typography>
          <Typography id="login-date" sx={{ fontSize: 12, color: (theme) => theme.palette.info.light }}>
            <strong>Inicio sesion: {"TODO!"}</strong>
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
        <MenuItem onClick={() => logout()}>Log Out</MenuItem>
      </Menu>
    </Box>
  );
};

export default Usuario;
