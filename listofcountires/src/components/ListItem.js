
import React from 'react';
import Item from './Item';
// import data from '../data/data';
import "../style/ListItems.css"



const ListItems = ({ initialData }) => {
    return (
        <>
            <h1 className="ListItems--h1">List of Countries</h1>
            <ul className="ListItems--ul">
                {initialData.map(item => (
                    <Item
                        key={item.name}
                        name={item.name}
                        location={item.location}
                        population={item.population}
                        flag={item.flag}
                    />
                ))}
            </ul>
        </>
    )
}


export default ListItems