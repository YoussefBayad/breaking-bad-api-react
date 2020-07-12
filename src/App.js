import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Cards from './components/Cards';
import Search from './components/Search';
const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  const getQuery = (q) => {
    setQuery(q);
  };
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);

      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => getQuery(q)} />
      <Cards items={items} isLoading={isLoading} />
    </div>
  );
};

export default App;
