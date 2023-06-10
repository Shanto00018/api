import React from 'react'
import "./Catagory.css";
import headphone from "./../assets/headphone3.jpeg";
import watch from "./../assets/watch2.webp";
import earbuds from "./../assets/earbuds2.webp";
import mouse from "./../assets/mouse.jpeg";

export const Catagory = () => {
  return (
    <div className="catc">
      <div className="catcontainer">
        
          <img className='image' src={headphone} alt="" />
       
        
          <img className='image' src={watch} alt="" />

        
        
          <img className='image' src={earbuds} alt="" />


        
        
          <img className='image' src={mouse} alt="" />


        
      </div>
    </div>
  )
}
export default Catagory;
