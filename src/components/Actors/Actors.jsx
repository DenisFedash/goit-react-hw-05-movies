import propTypes from 'prop-types';
export const Actors = ({ actors }) => {
  let URL =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png';
  return (
    <div>
      <ul>
        {actors.map(({ id, name, photo }) => {
          return (
            <li key={id}>
              <img
                src={
                  photo ? `https://image.tmdb.org/t/p/w500${photo}` : { URL }
                }
                alt={name}
              />
              <h2>{name}</h2>
            </li>
          );
        })}
      </ul>
    </div>
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
