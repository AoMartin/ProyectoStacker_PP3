import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { Chip, Divider, Slide, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const MenuOpciones = (props) => {
    const { handleOpenModalCrearPublicacion } = props;
    let navigate = useNavigate();

    const tipoPermiso = useSelector((state) => state.usuario.login.tipoPermiso);

    const routeChange = () => {
        navigate('/gestionar');
    }

    return (
        <Slide in direction="down">
            <List
                sx={{ bgcolor: (theme) => theme.palette.info.light }}
                component="nav"
            >
                <Divider sx={{ borderBottomWidth: 5 }}>
                    <Chip label="Acciones" color="info"></Chip>
                </Divider>

                {(tipoPermiso == 'ADMIN' || tipoPermiso == 'MOD') &&
                    <ListItemButton component={Link} to="/moderar">
                        <ListItemIcon>
                            <SupervisorAccountIcon sx={{ fontSize: 35 }} style={{ color: '#FFFFFF' }} />
                        </ListItemIcon>
                        <ListItemText
                            disableTypography
                            primary={<Typography component="h4" variant="h5" type="body2" style={{ color: '#FFFFFF' }}>Moderar</Typography>}
                        />
                    </ListItemButton>
                }

                <ListItemButton onClick={handleOpenModalCrearPublicacion}>
                    <ListItemIcon>
                        <PostAddIcon sx={{ fontSize: 35 }} style={{ color: '#FFFFFF' }} />
                    </ListItemIcon>
                    <ListItemText
                        disableTypography
                        primary={<Typography component="h4" variant="h5" type="body2" style={{ color: '#FFFFFF' }}>Publicar</Typography>}
                    />
                </ListItemButton>

                <ListItemButton onClick={routeChange}>
                    <ListItemIcon>
                        <AutoAwesomeMotionIcon sx={{ fontSize: 35 }} style={{ color: '#FFFFFF' }} />
                    </ListItemIcon>
                    <ListItemText
                        disableTypography
                        primary={<Typography component="h4" variant="h5" type="body2" style={{ color: '#FFFFFF' }}>Gestionar</Typography>}
                    />
                </ListItemButton>

            </List>
        </Slide>
    );
}

export default MenuOpciones;