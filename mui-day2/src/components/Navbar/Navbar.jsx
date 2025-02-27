import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import sandwichIcon from '../../assets/icon-menu.svg';
import logo from '../../assets/logo.svg';

const pages = ['Home', 'New', 'Popular', 'Trending', 'Categories'];

export default function Navbar() {
  const [pagesDrawer, setPagesDrawer] = useState(false);

  const handleDrawerToggle = () => {
    setPagesDrawer(!pagesDrawer);
  };

  // Drawer
  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
    >
      <List>
        {pages.map((page) => (
          <ListItem key={page} disablePadding>
            <ListItemButton>
              <ListItemText primary={page} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        color="white"
        sx={{ color: 'black', boxShadow: 'none' }}
      >
        <Container>
          <Toolbar>
            {/* logo */}
            <Box sx={{ flexGrow: 1 }}>
              <Box
                component="img"
                src={logo}
                alt="Website logo"
                sx={{ width: { xs: '45px', sm: '60px' }, mt: 1 }}
              />
            </Box>

            {/* desktop links */}
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 3 }}>
              {pages.map((page) => (
                <Typography
                  key={page}
                  sx={{
                    cursor: 'pointer',
                    '&:hover': { color: 'hsl(5, 85%, 63%)' },
                  }}
                >
                  {page}
                </Typography>
              ))}
            </Box>

            {/* hamburger button */}
            <IconButton
              color="inherit"
              edge="start"
              sx={{ display: { sm: 'none' } }}
              onClick={handleDrawerToggle}
            >
              <img src={sandwichIcon} alt="" />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* mobile links */}
      <Drawer anchor="right" open={pagesDrawer} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </>
  );
}
