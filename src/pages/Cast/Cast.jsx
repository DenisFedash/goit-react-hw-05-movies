import { Actors } from 'components/Actors/Actors';
import { ReviewTitle } from 'components/ReviewList/Review.styled';
import { Container } from 'components/SearchBar/SearchBar.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/fetchAPI';

export default function Cast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);

  useEffect(() => {
    fetchMovieCredits(movieId).then(({ cast }) => {
      const creditArray = [];

      cast.map(({ id, name, profile_path }) => {
        const actors = {
          id,
          name,
          photo: profile_path,
        };
        return creditArray.push(actors);
      });
      setActors(creditArray);
    });
  }, [movieId]);
  return actors && actors.length > 0 ? (
    <Actors actors={actors} />
  ) : (
    <Container>
      <hr />
      <ReviewTitle>We don't have any actorth for this movie.</ReviewTitle>
    </Container>
  );
}
