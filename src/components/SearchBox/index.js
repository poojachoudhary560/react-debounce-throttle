import React, { useState, useEffect, useRef, useCallback } from 'react';
import fetchData from '../../api/service';

import './index.css';

const SearchBox = (props) => {
  const [searchKey, setSearchKey] = useState('');
  const [displaySearch, setDisplaySearch] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const myRef = useRef();

  useEffect(() => {
    if (searchKey) {
      /*
      fetchData(searchKey).then((res) => {
        setSearchResult(res);
      }); */
      betterFn(searchKey);
      //console.log(res1);
    }
  }, [searchKey]);

  const debounce = useCallback(function (fn, delay) {
    let timer;
    return function (...a) {
      console.log('args', a, fn);
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...a).then((res) => {
          setSearchResult(res);
        });
      }, delay);
    };
  }, []);
  const betterFn = useCallback(debounce(fetchData, 500), []);
  const handleElementSelect = (el) => {
    console.log(el);
    setSearchKey(el);
    setSearchResult([]);
    setDisplaySearch(false);
  };

  const handleBlur = (event) => {
    // currentTarget refers to this component.
    // relatedTarget refers to the element where the user clicked (or focused) which
    // triggered this event.
    // So in effect, this condition checks if the user clicked outside the component.
    console.log(event.currentTarget, event.relatedTarget);
    /* if (!event.currentTarget.contains(event.relatedTarget)) {
      // do your thing.
      setDisplaySearch(false);
    } */
    if (!myRef.current.contains(event.target)) {
      setDisplaySearch(false);
    }
  };
  return (
    <>
      <div className="autocomplete" ref={myRef}>
        <input
          type="text"
          id="search"
          onClick={() => setDisplaySearch(true)}
          onBlur={handleBlur}
          value={searchKey}
          onChange={(e) => {
            e.preventDefault();
            setSearchKey(e.target.value);
          }}
        />
        <div
          className={`autocomplete-items ${
            displaySearch ? '' : 'autocomplete-items-hide'
          }`}
        >
          {searchResult.map((el) => (
            <div
              key={el}
              className="autocomplete-item"
              onClick={() => handleElementSelect(el)}
            >
              {el}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchBox;
