import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { ADMINPERMISSION, GUESTPERMISSION } from '../../CONSTANT/CONSTANT';
import { Link } from 'react-router-dom';

import './Header.scss'

function Header({userInfo}) {

    const Logout = () => {
        localStorage.clear('tocken', {})
        window.location = '/login'
    }

    const pages = [
        {
            page: 'Home',
            Permissions: [GUESTPERMISSION, ADMINPERMISSION],
            path: '/'
        },
        {
            page: 'Contact Us',
            Permissions: [GUESTPERMISSION],
            path: 'contact'
        },
        {
            page: 'Profile',
            Permissions: [ADMINPERMISSION],
            path: 'profile'
        },
    ].filter(({Permissions}) => Permissions.includes(userInfo?.role))

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages && pages.map(({page, path}) => (
                <Link to={path}>
                  <Button
                    key={page}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                  {page}
                 </Button>
                </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt={userInfo.name} src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          </Box>
          <Box>
          <Typography
            variant="h6"
            noWrap
            className="logoutBtn"
            component="a"
            onClick={() => Logout()}
            href='/login'
            sx={{
              ml: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGOUT
          </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
