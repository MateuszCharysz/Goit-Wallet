import styles from "./Dashboard.module.css"
// import balance from "../../../src/balance.json"
import { DeleteButton } from "../DeleteButton/DeleteButton"
import { EditPen } from "../EditPen/EditPen"
import { useEffect, useState } from "react"

export const Dashboard = () => {

 const [data, setData] = useState();

 useEffect(() => {
  const dataFetch = async () => {
    const results = await (
      await fetch(
        "https://cosmic-answer-399520.lm.r.appspot.com/wallet/api/mockTransactions"
      )
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
                const time = new Date(parseInt(date))
                const getDay = (time) => {
                const day = new Date(time).getDate()
                    if (day<10) {
                        return `0${day}`
                    }   return day
                }
                const getMonth = (time) => {
                    const month = new Date(time).getMonth()+1
                        if (month<10) {
                            return `0${month}`
                        } return month
                    }
                const getYear = (time) => {
                    const trim = (number) => {
                        if (number<10) {
                            return `0${number}`
                        }   return number
                    }
                    const year = new Date(time).getYear()
                        if (year<100) {
                            return trim(year)
                        } return trim(year-100)
                }
                if (type == '+') {
                    return(
                    <tr key={_id}>
                        <td>
                            {getDay(time)}.
                            {getMonth(time)}.
                            {getYear(time)}
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
                            {getDay(time)}.
                            {getMonth(time)}.
                            {getYear(time)}
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
        <div>
            <h1 className={styles.loader}>Loading...</h1>
        </div>}
      </>
  )};
