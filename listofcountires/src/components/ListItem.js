
import React from 'react';
import Item from './Item';
// import data from '../data/data';
import "../style/ListItems.css"



const ListItems = ({ initialData }) => {
    return (
        <>
            <h1 className="ListItems--h1">List of guests to the invitation</h1>
            <ul className="ListItems--ul">
                {initialData.map(item => (
                    <Item
                        key={item.phoneNumber}
                        name={item.name}
                        location={item.location}
                        adult={item.adult}
                        companion={item.companion}
                        phoneNumber={item.phoneNumber}
                        fbPhoto={item.fbPhoto}
                        fbLink={item.fbLink}
                    />
                ))}
            </ul>
        </>
    )
}


export default ListItems