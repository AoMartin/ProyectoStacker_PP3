import { Button, Modal } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cerrarModalAvisoUsuario } from '../../../redux/slices/avisoSlice';

const ModalAvisoUsuario = (props) => {
    const { show, mensaje } = useSelector((state) => state.aviso.modal);
    const dispatch = useDispatch();

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
        dispatch(cerrarModalAvisoUsuario());
    }
    
    return (
        <>
            <Modal open={show} onClose={handleClose}>
                <Box sx={style}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Typography id="descripcion" variant="body2">
                            {mensaje}
                        </Typography>
                    </Box>

                    <Box sx={{ m: 1, display: 'flex', justifyContent: 'center' }}>
                        <Box>
                            <Button onClick={handleClose} variant="contained" color="info">
                                Aceptar
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default ModalAvisoUsuario;
