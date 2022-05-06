import { ReviewTitle } from 'components/ReviewList/Review.styled';
import { ReviewList } from 'components/ReviewList/ReviewList';
import { Container } from 'components/SearchBar/SearchBar.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/fetchAPI';

export default function Reviews() {
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
    <Container>
      <hr />
      <ReviewTitle>We don't have any reviews for this movie.</ReviewTitle>
    </Container>
  );
}
