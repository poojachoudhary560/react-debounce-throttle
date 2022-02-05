import React, { useState } from 'react';
import './index.css';

const SearchBox = (props) => {
  const [searchKey, setSearchKey] = useState('');
  const [displaySearch, setDisplaySearch] = useState(false);

  return (
    <>
      <div className="autocomplete">
        <input
          type="text"
          id="search"
          onClick={() => setDisplaySearch(true)}
          value={searchKey}
        />
        <div
          className={`autocomplete-items ${
            displaySearch ? '' : 'autocomplete-items-hide'
          }`}
        >
          <div>India</div>
          <div>India</div>
          <div>India</div>
          <div>India</div>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
