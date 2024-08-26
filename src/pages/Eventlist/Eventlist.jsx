import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../../data/Data';
import "./Eventlist.css";

function Eventlist() {
    const [events, setEvents] = useState(data);
    const navigate = useNavigate();

    const filterItem = (category) => {
        const filteredData = data.filter((item) => item.catagori === category);
        setEvents(filteredData);
    }

    const handleDealClick = (item) => {
        navigate(`/details/${item.id}`, { state: { item } });
    }

    return (
        <div className="eventlist">
            <div className="sidebar">
                <p style={{textAlign:"center"}}>See with variety</p>
                <ul style={{marginTop:"50px"}}>
                <li onClick={() => setEvents(data)}>All</li> 
                    <li onClick={() => filterItem("marridge")}>Marriage</li>
                    <li onClick={() => filterItem("birthday")}>Birthday</li>
                    <li onClick={() => filterItem("aniversary")}>Anniversary</li>{/* Example to reset the filter */}
                </ul>
            </div>
            <div className="fetch">
                {events.map((item, index) => (
                    <div className="items" key={index}>
                        <img src={item.img} alt={item.name} />
                        <h5>Available for: {item.name}</h5>
                        <p>Price: {item.price}</p>
                        <p>Category: {item.catagori}</p>
                        <p>Description : {item.description}</p>
                        <button onClick={() => handleDealClick(item)}>Deal</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Eventlist;
