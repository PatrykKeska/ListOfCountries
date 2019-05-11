
import React from 'react'
import '../style/input.css';


const Input = (props) => {
    return (
        <div className="input--div--wrapper">
            <h1>Add Country</h1>

            <form className="input--form" onSubmit={props.handleFnc} >
                <input type="text" placeholder="country name..." />
                <input type="text" placeholder="location " />
                <input type="number" placeholder="population in milions " />
                <input type="text" placeholder="Img link" />
                <button className="input--form-button" type="submit">Add new Country</button>
            </form>

        </div>
    )
}


export default Input;