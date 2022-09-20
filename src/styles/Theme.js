import { createTheme } from '@mui/material/styles';

export const Theme = createTheme({
  palette: { mode: 'light' },
  fontColors: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: '#FFFFFF',
  },
  backgrounds: {
    yellow: '#F4E041',
    blue: '#00BDD3',
    grey: '#F8F8F8',
    disabled: '#B4B4B4',
    loader: '#FC842D',
    backdrop: 'rgba(0, 0, 0, 0.4)',
    userBack: 'transparent',
    modalOverlay: 'rgba(33, 33, 33, 0.12)',
  },
  hover: {
    yellow: '#FFE302',
  },
  transitions: {
    primary: '0.5s ease 0s',
  },
});
