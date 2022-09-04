import React from 'react';

const Pagination = ({ itemPerPage, totalItems, paginate, changePagePrev, changePageNext }) => {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="pagination">
      <div className="pagination__container">
        <ul className="pagination__lists">
          {
            pageNumbers.map(number => (
              <li key={number} className="pagination__list">
                <button className="pagination__btn" onClick={() => paginate(number)}>{number}</button>
              </li>
            ))
          }
        </ul>

        <button className="pagination__btn-page" onClick={changePagePrev}>Prev</button>
        <button className="pagination__btn-page" onClick={changePageNext}>Next</button>
      </div>
    </div>
  );
}

export default Pagination;
