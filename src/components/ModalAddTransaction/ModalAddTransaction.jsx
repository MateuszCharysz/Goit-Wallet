import React, {useState} from "react";
import styles from "../ModalAddTransaction/ModalAddTransaction.module.css"


export const ModalAddTransaction = () => {

const [count, setCount] = useState(0)
if (!count) {
    return (
        <section className={styles.wrapper}>
            <h2 className={styles.header}>Add transaction</h2>
            <div className={styles.sliderContainer}>
                <span className={styles.greenText}>Income</span>
                <label className={styles.switch}>
                    <input 
                    type="checkbox" 
                    className={styles.checkbox}
                    onClick={()=>setCount(count+1)}/>
                    <span className={styles.slider}></span>
                </label>
                <span className={styles.greyText}>Expense</span>
            </div>
            <section className={styles.modalForm}>
                <label name="addTransForm">
                    <div  className={styles.formWrapper}>
                        <input 
                        type="number" 
                        placeholder="0.00"
                        className={styles.formValue}></input>
                        <input
                        type="date"
                        className={styles.formDate}></input>
                    </div>
                    <input 
                    type="text" 
                    placeholder="Comment"
                    className={styles.formComment}></input>
                    <ul className={styles.modalList}>
                    <li><button type="submit" className={styles.modalButtonSubmit}>ADD</button></li>
                    <li><button type="reset" className={styles.modalButtonCancel}>CANCEL</button></li>
                    </ul>
                </label>
            </section>
        </section>
    )}
    return (
        <section className={styles.wrapper}>
            <h2 className={styles.header}>Add transaction</h2>
            <div className={styles.sliderContainer}>
                <span className={styles.greyText}>Income</span>
                <label className={styles.switch}>
                    <input 
                    type="checkbox" 
                    className={styles.checkbox}
                    onClick={()=>setCount(count-1)}/>
                    <span className={styles.slider}></span>
                </label>
                <span className={styles.redText}>Expense</span>
            </div>
            <section className={styles.modalForm}>
                <label name="addTransForm">
                    <select className={styles.formCategory}>
                    <option value='' disabled="disabled" selected="selected">Select a category</option>
                    <option value='0'>Main expenses</option>
                    <option value='1'>Products</option>
                    <option value='2'>Car</option>
                    <option value='3'>Self care</option>
                    <option value='4'>Child care</option>
                    <option value='5'>Household products</option>
                    <option value='6'>Education</option>
                    <option value='7'>Leisure</option>
                    <option value='8'>Other expenses</option>

                    </select>
                    <div  className={styles.formWrapper}>
                        <input 
                        type="number" 
                        placeholder="0.00"
                        className={styles.formValue}></input>
                        <input
                        type="date"
                        className={styles.formDate}></input>
                    </div>
                    <input 
                    type="text" 
                    placeholder="Comment"
                    className={styles.formComment}></input>
                    <ul className={styles.modalList}>
                    <li><button type="submit" className={styles.modalButtonSubmit}>ADD</button></li>
                    <li><button type="reset" className={styles.modalButtonCancel}>CANCEL</button></li>
                    </ul>
                </label>
            </section>
        </section>
    )};   

