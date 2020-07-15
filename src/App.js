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
  const [query, setQuery] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
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
      shownItems == 0 ? setIsEmpty(true) : setIsEmpty(false);
      setPagesNumber(pNumber);
      setIsLoading(false);
    };
    fetchItems();
  }, [query, currentPage, itemsPerPage]);
  return (
    <div className="container">
      <Header />
      <Search
        query={query}
        getQuery={(q) => getQuery(q)}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={(itemsPerPage) => setItemsPerPage(itemsPerPage)}
      />
      <Cards
        items={items}
        query={query}
        isLoading={isLoading}
        isEmpty={isEmpty}
      />
      <Pagination
        pagesNumber={pagesNumber}
        setCurrentPage={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default App;
