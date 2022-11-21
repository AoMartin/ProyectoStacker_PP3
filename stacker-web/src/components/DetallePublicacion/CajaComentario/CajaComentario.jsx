import CancelIcon from '@mui/icons-material/Cancel';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { Box } from "@mui/system";
import React from 'react';

const CajaComentario = (props) => {


    return (

        <Box
            sx={{
                width: 850,
                maxWidth: '100%',
                border: '5px dashed grey',
                m: 2,
                p: 2
            }}>
            <Box
                sx={{
                    width: 850,
                    maxWidth: '100%', display: 'flex', alignItems: 'right',
                    mb: 1
                }}>
                <TextField
                    id="filled-multiline-flexible"
                    label="Responder a:"
                    multiline
                    fullWidth
                    disabled
                    value="Lorem ipsum dolor sit amet consectetur adipiscing elit blandit cubilia sociis netus, porta tempor curabitur himenaeos cum neque hendrerit sagittis pulvinar placerat. Nulla erat viverra iaculis magnis et at urna, magna congue maecenas accumsan integer sem."
                    InputProps={{
                        maxLength: 255, startAdornment: (
                            <InputAdornment position="start">
                                <SubdirectoryArrowRightIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <Box sx={{ display: 'flex', alignItems: 'center', m: 1 }}>
                    <IconButton color="info">
                        <CancelIcon sx={{ fontSize: 40 }}/>
                    </IconButton>
                </Box>
            </Box>
            <Box
                sx={{
                    width: 850,
                    maxWidth: '100%', display: 'flex', alignItems: 'right',
                }}>

                <TextField
                    id="filled-multiline-flexible"
                    label="Comentario"
                    multiline
                    fullWidth
                    inputProps={{ maxLength: 255 }}
                />
                <Box sx={{ display: 'flex', alignItems: 'center', m: 1 }}>
                    <Button variant="contained" color="info">Enviar</Button>
                </Box>
            </Box>
        </Box>

    );
};

export default CajaComentario;
