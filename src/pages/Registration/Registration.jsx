import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../../Database';
import "./Registration.css";

function RegistrationForm({ closeForm, addToCart, item }){
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
        contactNumber: '',
        messages: ''
    });
    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Add form data to Firestore
            await addDoc(collection(db, "registrations"), {
                ...formData,
                timestamp: new Date()
            });
            console.log('Form submitted:', formData);
            setShowPopup(true); // Show the thank you popup
            setTimeout(() => {
                closeForm(); // Hide the form after 3 seconds
                addToCart(item); // Add the item to the cart
            }, 3000); // 3 seconds delay for the popup to be visible
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    return (
        <div className="registration-form">
            <h3 style={{textAlign:"center"}}>Fill the form first</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    Address:
                    <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                </label>
                <label>
                    Email ID:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    Contact Number:
                    <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
                </label>
                <label>
                    Messages:
                    <textarea name="messages" value={formData.messages} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <p>Thank you for submitting!</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RegistrationForm;
