import React from 'react'

const Failed = () => {
  return (
    <>  

    <div className='container'>
            <div className='row pt-5'>
            <div className='col-4'></div>
              <div style={{paddingTop:"70px"}} className='col-4 '>
               <center> <img style={{height:"200px"}} src='https://i0.wp.com/nrifuture.com/wp-content/uploads/2022/05/comp_3.gif?fit=800%2C600&ssl=1'></img></center>
              
              <div class="alert alert-danger" role="alert">
 <center> <p>Payment is Failed</p></center> 
</div>
                
                <a href="/" style={{marginLeft:"180px"}} class="link-secondary hove ">Back TO Home</a>
                </div><br></br>
                </div>
                <div className='col-4'></div>
                </div>
                
        </>
    
  )
}

export default Failed