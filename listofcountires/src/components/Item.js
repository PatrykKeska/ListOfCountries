import React from 'react';

const Item = ({ name, location, population, flag }) => {


    return (
        <li className="item--li">
            <img className="item--img " src={flag} alt={name} />

            <div className="item--div-wrapper">
                <h1>Country : {name}</h1>
                <h2>Location : {location}</h2>
                <h2>population : {population}</h2>

            </div>
        </li>
    )

}



export default Item; 