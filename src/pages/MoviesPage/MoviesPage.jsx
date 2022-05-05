import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchSearchMovies } from 'services/fetchAPI';
import { SearchBar } from 'components/SearchBar/SearchBar.jsx';
import { MovieList } from 'components/MovieList/MovieList.jsx';
import { Container } from 'pages/HomePage/HomePage.styled';

export const MoviesPage = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query') ?? '';

  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (query !== '') {
      fetchSearchMovies(query).then(({ results }) => {
        const moviesArray = [];

        results.map(
          ({ id, original_title, poster_path, vote_average, vote_count }) => {
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
    }
  }, [query]);

  return (
    <>
      <SearchBar />
      {movies && (
        <Container>
          <MovieList movies={movies} />
        </Container>
      )}
    </>
  );
};
