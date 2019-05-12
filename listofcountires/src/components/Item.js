import React from 'react';
import styles from '../style/Item.module.scss'
import PropTypes from 'prop-types';

const Item = ({ name, adult, companion, location, phoneNumber, fbPhoto, fbLink }) => {


    return (
        <li className={styles.item__li}>
            <img className={styles.item__img} src={fbPhoto} alt={name} />

            <div className={styles.item__div__wrapper}>
                <h1 className={styles.item__div__h1}>Name : {name}</h1>
                <h2 className={styles.item__div__h2}>Location : {location}</h2>
                <h2 className={styles.item__div__h2}>Adult : {adult ? "Yes" : "No"}</h2>
                <h2 className={styles.item__div__h2}>with a companion : {companion ? "Yes" : "No"}</h2>
                <h2 className={styles.item__div__h2}>phone number : {phoneNumber}</h2>
                <a href={fbLink} target="_blank" rel="noopener noreferrer"> Facebook Profile</a>

            </div>
        </li>
    )

}

// Item.propTypes = {
//     name: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,

// }

Item.defaultProps = {
    fbPhoto: 'https://cdn0.iconfinder.com/data/icons/avatar-2/500/man-2-512.png'
}


export default Item; 