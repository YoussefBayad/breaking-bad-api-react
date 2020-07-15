import React from 'react';

const Empty = ({ query }) => {
  return (
    <div className="empty">
      <h1>
        There is no character his name contains <span>{query}</span>
      </h1>
    </div>
  );
};

export default Empty;
