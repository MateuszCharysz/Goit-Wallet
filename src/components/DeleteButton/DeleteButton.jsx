import styles from "../DeleteButton/DeleteButton.module.css"
export const DeleteButton = ({name, id}) => {
    const handleDelete = () => {
        console.log(`Zapytanie czy usunąć wpis z bazy danych. ${id}`)
    }
    return (
        <button type="submit" className={styles.buttonDelete} onClick={handleDelete}>{name}</button>
    )
}