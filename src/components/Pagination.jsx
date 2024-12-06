import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxPagesToShow = 5;
  const startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
  const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex gap-2 justify-center mt-4">
      <button
        className={`p-2 border rounded-lg ${currentPage === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-white'}`}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`p-2 border rounded-lg ${page === currentPage ? 'bg-blue-600 text-white' : 'bg-white'}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className={`p-2 border rounded-lg ${currentPage === totalPages ? 'bg-gray-200 cursor-not-allowed' : 'bg-white'}`}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
