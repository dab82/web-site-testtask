import { useState, useEffect, lazy, Suspense } from 'react';
import { Global } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from '../styles/Theme';
import { GlobalStyles } from '../styles/GlobalStyles';
// // import Header from './Header/Header';
// import Hero from './Hero/Hero';
// import UsersList from './Users/UsersList';
// import RegForm from './RegForm/RegForm';
// import SuccessBlock from './SuccsessBlock/SuccessBlock';
import { ScrollTop } from './ScrollTop/ScrollTop';
import { getPosition, getUsers } from 'services/usersAPI';
import Preloader from './Preloader/Preloader';

const Header = lazy(() => import('../components/Header/Header'));
const Hero = lazy(() => import('../components/Hero/Hero'));
const UsersList = lazy(() => import('../components/Users/UsersList'));
const RegForm = lazy(() => import('../components/RegForm/RegForm'));
const SuccessBlock = lazy(() =>
  import('../components/SuccsessBlock/SuccessBlock')
);

export const App = () => {
  const [successfulSubmit, setSuccessfulSubmit] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [positions, setPositions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPosition()
      .then(res => setPositions(res.data.positions))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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

  const handleShowMore = () => {
    setIsLoading(true);
    const nextPage = currentPage + 1;
    getUsers(nextPage)
      .then(({ users, total_pages, page }) => {
        setUsersList(users);
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
      <Suspense fallback={<Preloader />}>
        <Header />
        <Hero />
        {isLoading ? (
          <Preloader />
        ) : (
          <UsersList
            usersList={usersList}
            totalPages={totalPages}
            currentPage={currentPage}
            handleShowMore={handleShowMore}
          />
        )}
        {successfulSubmit ? (
          <SuccessBlock />
        ) : (
          <RegForm
            setSuccessfulSubmit={setSuccessfulSubmit}
            setIsLoading={setIsLoading}
            isLogading
            positions={positions}
          />
        )}
        <ScrollTop showBelow={200} />
      </Suspense>
    </ThemeProvider>
  );
};
