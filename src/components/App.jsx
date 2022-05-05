import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './Header/Header';
import { Loader } from './Loader/Loader';
import { MoviesPage } from 'pages/MoviesPage/MoviesPage';
import { HomePage } from 'pages/HomePage/HomePage';
import { MovieDetailsPage } from 'pages/MovieDetailsPage/MovieDetailsPage';

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
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<HomePage />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};
