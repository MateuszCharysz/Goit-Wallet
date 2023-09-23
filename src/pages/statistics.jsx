import React from "react";
import ChartComponent from "../components/chart/Chart";
import DiagramTab from "../components/DiagramTab/DiagramTab";
import transactions from "../components/DiagramTab/transaction.json";
import css from '../pages/statistics.module.css'
import DateChartInput from "../components/DateInput/DateChart";

const Statistics = () => {
    

    return (
        <div className={css.containerStatistics}>
        <h2 className={css.titleStatistics}>Statistics</h2>
        <div className={css.tabContainer}>
        <DiagramTab transactions={transactions} />
        </div>
        </div>
    )
}

export default Statistics;