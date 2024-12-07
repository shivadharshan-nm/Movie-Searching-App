import axios from 'axios';

// CORS proxy URL to bypass restrictions
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

// Base OMDb API URL
const API_KEY = '65bf73';
const BASE_URL = `${CORS_PROXY}http://www.omdbapi.com/`;

// Fetch movies by query
export const fetchMovies = async (query, page = 1, type = '') => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        s: query,
        page,
        type,
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching movies');
  }
};

// Fetch detailed information for a specific movie
export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        i: movieId,
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching movie details');
  }
};
