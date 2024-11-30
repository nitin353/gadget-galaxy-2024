import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Forget = () => {
  const Navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const url='http://localhost:4000/api'
   const handleSubmit = async (e) => {
    e.preventDefault();
    try {;
      const response = await axios.post(`${url}/user/otp`,
        {email});
      setMessage("forgot password:---",response.data.msg);
      Navigate('/change')

    }catch(error){
      setMessage(error.response.data.msg ,'an error occurred');
    }
   }

  return (
    <>

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-4">
            <h2 class="text-center mt-5"><u>Type your email id</u></h2>
           <p class="text-center mt-3">We will send you an email to reset your password.</p>
           <form  onSubmit={handleSubmit} style={{justifyContent:"center", alignItems:"center", display:"grid"}}>
  <div class="mb-3  mt-4 ">
    <label style={{color:"grey"}} for="exampleInputEmail1" class="form-label">Email</label>
    <input value={email}   required onChange={(e) => setEmail(e.target.value)} type="email" style={{width:"600px"}} 
    class="form-control" id="exampleInputEmail1" placeholder='Email' aria-describedby="emailHelp"></input><br></br>
    <button  style={{width:"130px" , color:"#ffc107", backgroundColor:" #050a30"}}class="btn  " type="submit">Submit </button>
    <a href="#" style={{marginLeft:"300px"}} class="link-secondary hov ">Cancel</a>
  </div>
  </form>
  {message && <p>{message}</p>}
  </div>
  </div>
  </div>
    </>
  )
}

export default Forget