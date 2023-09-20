import React, {useState} from "react";
import styles from "../ModalAddTransaction/ModalAddTransaction.module.css"
import { GreenButton } from "../Greenbutton/GreenButton";
import { CancelButton } from "../CancelButton/CancelButton";

export const ModalAddTransaction = () => {

const [count, setCount] = useState(1)
if (count==0) {
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
                    <li><GreenButton name="ADD"/></li>
                    <li><CancelButton name="CANCEL"/></li>
                    
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
                    <div className={styles.formCategoryContainer}>
                    <select className={styles.formCategory}>
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
                    </select>
                    </div>
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
                    <li><GreenButton name="ADD"/></li>
                    <li><CancelButton name="CANCEL"/></li>
                    </ul>
                </label>
            </section>
        </section>
    )};   

