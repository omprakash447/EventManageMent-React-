import React, { useEffect, useState } from 'react';
import "./Cartevents.css";

function Cartevents({cart , setCart }) {
    const [price, setprice] = useState(0);

    const handelprice = () => {
        let initialprice = 0;
        cart.forEach((item) => {
            initialprice += item.price;
        });
        setprice(initialprice);
    };

    useEffect(() => {
        handelprice();
    }, [cart]); // Runs whenever 'cart' changes

    const handleRemove = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
    };

    return (
        <div className="cartpage">
            {cart.map((item) => (
                <div key={item.id} className="cart-item">
                    <img src={item.img} alt={item.name} />
                    <p>{item.name}</p>
                    <p>Price: {item.price}</p>
                    <button onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
            ))}
            <p>Total Price: {price}</p>
        </div>
    );
}

export default Cartevents;
