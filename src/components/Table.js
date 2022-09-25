import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const Table = ({ data, search, sortData }) => {

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 10;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;


    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));

  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {

    const newOffset = (event.selected * itemsPerPage) % data.length;

    setItemOffset(newOffset);
  };


  return (
    <>

      <table className="table">
        <tbody className="table__container">
          <tr className="table__row">
            <th className="table__heading" onClick={() => { sortData('Name') }}>Name</th>
            <th className="table__heading" onClick={() => { sortData('Position') }}>Position</th>
            <th className="table__heading" onClick={() => { sortData('Office') }}>Office</th>
            <th className="table__heading" onClick={() => { sortData('Age') }}>Age</th>
            <th className="table__heading" onClick={() => { sortData('StartDate') }}>Start Date</th>
            <th className="table__heading" onClick={() => { sortData('Salary') }}>Salary</th>
          </tr>
          {currentItems.map((item, index) => (

            <tr className="table__row" key={index}>
              <td className="table__cell">{item.Name}</td>
              <td className="table__cell">{item.Position}</td>
              <td className="table__cell">{item.Office}</td>
              <td className="table__cell">{item.Age}</td>
              <td className="table__cell">{item.StartDate}</td>
              <td className="table__cell">{item.Salary}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="pagination__link"
        previousLinkClassName="pagination__link"
        nextLinkClassName="pagination__link"
        activeLinkClassName="pagination__link_active"
      />
    </>
  );
}

export default Table;

//key={item.id}
