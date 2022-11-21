import React from 'react';
import { Box } from "@mui/system";
import { Avatar, Button, Card, CardActionArea, Grid, IconButton, Typography } from '@mui/material';
import ValoracionFechaHora from '../ValoracionFechaHora/ValoracionFechaHora';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import MessageIcon from '@mui/icons-material/Message';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import { grey } from '@mui/material/colors';

const Comentario = (props) => {

    const handleReplyClick = () => {
        alert("dasdasd");
    }

    return (
        <Box m={.5}>


            <Grid container component="main" p={.5}>
                <Grid item>
                    <Avatar></Avatar>
                </Grid>
                <Grid item p={1}>
                    <Typography>Usuario</Typography>
                </Grid>
                <Grid item p={1}>
                    <ValoracionFechaHora />
                </Grid>
                <Grid item pl={1}>
                    <IconButton color="info">
                        <PlusOneIcon />
                    </IconButton>
                </Grid>
                <Grid item pl={1}>
                    <IconButton color="info">
                        <MessageIcon />
                    </IconButton>
                </Grid>

                <Grid item pl={1}>
                    <Box sx={{ backgroundColor: grey[200], borderRadius: '10px' }}
                        onClick={handleReplyClick}>
                        <Card variant="outlined">
                            <CardActionArea>
                                <Box p={.5}>

                                    <SubdirectoryArrowRightIcon sx={{ fontSize: 12 }} />
                                    <Typography variant="caption">Lorem ipsum dolor sit amet consectetur adipiscing elit blandit cubilia sociis netus, porta tempor curabitur himenaeos cum neque hendrerit sagittis pulvinar placerat. Nulla erat viverra iaculis magnis et at urna, magna congue maecenas accumsan integer sem.
                                    </Typography>
                                </Box>
                            </CardActionArea>
                        </Card>
                    </Box>
                </Grid>

                <Grid item pt={1}>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit cubilia sociis netus, porta tempor curabitur himenaeos cum neque hendrerit sagittis pulvinar placerat. Nulla erat viverra iaculis magnis et at urna, magna congue maecenas accumsan integer sem.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Comentario;
