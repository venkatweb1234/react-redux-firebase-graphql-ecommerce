import React from "react";
import "./payment.style.scss";
import PaymentDetails from "../../PaymentDetails/paymentDetails.comp";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { publishableKey } from "../../Stripe/config";

const stripePromise = loadStripe(publishableKey);


const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentDetails />
    </Elements>
  );
};

export default Payment;
