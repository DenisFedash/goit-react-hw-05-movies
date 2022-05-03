export const MoviesCard = ({ title, id, poster, voteAverage, voteCount }) => {
  let URL =
    'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-%27';

  return (
    <li>
      <div>
        <img
          src={poster ? `https://image.tmdb.org/t/p/w500${poster}` : { URL }}
          alt={title}
          id={id}
          loading="lazy"
        />
      </div>

      <div>
        <h2> {title}</h2>
        <p>{voteAverage}</p>
        <p>Vote count: {voteCount}</p>
      </div>
    </li>
  );
};
