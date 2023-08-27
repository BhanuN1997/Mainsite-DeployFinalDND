// pages/index.js
import React from 'react';
import { useRouter } from 'next/router';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Stripe from 'stripe';


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_TEST);



const PaymentPage = () => {
  const handleTokenSt = async (event:any) => {
    event.preventDefault();
    const stripe1 = await stripePromise;
    //price_1NjZiDSASpRfuplR2VLKiGpx -- test
    //price_1Nj3CCSASpRfuplRN5LEqyAk -- live
    const { error } = await stripe1!.redirectToCheckout({
      lineItems: [{ price: "price_1NjZiDSASpRfuplR2VLKiGpx", quantity: 1 }],
      mode: 'payment',
      successUrl: 'http://localhost:3000/',
      cancelUrl: 'http://localhost:3000/',
    });

    if (error) {
      console.error(error);
    }

    
  };

  const handleTokenPr = async (event:any) => {
    event.preventDefault();
    console.log("rgnu3oqrgib")
    const stripe2 = await stripePromise;
    //price_1NjZkTSASpRfuplR2cgEbHUc --- testing
    //price_1Nj3DVSASpRfuplRKGsN8Uqr --- production
    const { error } = await stripe2!.redirectToCheckout({
      lineItems: [{ price: "price_1NjZkTSASpRfuplR2cgEbHUc", quantity: 1 }],
      mode: 'payment',
      successUrl: 'http://localhost:3000/',
      cancelUrl: 'http://localhost:3000/',
    });

    if (error) {
      console.error(error);
    }

    
  };

  return (
    <div>
      <h1>Choose a Plan</h1>
      <div>
        <div>
          <h2>Standard</h2>
          <p>Rupees 1/month</p>
          <button onClick={handleTokenSt}>Select</button>
        </div>
        <div>
          <h2>Premium</h2>
          <p>Rupees 2/month</p>
          <button onClick={handleTokenPr}>Select</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
