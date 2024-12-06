import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="h-40 w-full object-cover rounded-lg"
      />
      <h3 className="mt-2 font-bold text-lg">{movie.Title}</h3>
      <p className="text-gray-600">{movie.Year}</p>
      <Link
        to={`/movie/${movie.imdbID}`}
        className="text-blue-600 hover:underline mt-2 block"
      >
        View Details
      </Link>
    </div>
  );
};

export default MovieCard;
