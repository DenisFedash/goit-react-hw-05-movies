import { MoviesCard } from 'components/MoviesCard/MoviesCard';
import propTypes from 'prop-types';
import { CardsList, ContainerCards } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  return (
    <ContainerCards>
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
    </ContainerCards>
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
