import React, { useState, useEffect } from 'react';
import { dataConfig } from '../DATA';
import Table from './Table';
import Search from './Search';
import Loader from './Loader';



const List = () => {

  const [isLoading, setIsLoading] = useState(true);

  const [query, setQuery] = useState('');

  function handleInputChange(e) {
    setQuery(e.target.value)
  }

  ////Стейт изначального списка

  const [data, setData] = useState(dataConfig);

  ////Поиск по списку

  const positionsArray = ["Name"]


  function search(data) {
    console.log('ok')

    return data.filter((item) =>
      positionsArray.some((key) => item[key].toLowerCase().startsWith(query.toLowerCase()))
    )
  }

  ///Сортировка списка  

  // Изменение направления списка

  const [directionData, setDitertionData] = useState(true);

  const sortData = (field) => {

    const copyDataName = data.concat();

    let sortData;

    if (directionData) {
      console.log('sort dir')
      sortData = copyDataName.sort((a, b) => { return a[field] > b[field] ? 1 : -1 });

    } else {
      console.log('sort rev dir')
      sortData = copyDataName.reverse((a, b) => { return a[field] > b[field] ? -1 : 1 });

    }
    console.log(directionData)
    setData(sortData);
    setDitertionData(!directionData);
  }

  useEffect(() => {
    console.log('data')
    setData(data);
    setIsLoading(false);
  }, [data]);



  return (

    <main className="main">

      <Search query={query} handleInputChange={handleInputChange} />

      {isLoading ? <Loader /> : <Table data={data} search={search} sortData={sortData} />}

    </main>
  );
}

export default List;
