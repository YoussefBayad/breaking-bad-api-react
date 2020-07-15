import React, { useState } from 'react';

const Search = ({ query, getQuery, itemsPerPage, setItemsPerPage }) => {
  const checker = (n) => {
    if (n < 1 || n > 63 || n === undefined) {
      n = 8;
    }
    setItemsPerPage(n);
  };
  return (
    <div className="search">
      <form>
        <input
          className="form-control"
          type="text"
          placeholder="Search Characters"
          autoFocus
          value={query}
          onChange={(e) => {
            getQuery(e.target.value);
          }}
        />
        <label className="items-per-page-label">Items Per Page</label>
        <input
          className="items-per-page"
          type="number"
          placeholder="Number"
          min="1"
          max="63"
          onChange={(e) => {
            checker(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Search;
