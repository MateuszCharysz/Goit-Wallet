import styles from "../DeleteButton/DeleteButton.module.css"
export const DeleteButton = ({ name, id, onClick }) => {
    return (
        <button type="submit" onClick={onClick} className={styles.buttonDelete}>{name}</button>
    )
}