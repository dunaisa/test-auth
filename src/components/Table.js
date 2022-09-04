import React from 'react';

const Table = ({ data }) => {
  return (
    <table className="table">
      <tbody className="table__container">
        <tr className="table__row">
          <th className="table__heading">Name</th>
          <th className="table__heading">Position</th>
          <th className="table__heading">Office</th>
          <th className="table__heading">Age</th>
          <th className="table__heading">Start Date</th>
          <th className="table__heading">Salary</th>
        </tr>
        {data.map((item) => (

          <tr className="table__row">
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
  );
}

export default Table;
