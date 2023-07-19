import React, { useState } from 'react';

function Form(props) {
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');

    function handleDateChange(e) {
        const selectedDate = e.target.value;
        props.dispatch(selectedDate);
    }

    return (
        <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={props.date} onChange={handleDateChange} />

            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                {/* Populate options from the availableTimes state */}
                {props.availableTimes.map((time) => (
                    <option key={time}>{time}</option>
                ))}
            </select>

            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
            />

            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <input type="submit" value="Make Your reservation" />
        </form>
    );
}

export default Form;
