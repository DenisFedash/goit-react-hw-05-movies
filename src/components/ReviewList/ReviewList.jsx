import PropTypes from 'prop-types';

export const ReviewList = ({ reviews }) => {
  return (
    <div>
      <ul>
        {reviews.map(({ id, author, text }) => {
          return (
            <li key={id}>
              <h2>{author}</h2>
              <p>{text}</p>
            </li>
          );
        })}
      </ul>
    </div>
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
