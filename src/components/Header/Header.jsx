import { Box, AppBar, Toolbar } from '@mui/material';
import Logo from '../../assets/img/Logo.svg';
import YellowButton from 'components/Button/Button';
// import { Container } from 'components/Container/Container';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ height: '60px', backgroundColor: 'white' }}
      >
        {/* <Container> */}
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <img alt="Logo" src={Logo} variant="rounded" />
          <Box
            sx={{
              display: 'flex',
              width: 210,
              justifyContent: 'space-between',
            }}
          >
            <AnchorLink href="#users-list">
              <YellowButton type="button" children={'Users'} />
            </AnchorLink>
            <AnchorLink href="#sign-up-form">
              <YellowButton type="button" children={'Sign up'} />
            </AnchorLink>
          </Box>
        </Toolbar>
        {/* </Container> */}
      </AppBar>
    </Box>
  );
};

export default Header;
