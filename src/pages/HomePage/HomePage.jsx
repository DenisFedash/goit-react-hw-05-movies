import { MovieList } from 'components/MovieList/MovieList.jsx';
import { useEffect, useState } from 'react';
import * as fetchAPI from '../../services/fetchAPI.js';
import { Container } from './HomePage.styled.js';

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchAPI.fetchPopular().then(({ results }) => {
      const moviesArray = [];
      results.map(
        ({ original_title, poster_path, id, vote_average, vote_count }) => {
          const movie = {
            id,
            title: original_title,
            poster: poster_path,
            voteAverage: vote_average,
            voteCount: vote_count,
          };
          return moviesArray.push(movie);
        }
      );
      setMovies(moviesArray);
    });
  }, []);

  return (
    movies && (
      <Container>
        <MovieList movies={movies} />
      </Container>
    )
  );
}
