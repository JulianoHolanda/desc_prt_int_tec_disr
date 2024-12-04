import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "black", // Personalize a cor do AppBar
}));

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gerenciamento de Projetos
          </Typography>
          <Button color="inherit" sx={{ marginLeft: 2 }}>
            Adicionar Projeto
          </Button>
          <Button color="inherit" sx={{ marginLeft: 2 }}>
            Configurações
          </Button>
        </Toolbar>
      </CustomAppBar>
    </Box>
  );
}

export default Header;
