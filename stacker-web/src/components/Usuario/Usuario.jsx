import { Box, Grid, Menu, MenuItem, Typography } from '@mui/material';
import React, {useState} from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import { red } from '@mui/material/colors';

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
    <Box sx={{ width: 350, }}>
      <Grid container>
        <Grid item xs={3}>
          <AccountCircleOutlinedIcon  onClick={(e)=>handleClick(e)} sx={{ fontSize: 60, color: (theme) => theme.palette.error.main  }} />
        </Grid>
        <Grid onClick={(e)=>handleClick(e)} sx={{ fontSize: 40 }} item xs={9}>
          <Typography id="user" component="h4" variant="h5" sx={{ color: 'black' }}>
            {"TODO!"}
          </Typography>
          <Typography id="login-date" sx={{ fontSize: 12, color: (theme) => theme.palette.error.main }}>
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
        <MenuItem onClick={()=>logout()}>Log Out</MenuItem>
      </Menu>
    </Box>
  );
};

export default Usuario;
