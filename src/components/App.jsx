import { Routes, Route } from 'react-router-dom';
import { Header } from './Header/Header';
import { HomePage } from '../pages/HomePage/HomePage';
import { MoviesPage } from '../pages/MoviesPage/MoviesPage';

export const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="*" element={<HomePage />}></Route>
      </Routes>
    </>
  );
};
