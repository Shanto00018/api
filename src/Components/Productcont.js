import React from 'react'
import "./Productcont.css";
import mouse from "./../assets/mouse2.jpeg"

export const Productcont = () => {
  return (
    <div className="card">
        <div className="tumbnail">
            <img className='tumb' src={mouse} alt="" />

        </div>
        <div className="des">
            <h6 className='prod_des'>IMICE V5 RGB USB Wired Gaming Mouse</h6>
            <span className="tag">Price:</span>
            <span className='sign'>$</span>
            <span className='price'> 10.50</span>

        </div>
    </div>
  )
}
export default Productcont;
