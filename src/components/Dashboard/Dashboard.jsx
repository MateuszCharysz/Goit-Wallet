import styles from "./Dashboard.module.css"
import { DeleteButton } from "../DeleteButton/DeleteButton"
import { EditPen } from "../EditPen/EditPen"
import { useEffect, useState } from "react"
import { getDayDashboard, getMonthDashboard, getYearDashboard } from "../../services/DateFunctions"

const dbURL = "https://cosmic-answer-399520.lm.r.appspot.com/wallet/api/mockTransactions"

export const Dashboard = () => {

 const [data, setData] = useState();

 useEffect(() => {
  const dataFetch = async () => {
    const results = await (
      await fetch(dbURL)
    ).json();
    const data = results.data
    setData(data);
  };
  dataFetch();
}, []);

return (
    <>
    {data ? 
        <table className={styles.dashboardClass}>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Category</th>
                    <th>Comment</th>
                    <th>Sum</th>
                    <th></th>
                </tr>
            </thead>
            <tbody className={styles.dashboardClassBody}>
            {data.map(({ _id, date, type, category, comment, sum })=>{

                return(
                    <tr key={_id}>
                        <td>
                            {getDayDashboard(date)}.
                            {getMonthDashboard(date)}.
                            {getYearDashboard(date)}
                        </td>
                        <td>{type}</td>
                        <td>{category}</td>
                        <td>{comment}</td>
                        {type=='+'?<td className={styles.green}>{sum}</td>:<td className={styles.red}>{sum}</td>}
                        <td>
                            <span className={styles.buttonContainer}>
                                <EditPen id={_id} type={type}/>
                                <DeleteButton name="DELETE" id={_id}/>
                            </span>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>:<></>
    }
    </>
)};
