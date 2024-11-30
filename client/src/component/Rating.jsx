import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Rating = () => {
  // Correct state management for rating and hover states
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const navigate = useNavigate();

  // Function to handle the rating click and navigate
  const handleClick = (index) => {
    setRating(index + 1);  // Update the rating
    navigate('/thanks');         // Navigate after setting the rating
  };

  // Array to represent 5 stars
  let arr = new Array(5).fill(0);

  return (
    <>
     <center><h1 style={{ fontSize: "37px", color: "black", textAlign: '' }}> Rated Us</h1></center> 
      <div className='container1'>
        <br /><br />
        {arr.map((cur_val, index) => {
          return (
            <span
              style={{ fontSize: "60px", cursor: 'pointer' }}
              key={index}
              onClick={() => handleClick(index)}  // Call the handleClick function
              onMouseEnter={() => setHover(index + 1)}
              onMouseLeave={() => setHover(0)}
              className={index < rating || index < hover ? "colored" : "uncolored"}
            >
              &#9733;
            </span>
          );
        })}
      </div>
    </>
  );
};

export default Rating;
