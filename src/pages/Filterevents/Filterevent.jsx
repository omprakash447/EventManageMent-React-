import React, { useState } from 'react';
import data from '../../data/Data';
import "./Filterevent.css";

function Filterevent() {
    const [search, setSearch] = useState('');
    const [filteredEvents, setFilteredEvents] = useState([]);

    const handleChange = (e) => {
        const query = e.target.value.toLowerCase();
        setSearch(query);

        if (query.trim() !== '') {
            const filtered = data.filter(event =>
                event.name.toLowerCase().includes(query)
            );
            setFilteredEvents(filtered);
        } else {
            setFilteredEvents([]);
        }
    };

    return (
        <div className="filter">
            <div className="inputs">
                <input 
                    type="text" 
                    placeholder="Search here..." 
                    value={search}
                    onChange={handleChange} 
                />
                <button>Search</button>
            </div>

            <div className="event-list">
                {filteredEvents.length > 0 ? (
                    filteredEvents.map((event, index) => (
                        <div key={index} className="event-item">
                            <h3>{event.name}</h3>
                            <p>{event.description}</p>
                            <img src={event.img} alt={event.name} />
                        </div>
                    ))
                ) : (
                    search && <p>No events found</p>
                )}
            </div>
        </div>
    );
}

export default Filterevent;
