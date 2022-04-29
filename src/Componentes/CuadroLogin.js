import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'auto',
    color: theme.palette.text.secondary,
}));

export default function CuadroLogin() {
    return (

        <Box sx={{
            bgcolor: 'background.paper',
            boxShadow: 6,
            borderRadius: 2,
            p: 4,
            width: 3 / 8,
            mt: 10,
            mx: "auto",
            alignContent: "center",
        }}>
            <Stack spacing={2}>
                <Typography variant="h6" gutterBottom component="div" >INGRESE SU MAIL Y CONTRASEÑA</Typography>
                <TextField id="outlined-basic" label="Mail" variant="outlined" opacity = "1" backgroundColor='bgColors.White' />
                <TextField id="outlined-basic" label="Contraseña" variant="outlined" opacity = "1" />
                <Link to ="/PaginaPrincipalLG" >
                <Button variant="contained" color="success">Log In</Button>
                </Link>
                <Link to ="/Olvido">
                <Typography variant="overline" gutterBottom component="div" >OLVIDE MI USUARIO Y/O CONTRASEÑA</Typography>
                </Link>
            </Stack>
        </Box>
    );
}