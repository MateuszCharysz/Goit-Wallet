import React, {useState} from "react"
import styles from "../AddTransactionButton/AddTransactionButton.module.css"
import { ModalAddTransaction } from "../ModalAddTransaction/ModalAddTransaction"

export const AddTransactionButton = (props) => {

    const [modal, setModal] = useState(false)

const openModal = () => {
    setData({type:'-'})
    setModal(true)
}

const sliderTypePlus = () => {
    setData({type:'+'})
}

const sliderTypeMinus = () => {
    setData({type:'-'})
}

const closeModal = (e) => {
    e.preventDefault()
    setData({})
    setModal(false)
}

const [data, setData] = useState(props.data)
const submitModal = (e) => {
    e.preventDefault()
    setModal(!modal)
    console.log('Modal Submit')
    console.log(data)
  
    // fetch('/api', {
    //     method: 'POST',
    //     body: JSON.stringify({ data }),
    //   })
    //     .then(res => res.json())
    //     .then(json => setData(json.data))
    }



    return (
            <>
            <button
            onClick={openModal} 
            className={styles.addButton}>
            </button>
            {modal && <ModalAddTransaction 
            onSubmit={submitModal} 
            onCancel={closeModal} 
            onClose={closeModal}
            onChangeSliderPlus={sliderTypePlus}
            onChangeSliderMinus={sliderTypeMinus}
            onChangeValue={e => setData({ ...data, sum: e.target.value })}
            onChangeDate={e => setData({ ...data, date: e.target.value })}
            onChangeComment={e => setData({ ...data, comment: e.target.value })}
            onChangeCategory={e => setData({ ...data, category: e.target.value })}
            // onSliderChange={e => {setData({ ...data, type: {sliderValue} });console.log({sliderValue})}}
            />}
            </>
    )
}