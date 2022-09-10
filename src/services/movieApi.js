import axios from 'axios';

const API_KEY = 'deb4d54946abdc202a0e5e0e78d6bfcf';
const BASE_URL = 'https://api.themoviedb.org/3/';

const fetchTrending = async setTrendingMovies => {
  try {
    const response = await axios.get(
      `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
    );

    return setTrendingMovies(response.data.results);
  } catch (error) {
    console.error(error);
  }
};

const fetchMovieById = async (movieId, setMovie) => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );

    return setMovie(response.data);
  } catch (error) {
    console.error(error);
  }
};

const fetchMovieCastById = (movieId, setCast) => {
  fetch(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(movie => setCast(movie.cast))
    .catch(e => console.log(e));
};

const fetchMovieReviewsById = (movieId, setReviews) => {
  fetch(`${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(movie => setReviews(movie.results))
    .catch(e => console.log(e));
};

const fetchMovieByQuery = async (query, setSearchedMovie) => {
  try {
    const response = await axios.get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=1&include_adult=false`
    );
    return setSearchedMovie(response.data.results);
  } catch (error) {
    console.error(error);
  }
};

const api = {
  fetchTrending,
  fetchMovieById,
  fetchMovieCastById,
  fetchMovieReviewsById,
  fetchMovieByQuery,
};

export default api;
