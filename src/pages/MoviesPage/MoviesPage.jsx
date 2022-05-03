import { SearchBar } from 'components/SearchBar/SearchBar.jsx';
import { useEffect, useState } from 'react';
import * as fetchAPI from '../../services/fetchAPI.js';

const getArrayMovies = results => {
  return results.map(
    ({ original_title, poster_path, id, vote_average, vote_count }) => ({
      id,
      title: original_title,
      voteAverage: vote_average,
      poster: poster_path,
      voteCount: vote_count,
    })
  );
};

export const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalMovies, setTotalMovies] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(null);

  if (error) {
    console.log(error);
  }

  useEffect(() => {
    if (query !== '') {
      setIsLoading(prevIsLoading => !prevIsLoading);
      fetchAPI
        .fetchSearchMovies(query)
        .then(({ results, total_pages }) => {
          const moviesArray = getArrayMovies(results);
          setTotalMovies(total_pages);
          return moviesArray;
        })

        .catch(error => setError('Something went wrong. Try again!'))
        .finally(() => setIsLoading(false));
    }
  }, [page, query]);

  const onChangeSearch = query => {
    setPage(1);
    setQuery(query);
  };

  return (
    <>
      <SearchBar onSubmit={onChangeSearch} />
      {totalMovies < 1 && (
        <div>
          <h2>There is no movies 🙁</h2>
          <p>Use search field</p>
        </div>
      )}
      {/* {isLoading && <Loader />} */}
    </>
  );
};
