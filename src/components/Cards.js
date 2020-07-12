import React from 'react';
import Card from './Card';
import spinner from './spinner';

const Cards = ({ items, isLoading }) => {
  return isLoading ? (
    <spinner />
  ) : (
    <div className="cards">
      {items.map((item) => {
        return <Card item={item} />;
      })}
    </div>
  );
};

export default Cards;
