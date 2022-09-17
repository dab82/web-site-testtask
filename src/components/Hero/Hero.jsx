import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const Hero = () => {
  return (
    <Box>
      <Typography variant="h3">
        Test assignment for front-end developer
      </Typography>
      <Typography variant="body1">
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </Typography>
      <Button>Sign up</Button>
    </Box>
  );
};

export default Hero;
