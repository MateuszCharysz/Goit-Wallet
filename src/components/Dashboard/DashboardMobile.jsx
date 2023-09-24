import styles from "./DashboardMobile.module.css"
import { DeleteButton } from "../DeleteButton/DeleteButton"
import { EditPen } from "../EditPen/EditPen"
import { useEffect, useState } from "react"
import { getDayDashboard, getMonthDashboard, getYearDashboard } from "../../services/DateFunctions"

const dbURL = "https://cosmic-answer-399520.lm.r.appspot.com/api/mockTransactions/?month=&year="

export const DashboardMobile = () => {

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
{data?
<div className={styles.wrapper}>
    {data.map(({ _id, date, type, category, comment, sum })=>{
    
        return(
        <div key={_id} className={styles.element}>

            <ul className={type==='+'?styles.greenElementList:styles.redElementList}>
                <li className={styles.listElement}>
                        <span className={styles.listElementTitle}>Date</span>
                        <span>
                            {getDayDashboard(date)}.
                            {getMonthDashboard(date)}.
                            {getYearDashboard(date)}
                        </span>
                </li>
                <li className={styles.listElement}>
                        <span className={styles.listElementTitle}>Type</span>
                        <span>{type}</span>
                </li>
                <li className={styles.listElement}>
                        <span className={styles.listElementTitle}>Category</span>
                        <span>{category}</span>
                </li>
                <li className={styles.listElement}>
                        <span className={styles.listElementTitle}>Comment</span>
                        <span>{comment.length>15?comment.substr(0,15)+'...':comment}</span>
                </li>
                <li className={styles.listElement}>
                        <span className={styles.listElementTitle}>Sum</span>
                        <span className={type==='+'?styles.green:styles.red}>{sum}</span>
                </li>
                <li className={styles.listElement}>
                        <DeleteButton name="Delete" id={_id}/>
                        <ul className={styles.editList}>
                            <li><EditPen id={_id} type={type}/></li>
                            <li><span>Edit</span></li>
                        </ul>
                        
                </li>
            </ul>
        </div>
        )
    })}
</div>
    :<span>Loading...</span>
    }
    </>
)};
