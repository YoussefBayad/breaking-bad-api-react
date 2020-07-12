import React from 'react';
import Card from './Card';
import Spinner from '../components/Spinner';
const Cards = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="cards">
      {items.map((item) => {
        return <Card item={item} />;
      })}
    </div>
  );
};

export default Cards;
