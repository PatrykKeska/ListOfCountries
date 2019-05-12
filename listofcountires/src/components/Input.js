
import React from 'react'
import styles from '../style/input.module.scss';


const Input = (props) => {
    return (
        <div className={styles.wrapper}>
            <h1>Add Guest</h1>

            <form className={styles.form__form} onSubmit={props.handleSubmit} >


                <div className={styles.form__div__item}>
                    <label htmlFor="text"></label>
                    <input onChange={props.handleChange}
                        value={props.name}
                        type="text" name="name" placeholder="Name..." />
                </div>


                <div className={styles.form__div__item}>
                    <label htmlFor="location">
                        <input type="text"
                            name="location"
                            placeholder=" location..."
                            onChange={props.handleChange}
                        />
                    </label>
                </div>


                <div className={styles.form__div_checkbox}>
                    <label>
                        <input
                            name="adult"
                            value={props.adult}
                            onChange={props.handleCheck}
                            type="checkbox"

                        />
                        <span>Adult</span>
                    </label>
                </div>


                <div className={styles.form__div_checkbox}>
                    <label>
                        <input type="checkbox"
                            name="companion"
                            value={props.companion}
                            onChange={props.handleCheck}
                        />
                        <span>With a Companion</span>
                    </label>
                </div>


                <div className={styles.form__div__item}>
                    <label htmlFor="phoneNumber">
                        <input type="number"
                            placeholder="Phone Number..."
                            name="phoneNumber"
                            onChange={props.handleChange}
                        />
                    </label>
                </div>



                <input type="text"
                    name="img"
                    placeholder="Img link"
                    onChange={props.handleChange}
                />


                <div className={styles.form__div_item}>
                    <label>
                        <input type="link"
                            placeholder="link to facebook"
                            name="facebook"
                            onChange={props.handleChange}
                        />
                    </label>
                </div>


                <button className={styles.form__btn} type="submit">Add new Guest</button>

            </form>

        </div>
    )
}


export default Input;