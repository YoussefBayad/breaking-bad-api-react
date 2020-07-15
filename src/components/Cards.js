import React from 'react';
import Card from './Card';
import Spinner from '../components/Spinner';
import Empty from './Empty';
const Cards = ({ items, isLoading, isEmpty, query }) => {
  return isLoading ? (
    <Spinner />
  ) : isEmpty ? (
    <Empty query={query} />
  ) : (
    <div className="cards">
      {items.map((item) => {
        return <Card item={item} />;
      })}
    </div>
  );
};

export default Cards;
