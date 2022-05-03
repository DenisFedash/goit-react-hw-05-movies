import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './Header/Header';
import { Loader } from './Loader/Loader';
import { MoviesPage } from 'pages/MoviesPage/MoviesPage';
import { HomePage } from 'pages/HomePage/HomePage';

// const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
// const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
export const App = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="*" element={<HomePage />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};
