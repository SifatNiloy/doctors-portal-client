import React from 'react';

const CheckoutForm = () => {
    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe || !elements}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;