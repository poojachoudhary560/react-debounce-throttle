const data = [
  { key: '121', item: 'item 1' },
  { key: '122', item: 'item 2' },
  { key: '123', item: 'item 3' },
  { key: '124', item: 'item 4' },
  { key: '125', item: 'item 5' },
];
const fetchData = (key) => {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
};
export default fetchData;
