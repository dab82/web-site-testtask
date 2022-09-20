import { useState, useEffect } from 'react';
import { Global } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from '../styles/Theme';
import { GlobalStyles } from '../styles/GlobalStyles';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import UsersList from './Users/UsersList';
import RegForm from './RegForm/RegForm';
import { getUsers } from 'services/usersAPI';
import Preloader from './Preloader/Preloader';
import { ScrollTop } from './ScrollTop/ScrollTop';

export const App = () => {
  const [successfulSubmit, setSuccessfulSubmit] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getUsers()
      .then(({ users, total_pages, page }) => {
        setUsersList(users);
        setTotalPages(total_pages);
        setCurrentPage(page);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [successfulSubmit]);

  const handleLoadMoreClick = () => {
    setIsLoading(true);
    const nextPage = currentPage + 1;
    getUsers(nextPage)
      .then(({ users, total_pages, page }) => {
        setUsersList([...usersList, ...users]);
        setTotalPages(total_pages);
        setCurrentPage(page);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <ThemeProvider theme={Theme}>
      <Global styles={GlobalStyles} />
      <Header />
      <Hero />
      {isLoading ? (
        <Preloader />
      ) : (
        <UsersList
          usersList={usersList}
          totalPages={totalPages}
          currentPage={currentPage}
          handleLoadMoreClick={handleLoadMoreClick}
        />
      )}
      <RegForm
        setSuccessfulSubmit={setSuccessfulSubmit}
        successfulSubmit={successfulSubmit}
        setIsLoading={setIsLoading}
      />
      <ScrollTop showBelow={200} />
    </ThemeProvider>
  );
};
