import styles from "../EditPen/EditPen.module.css"
import editImage from "../../assets/edit.svg"
export const EditPen = ({id}) => {
    const handleEdit = () => {
        console.log(`Zapytanie czy edytować wpis z bazy danych. ${id}`)
    }
    return (
        <img className={styles.ico} src = {editImage} alt="edit icon" id={id} onClick={handleEdit} />
    )
}