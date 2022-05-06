import { Container } from 'components/SearchBar/SearchBar.styled';
import propTypes from 'prop-types';
import {
  ActorCard,
  ActorList,
  ActorName,
  ActorPoster,
  ActorThumb,
} from './Actors.styled';
export const Actors = ({ actors }) => {
  let URL =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png';
  return (
    <Container>
      <hr />
      <ActorList>
        {actors.map(({ id, name, photo }) => {
          return (
            <ActorCard key={id}>
              <ActorThumb>
                <ActorPoster
                  src={photo ? `https://image.tmdb.org/t/p/w500${photo}` : URL}
                  alt={name}
                />
                <ActorName>{name}</ActorName>
              </ActorThumb>
            </ActorCard>
          );
        })}
      </ActorList>
    </Container>
  );
};

Actors.prototype = {
  actors: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      name: propTypes.string,
      photo: propTypes.string,
    })
  ).isRequired,
};
