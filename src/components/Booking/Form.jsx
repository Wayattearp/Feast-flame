import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Form() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(2);
    const [occasion, setOccasion] = useState('');
    const [availableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
    const navigate = useNavigate();

    useEffect(() => {
        // Get the current date in the format "YYYY-MM-DD"
        const currentDate = new Date().toISOString().split('T')[0];
        setDate(currentDate);
    }, []); // Run this effect only once on component mount

    const isFormValid = () => {
        // Implement additional validation rules here
        if (guests < 1 || guests > 10) {
            return false;
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        if (isFormValid()) {
            navigate('/confirmed');
        } else {
            alert('Please fill in all required fields with valid data.');
        }
    };


    return (
        <form className="reservation-form" onSubmit={handleSubmit}>
            <label htmlFor="res-date">Date:</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required // This attribute makes the field required
                min={new Date().toISOString().split('T')[0]} // Minimum date is today
            />

            <label htmlFor="res-time">Time:</label>
            <select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required // This attribute makes the field required
            >
                {/* Populate options from the availableTimes state */}
                {availableTimes.map((time) => (
                    <option key={time}>{time}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests:</label>
            <input
                type="number"
                placeholder="2"
                min="1"
                max="10"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                required // This attribute makes the field required
            />

            <label htmlFor="occasion">Occasion:</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required // This attribute makes the field required
            >
                <option value="">Select an occasion</option> {/* Add an empty option to force selection */}
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <input
                className="reserve-button"
                type="submit"
                value="Make Your reservation"
                disabled={!isFormValid()} // Disable the button if the form is not valid
                aria-label="On Click"
            />
        </form>
    );
}

export default Form;
