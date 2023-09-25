import styles from "./DashboardMobile.module.css"
import { DeleteButton } from "../DeleteButton/DeleteButton"
import { EditPen } from "../EditPen/EditPen"
import { useEffect, useState } from "react"
import { getDayDashboard, getMonthDashboard, getYearDashboard } from "../../services/DateFunctions"

const dbURL = "https://cosmic-answer-399520.lm.r.appspot.com/api/mockTransactions/?month=&year="

export const DashboardMobile = () => {
    const [data, setData] = useState();
   
const dataFetch = async () => {
    const results = await (await fetch(dbURL)).json();
    const data = results.data
    setData(data);
    console.log('dane wczytane')
};
useEffect(() => {
    dataFetch();
}, []);


const deleteLine = async (id) => {
    const data = id
    console.log(`Usunieto wpis o ID${data}`)
    await fetch(`https://cosmic-answer-399520.lm.r.appspot.com/api/mockTransactions/${data}`, {method: 'DELETE',})
    dataFetch();
    console.log('dane przeladowane')
}

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
                        <DeleteButton onClick={()=>deleteLine(_id)} name="Delete"/>
                        <ul className={styles.editList}>
                            <li><EditPen id={_id} type={type} getConnect={dataFetch}/></li>
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
