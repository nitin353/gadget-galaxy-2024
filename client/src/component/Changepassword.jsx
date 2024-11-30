import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Changepassword = () => {
 const [email, setEmail] = useState('')
 const [otpCode, setOtpCode] = useState('');
 const [newPassword, setNewPassword] =useState('');
 const [message, setMessage] = useState('');
 const navigate = useNavigate()
 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("yes");
      const response = await axios.post('http://localhost:4000/api/user/change', {
          email,
          otpCode,
          password: newPassword
      });
      setMessage(response.data.msg);
      if(response.data.success){
        navigate('/Messagesuccess');
      }
    
      
      console.log("change response:", response);
      console.log("change response data:", response.data);
  
      // Check if the response indicates success
      if (response.data && response.data.status === 'success') {
          console.log('Password changed successfully');
          // Redirect or update UI as needed
           navigate('/Messagesuccess');
      } else {
          console.log('Password change failed or status is still pending');
      }
      
  } catch (error) {
      setMessage(error.response?.data?.msg ||"An error occurred:");
  }
  
   }
  return (
    <>

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-4">
            <h2 class="text-center mt-5"><u>Reset your password</u></h2>
           <p class="text-center mt-3">We will send you an email to reset your password.</p>
           <form  onSubmit={handleSubmit} style={{justifyContent:"center", alignItems:"center", display:"grid"}}>
  <div class="mb-3  mt-4 ">
    <label style={{color:"grey"}} for="exampleInputEmail1" class="form-label">Email</label>
    <input  value={email}  onChange={(e) => setEmail(e.target.value)} type="email" style={{width:"600px"}} class="form-control"  required id="exampleInputEmail1" placeholder='Email' aria-describedby="emailHelp"></input><br></br>
    <label style={{color:"grey"}} for="exampleInputEmail1" class="form-label">Please Enter Your Otp</label>
    <input  value={otpCode}  onChange={(e) => setOtpCode(e.target.value)} type="number" style={{width:"600px"}} required class="form-control" id="exampleInputEmail1" placeholder='otp' aria-describedby="emailHelp"></input><br></br>
    <label style={{color:"grey"}} for="exampleInputEmail1" class="form-label">Change Password</label>
    <input  value={newPassword}  onChange={(e) => setNewPassword(e.target.value)} type="password" style={{width:"600px"}} class="form-control" id="exampleInputEmail1" placeholder='password' required aria-describedby="emailHelp"></input><br></br>
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

export default Changepassword