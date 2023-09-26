import { useState } from 'react';
import css from './DiagramTab.module.css';
import transactions from './transaction.json'
import ChartComponent from '../chart/Chart';
import DateChartInput from '../DateInput/DateChart';

const DiagramTab = ({ transactions }) => {

    const categoryColors = {
        "Main expenses": 'rgba(254, 208, 87, 1)',
        "Products": 'rgba(255, 216, 208, 1)',
        "Car": 'rgba(253, 148, 152, 1)',
        "Self care": 'rgba(197, 186, 255, 1)',
        "Child care": 'rgba(110, 120, 232, 1)',
        "Household products": 'rgba(74, 86, 226, 1)',
        "Education": 'rgba(129, 225, 255, 1)',
        "Leisure": 'rgba(36, 204, 167, 1)',
        "Other expenses": 'rgba(0, 173, 132, 1)',
    };
    //let selectedMonth = '09';
   // let selectedYear = '2022';

   const [selectedMonth, setSelectedMonth] = useState("");
   const [selectedYear, setSelectedYear] = useState("");

   const handleDateChange = (month, year) => {
    setSelectedMonth(month);
    setSelectedYear(year);
}

    const filteredTransactions = transactions.filter(transaction => {
        return transaction.date.month === selectedMonth && transaction.date.year === selectedYear;
    })
        const categorySums = {};
        let totalIncome = 0;
       filteredTransactions.forEach((transaction) => {
           const category = transaction.category;
           const sum = parseFloat(transaction.sum)
           if (!isNaN(sum)) {
               if (!categorySums[category]) {
                   categorySums[category] = sum;
               } else {
                   categorySums[category] += sum;
               }
           }
           if (category === 'Income' && transaction.date.month === selectedMonth && transaction.date.year === selectedYear) {
            totalIncome += sum;
          }
       }) 

let totalSum = 0;
for (const category in categorySums) {
  if (categorySums.hasOwnProperty(category)) {
    totalSum += categorySums[category];
  }
}

    const uniqueCategories = [...new Set(filteredTransactions.map((transaction) => transaction.category))];

    return (
        <>
        <div className={css.chartContainer}>
        <h2 className={css.titleStatistics}>Statistics</h2>
        <ChartComponent categorySums={categorySums}/>
        <span className={css.balanceValue}>₴ 24 000.00</span>
        </div>
        <div className={css.tableDateContainer}>
        <div className={css.dateContainer}>
        <DateChartInput onChange={handleDateChange} />
        </div>
        <div className={css.tableContener}>
        <table>
            <thead className={css.theadStatistics}>
            <tr >
                <th>Category</th>
                <th></th>
                    <th>Sum</th>
            </tr>
            </thead>
            <tbody className={css.bodyStatisticsTable}>
            {uniqueCategories.map((category) => {
                return (
                <tr key={category}>
                                <td className={css.categorySquare} style={{ '--category-color': categoryColors[category] }} /> 
                                <td className={css.tableBodyCategory}>{category}</td>
                                <td className={css.tableBodySum}>{categorySums[category]}</td>
                </tr>
                )
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
    )
};



export default DiagramTab;