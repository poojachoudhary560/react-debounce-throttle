import React, { useState, useEffect } from 'react';
import fetchData from '../../api/service';

import './index.css';

const SearchBox = (props) => {
  const [searchKey, setSearchKey] = useState('');
  const [displaySearch, setDisplaySearch] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (searchKey) {
      fetchData(searchKey).then((res) => {
        setSearchResult(res);
      });
    }
  }, [searchKey]);

  const handleElementSelect = (el) => {
    console.log(el);
    setSearchKey(el.item);
    setDisplaySearch(false);
  };
  return (
    <>
      <div className="autocomplete">
        <input
          type="text"
          id="search"
          onClick={() => setDisplaySearch(true)}
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <div
          className={`autocomplete-items ${
            displaySearch ? '' : 'autocomplete-items-hide'
          }`}
        >
          {searchResult.map((el) => (
            <div onClick={() => handleElementSelect(el)}>{el.item}</div>
          ))}
        </div>
      </div>
      {JSON.stringify(searchResult)}
    </>
  );
};

export default SearchBox;
