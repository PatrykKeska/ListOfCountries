import React from 'react';
import "../style/Item.css"
import PropTypes from 'prop-types';

const Item = ({ name, location, population, flag }) => {


    return (
        <li className="item--li">
            <img className="item--img " src={flag} alt={name} />

            <div className="item--div-wrapper">
                <h1 className="item--div--h1">Country : {name}</h1>
                <h2 className="item--div--h2">Location : {location}</h2>
                <h2 className="item--div--h2">population : {population}</h2>

            </div>
        </li>
    )

}

Item.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
}



export default Item; 