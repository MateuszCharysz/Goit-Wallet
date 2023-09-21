import React, {useState, useForm} from "react";
import styles from "../ModalEditTransaction/ModalEditTransaction.module.css"
import { GreenButton } from "../Greenbutton/GreenButton";
import { CancelButton } from "../CancelButton/CancelButton";

 export const ModalEditTransaction = ({onSubmit, onCancel, onClose, type}) => {


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
            <form onSubmit={onSubmit}>
                <section className={styles.modalForm}>
                    <label name="addTransForm">
                        <div  className={styles.formWrapper}>
                            <input 
                            // {...register("sum")}
                            type="number"
                            // name="sum" 
                            placeholder="0.00"
                            required
                            className={styles.formValue}></input>
                            <input
                            type="date"
                            // {...register("date")}
                            name="date"
                            className={styles.formDate}></input>
                        </div>
                        <input 
                        type="text" 
                        placeholder="Comment"
                        // {...register("comment")}
                        name="comment"
                        className={styles.formComment}></input>
                        <ul className={styles.modalList}>
                        <li><GreenButton name="SAVE"/></li>
                        <li><CancelButton name="CANCEL" onClick={onCancel}/></li>
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
            <form onSubmit={onSubmit}>
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
                    <li><GreenButton name="SAVE"/></li>
                    <li><CancelButton name="CANCEL" onClick={onCancel}/></li>
                    <li><button className={styles.closeButton} onClick={onClose}></button></li>
                    </ul>
                </label>
            </section></form>
        </section>
        <div className={styles.shadow}  onClick={onClose}></div>
        </div>
    )};   
