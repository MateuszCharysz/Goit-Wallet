import React, {useState} from "react"
import styles from "../EditPen/EditPen.module.css"
import editImage from "../../assets/edit.svg"
import { ModalEditTransaction }  from "../ModalEditTransaction/ModalEditTransaction"

export const EditPen = ({id, type}) => {

    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(true)
    }
    const closeModal = (e) => {
        setModal(false)
        e.preventDefault()
    }

// const [data, setData] = useState(props.data)

    const submitModal = (ev) => {
        ev.preventDefault()
        setModal(!modal)
        // const dane = {
        //     id: id,
        //     type: type,
        //     // sum: formData.sum,
        //     // date:formData.date,
        //     // comment: formData.comment
        // }
        // console.log(dane)
        console.log(data)
    }

    return (
        <>
        <img className={styles.ico} src = {editImage} alt="edit icon" onClick={openModal} />
        {modal && <ModalEditTransaction
        type={type}
        onSubmit={submitModal}
        onCancel={closeModal}
        onClose={closeModal}
        onChangeValue={e => setData({ ...data, sum: e.target.value })}
        />}
        </>
    )
}