import React, { useContext, useState, useEffect } from 'react'
import AppContext from '../context/AppContext'
import { Link } from 'react-router-dom';
import Foot from './Foot';
import {useRazorpay}  from 'react-razorpay';
import { useNavigate } from 'react-router-dom';


const CheckOut = () => {
  const {userAddress, cart,addToCart,removeFromCart,decreaseQTY} = useContext(AppContext);
  console.log("user address in checkoutpage",userAddress)
  const [p,setp] = useState(0)
  useEffect(()=>{
   
    let p =0;
    if (cart?.items){
      for (let i=0; i < cart.items?.length; i++){
       
        p += cart.items[i].price;
      }
    }
    setp(p);
  
  },[cart]);

//   payemnet wordk start


  
const navigate = useNavigate()  
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
    if (!Razorpay) {
        alert("Razorpay SDk not loaded")
        console.log("Razorpay SDk not loaded")
        return;
    }
    let options = {
        key :"rzp_test_A3RM3Asww6uWvF",
        currency: "INR",
        amount: 50000*100,
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
// end payment


  return (
    <>
    <div className='container'>
        <div className='row pt-5'>
          <div className='col-5'>
          <div className="card text-left " style={{width:"470px",height:"350px" ,marginLeft:"", marginTop:"50px"}}>
          <div data-aos="fade-down"s className="card-body card-mycolors">
            <td >
              <ul>
               <p> Name : {userAddress?.fullName}</p>
               <p> Phone : {userAddress?.phoneNumber}</p>
               <p> Country :{userAddress?.country}</p>
               <p> State : {userAddress?.state}</p>
                <p>PinCode : {userAddress?.pincode}</p>
               <p> City : {userAddress?.city}</p>
               <p> Near BY :{userAddress?.address}</p>
              </ul>
            </td>
          </div>
          </div>
          </div>
          
          
          <div className='col-7'>
          <table data-aos="fade-down" class="table caption-top" >
  <caption>Products Details</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product Img</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">QTY</th>
      <th scope="col">QTY++</th>
      <th scope="col">QTY--</th>
      <th scope="col">Remove</th>
    </tr>
  </thead>
  <tbody data-aos="zoom-in-left">
            {cart?.items?.map((i, index) =>(
         
    <tr  key={i._id}>
      <th scope="row" > {index + 1}</th>
      <td><img style={{height:"60px", textAlign:"center"}} src={i.img}></img></td>
      <td>{i.title}</td>
      <td>Rs {i.price}</td>
      <td>{i.qty}</td>
      <td> <i onClick={() => addToCart(i.productId,i.title,i.price,1,i.image)} class="bi bi-plus-circle">  </i></td>
      <td>      <i class="bi bi-dash-circle"  onClick={()=>decreaseQTY(i?.productId,1)}> </i></td>
      <td>   <i class="bi bi-trash3"  onClick={() =>{
          if (confirm("Are you sure, you want remove from cart")){
            removeFromCart(i?.productId)
          }
        }}>  {""}</i></td>
    </tr>
    
 
  ) )}
   </tbody>
   </table>
    </div>

    </div><br />
    <Link style={{color:"green"}} to={`/upi/${p}`}><button  style={{width:"180px" , color:"#ffc107", backgroundColor:" #050a30"}}class="btn " type="submit">Pay Now  Using UPI</button></Link> <br /> <br />
    <button  style={{width:"220px" , color:"#ffc107", backgroundColor:" #050a30"}}class="btn "   onClick={handlePayment} type="submit">Pay Now  Using Razor Pay </button> <br /> <br />
    
    </div>
    <Foot/>
    </>
  )
}

export default CheckOut;