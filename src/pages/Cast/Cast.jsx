import { Actors } from 'components/Actors/Actors';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/fetchAPI';

export const Cast = () => {
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
  return actors && <Actors actors={actors} />;
};
