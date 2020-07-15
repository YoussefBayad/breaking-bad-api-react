import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Cards from './components/Cards';
import Search from './components/Search';
import Pagination from './components/Pagination';
const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [pagesNumber, setPagesNumber] = useState(8);

  const getQuery = (q) => {
    setQuery(q);
  };
  useEffect(() => {
    console.log('runs');
    const fetchItems = async () => {
      setIsLoading(true);

      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const shownItems = result.data.slice(indexOfFirstItem, indexOfLastItem);
      const pNumber = Math.ceil(result.data.length / itemsPerPage);
      console.log(pNumber);
      setItems(shownItems);
      setPagesNumber(pNumber);
      setIsLoading(false);
    };
    fetchItems();
  }, [query, currentPage]);
  return (
    <div className="container">
      <Header />
      <Search query={query} getQuery={(q) => getQuery(q)} />
      <Cards items={items} isLoading={isLoading} />
      <Pagination
        pagesNumber={pagesNumber}
        setCurrentPage={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default App;
