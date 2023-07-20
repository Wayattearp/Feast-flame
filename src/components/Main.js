import React, { useState, useReducer } from 'react';
import { Link } from 'react-router-dom';
import BookingForm from './Booking/BookingForm';

export function updateTimes(date) {
    // Implement logic to update availableTimes based on the selected date
    const updatedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    return updatedTimes;
}

export function initializeTimes() {
    // Implement logic to initialize availableTimes
    const initialTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    return initialTimes;
}
function Main() {
    const [date, setDate] = useState('');

    const [availableTimes, dispatch] = useReducer(updateTimes, '', initializeTimes);


    return (
        <main>
            <Link to="/booking">Reserve a table</Link>
            <BookingForm
                date={date}
                dispatch={dispatch}
                availableTimes={availableTimes}
                aria-label="Booking Form"
            />
        </main>
    );
}

export default Main;
