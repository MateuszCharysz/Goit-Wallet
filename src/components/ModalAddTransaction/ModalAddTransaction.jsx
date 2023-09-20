import styles from "../ModalAddTransaction/ModalAddTransaction.module.css"



export const ModalAddTransaction = () => {

    return (
        <section className={styles.wrapper}>
            <h2 className={styles.header}>Add transaction</h2>
            <div className={styles.sliderContainer}>
                <span className={styles.greenText}>Income</span>
                <label className={styles.switch}>
                    <input type="checkbox" className={styles.checkbox}/>
                    <span className={styles.slider}></span>
                </label>
                <span className={styles.redText}>Expense</span>

            </div>
        </section>
    )};