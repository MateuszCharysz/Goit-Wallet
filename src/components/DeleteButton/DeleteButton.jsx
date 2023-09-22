import styles from "../DeleteButton/DeleteButton.module.css"
export const DeleteButton = ({name, id}) => {
    const handleDelete = () => {
        alert(`Zapytanie czy usunąć wpis z bazy danych o id:  ${id}`)
        const data = {
            id:{id}
        }
        console.log(data)
    }
    return (
        <button type="submit" className={styles.buttonDelete} onClick={handleDelete}>{name}</button>
    )
}