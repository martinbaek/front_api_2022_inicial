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

export default function CuadroPerfil() {
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
                <Typography variant="h6" gutterBottom component="div" color='black' opacity = "1">Perfil</Typography>
                <TextField id="outlined-basic" label="Nombre" variant="outlined" opacity = "1" backgroundColor='bgColors.White' />
                <TextField id="outlined-basic" label="Apellido" variant="outlined" opacity = "1" backgroundColor='bgColors.White' />
                <TextField id="outlined-basic" label="Usuario" variant="outlined" opacity = "1" backgroundColor='bgColors.White' />
                <TextField id="outlined-basic" label="Mail" variant="outlined" opacity = "1" backgroundColor='bgColors.White' />
                <TextField id="outlined-basic" label="Telefono" variant="outlined" opacity = "1" backgroundColor='bgColors.White' />
                <TextField id="outlined-basic" label="Contraseña" variant="outlined" opacity = "1" backgroundColor='bgColors.White' />
                <TextField id="outlined-basic" label="Verificar Contraseña" variant="outlined" opacity = "1" />
                <Link to ="/LogIn" >
                <Button variant="contained" color="success">Modificar</Button>
                </Link>
            </Stack>
        </Box>
    );
}