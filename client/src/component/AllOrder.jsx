import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const AllOrder = () => {
  const { paymentUserData } = useContext(AppContext);

  console.log("paymentUserData=====", paymentUserData);

  return (
    <>
      <div className="container">
        <table className="table  table-striped" style={{ marginTop: "50px" }}>
          <thead className="thead-light">
            <tr style={{ backgroundColor:"black", color: 'white' }}>
              <th style={{ backgroundColor:"black", color: 'white' }}>Name</th>
              <th style={{ backgroundColor:"black", color: 'white' }}>Address</th>
              <th style={{ backgroundColor:"black", color: 'white' }}>Country</th>
              <th style={{ backgroundColor:"black", color: 'white' }}>State</th>
              <th style={{ backgroundColor:"black", color: 'white' }}>PinCode</th>
              <th style={{ backgroundColor:"black", color: 'white' }}>City</th>
              <th style={{ backgroundColor:"black", color: 'white' }}>Phone</th>
              <th style={{ backgroundColor:"black", color: 'white' }}>Title</th>
              <th style={{ backgroundColor:"black", color: 'white' }}>Total Amount</th>
              <th style={{ backgroundColor:"black", color: 'white' }}>Product Price</th>
              <th style={{ backgroundColor:"black", color: 'white' }}>Product ID</th>
              <th style={{ backgroundColor:"black", color: 'white' }}>Quantity</th>
              
              <th style={{ backgroundColor:"black", color: 'white' }}>Payment Status</th>
              <th style={{ backgroundColor:"black", color: 'white' }}>Images</th>
            </tr>
          </thead>
          <tbody>
            {paymentUserData?.map((userData, index) => (
              // Render user data and cart items in the same table
              userData?.cartItems?.map((cartItem, cartIndex) => (
                <tr key={`${index}-${cartIndex}`} style={{ backgroundColor: cartIndex % 2 === 0 ? '#f9f9f9' : '#e9ecef' }}>
                  {/* Render user address */}
                  {cartIndex === 0 && (
                    <>
                      <td rowSpan={userData?.cartItems?.length}>
                        {userData?.userAddress?.fullName}
                      </td>
                      <td rowSpan={userData?.cartItems?.length}>
                        {userData?.userAddress?.address}
                      </td>
                      <td rowSpan={userData?.cartItems?.length}>
                        {userData?.userAddress?.country}
                      </td>
                      <td rowSpan={userData?.cartItems?.length}>
                        {userData?.userAddress?.state}
                      </td>
                      <td rowSpan={userData?.cartItems?.length}>
                        {userData?.userAddress?.pincode}
                      </td>
                      <td rowSpan={userData?.cartItems?.length}>
                        {userData?.userAddress?.city}
                      </td>
                      <td rowSpan={userData?.cartItems?.length}>
                        {userData?.userAddress?.phoneNumber}
                      </td>
                    </>
                  )}

                  {/* Render cart item details */}
                  <td>{cartItem?.title}</td>
                  <td>{userData?.amount}</td>
                  
                  <td>{cartItem?.price}</td>
                  <td>{cartItem?.productId}</td>
                  <td>{cartItem?.qty}</td>
                  <td>{userData?.payStatus}</td>
                  <td><img style={{height:"50px", width:"50px", borderRadius: "5px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"}} src={cartItem?.img} alt="" /></td>
                </tr>
              ))
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllOrder;
