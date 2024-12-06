import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchMovies } from '../services/apiService';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';
import DropdownFilter from '../components/DropdownFilter';

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [type, setType] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState('');
  const [searchStarted, setSearchStarted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (query) {
      fetchMovies(query, page, type)
        .then((data) => {
          if (data.Response === 'True') {
            setMovies(data.Search);
            setTotalPages(Math.ceil(data.totalResults / 10));
            setError('');
          } else {
            setError(data.Error);
            setMovies([]);
          }
        })
        .catch(() => setError('Failed to fetch movies.'));
    }
  }, [query, page, type]);

  const handleSearch = (q) => {
    setQuery(q);
    setPage(1);
    setSearchStarted(true);
  };

  return (
    <div className="container mx-auto p-4">
      <h1
        className="flex justify-center text-2xl font-bold mb-4 cursor-pointer"
        onClick={() => navigate('/')}
      >
        Movie Search
      </h1>
      <div className={`flex flex-col items-center ${searchStarted ? 'mb-4' : 'h-screen justify'}`}>
        <div className="flex items-center gap-4 w-full max-w-lg">
          <SearchBar onSearch={handleSearch} />
          <DropdownFilter onFilterChange={(t) => setType(t)} />
        </div>
      </div>
      {searchStarted && (
        <>
          {error && <p className="text-red-600 text-center mt-4">{error}</p>}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={(p) => setPage(p)}
          />
        </>
      )}
    </div>
  );
};

export default SearchPage;
