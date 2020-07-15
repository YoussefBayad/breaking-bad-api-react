import React from 'react';

const Pagination = ({ pagesNumber, setCurrentPage }) => {
  let pNumber = [];
  for (let i = 0; i < pagesNumber; i++) {
    pNumber.push(i + 1);
  }
  return (
    <div className="pagination">
      {pNumber.map((page) => (
        <button
          className="page"
          key={page}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
