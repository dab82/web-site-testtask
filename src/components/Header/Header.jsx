import { Box, AppBar, Toolbar, Button } from '@mui/material';
import Logo from '../../assets/img/Logo.svg';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'white' }}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <img alt="Logo" src={Logo} variant="rounded" />
          <Box>
            <Button variant="contained">Users</Button>
            <Button variant="contained">Sign up</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
