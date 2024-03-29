import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import FilterListIcon from '@mui/icons-material/FilterList';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { Chip, Divider, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { mostrarModalFiltrar } from '../../../redux/slices/publicacionSlice';

const MenuPrincipal = (props) => {
  const { tipo } = props;
  const dispatch = useDispatch();

  const abrirModalFiltrar= () =>{
    if(tipo != 'Home' && tipo != 'Nuevos' && tipo != 'Tendencia') return;
    dispatch(mostrarModalFiltrar());
  }

  return (
    <List
      sx={{ bgcolor: (theme) => theme.palette.info.light }}
      component="nav"
    >

      <Divider sx={{ borderBottomWidth: 5 }}>
        <Chip label="Navegar" color="info"></Chip>
      </Divider>

      <ListItemButton component={Link} to="/home">
        <ListItemIcon>
          <HomeIcon sx={{ fontSize: 35 }} style={{ color: '#FFFFFF' }} />
        </ListItemIcon>
        <ListItemText
          disableTypography
          primary={<Typography component="h4" variant="h5" type="body2" style={{ color: '#FFFFFF' }}>Home</Typography>}
        />
      </ListItemButton>

      <ListItemButton component={Link} to="/nuevos">
        <ListItemIcon>
          <FiberNewIcon sx={{ fontSize: 35 }} style={{ color: '#FFFFFF' }} />
        </ListItemIcon>
        <ListItemText
          disableTypography
          primary={<Typography component="h4" variant="h5" type="body2" style={{ color: '#FFFFFF' }}>Nuevos</Typography>}
        />
      </ListItemButton>

      <ListItemButton component={Link} to="/tendencia">
        <ListItemIcon>
          <AutoAwesomeIcon sx={{ fontSize: 35 }} style={{ color: '#FFFFFF' }} />
        </ListItemIcon>
        <ListItemText
          disableTypography
          primary={<Typography component="h4" variant="h5" type="body2" style={{ color: '#FFFFFF' }}>Tendencia</Typography>}
        />
      </ListItemButton>

      <Divider sx={{ borderBottomWidth: 5 }}>
        <Chip label="Opciones" color="info"></Chip>
      </Divider>

      <ListItemButton component={Link} to="/buscar">
        <ListItemIcon>
          <SearchIcon sx={{ fontSize: 35 }} style={{ color: '#FFFFFF' }} />
        </ListItemIcon>
        <ListItemText
          disableTypography
          primary={<Typography component="h4" variant="h5" type="body2" style={{ color: '#FFFFFF' }}>Buscar</Typography>}
        />
      </ListItemButton>

      <ListItemButton onClick={abrirModalFiltrar}>
        <ListItemIcon>
          <FilterListIcon sx={{ fontSize: 35 }} style={{ color: '#FFFFFF' }} />
        </ListItemIcon>
        <ListItemText
          disableTypography
          primary={<Typography component="h4" variant="h5" type="body2" style={{ color: '#FFFFFF' }}>Filtrar</Typography>}
        />
      </ListItemButton>

    </List>
  );
}

export default MenuPrincipal;