import { ReviewList } from 'components/ReviewList/ReviewList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/fetchAPI';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetchMovieReviews(movieId).then(({ results }) => {
      const reviewsArray = [];
      results.map(({ id, author, content }) => {
        const reviews = {
          id,
          author,
          text: content,
        };
        return reviewsArray.push(reviews);
      });
      setReviews(reviewsArray);
    });
  }, [movieId]);
  return reviews && reviews.length > 0 ? (
    <ReviewList reviews={reviews} />
  ) : (
    <div>
      <h2>We don't have any reviews for this movie.</h2>
    </div>
  );
};
