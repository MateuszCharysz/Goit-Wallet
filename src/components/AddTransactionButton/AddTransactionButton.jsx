import React, {useState} from "react"
import styles from "../AddTransactionButton/AddTransactionButton.module.css"
import { ModalAddTransaction } from "../ModalAddTransaction/ModalAddTransaction"
import { getDay, getMonth, getDefYear } from "../../services/DateFunctions"
const dbURL = "https://cosmic-answer-399520.lm.r.appspot.com/api/mockTransactions/?month=&year="
export const AddTransactionButton = (props) => {

const [modal, setModal] = useState(false)
const [data, setData] = useState()


const dataFetch = async () => {
    const results = await (await fetch(dbURL)).json();
    const data = results.data
    setData(data);
    console.log('dane wczytane')
};

const dateTrim = (e) => {
    const selectedData = e.target.value.toString()
    const day = selectedData.substr(8,2)
    const month = selectedData.substr(5,2)
    const year = selectedData.substr(0,4)
    setData({ ...data, date:
        {day: day,
        month: month,
        year: year
    } 
})}

const openModal = () => {
    setData({
        type:'-',
        category:'Other expenses', 
        date:{
            day: getDay(),
            month: getMonth(),
            year: getDefYear()
        }})
    setModal(true)
}

const closeModal = (e) => {
    e.preventDefault()
    setData({})
    setModal(false)
}

const sliderTypePlus = () => setData({...data, type:'+', category:'Income'})
const sliderTypeMinus = () => setData({...data, type:'-'})

const submitModal = async (e) => {
    e.preventDefault()
    setModal(!modal)
    console.log('Dane przeslane do bazy danych')
    console.log(JSON.stringify(data))
    
    await fetch('https://cosmic-answer-399520.lm.r.appspot.com/api/mockTransactions/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(json => setData(json.data))
        console.log(data)
        dataFetch();
        console.log('dane przeladowane')
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
            onChangeDate={dateTrim}
            onChangeComment={e => setData({ ...data, comment: e.target.value })}
            onChangeCategory={e => setData({ ...data, category: e })}
            />}
            </>
    )
}
