import React from 'react';

const DropdownFilter = ({ onFilterChange }) => {
  const handleFilterChange = (e) => {
    onFilterChange(e.target.value);
  };

  return (
    <select
      className="border p-2 rounded-lg"
      onChange={handleFilterChange}
    >
      <option value="">All</option>
      <option value="movie">Movies</option>
      <option value="series">Series</option>
      <option value="episode">Episodes</option>
    </select>
  );
};

export default DropdownFilter;
