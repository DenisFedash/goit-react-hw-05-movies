import propTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { Item, Image, ImageThumb, Title, Text } from './MoviesCard.styled';

export const MoviesCard = ({ title, id, poster, voteAverage, voteCount }) => {
  const location = useLocation;

  let URL =
    'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-%27';

  return (
    <Item>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <ImageThumb>
          <Image
            src={poster ? `https://image.tmdb.org/t/p/w500${poster}` : { URL }}
            alt={title}
          />
        </ImageThumb>

        <div>
          <Title> {title}</Title>
          <p>{voteAverage}</p>
          <Text>Vote count: {voteCount}</Text>
        </div>
      </Link>
    </Item>
  );
};

MoviesCard.prototype = {
  id: propTypes.number,
  title: propTypes.string,
  poster: propTypes.string,
  voteAverage: propTypes.number,
  voteCount: propTypes.number,
};
