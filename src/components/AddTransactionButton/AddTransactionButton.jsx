import React, {useState} from "react"
import styles from "../AddTransactionButton/AddTransactionButton.module.css"
import { ModalAddTransaction } from "../ModalAddTransaction/ModalAddTransaction"

export const AddTransactionButton = (props) => {

const [modal, setModal] = useState(false)
const [data, setData] = useState()

const getDay = () => {
    const day = new Date().getDate()
        if (day<10) {
            return `0${day}`
        }   return day
    }
const getMonth = () => {
        const month = new Date().getMonth()+1
            if (month<10) {
                return `0${month}`
            } return month
        }
const getYear = () => {
        const trim = (number) => {
            if (number<10) {
                return `0${number}`
            }   return number
        }
        const year = new Date().getYear()
            if (year<100) {
                return trim(year)
            } return trim(year-100)
    }

const openModal = () => {

    setData({
        type:'-', 
        date:{
            day: getDay(),
            month: getMonth(),
            year: getYear()
        }})
    setModal(true)
}
const closeModal = (e) => {
    e.preventDefault()
    setData({})
    setModal(false)
}

const sliderTypePlus = () => setData({type:'+'})
const sliderTypeMinus = () => setData({type:'-'})

const submitModal = (e) => {
    e.preventDefault()
    setModal(!modal)
    console.log('Dane przeslane do bazy danych')
    console.log(data)
  
    // fetch('/api', {
    //     method: 'POST',
    //     body: JSON.stringify({ data }),
    //   })
    //     .then(res => res.json())
    //     .then(json => setData(json.data))
    }

    const dateTrim = (e) => {
        const selectedData = e.target.value.toString()
        const day = selectedData.substr(8,2)
        const month = selectedData.substr(5,2)
        const year = selectedData.substr(2,2)
        setData({ ...data, date:
            {day: day,
            month: month,
            year: year
        } 
    })}

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
            onChangeDate={dateTrim}
            onChangeComment={e => setData({ ...data, comment: e.target.value })}
            onChangeCategory={e => setData({ ...data, category: e.target.value })}
            />}
            </>
    )
}
