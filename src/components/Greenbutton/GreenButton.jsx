import styles from "../Greenbutton/GreenButton.module.css"
export const GreenButton = ({name}) => {

    return (
        <button type="submit" className={styles.modalButtonSubmit}>{name}</button>
    )
}