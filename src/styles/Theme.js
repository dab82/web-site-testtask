import { createTheme } from '@mui/material/styles';

export const Theme = createTheme({
  palette: {
    primary: {
      main: '#00BDD3',
    },
  },
  fontColors: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: '#FFFFFF',
    placeholder: '#B4B4B4',
  },
  backgrounds: {
    yellow: '#F4E041',
    blue: '#00BDD3',
    grey: '#F8F8F8',
    disabled: '#B4B4B4',
    loader: '#FC842D',
    backdrop: 'rgba(0, 0, 0, 0.4)',
    userBack: 'transparent',
    modal: '#FFFFFF',
  },
  hover: {
    yellow: '#FFE302',
  },
  transitions: {
    primary: '0.5s ease 0s',
  },
});
