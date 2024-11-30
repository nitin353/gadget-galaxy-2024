import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import axios from 'axios';

const Userorder = () => {
    const { paymentUser } = useContext(AppContext);
    const url = 'http://localhost:4000/api';
    const [token, setToken] = useState('');

    useEffect(() => {
        let lstoken = localStorage.getItem("token");
        console.log("my token id:", lstoken);
        if (lstoken) {
            setToken(lstoken);
        }
    }, []);

    // Function to delete an item from the order
    const deleteItem = async (id) => {
        try {
            console.log("Deleting item with ID:", id);
            const apiResponse = await axios.delete(`${url}/payment/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'auth': `${token}`,
                },
                withCredentials: true
            });
            console.log("Response data:", apiResponse.data);
            // Optionally, reload the page or update state here
            window.location.reload(); // Simple page reload to reflect changes
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    return (
        <>
            <br />
            <center><h1>MY ORDER</h1></center>

            <div className='container'>
                <table style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0' }}>
                    <thead>
                        <tr style={{ backgroundColor: 'black', textAlign: 'left', color: "white" }}>
                            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Order Date</th>
                            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Payment Status</th>
                            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Item Title</th>
                            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Price</th>
                            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Quantity</th>
                            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Image</th>
                            <th style={{ padding: '10px', border: '1px solid #ddd' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentUser?.map((order, index) => (
                            <React.Fragment key={index}>
                                {order?.cartItems?.length > 0 ? (
                                    order.cartItems.map((item, cartIndex) => (
                                        <tr key={cartIndex}>
                                            {/* Display order date and payment status only once for each order */}
                                            {cartIndex === 0 && (
                                                <>
                                                    <td rowSpan={order.cartItems.length} style={{ padding: '10px', border: '1px solid #ddd' }}>
                                                        {order.orderDate}
                                                    </td>
                                                    <td rowSpan={order.cartItems.length} style={{
                                                        padding: '10px',
                                                        border: '1px solid #ddd',
                                                        color: order.payStatus === "cancelled" ? 'red' : 'green'
                                                    }}>
                                                        {order.payStatus}
                                                    </td>
                                                </>
                                            )}

                                            {/* Display cart item details */}
                                            <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.title}</td>
                                            <td style={{ padding: '10px', border: '1px solid #ddd' }}>Rs {item.price}</td>
                                            <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.qty}</td>
                                            <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                                                <img src={item.img} alt={item.title} width="50" height="50" style={{ borderRadius: '5px' }} />
                                            </td>

                                            {/* Cancel Order Button */}
                                            {cartIndex === 0 && (
                                                <td rowSpan={order.cartItems.length} style={{ padding: '10px', border: '1px solid #ddd' }}>
                                                    <button onClick={() => deleteItem(order._id)}>Cancel Order</button>
                                                </td>
                                            )}
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={7} style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'center' }}>
                                            No items in cart.
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Userorder;
