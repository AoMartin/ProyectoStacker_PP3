import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import { Link } from 'react-router-dom';
import { red } from '@mui/material/colors';
import { Typography } from '@mui/material';
import RuleIcon from '@mui/icons-material/Rule';

const MenuPrincipal = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '30%', minWidth: 250,maxWidth: 250, bgcolor: (theme) => theme.palette.error.main }}
      component="nav"
    >
      <ListItemButton component={Link} to="/home">
        <ListItemIcon>
          <CottageOutlinedIcon sx={{ fontSize: 35 }} style={{ color: '#FFFFFF' }}/>
        </ListItemIcon>
        <ListItemText 
          disableTypography
          primary={<Typography component="h4" variant="h5" type="body2" style={{ color: '#FFFFFF' }}>Home</Typography>}
        />
      </ListItemButton>

      <ListItemButton component={Link} to="/productos">
        <ListItemIcon>
          <AddShoppingCartOutlinedIcon sx={{ fontSize: 35 }} style={{ color: '#FFFFFF' }}/>
        </ListItemIcon>
        <ListItemText 
          disableTypography
          primary={<Typography component="h4" variant="h5" type="body2" style={{ color: '#FFFFFF' }}>Productos</Typography>}
        />
      </ListItemButton>

      <ListItemButton component={Link} to="/grupos">
        <ListItemIcon>
          <CategoryOutlinedIcon sx={{ fontSize: 35 }} style={{ color: '#FFFFFF' }}/>
        </ListItemIcon>
        <ListItemText 
          disableTypography
          primary={<Typography component="h4" variant="h5" type="body2" style={{ color: '#FFFFFF' }}>Grupos</Typography>}
        />
      </ListItemButton>

      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <StorefrontOutlinedIcon sx={{ fontSize: 35 }} style={{ color: '#FFFFFF' }}/>
        </ListItemIcon>
        <ListItemText 
          disableTypography
          primary={<Typography component="h4" variant="h5" type="body2" style={{ color: '#FFFFFF' }}>Sucursales</Typography>}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/sucursales/gestion">
            <ListItemIcon>
              <SettingsOutlinedIcon sx={{ fontSize: 35 }} style={{ color: '#FFFFFF' }}/>
            </ListItemIcon>
            <ListItemText 
          disableTypography
          primary={<Typography component="h4" variant="h5" type="body2" style={{ color: '#FFFFFF' }}>Gestión</Typography>}
        />
          </ListItemButton>

          {/* <ListItemButton sx={{ pl: 4 }} component={Link} to="/acciones-usuario">
            <ListItemIcon>
              <FeedOutlinedIcon sx={{ fontSize: 35 }} style={{ color: '#FFFFFF' }}/>
            </ListItemIcon>
            <ListItemText 
          disableTypography
          primary={<Typography component="h4" variant="h5" type="body2" style={{ color: '#FFFFFF' }}>Informes</Typography>}
        />
          </ListItemButton> */}
        </List>
      </Collapse>

      <ListItemButton component={Link} to="/campanas">
        <ListItemIcon>
          <ShoppingBagOutlinedIcon sx={{ fontSize: 35 }} style={{ color: '#FFFFFF' }}/>
        </ListItemIcon>
        <ListItemText 
          disableTypography
          primary={<Typography component="h4" variant="h5" type="body2" style={{ color: '#FFFFFF' }}>Campañas</Typography>}
        />
      </ListItemButton>

      <ListItemButton component={Link} to="/carga-masiva">
        <ListItemIcon>
          <FileUploadOutlinedIcon sx={{ fontSize: 35 }} style={{ color: '#FFFFFF' }}/>
        </ListItemIcon>
        <ListItemText 
          disableTypography
          primary={<Typography component="h4" variant="h5" type="body2" style={{ color: '#FFFFFF' }}>Carga manual</Typography>}
        />
      </ListItemButton>

      <ListItemButton component={Link} to="/acciones-usuario">
        <ListItemIcon>
          <RuleIcon sx={{ fontSize: 35 }} style={{ color: '#FFFFFF' }}/>
        </ListItemIcon>
        <ListItemText 
          disableTypography
          primary={<Typography component="h4" variant="h5" type="body2" style={{ color: '#FFFFFF' }}>Auditoría</Typography>}
        />
      </ListItemButton>
    </List>
  );
}

export default MenuPrincipal;