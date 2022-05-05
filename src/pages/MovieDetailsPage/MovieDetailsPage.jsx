import { DetailsPage } from 'components/DetailsPage/DetailsPage';
import { useEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
// import * as fetchAPI from '../../services/fetchAPI.js';
import fetchMovieDetails from '../../services/fetchMovieDetails';
import { Cast } from 'pages/Cast/Cast.jsx';
import { Reviews } from 'pages/Reviews/Reviews.jsx';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  useEffect(() => {
    fetchMovieDetails(movieId).then(
      ({
        original_title,
        genres,
        overview,
        poster_path,
        release_date,
        vote_average,
        vote_count,
      }) => {
        const movieInfo = {
          title: original_title,
          genres: genres,
          description: overview,
          poster: poster_path,
          releaseDate: release_date,
          voteAverage: vote_average,
          voteCount: vote_count,
        };
        return setMovieInfo(movieInfo);
      }
    );
  }, [movieId]);
  return (
    <div>
      {movieInfo && <DetailsPage movieInfo={movieInfo} />}
      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
};
