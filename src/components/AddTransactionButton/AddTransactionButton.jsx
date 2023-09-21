import React, {useState} from "react"
import styles from "../AddTransactionButton/AddTransactionButton.module.css"
import { ModalAddTransaction } from "../ModalAddTransaction/ModalAddTransaction"

export const AddTransactionButton = () => {

const [modal, setModal] = useState(false)

const toogleModal = () => setModal(!modal)
const submitModal = () => {
    setModal(!modal)
    console.log('Modal Submit')}

    return (
            <>
            <button
            onClick={toogleModal} 
            className={styles.addButton}>
            </button>
            {modal && <ModalAddTransaction 
            onSubmit={submitModal} 
            onCancel={toogleModal} 
            onClose={toogleModal}/>}
            </>
    )
}