import { Link } from 'react-router-dom';

export const PageNotFound = () => {
  return (
    <p>
      Page not found :( Please return to <Link to="/">Home</Link>
    </p>
  );
};
