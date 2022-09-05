import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const Table = ({ data, search, sortData }) => {

  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   setItems(data)
  // }, [data]);

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 10;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;

    //console.log(`Loading items from ${itemOffset} to ${endOffset}`);

    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));

  }, [itemOffset, itemsPerPage, data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {

    const newOffset = (event.selected * itemsPerPage) % data.length;

    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };


  return (
    <>
      <table className="table">
        <tbody className="table__container">
          <tr className="table__row">
            <th className="table__heading" onClick={() => { sortData('Name') }}>Name</th>
            <th className="table__heading" >Position</th>
            <th className="table__heading" >Office</th>
            <th className="table__heading" >Age</th>
            <th className="table__heading" >Start Date</th>
            <th className="table__heading" >Salary</th>
          </tr>
          {search(currentItems).map((item) => (

            <tr className="table__row" key={item.id}>
              <td className="table__cell">{item.Name}</td>
              <td className="table__cell">{item.Position}</td>
              <td className="table__cell">{item.Office}</td>
              <td className="table__cell">{item.Age}</td>
              <td className="table__cell">{item.StartDate}</td>
              <td className="table__cell">{`$ ${item.Salary}`}</td>
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
