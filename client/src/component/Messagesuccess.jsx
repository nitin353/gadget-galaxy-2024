import React from 'react'

const Messagesuccess = () => {
  return (
    <>
    <div class="container">
    <div class="row justify-content-center">
    <div class="col-md-4"></div>
        <div class="col-md-4">
        <div style={{paddingTop:"60px"}} class="row ">
  <div class="col-sm-6">
    <div  style={{width:"450px"}} class="card">
      <div  class="card-body">
        <img style={{height:'300px'}} src='https://i.pinimg.com/originals/ba/56/00/ba5600e2613495b885f953f41c120d11.gif'></img>
        <h5 style={{width:"400px"}} class="card-title"><h2 class="text-center mt-5">Your Password Is Successfully Change</h2></h5>
        <h5 class="text-center mt-5">Please login Here</h5><br />
        <a href='/login'><button  style={{width:"130px" , color:"#ffc107", backgroundColor:" #050a30", marginLeft:"140px"}}class="btn " type="submit">Login here</button></a>
      </div>
    </div>
  </div>
  </div>
       
   </div>
   <div class="col-md-4"></div>
   </div>
   </div>
    </>


  )
}

export default Messagesuccess