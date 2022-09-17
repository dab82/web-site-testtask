import { Global } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from '../styles/Theme';
import { GlobalStyles } from '../styles/GlobalStyles';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import UsersList from './Users/UsersList';
import RegForm from './RegForm/RegForm';

export const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Global styles={GlobalStyles} />
      <Header />
      <Hero />
      <UsersList />
      <RegForm />
    </ThemeProvider>
  );
};
