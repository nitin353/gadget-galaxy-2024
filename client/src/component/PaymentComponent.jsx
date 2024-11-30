
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {useRazorpay}  from 'react-razorpay';
import { useNavigate } from 'react-router-dom';


const PaymentComponent = () => {
      

    useEffect(() => {
        const {p} =useParams()
        const Razorpay = useRazorpay();
    const paymentHandler = (response) =>{
console.log(response)
        let {Razorpay_payment_id} = response;
console.log(Razorpay_payment_id)
        if (Razorpay_payment_id === ""){

navigate('/fail')
            alert("payment failed");
console.log("payment failed")
        }else{
            
            navigate('/success')
            console.log(getValues())

        }
    };
    const  handlePayment =() => {
        console.log("function call")
        if (!Razorpay) {
            alert("Razorpay SDk not loaded")
            console.log("Razorpay SDk not loaded")
            return;
        }
        let options = {
            key :"rzp_test_A3RM3Asww6uWvF",
            currency: "INR",
            amount: 0,
            name: "Razorpay Demo" ,
            description: "Testing Payment Gateway" ,
            handler: paymentHandler,
            prefill: {
                name:"Gadget Galaxy",
                email:"gadgetgalaxy3010@gmail.com",
                contact:"7986377050"
            },
            theme: {
                color:"#F46432",
            },
        }
            const razorpayInstance = new window.Razorpay(options);
            razorpayInstance.open();
        }
        handlePayment()
    }, []);  
  return (
    <div>PaymentComponent</div>
  )
}

export default PaymentComponent