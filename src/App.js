import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Cartevents from "./pages/cartevents/Cartevents";
import EventDetails from "./pages/Eventdetails/Eventsdetails";
import Eventlist from "./pages/Eventlist/Eventlist";
import Filterevent from "./pages/Filterevents/Filterevent";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Navbar/Navbar";

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart(prevCart => [...prevCart, item]);
    };
    useEffect(() => {
        document.title = `Online event management`;
    }, [])
    return ( <
            div >
            <
            Router >
            <
            Navbar cartx = { cart.length }
            addToCart = { addToCart }
            /> <
            Routes >
            <
            Route path = "/"
            element = { < Home / > }
            /> <
            Route path = "/Eventlist"
            element = { < Eventlist / > }
            /> <
            Route path = "/Filterevent"
            element = { < Filterevent / > }
            /> <
            Route path = "/details/:id"
            element = { < EventDetails addToCart = {
                    (addToCart) }
                />} / >
                <
                Route path = "/Cartevents"
                element = { < Cartevents cart = { cart }
                    setCart = { setCart }
                    />} / >
                    <
                    /Routes> <
                    /Router> <
                    Footer / >
                    <
                    /div>

                );
            }

            export default App;