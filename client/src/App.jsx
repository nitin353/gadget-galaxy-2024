import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import {Routes, Route, useLocation} from 'react-router-dom'
//import './App.css'
//import Foot from './component/Foot'
import Contactus from './component/Contactus'
import Login from './component/user/Login'
import Register from './component/user/Register'
import Navbar from './component/Navbar'
import SearchProduct from './component/product/SearchProduct'
import ShowProduct from './component/product/ShowProduct'
import ProductDetail from './component/product/ProductDetail'
import AddProduct from './component/product/AddProduct'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import AdminShowProduct from './component/AdminShowProduct'
import Editproduct from './component/Editproduct'
import Adminlogin from './component/Adminlogin'
import Profile from './component/user/Profile'
import Cart from './component/Cart'
import Address from './component/Address'
import Checkout from './component/Checkout'
import Aboutus from './component/Aboutus'
import Faqs from './component/Faqs'
import Forget from './component/Forget'
import Changepassword from './component/Changepassword'
import Success from './component/Success'
import Failed from './component/Failed'
import Upiqr from './component/Upiqr'

import Privacy from './component/Privacy'
import Terms from './component/Terms'
import Returnpolicy from './component/Returnpolicy'
import Messagesuccess from './component/Messagesuccess'
import PaymentComponent from './component/PaymentComponent'
import AllOrder from './component/AllOrder'
import Userorder from './component/Userorder'
import Rating from './component/Rating'
import Thankyou from './component/Thankyou'
//import Navbar from './component/Navbar'
const restrictedPaths = ['/Admin', '/editproduct/:id','/adminlogin', '/addproduct'];

function App() {
  
const location=useLocation();
  return (
    <>
    {location.pathname !== `/restrictedPaths` &&<Navbar/>}
  
    {/* <Navbar/> */}
    { <ToastContainer/> }
    
   <Routes>
    
      <Route path='/login' element={<Login/>}/>
      
      <Route path='/userorder' element={<Userorder/>}/>
      <Route path='/pay/:p' element={<PaymentComponent/>}/>
      <Route path='/return' element={<Returnpolicy/>}/>
      <Route path='/rating' element={<Rating/>}/>
      <Route path='/thanks' element={<Thankyou/>}/>
      <Route path='/order' element={<AllOrder/>}/>
      <Route path='/success' element={<Success/>}/>
      <Route path='/fail' element={<Failed/>}/>
      <Route path='/faqs' element={<Faqs/>}/>
      <Route path='/Messagesuccess' element={<Messagesuccess/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/address' element={<Address/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/term' element={<Terms/>}/>
      <Route path='/profile' element={<Profile/>}/>
     <Route path='/adminlogin' element={<Adminlogin/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Contactus' element={<Contactus/>}/>
      <Route path='/Admin' element={<AdminShowProduct/>}/>
      <Route path='/forget' element={<Forget/>}/>
      <Route path='/privacy' element={<Privacy/>}/>
      <Route path='/upi/:p' element={<Upiqr/>}/>
      <Route path='/change' element={<Changepassword/>}/>
      <Route path='/editproduct/:id' element={<Editproduct/>}/>
      
      <Route path='/product/search/:term' element={<SearchProduct />}/>
      <Route path='/' element={<ShowProduct />}/>
      <Route path='/addproduct' element={<AddProduct />}/>
      <Route path='/Product/:id' element={<ProductDetail/>}/>
    </Routes>
   
    </>
  )
}


export default App
