import { Link, useLocation } from 'react-router-dom';
import propTypes from 'prop-types';

export const DetailsPage = ({ movieInfo }) => {
  const location = useLocation();
  // const subLocation = location.state.from;
  let URL =
    'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-%27';

  const {
    title,
    genres,
    description,
    poster,
    releaseDate,
    voteAverage,
    voteCount,
  } = movieInfo;

  return (
    <div>
      <img
        src={poster ? `https://image.tmdb.org/t/p/w500${poster}` : { URL }}
        alt={title}
      />
      <div>
        <h1>{title}</h1>
        <p>{releaseDate}</p>
      </div>
      <ul>
        {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
      </ul>
      <div>{description}</div>
      <div>
        <div>
          Vote average: <div>{voteAverage}</div>
        </div>
        <div>
          Vote count: <div>{voteCount}</div>
        </div>
      </div>

      <h2>Additional Information</h2>
      <ul>
        <li>
          <Link to="cast" state={{ from: location }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location }}>
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
};

DetailsPage.propTypes = {
  movieInfo: propTypes.shape({
    title: propTypes.string,
    genres: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number,
        name: propTypes.string,
      })
    ),
    description: propTypes.string,
    poster: propTypes.string,
    releaseDate: propTypes.string,
    voteAverage: propTypes.number,
    voteCount: propTypes.number,
  }),
};
