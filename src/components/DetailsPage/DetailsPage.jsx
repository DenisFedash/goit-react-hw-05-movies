import propTypes from 'prop-types';
import { Container } from 'components/SearchBar/SearchBar.styled';
import {
  Poster,
  CinemaCard,
  CardTitle,
  Date,
  GenresItem,
  ReleaseDate,
  Genres,
} from './DetailsPage.styled';
import { About } from './About';
import { AdditionalInfo } from './AdditionalInfo';

export const DetailsPage = ({ movieInfo }) => {
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

  const formattedReleaseDate = releaseDate.split('-').reverse().join('.');

  const movieGenres =
    movieInfo !== null ? genres.map(genre => genre.name).join(', ') : 'Unknown';

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
            <ReleaseDate>
              Release Date:<Date>{formattedReleaseDate}</Date>
            </ReleaseDate>
          </div>
          <ul>
            <GenresItem>
              <Genres>Genres: </Genres>
              {movieGenres}
            </GenresItem>
          </ul>
          <About
            description={description}
            voteAverage={voteAverage}
            voteCount={voteCount}
          />
        </div>
      </CinemaCard>

      <AdditionalInfo />
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
