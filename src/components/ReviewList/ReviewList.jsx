import { Container } from 'components/SearchBar/SearchBar.styled';
import PropTypes from 'prop-types';
import { ReviewItem, ReviewTitle, RevievText } from './Review.styled';

export const ReviewList = ({ reviews }) => {
  return (
    <Container>
      <hr />
      <ul>
        {reviews.map(({ id, author, text }) => {
          return (
            <ReviewItem key={id}>
              <ReviewTitle>{author}</ReviewTitle>
              <RevievText>{text}</RevievText>
            </ReviewItem>
          );
        })}
      </ul>
    </Container>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};
