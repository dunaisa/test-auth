import React, { useState, useEffect } from 'react';
import { dataConfig } from '../DATA';
import Table from './Table';
import Search from './Search';
import Loader from './Loader';

//import Pagination from './Pagination'

const List = () => {

  const [isLoading, setIsLoading] = useState(true);

  const [query, setQuery] = useState('');

  function handleInputChange(e) {
    setQuery(e.target.value)
  }

  ////Поиск по списку

  const positionsArray = ["Name"]

  function search(dataConfig) {

    return dataConfig.filter((item) =>
      // positionsArray.some((key) => item[key].toLowerCase().includes(query.toLowerCase()))
      positionsArray.some((key) => item[key].toLowerCase().includes(query.toLowerCase()))
    )
  }


  ///Сортировка списка

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(dataConfig);
    setIsLoading(false);
  }, [dataConfig]);

  const sortData = (field) => {
    console.log(field)
    const copyDataName = dataList.concat();
    const sortData = copyDataName.sort(function (a, b) { return a[field] > b[field] ? 1 : -1 });
    console.log(sortData)
    setDataList(sortData)
  }



  return (

    <main className="main">

      <Search query={query} handleInputChange={handleInputChange} />

      {isLoading ? <Loader /> : <Table data={dataList} search={search} sortData={sortData} />}

    </main>
  );
}

export default List;
