const keyAPI = '89b7d98b05de36091af2815feb76deb7';

async function handlingResponseStatus(url = '', config = {}) {
  const response = await fetch(url, config);

  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchPopular() {
  return handlingResponseStatus(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${keyAPI}`
  );
}

export function fetchSearchMovies(query, page = 1) {
  return handlingResponseStatus(
    `https://api.themoviedb.org/3/search/movie?api_key=${keyAPI}&language=en-US&page=${page}&query=${query}&include_adult=false`
  );
}

export function fetchMovieDetails(movieId) {
  return handlingResponseStatus(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${keyAPI}&language=en-US`
  );
}

export function getchMovieCredits(movieId) {
  return handlingResponseStatus(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${keyAPI}&language=en-US`
  );
}

export function getchMovieReviews(movieId) {
  return handlingResponseStatus(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${keyAPI}&language=en-US`
  );
}
