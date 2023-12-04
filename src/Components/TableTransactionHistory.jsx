import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTable } from 'react-table';
import './Styles/TableTransactionHistory.css';

export const TransactionTable = ({ refresh, numberOfTransactions }) => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userID = "fxAEXzfQSHf26vyOJFPFOtpcZyE3";
        const response = await axios.get(`http://localhost:3002/user/getTransactions/${userID}`);
        const data = response.data.transactions;

        let transformedData = data
          .map(transaction => ({
            ...transaction.data,
            date: new Date(transaction.data.date._seconds * 1000),
          }))
          .sort((a, b) => b.date - a.date)
          .map(t => ({ ...t, date: t.date.toLocaleDateString() }));

        if (numberOfTransactions) {
          transformedData = transformedData.slice(0, numberOfTransactions);
        }

        setTransactions(transformedData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [refresh, numberOfTransactions]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'Amount',
        accessor: 'amount',
      },
      {
        Header: 'Category',
        accessor: 'category',
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
      {
        Header: 'Type',
        accessor: 'type',
      },
      {
        Header: 'Date',
        accessor: 'date',
      },
      {
        Header: 'Recurring',
        accessor: 'recurring',
        Cell: ({ value }) => (value === 'true' ? 'Yes' : 'No'),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data: transactions,
  });

  const placeholderRows = isLoading
    ? Array.from({ length: 8 }).map((_, index) => (
        <tr key={index}>
          {columns.map(column => (
            <td key={column.accessor} style={{ fontSize: '80%' }}></td>
          ))}
        </tr>
      ))
    : null;

  return (
    <div className='table-container'>
      <div className="table-header">
        <h2 className='table-title'>Latest Transactions</h2>
        <button className='all-transactions-btn' onClick={() => refresh && setTransactions(transactions)}>View all Transactions</button>
      </div>
      {isLoading ? (
        <table className='table'>
          <tbody>
            {placeholderRows}
          </tbody>
        </table>
      ) : (
        <table {...getTableProps()} className='table'>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TransactionTable;
