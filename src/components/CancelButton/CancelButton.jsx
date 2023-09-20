import styles from "../CancelButton/CancelButton.module.css"
export const CancelButton = ({name}) => {

    return (
        <button type="reset" className={styles.modalButtonCancel}>{name}</button>
    )
}