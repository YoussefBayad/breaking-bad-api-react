import React, { useState } from 'react';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');
  return (
    <div className="search">
      <form>
        <input
          className="form-control"
          type="text"
          placeholder="Search Characters"
          autoFocus
          value={text}
          onChange={(e) => {
            getQuery(e.target.value);
            setText(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Search;
