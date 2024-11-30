import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Upiqr from 'upiqr'
const Upi_payment = () => {
    
    const {p} =useParams()
    const [imgData, setimagData] = useState("")
    useEffect(() => {
    const a1 =()=>{
        Upiqr({
            payeeVPA:"nitinnanda1290@oksbi",
            payeeName:" Nitin Nanda",
            amount:`${p}`,
            currency:"INR",
            transactionNote:"Payment for services"
        })
        .then((upi)=>{
            console.log(upi.qr);
            console.log(upi.intent);
            setimagData(upi.qr)
        })
        .catch(err =>{
            console.log(err)
        })
    }
    a1();
}, []);
  return (
    <>
    <div className='container'> 
        <div className='row justify-content-center'>
        <div className='col-4'></div>
        <div className='col-4'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQkHNRQj89cAP1RrrlUSfezirOARmxtsIbwg&s'></img>
        <img style={{height:"250px"}} src={imgData}/></div>
        <div className='col-4'></div>
        </div>
    </div>
    </>
  )
}

export default Upi_payment