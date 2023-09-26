import React from "react";
import ChartComponent from "../components/chart/Chart";
import DiagramTab from "../components/DiagramTab/DiagramTab";
import transactions from "../components/DiagramTab/transaction.json";
import css from '../components/DiagramTab/DiagramTab.module.css';

const Statistics = () => {
    

    return (
        <>
        <div className={css.containerStatistics}>
        <div className={css.tabContainer}>
        <DiagramTab transactions={transactions} className={css.DiagramTabContainer} />
        </div>
        </div>
        </>
    )
}

export default Statistics;