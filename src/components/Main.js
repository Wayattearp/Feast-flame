import React, { useState, useReducer } from 'react';
import { Link } from 'react-router-dom';
import BookingForm from '../components/Booking/Form';

function Main() {
    const [date, setDate] = useState('');

    function updateTimes(date) {
        // Implement logic to update availableTimes based on the selected date
        const updatedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
        return updatedTimes;
    }

    function initializeTimes() {
        // Implement logic to initialize availableTimes
        const initialTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
        return initialTimes;
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, '', initializeTimes);


    return (
        <main>
            <Link to="/booking">Reserve a table</Link>
            <BookingForm date={date} dispatch={dispatch} availableTimes={availableTimes} />
        </main>
    );
}

export default Main;
