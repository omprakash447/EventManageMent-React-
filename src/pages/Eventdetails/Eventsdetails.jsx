import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import RegistrationForm from '../Registration/Registration';
import "./Eventdetails.css";

function EventDetails({ addToCart }) {
    const location = useLocation();
    const { item } = location.state;

    const [showForm, setShowForm] = useState(false);

    const handleBookNow = () => {
        setShowForm(true);
    };

    const closeForm = () => {
        setShowForm(false);
    };

    return (
        <>
            <div className={`eventdetails ${showForm ? 'blurred' : ''}`} style={{ marginTop: "50px" }}>
                <h2>{item.name}</h2>
                <img src={item.img} alt={item.name} />
                <div className="para">
                    <p>Price: {item.price}</p>
                    <p>Category: {item.category}</p>
                    <p>Description: {item.description}</p>
                </div>
                <button onClick={handleBookNow}>Book Now</button>
                <hr />
            </div>
            {showForm &&
                <RegistrationForm
                    closeForm={closeForm}
                    addToCart={addToCart}
                    item={item}
                />
            }
        </>
    );
}

export default EventDetails;
