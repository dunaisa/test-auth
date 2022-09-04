import React from 'react';
import { useState } from 'react';
import { dataConfig } from '../DATA';
import Table from './Table';
import Pagination from './Pagination'

const List = () => {

  const [query, setQuery] = useState('');

  function handleInputChange(e) {
    setQuery(e.target.value)
  }

  const positionsArray = ["Name", "Position", "Office", "Age", "StartDate", "Salary"]

  function search(data) {
    return data.filter((item) =>
      positionsArray.some((key) => item[key].toLowerCase().includes(query))
    )
  }

  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(10);

  const lastItemIndex = currentPage * itemPerPage;
  const firstItemIndex = lastItemIndex - itemPerPage;
  const currentItems = search(dataConfig.slice(firstItemIndex, lastItemIndex));

  function paginate(pageNumber) {
    setCurrentPage(pageNumber)
  }

  function changePagePrev() {
    setCurrentPage(prev => prev - 1)
  }

  function changePageNext() {
    setCurrentPage(next => next + 1)
  }

  return (
    <main className="main">
      <input
        type="text"
        className="main__search"
        placeholder='Поиск...'
        value={query}
        onChange={handleInputChange}
      />

      <Table data={currentItems} />
      <Pagination
        itemPerPage={itemPerPage}
        totalItems={dataConfig.length}
        paginate={paginate}
        changePagePrev={changePagePrev}
        changePageNext={changePageNext}
      />

    </main>
  );
}

export default List;
