import axios from 'axios';

const API_KEY = '65bf73';
const BASE_URL = 'http://www.omdbapi.com/';

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
