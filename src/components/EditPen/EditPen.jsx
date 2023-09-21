import React, {useState} from "react"
import styles from "../EditPen/EditPen.module.css"
import editImage from "../../assets/edit.svg"
import { ModalEditTransaction }  from "../ModalEditTransaction/ModalEditTransaction"

export const EditPen = ({id, type}) => {

    const [modal, setModal] = useState(false)

    const toogleModal = () => setModal(!modal)

    const submitModal = (ev) => {
        ev.preventDefault()
        setModal(!modal)
        const dane = {
            id: id,
            type: type,
            // sum: formData.sum,
            // date:formData.date,
            // comment: formData.comment
        }
        console.log(dane)
    }

    return (
        <>
        <img className={styles.ico} src = {editImage} alt="edit icon" onClick={toogleModal} />
        {modal && <ModalEditTransaction
        type={type}
        onSubmit={submitModal}
        onCancel={toogleModal}
        onClose={toogleModal}
        />}
        </>
    )
}