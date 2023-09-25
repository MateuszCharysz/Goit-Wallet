import React, {useEffect, useState} from "react";
import styles from "../SelectStatisticsMenu/SelectStatisticsMenu.module.css"
import { nanoid } from "nanoid";

export const SelectStatisticsMenu = ({ placeholder, onClick, type }) => {
    const dane = type
    const fakeFetchData = () => {
        const months = [
            {'data': 'January'},
            {'data': 'February'},
            {'data': 'March'},
            {'data': 'April'},
            {'data': 'May'},
            {'data': 'June'},
            {'data': 'July'},
            {'data': 'August'},
            {'data': 'September'},
            {'data': 'October'},
            {'data': 'November'},
            {'data': 'December'}]
        const years = [
            {'data': '2023'},
            {'data': '2022'},
            {'data': '2021'},
            {'data': '2020'}]

    if (dane=='month') {
        const data = months
        return data
    } else if (dane=='year') {
        const data = years
        return data
    } else {
       const data = [];
        return data
    }
    }

const data = (fakeFetchData())
    const [modal, setModal] = useState(false)
    const [name, setName] = useState(`${placeholder}`)

    const toogleModal = () => {
        setModal(!modal)
    }
    const changeName = (e) => {
        const newName = e.innerText
        setName(newName)
        setModal(!modal)
        // onClick(newName)
        return newName
    }
    // useEffect(()=>{console.log('dokonano zmiany')}),[name]


    return (
        <>
        
        <div className={styles.wrapper}>
            <div onClick={toogleModal} className={styles.selectBtn}>
                <span>{name}</span>
            </div>
        {modal&&
            <div className={styles.optionsContainer}>
                <ul className={styles.options}>
                {data.map(({data})=>{
                    return(
                    <li key={nanoid()} 
                    onClick={(e)=>changeName(e.target)} 
                    className={styles.option}>
                        <span>
                            {data}
                        </span>
                    </li>
                )})}
                </ul>
            </div>
        }
        </div>
        {modal&&<div className={styles.backdrop} onClick={toogleModal}></div>}
        </>
    )
}

