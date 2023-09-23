import styles from "./Dashboard.module.css"
import { DeleteButton } from "../DeleteButton/DeleteButton"
import { EditPen } from "../EditPen/EditPen"
import { useEffect, useState } from "react"

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
    <>{data ? 
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
                
                const getDay = (date) => {
                const day = date.day
                    if (day<10) {
                        return `0${day}`
                    }   return day
                }
                const getMonth = (date) => {
                    const month = date.month
                        if (month<10) {
                            return `0${month}`
                        } return month
                    }
                const getYear = (date) => {
                    const year = date.year.substr(2,2)
                    return year
                }
                if (type == '+') {
                    return(
                    <tr key={_id}>
                        <td>
                            {getDay(date)}.
                            {getMonth(date)}.
                            {getYear(date)}
                        </td>
                        <td>{type}</td>
                        <td>{category}</td>
                        <td>{comment}</td>
                        <td className={styles.green}>{sum}</td>
                        <td>
                        <span className={styles.buttonContainer}>
                            <EditPen id={_id} type={type}/>
                            <DeleteButton name="DELETE" id={_id}/>
                            </span>
                        </td>
                    </tr>
                    )
                }
                    return(
                    <tr key={_id}>
                        <td>
                            {getDay(date)}.
                            {getMonth(date)}.
                            {getYear(date)}
                        </td>
                        <td>{type}</td>
                        <td>{category}</td>
                        <td>{comment}</td>
                        <td className={styles.red}>{sum}</td>
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
        </table>:
        <></>
        }
      </>
  )};
