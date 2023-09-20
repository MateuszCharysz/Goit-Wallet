import styles from "./Dashboard.module.css"
import editImage from "../../assets/edit.svg"
import balance from "../../../balance.json"

const handleDelete = () => {
    alert(`Zapytanie czy usunąć wpis z bazy danych.`)
}
const handleEdit = () => {
    alert(`Tu pojawi się modal do edycji danych.`)
}
export const Dashboard = () => {

    return (

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
      {balance.map(({ id, date, type, category, comment, sum })=>{
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
            <tr key={id}>
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
                    <img className={styles.ico} src = {editImage} alt="edit icon" onClick={handleEdit}/>
                    <button className={styles.button} onClick={handleDelete}>Delete</button>
                    </span>
                </td>
            </tr>
            )
        }
            return(
            <tr key={id}>
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
                <img className={styles.ico} src = {editImage} alt="edit icon" onClick={handleEdit}/>
                    <button className={styles.button} onClick={handleDelete}>Delete</button>
                    </span>
                </td>
            </tr>
            )
      })}
  
    </tbody>
      </table>
  )};