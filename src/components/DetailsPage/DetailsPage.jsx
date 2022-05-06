import { useLocation } from 'react-router-dom';
import propTypes from 'prop-types';
import { Container } from 'components/SearchBar/SearchBar.styled';
import { IoMdArrowDropright } from 'react-icons/io';
import {
  Poster,
  CinemaCard,
  CardTitle,
  Date,
  GenresItem,
  List,
  TitleAbout,
  AboutText,
  InfoItem,
  Votes,
  CustomLink,
  CustomItem,
} from './DetailsPage.styled';

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
    <Container>
      <CinemaCard>
        <Poster
          src={poster ? `https://image.tmdb.org/t/p/w500${poster}` : { URL }}
          alt={title}
        />
        <div>
          <div>
            <CardTitle>{title}</CardTitle>
            <Date>{releaseDate}</Date>
          </div>
          <ul>
            {genres &&
              genres.map(({ id, name }) => (
                <GenresItem key={id}>{name}</GenresItem>
              ))}
          </ul>
          <TitleAbout>About</TitleAbout>
          <AboutText>{description}</AboutText>
          <List>
            <InfoItem>
              Vote average: <Votes>{voteAverage}</Votes>
            </InfoItem>
            <InfoItem>
              Vote count: <Votes>{voteCount}</Votes>
            </InfoItem>
          </List>
        </div>
      </CinemaCard>

      <TitleAbout>Additional Information</TitleAbout>
      <ul>
        <CustomItem>
          <CustomLink to="cast" state={{ from: location }}>
            <IoMdArrowDropright />
            Cast
          </CustomLink>
        </CustomItem>
        <CustomItem>
          <CustomLink to="reviews" state={{ from: location }}>
            <IoMdArrowDropright />
            Reviews
          </CustomLink>
        </CustomItem>
      </ul>
    </Container>
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
