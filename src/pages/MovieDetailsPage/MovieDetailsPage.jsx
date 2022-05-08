import { DetailsPage } from 'components/DetailsPage/DetailsPage';
import { lazy, Suspense, useEffect, useState } from 'react';
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import * as fetchAPI from '../../services/fetchAPI.js';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { Button, ButtonText } from './MovieDetailsPage.styled';
import { Container } from 'components/SearchBar/SearchBar.styled';

import { Loader } from 'components/Loader/Loader.jsx';

const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export default function MovieDetailsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    fetchAPI
      .fetchMovieDetails(movieId)
      .then(
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

  const onGoBack = () => navigate(location?.state?.from ?? '/');

  return (
    <Container>
      <Button type="button" onClick={onGoBack}>
        <RiArrowGoBackLine />
        <ButtonText>Back</ButtonText>
      </Button>
      {movieInfo && <DetailsPage movieInfo={movieInfo} />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </Container>
  );
}
