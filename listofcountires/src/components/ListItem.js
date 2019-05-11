
import React from 'react';
import Item from './Item';
import data from '../data/data';


const ListItems = () => {
    return (
        <ul>
            {data.map(item => (
                <Item
                    key={item.name}
                    name={item.name}
                    location={item.location}
                    population={item.population}
                    flag={item.flag}
                />
            ))}
        </ul>
    )
}


export default ListItems