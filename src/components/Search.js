import React, { useState } from 'react';

const Search = ({ query, getQuery }) => {
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
      </form>
    </div>
  );
};

export default Search;
