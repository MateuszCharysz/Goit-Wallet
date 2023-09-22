import React, {useState} from "react";
import styles from "../ModalAddTransaction/ModalAddTransaction.module.css"
import { GreenButton } from "../Greenbutton/GreenButton";
import { CancelButton } from "../CancelButton/CancelButton";

export const ModalAddTransaction = ({onCancel, onClose, onSubmit, onChangeValue, onChangeDate, onChangeComment, onChangeCategory, onChangeSliderPlus, onChangeSliderMinus}) => {

const [count, setCount] = useState(true)
const handleSlider = (e) => setCount(!count)

if (count==false) {
    return (
<div className={styles.modalWrapper}>
    
        <section className={styles.wrapper}>
            <h2 className={styles.header}>Add transaction</h2>
            <div className={styles.sliderContainer}>
                <span className={styles.greenText}>Income</span>
                    <label className={styles.switch}>
                    <input 
                    type="checkbox"
                    className={styles.checkbox}
                    name="slider"
                    value="+"
                    onChange={onChangeSliderMinus}
                    onClick={handleSlider}/>
                    <span className={styles.slider}></span>
                </label>
                <span className={styles.greyText}>Expense</span>
            </div>
            <section className={styles.modalForm}>
                <form onSubmit={onSubmit}>
                    <div  className={styles.formWrapper}>
                        <input 
                            type="number" 
                            name="number"
                            onChange={onChangeValue}
                            placeholder="0.00"
                            className={styles.formValue}>
                        </input>
                        <input
                            type="date"
                            name="date"
                            onChange={onChangeDate}
                            className={styles.formDate}>
                        </input>
                    </div>
                    <input 
                        type="text"
                        name="comment"
                        onChange={onChangeComment}
                        placeholder="Comment"
                        className={styles.formComment}>
                    </input>
                    <ul className={styles.modalList}>
                        <li><GreenButton name="ADD"/></li>
                        <li><CancelButton name="CANCEL" onClick={onCancel}/></li>
                        <li><button className={styles.closeButton} onClick={onClose}></button></li>
                    </ul>
                </form>
            </section>
        </section>
        <div className={styles.shadow}  onClick={onClose}></div>
        </div>
    )}
    return (
<div className={styles.modalWrapper}>
        <section className={styles.wrapper}>
            <h2 className={styles.header}>Add transaction</h2>
            <div className={styles.sliderContainer}>
                <span className={styles.greyText}>Income</span>
                <label className={styles.switch}>
                    <input 
                    type="checkbox"
                    name="slider"
                    value="-" 
                    className={styles.checkbox}
                    onChange={onChangeSliderPlus}
                    onClick={handleSlider}/>
                    <span className={styles.slider}></span>
                </label>
                <span className={styles.redText}>Expense</span>
            </div>
            <section className={styles.modalForm}>
            <form onSubmit={onSubmit}>
                <label name="addTransForm">
                    <div className={styles.formCategoryContainer}>
                    <select className={styles.formCategory} onChange={onChangeCategory}>
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
                            name="number"
                            onChange={onChangeValue}
                            placeholder="0.00"
                            className={styles.formValue}>
                        </input>
                        <input
                            type="date"
                            name="date"
                            onChange={onChangeDate}
                            className={styles.formDate}>
                        </input>
                    </div>
                    <input 
                        type="text"
                        name="comment"
                        onChange={onChangeComment}
                        placeholder="Comment"
                        className={styles.formComment}>
                    </input>
                    <ul className={styles.modalList}>
                    <li><GreenButton name="ADD"/></li>
                    <li><CancelButton name="CANCEL" onClick={onCancel}/></li>
                    <li><button className={styles.closeButton} onClick={onClose}></button></li>
                    </ul>
                </label></form>
            </section>
        </section>
        <div className={styles.shadow} onClick={onClose}></div>
        </div>
    )};   

