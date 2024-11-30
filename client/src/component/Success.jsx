import React from 'react'
import Rating from './Rating'
const Success = () => {
  return (
    <>

<div className='container'>
        <div className='row pt-'>
        <div className='col-4'></div>
          <div style={{paddingTop:"70px"}} className='col-4 '>
           <center> <img style={{height:"200px"}} src='https://i.gifer.com/origin/41/41340ab1a4529c7dd753f03268087e08_w200.gif'></img></center>
          <div className="card text-left " style={{width:"470px",height:"80px" ,marginLeft:"", marginTop:"10px"}}>
          <div style={{backgroundColor:"lightgreen"}} data-aos="fade-down"s className="card-body ">
<center><p style={{fontSize:"20px"}}>

    Payment is Success
</p> </center>


            </div>
            </div><br></br>
            <a href="/" style={{marginLeft:"180px"}} class="link-secondary hov "><center>Back TO Home</center></a>

            </div>
            <div className='col-4'></div>
            </div>
            </div>
            <br></br><br />
            <Rating/>



    </>
    
  )
}

export default Success