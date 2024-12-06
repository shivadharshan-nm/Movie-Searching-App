import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchMovieDetails } from '../services/apiService';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieDetails(id)
      .then((data) => {
        if (data.Response === 'True') {
          setMovie(data);
        } else {
          setError(data.Error);
        }
      })
      .catch(() => setError('Failed to fetch movie details.'));
  }, [id]);

  if (error) return <p className="text-red-600 text-center mt-4">{error}</p>;

  return (
    movie && (
      <div className="container mx-auto p-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-4"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <h1 className=" flex justify-center text-2xl font-bold mb-4">{movie.Title}</h1>
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-60 max-w-md mx-auto rounded-lg"
        />
        <p className="mt-4"><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>Release Year:</strong> {movie.Year}</p>
        <p><strong>Cast:</strong> {movie.Actors}</p>
      </div>
    )
  );
};

export default MovieDetailsPage;
