import axios from 'axios';

const API_KEY = '8ee74c176be1aa0cb6333771b517a964';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function getTrendingMovies() {
  return await axios
    .get(`/trending/movie/day?api_key=${API_KEY}`)
    .then(response => response.data.results);
}

export async function getSearchedMovie(query) {
  return await axios
    .get(`/search/movie?api_key=${API_KEY}&query=${query}`)
    .then(response => response.data.results);
}

export async function getMovieById(movieId) {
  return await axios
    .get(`/movie/${movieId}?api_key=${API_KEY}`)
    .then(response => response.data);
}

export async function getMovieCast(movieId) {
  return await axios
    .get(`/movie/${movieId}/credits?api_key=${API_KEY}`)
    .then(response => response.data.cast);
}

export async function getMovieReviews(movieId) {
  return await axios
    .get(`/movie/${movieId}/reviews?api_key=${API_KEY}`)
    .then(response => response.data.results);
}
