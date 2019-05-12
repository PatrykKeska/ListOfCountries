
import React from 'react'
import styles from '../style/input.module.scss';


const Input = (props) => {
    return (
        <div className={styles.wrapper}>
            <h1>Add Country</h1>

            <form className={styles.form__form} onSubmit={props.handleFnc} >
                <input type="text" placeholder="country name..." />
                <input type="text" placeholder="location " />
                <input type="number" placeholder="population in milions " />
                <input type="text" placeholder="Img link" />
                <button className={styles.form__btn} type="submit">Add new Country</button>
            </form>

        </div>
    )
}


export default Input;