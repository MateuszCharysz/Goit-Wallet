import styles from "../EditPen/EditPen.module.css"
import editImage from "../../assets/edit.svg"
export const EditPen = ({id, type}) => {
    const handleEdit = () => {
        alert(`Modal z edycją danych dla id: ${id} oraz type: ${type}`)
    }
    return (
        <img className={styles.ico} src = {editImage} alt="edit icon" onClick={handleEdit} />
    )
}