import React, { useContext, useState, useEffect } from 'react';
import AppContext from '../context/AppContext';
import { Link, useNavigate } from 'react-router-dom';
import Foot from './Foot';
import { useRazorpay } from 'react-razorpay';

const CheckOut = () => {
  const { userAddress, cart, addToCart, removeFromCart, decreaseQTY, savePaymentDetails, ClearCart } = useContext(AppContext);
  const [p, setP] = useState(0);
  const Razorpay = useRazorpay();
  const navigate = useNavigate();

  // Calculate total price
  useEffect(() => {
    let total = 0;
    if (cart?.items) {
      cart.items.forEach((item) => {
        total += item.price * item.qty;
      });
    }
    setP(total);
  }, [cart]);

  // Handle payment
  const paymentHandler = async (response) => {
    const { razorpay_payment_id } = response;
    console.log("razorpay_payment_id:- ", razorpay_payment_id)
    // console.log("razorpay_order_id:- ", razorpay_order_id)
    // console.log("razorpay_signature:- ", razorpay_signature)
    if (!razorpay_payment_id) {
      alert("Payment failed");
      navigate('/fail');
      return;
    }

    const generateDummyOrderId = () => {
      const timestamp = Date.now(); // Current timestamp in milliseconds
      const randomNum = Math.floor(Math.random() * 100000); // Random number between 0-99999
      return `order_${timestamp}_${randomNum}`;
    };
    // Save payment details to the backend
    const paymentData = {
      paymentId: razorpay_payment_id,
      orderId: generateDummyOrderId(),
      // orderId: razorpay_order_id,
      // signature: razorpay_signature,
      amount: p,
      cartItems: cart.items,
      userAddress,
      payStatus: "Success",
    };

    const result = await savePaymentDetails(paymentData);

    if (result.success) {
      console.log("Payment successful!"); 
      ClearCart()
      navigate('/success');
    } else {
      alert("Failed to save payment details. Please contact support.");
      navigate('/fail');
    }
  };

  const handlePayment = () => {
    if (!Razorpay) {
      alert("Razorpay SDK not loaded");
      return;
    }

    const options = {
      key: "rzp_test_A3RM3Asww6uWvF", // Replace with your Razorpay key
      amount: `${p}`* 100, // Convert to smallest currency unit
      currency: "INR",
      name: "Gadget Galaxy",
      description: "Testing Payment Gateway",
      handler: paymentHandler,
      prefill: {
        name: userAddress?.fullName || "Guest",
        email: "gadgetgalaxy3010@gmail.com",
        contact: userAddress?.phoneNumber || "9999999999",
      },
      theme: {
        color: "#F46432",
      },
    };

    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.open();
  };

  return (
    <>
      <div className="container">
        <div className="row pt-5">
          <div className="col-5">
            <div className="card" style={{ width: "470px", height: "350px", marginTop: "50px" }}>
              <div className="card-body">
                <ul>
                  <li>Name: {userAddress?.fullName}</li>
                  <li>Phone: {userAddress?.phoneNumber}</li>
                  <li>Country: {userAddress?.country}</li>
                  <li>State: {userAddress?.state}</li>
                  <li>PinCode: {userAddress?.pincode}</li>
                  <li>City: {userAddress?.city}</li>
                  <li>Address: {userAddress?.address}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-7">
            <table className="table caption-top">
              <caption>Products Details</caption>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Img</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>QTY</th>
                  <th>QTY++</th>
                  <th>QTY--</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart?.items?.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td><img style={{ height: "60px" }} src={item.img} alt={item.title} /></td>
                    <td>{item.title}</td>
                    <td>Rs {item.price}</td>
                    <td>{item.qty}</td>
                    <td>
                      <i onClick={() => addToCart(item.productId, item.title, item.price, 1, item.image)} className="bi bi-plus-circle"></i>
                    </td>
                    <td>
                      <i onClick={() => decreaseQTY(item?.productId, 1)} className="bi bi-dash-circle"></i>
                    </td>
                    <td>
                      <i onClick={() => { if (window.confirm("Are you sure you want to remove this item?")) removeFromCart(item?.productId) }} className="bi bi-trash3"></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <br />
        <Link style={{color:"green"}} to={`/upi/${p}`}><button  style={{width:"180px" , color:"#ffc107", backgroundColor:" #050a30"}}class="btn " type="submit">Pay Now  Using UPI</button></Link> <br /> <br />
        <button style={{ width: "220px", color: "#ffc107", backgroundColor: "#050a30" }} className="btn" onClick={handlePayment}>Pay Now Using Razorpay</button>
      </div>
      <Foot />
    </>
  );
};

export default CheckOut;