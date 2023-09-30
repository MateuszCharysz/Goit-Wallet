import styles from "./DashboardMobile.module.css";
import { DeleteButton } from "../DeleteButton/DeleteButton";
import { EditPen } from "../EditPen/EditPen";
import { useEffect, useState } from "react";
import {
  getDayDashboard,
  getMonthDashboard,
  getYearDashboard,
} from "../../services/DateFunctions";
import { AddTransactionButton } from "../AddTransactionButton/AddTransactionButton";
import { useDispatch } from "react-redux";
import {
  getTransactions,
  removeTransaction,
} from "../../redux/transactions/actions";
import { nanoid } from "nanoid";
import useTransactions from "../../hook/useTransactions";

export const DashboardMobile = () => {
  const { transactions, isTransactionsLoading } = useTransactions();
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  useEffect(() => {
    setData(transactions);
  }, [transactions]);

  const deleteLine = (id) => {
    dispatch(removeTransaction(id));
    setData((prevData) => prevData.filter(({ _id }) => _id !== id));
  };

  const addData = (data) => {
    setData((prevData) => [data, ...prevData]);
  };

  const updateData = (data) => {
    setData(data);
  };

  const formatSum = (data) => {
    const numericValue = parseFloat(data);
    const options = {
      useGrouping: true,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };
    const formattedValue = numericValue
      .toLocaleString("pl-PL", options)
      .replace(/,/g, ".");

    return formattedValue;
  };

  return (
    <>
      {data.length ? (
        <div className={styles.wrapper}>
          {data.map(({ _id, date, type, category, comment, sum }) => {
            return (
              <>
                <div key={_id ?? nanoid()} className={styles.element}>
                  <ul
                    className={
                      type === "+"
                        ? styles.greenElementList
                        : styles.redElementList
                    }
                  >
                    <li key={nanoid()} className={styles.listElement}>
                      <span className={styles.listElementTitle}>Date</span>
                      <span>
                        {getDayDashboard(date)}.{getMonthDashboard(date)}.
                        {getYearDashboard(date)}
                      </span>
                    </li>
                    <li key={nanoid()} className={styles.listElement}>
                      <span className={styles.listElementTitle}>Type</span>
                      <span>{type}</span>
                    </li>
                    <li key={nanoid()} className={styles.listElement}>
                      <span className={styles.listElementTitle}>Category</span>
                      <span>{category}</span>
                    </li>
                    <li key={nanoid()} className={styles.listElement}>
                      <span className={styles.listElementTitle}>Comment</span>
                      <span>
                        {comment.length > 15
                          ? comment.substr(0, 15) + "..."
                          : comment}
                      </span>
                    </li>
                    <li key={nanoid()} className={styles.listElement}>
                      <span className={styles.listElementTitle}>Sum</span>
                      <span
                        className={type === "+" ? styles.green : styles.red}
                      >
                        {formatSum(sum)}
                      </span>
                    </li>
                    <li key={nanoid()} className={styles.listElement}>
                      <DeleteButton
                        onClick={() => deleteLine(_id)}
                        name="Delete"
                      />
                      <ul className={styles.editList}>
                        <li>
                          <EditPen
                            id={_id}
                            type={type}
                            updateDashboard={updateData}
                          />
                        </li>
                        <li>
                          <span>Edit</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <AddTransactionButton addDashboard={addData} />
              </>
            );
          })}
        </div>
      ) : !isTransactionsLoading ? (

        <div>
          <h2>There are no transactions</h2>
          <AddTransactionButton addDashboard={addData} />
        </div>
      ) : null}
    </>
  );
};
