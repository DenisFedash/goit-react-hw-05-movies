import { MoviesCard } from 'components/MoviesCard/MoviesCard';
import propTypes from 'prop-types';

export const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title, poster, voteAverage, voteCount }) => (
        <MoviesCard
          key={id}
          title={title}
          poster={poster}
          voteAverage={voteAverage}
          voteCount={voteCount}
        />
      ))}
    </ul>
  );
};

MovieList.prototype = {
  movies: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      title: propTypes.string,
      poster: propTypes.string,
      voteAverage: propTypes.number,
      voteCount: propTypes.number,
    })
  ).isRequired,
};
