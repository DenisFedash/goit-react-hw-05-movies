import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Header } from './Header/Header';
import { Loader } from './Loader/Loader';
import { Footer } from './Footer/Footer';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage')
);

export const App = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<HomePage />}></Route>
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
};
