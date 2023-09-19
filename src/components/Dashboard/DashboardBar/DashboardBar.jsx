import styles from "../Dashboard.module.css"

export const DashboardBar = () => {
    return (
            <section className={styles.barWrapper}>
                <ul className={styles.list} >
                    <li className={styles.element}>Date</li>
                    <li className={styles.element}>Type</li>
                    <li className={styles.element}>Category</li>
                    <li className={styles.element}>Comment </li>
                    <li className={styles.element}>Sum</li>
                </ul>
            </section>
    )
}