import { useState } from 'react';
import css from './DiagramTab.module.css';
import ChartComponent from '../chart/Chart';
import SelectStatisticsMenu from '../SelectStatisticsMenu/SelectStatisticsMenu';
import { nanoid } from 'nanoid';

const DiagramTab = ({ transactions }) => {
  const categoryColors = {
    'Main expenses': 'rgba(254, 208, 87, 1)',
    'Products': 'rgba(255, 216, 208, 1)',
    'Car': 'rgba(253, 148, 152, 1)',
    'Self care': 'rgba(197, 186, 255, 1)',
    'Child care': 'rgba(110, 120, 232, 1)',
    'Household products': 'rgba(74, 86, 226, 1)',
    'Education': 'rgba(129, 225, 255, 1)',
    'Leisure': 'rgba(36, 204, 167, 1)',
    'Other expenses': 'rgba(0, 173, 132, 1)',
  };

  const monthNameToNumber = monthName => {
    const months = {
      January: '01',
      February: '02',
      March: '03',
      April: '04',
      May: '05',
      June: '06',
      July: '07',
      August: '08',
      September: '09',
      October: '10',
      November: '11',
      December: '12',
    };

    return months[monthName];
  };

  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const setMonth = data => {
    const numericMonth = monthNameToNumber(data);
    setSelectedMonth(numericMonth);
  };

  const setYear = data => {
    setSelectedYear(data);
  };

  const filteredTransactions = transactions.filter(transaction => {
    if (selectedMonth && selectedYear) {
      return (
        transaction.date.month === selectedMonth &&
        transaction.date.year === selectedYear
      );
    }

    return transaction;
  });

  const categorySums = {};
  let totalIncome = 0;

  filteredTransactions.forEach(transaction => {
    const category = transaction.category;
    const sum = parseFloat(transaction.sum);

    if (category !== 'Income') {
      if (!isNaN(sum)) {
        if (!categorySums[category]) {
          categorySums[category] = sum;
        } else {
          categorySums[category] += sum;
        }
      }
    }

    if (category === 'Income') {
      if (!selectedMonth && !selectedYear) {
        totalIncome += sum;
      }

      if (
        transaction.date.month === selectedMonth &&
        transaction.date.year === selectedYear
      ) {
        totalIncome += sum;
      }

      if (transaction.date.month === selectedMonth && !selectedYear) {
        totalIncome += sum;
      }

      if (transaction.date.year === selectedYear && !selectedMonth) {
        totalIncome += sum;
      }
    }
  });

  let totalSum = 0;
  for (const category in categorySums) {
    if (categorySums.hasOwnProperty(category)) {
      totalSum += categorySums[category];
    }
  }

  const uniqueCategories = [
    ...new Set(
      filteredTransactions
        .filter(transaction => transaction.category !== 'Income')
        .map(transaction => transaction.category)
    ),
  ];

  return (
    <>
      <div className={css.chartContainer}>
        <h2 className={css.titleStatistics}>Statistics</h2>
        {Object.keys(categorySums).length !== 0 ? (
          <ChartComponent categorySums={categorySums} />
        ) : (
          <h2>There are no expenses</h2>
        )}
        {Object.keys(categorySums).length !== 0 ? (
          <span className={css.balanceValue}>
            PLN {totalIncome - parseFloat(totalSum)}
          </span>
        ) : (
          <p>Please select another date to see your expenses</p>
        )}
      </div>
      <div className={css.tableDateContainer}>
        <div className={css.dateContainer}>
          <SelectStatisticsMenu
            placeholder={'Month'}
            type={'month'}
            setDate={setMonth}
          />
          <SelectStatisticsMenu
            placeholder={'Year'}
            type={'year'}
            setDate={setYear}
          />
        </div>
        <div className={css.tableContener}>
          <table>
            <thead className={css.theadStatistics}>
              <tr>
                <th>Category</th>
                <th></th>
                <th>Sum</th>
              </tr>
            </thead>
            <tbody className={css.bodyStatisticsTable}>
              {uniqueCategories.map(category => {
                return (
                  <tr key={nanoid()}>
                    <td
                      className={css.categorySquare}
                      style={{ '--category-color': categoryColors[category] }}
                    />
                    <td className={css.tableBodyCategory}>{category}</td>
                    <td className={css.tableBodySum}>
                      {categorySums[category]}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className={css.sumUp}>
            <div>
              <strong className={css.sumUpExpenses}>Expenses:</strong>
              <span className={css.expensesValue}>{totalSum}</span>
            </div>
            <div>
              <strong className={css.sumUpIncome}>Income:</strong>
              <span className={css.IncomeValue}>{totalIncome}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiagramTab;
