import { MoviesCard } from 'components/MoviesCard/MoviesCard';
import propTypes from 'prop-types';
import { CardsList } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  return (
    <CardsList>
      {movies.map(({ id, title, poster, voteAverage, voteCount }) => (
        <MoviesCard
          key={id}
          id={id}
          title={title}
          poster={poster}
          voteAverage={voteAverage}
          voteCount={voteCount}
        />
      ))}
    </CardsList>
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
