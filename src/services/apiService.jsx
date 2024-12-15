import axios from 'axios';

// Base OMDb API URL
const API_KEY = '65bf73';
const BASE_URL = 'https://www.omdbapi.com/';

// Fetch movies by query
export const fetchMovies = async (query, page = 1, type = '') => {
  try {
    const params = {
      s: query,
      page,
      type,
      apikey: API_KEY,
    };
    const queryString = new URLSearchParams(params).toString();
    const fullURL = `${BASE_URL}?${queryString}`;
    const proxiedURL = `https://api.allorigins.win/raw?url=${encodeURIComponent(fullURL)}`;

    const response = await axios.get(proxiedURL);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching movies');
  }
};

// Fetch detailed information for a specific movie
export const fetchMovieDetails = async (movieId) => {
  try {
    const params = {
      i: movieId,
      apikey: API_KEY,
    };
    const queryString = new URLSearchParams(params).toString();
    const fullURL = `${BASE_URL}?${queryString}`;
    const proxiedURL = `https://api.allorigins.win/raw?url=${encodeURIComponent(fullURL)}`;

    const response = await axios.get(proxiedURL);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching movie details');
  }
};
