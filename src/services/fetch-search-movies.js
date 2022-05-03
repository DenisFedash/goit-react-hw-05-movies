async function fetchSearchMovies(query, page = 1) {
  const key = '89b7d98b05de36091af2815feb76deb7';
  const url = `https://api.themoviedb.org/3/search/movie`;
  const filter = `?api_key=${key}&query=${query}&language=en-US&page=${page}&include_adult=false`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();

  return data;
}

export default fetchSearchMovies;
