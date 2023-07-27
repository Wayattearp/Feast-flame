import React from 'react';

const ConfirmedBooking = () => {
    return (
        <div className="confirmed-container">
            <div className="confirmed">
                <div className="confirmation-symbol">✓</div>
                <h2>Your reservation has been confirmed.</h2>
                <p>You will receive an email with all the details.</p>
            </div>
        </div>
    );
};

export default ConfirmedBooking;
