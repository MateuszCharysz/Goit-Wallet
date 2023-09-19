import { DashboardBar } from "./DashboardBar/DashboardBar";
import { DashboardList } from "./DashboardList/DashboardList";
import styles from "./Dashboard.module.css"

export const Dashboard = () => {
    return (
            <section className={styles.wrapper} >
                <DashboardBar/>
                <DashboardList/>
            </section>
    )
}