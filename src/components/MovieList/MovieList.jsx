import { MoviesCard } from 'components/MoviesCard/MoviesCard';
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
