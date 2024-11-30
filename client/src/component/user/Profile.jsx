import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'

const Profile = () => {
  const {user, paymentUserData} =useContext(AppContext)
  console.log("user:-  ",user)
  console.log("paymentUserData ----", paymentUserData)
  return (
    <>
    <div className='container'>
        <div className='row pt-5'>
            <div className='col-4'></div>
            <div   className='col-4  '>
                <h1 style={{textAlign:"center"}}>  Welcome {user?.name}</h1>
                <p style={{textAlign:"center", paddingTop:"10px"}}>  Welcome  {user?.email}</p>
               {paymentUserData?.orderDate}<br></br>
              <img style={{height:"350px", width:"350px"}} src='https://cdni.iconscout.com/illustration/free/thumb/free-empty-cart-illustration-download-in-svg-png-gif-file-formats--is-explore-box-states-pack-design-development-illustrations-3385483.png?f=webp'></img>
             <a href='/userorder'> <button  style={{width:"130px" , color:"#ffc107", backgroundColor:" #050a30", marginLeft:"100px"}}class="btn " type="submit">MY ORDERS </button></a>
            </div>
            <div className='col-4'></div>

        </div>
    </div>
   
    </>
  )
}

export default Profile