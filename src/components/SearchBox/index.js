import React, { useState } from 'react';
import './index.css';

const SearchBox = (props) => {
  const [displaySearch, setDisplaySearch] = useState(false);

  return (
    <>
      <div className="autocomplete">
        <input type="text" id="search" onClick={() => setDisplaySearch(true)}/>
        <div
          className={`autocomplete-items ${
            displaySearch ? '' : 'autocomplete-items-hide'
          }`}
        >
          <div>
            India
            <input type="hidden" value="India" />
          </div>
          <div>
            India
            <input type="hidden" value="India" />
          </div>
          <div>
            India
            <input type="hidden" value="India" />
          </div>
          <div>
            India
            <input type="hidden" value="India" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
