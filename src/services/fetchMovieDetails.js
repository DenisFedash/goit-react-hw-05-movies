async function fetchMovieDetails(movieId) {
  const key = '89b7d98b05de36091af2815feb76deb7';
  const url = `https://api.themoviedb.org/3/movie/${movieId}`;
  const filter = `?api_key=${key}&language=en-US`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();

  return data;
}

export default fetchMovieDetails;
