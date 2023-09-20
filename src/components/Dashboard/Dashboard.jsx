import styles from "./Dashboard.module.css"

// import balance from '../../balance.json'

// export const Dashboard = () => {
//     return (
//             <section className={styles.wrapper} >
//                 <DashboardBar/>
//                 <DashboardList/>
//             </section>
//     )
// }


export const Dashboard = ({ items }) => {
    const setTime = (time) => {
    const day = getDay(time);
    const month = getMonth(time)
    const year = getYear(time)
    const finalDate = `${day}.${month}.${year}`
    return finalDate
    
    }
    return (
      <table className={styles.dashboardClass}>
    <thead>
      <tr>
        <th>Date</th>
        <th>Type</th>
        <th>Category</th>
        <th>Comment</th>
        <th>Sum</th>
      </tr>
    </thead>
    <tbody className={styles.dashboardClassBody}>
      {items.map(({ id, date, type, category, comment, sum })=>{
        const time = Date(date)
        const getDay = (time) => {
        const day = new Date(time).getDate()
            if (day<10) {
                return `0${day}`
            } return day
        }
        const getMonth = (time) => {
            const month = new Date(time).getMonth()
                if (month<10) {
                    return `0${month}`
                } return month
            }
        const year = new Date(time).getYear()-100
        if (type=='+') {
            return(
            <tr key={id}>
                <td>
                    {getDay(time)}.
                    {getMonth(time)}.
                    {year}
                </td>
                <td>{type}</td>
                <td>{category}</td>
                <td>{comment}</td>
                <td className={styles.green}>{sum}</td>
            </tr>
            )
        }
            return(
            <tr key={id}>
                <td>
                    {getDay(time)}.
                    {getMonth(time)}.
                    {year}
                </td>
                <td>{type}</td>
                <td>{category}</td>
                <td>{comment}</td>
                <td className={styles.red}>{sum}</td>
            </tr>
            )
      })}
  
    </tbody>
      </table>
  )};