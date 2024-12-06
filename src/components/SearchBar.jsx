import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center gap-2 w-full max-w-md">
      <input
        type="text"
        placeholder="Search for movies..."
        className="border rounded-lg p-2 flex-grow"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded-lg"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
