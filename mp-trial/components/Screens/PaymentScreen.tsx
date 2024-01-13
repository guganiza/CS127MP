'use client'

import Navbar2 from './Navbar2'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import '../../app/css/PaymentScreen/styles.css';

const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState('Cash');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCVV] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleFinishPayment = async () => {
    try { // CHANGE STATUS AND SAVE DETAILS!!!!!!!!!!!!!!!
      const response = await fetch('http://your-backend-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethod,
          cardNumber,
          cvv,
          expirationDate,
        }),
      });

      if (response.ok) {
        console.log('Payment successful');
        // You can add logic here for additional actions after successful payment
      } else {
        console.error('Payment failed');
        // Handle error scenarios, such as showing an error message to the user
      }
    } catch (error) {
      console.error('Error during payment:', error);
      // Handle network or other errors
    }
  };

  return (
    <div className='payment'>
      <Navbar2 userRole={'frontdesk'} />
      <label htmlFor="paymentMethod">Payment Method:</label>
      <select id="paymentMethod" value={paymentMethod} onChange={handlePaymentMethodChange}>
        <option value="Cash">Cash</option>
        <option value="Card">Card</option>
      </select>

      {paymentMethod === 'Card' && (
        <div>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />

          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCVV(e.target.value)}
          />

          <label htmlFor="expirationDate">Expiration Date:</label>
          <input
            type="text"
            id="expirationDate"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
          />
        </div>
      )}

      <button onClick={handleFinishPayment}>Finish Payment</button>
    </div>
  );
};

export default PaymentScreen