import React, {useState, useForm} from "react";
import styles from "../ModalEditTransaction/ModalEditTransaction.module.css"
import { GreenButton } from "../Greenbutton/GreenButton";
import { CancelButton } from "../CancelButton/CancelButton";
import { SelectMenuModal } from "../SelectMenuModal/SelectMenuModal";

 export const ModalEditTransaction = ({type, onClose, id}) => {

    const [modal, setModal] = useState(false)
    const [data, setData] = useState()

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

    const submitModal = () => {
        setModal(!modal)
        console.log('Dane do przesłania do bazy danych w celu edycji Transakcji')
        console.log(data)
        onClose()
    }
    const sendCategory = (data) => {onChangeCategory(data)}
if (type=='+') {
    return (
        <div className={styles.modalWrapper}>
        <section className={styles.wrapper}>
            <h2 className={styles.header}>Edit transaction</h2>
            <div className={styles.sliderContainer}>
                <span className={styles.greenText}>Income</span>
                <span className={styles.greyText}>/</span>
                <span className={styles.greyText}>Expense</span>
            </div>
            <form onSubmit={submitModal}>
                <section className={styles.modalForm}>
                    <label name="addTransForm">
                        <div  className={styles.formWrapper}>
                            <input 
                            type="number"
                            name="sum" 
                            onChange={e=>setData({...data, sum: e.target.value, id:id})}
                            placeholder="0.00"
                            required
                            className={styles.formValue}></input>
                            <input
                            type="date"
                            name="date"
                            onChange={dateTrim}
                            className={styles.formDate}></input>
                        </div>
                        <input 
                        type="text" 
                        placeholder="Comment"
                        name="comment"
                        onChange={e=>setData({...data, comment: e.target.value})}
                        className={styles.formComment}></input>
                        <ul className={styles.modalList}>
                        <li><GreenButton name="SAVE"/></li>
                        <li><CancelButton name="CANCEL" onClick={onClose}/></li>
                        <li><button className={styles.closeButton} onClick={onClose}></button></li>
                        </ul>
                    </label>
                </section>
            </form>
        </section>
        <div className={styles.shadow}  onClick={onClose}></div>
        </div>
    )}
    return (
        <div className={styles.modalWrapper}>
            <section className={styles.wrapper}>
                <h2 className={styles.header}>Edit transaction</h2>
                <div className={styles.sliderContainer}>
                    <span className={styles.greyText}>Income</span>
                    <span className={styles.greyText}>/</span>
                    <span className={styles.redText}>Expense</span>
                </div>
            <section className={styles.modalForm}>
            <form onSubmit={submitModal}>
                    <SelectMenuModal onClick={e => setData({ ...data, category: e })} placeholder={'Select a category'}/>
                        <label name="addTransForm">
                    <div className={styles.formCategoryContainer}>
                    {/* <select className={styles.formCategory}
                    name="category"
                    onChange={e=>setData({...data, category: e.target.value})}>
                    <option value='' disabled="disabled" selected="selected" hidden>Select a category</option>
                    <option value='Main expenses'>Main expenses</option>
                    <option value='Products'>Products</option>
                    <option value='Car'>Car</option>
                    <option value='Self care'>Self care</option>
                    <option value='Child care'>Child care</option>
                    <option value='Household products'>Household products</option>
                    <option value='Education'>Education</option>
                    <option value='Leisure'>Leisure</option>
                    <option value='Other expenses'>Other expenses</option>
                </select> */}
                    </div>
                    <div  className={styles.formWrapper}>
                        <input 
                        type="number"
                        placeholder="0.00"
                        name="sum" 
                        onChange={e=>setData({...data, sum: e.target.value, id:id})}
                        className={styles.formValue}></input>
                        <input
                        type="date"
                        name="date"
                        onChange={dateTrim}
                        className={styles.formDate}></input>
                    </div>
                    <input 
                    type="text" 
                    placeholder="Comment"
                    name="comment"
                    onChange={e=>setData({...data, comment: e.target.value})}
                    className={styles.formComment}></input>
                    <ul className={styles.modalList}>
                    <li><GreenButton name="SAVE"/></li>
                    <li><CancelButton name="CANCEL" onClick={onClose}/></li>
                    <li><button className={styles.closeButton} onClick={onClose}></button></li>
                    </ul>
                </label>
            </form></section>
        </section>
        <div className={styles.shadow}  onClick={onClose}></div>
        </div>
    )};   
