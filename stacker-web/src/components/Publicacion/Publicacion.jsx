import { Avatar, Button, CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import StarRateIcon from '@mui/icons-material/StarRate';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Publicacion = () => {

    return (
        <Box m={.5} width={700}>
            <Card sx={{ display: 'flex' }}>
                <CardActionArea>
                    <CardContent >
                        <Box sx={{ display: 'flex', alignItems: 'center', pb: 1 }}>
                            <Avatar></Avatar>
                            <Typography ml={1} component="div" variant="h5" color='#000000' >
                                Live From Space
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'top', pl: 6 }}>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit blandit cubilia sociis netus, porta tempor curabitur himenaeos cum neque hendrerit sagittis pulvinar placerat. Nulla erat viverra iaculis magnis et at urna, magna congue maecenas accumsan integer sem.
                            </Typography>
                            <Box width={1000}>
                                <CardMedia
                                    component="img"
                                    height={150}
                                    src="https://i.ytimg.com/vi/ZuzrrZkgC8Q/maxresdefault.jpg"
                                />
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'left', pl: 1 }}>
                            <StarRateIcon color='#000000'></StarRateIcon>
                            <Typography pl={1} variant="subtitle1" color="text.secondary">
                                99999
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'right', pl: 1 }}>
                                <AccessTimeIcon color='#000000'></AccessTimeIcon>
                                <Typography pl={1} variant="subtitle1" color="text.secondary">
                                    2021-03-24 16:48:05.591
                                </Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
}

export default Publicacion;