import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';

export default function Preloader() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 6,
      }}
    >
      <CircularProgress />
    </Box>
  );
}
