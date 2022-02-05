import React, { useState, useEffect } from 'react';
import fetchData from '../api/service';

const Search = (props) => {
  const [searchKey, setSearchKey] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const handleChange = (e) => {
    setSearchKey(e.target.value);
  };

  useEffect(() => {
    if (searchKey) {
      fetchData(searchKey).then((res) => {
        setSearchResult(res);
      });
    }
  }, [searchKey]);

  return (
    <>
      <input
        list="browsers"
        name="browser"
        value={searchKey}
        onChange={handleChange}
        id="browser"
      />
      <datalist id="browsers">
        <option value="Edge" />
        <option value="Firefox" />
        {searchResult.map((item) => (
          <option value={item.item} />
        ))}
      </datalist>
      {JSON.stringify(searchResult)}
    </>
  );
};

export default Search;
