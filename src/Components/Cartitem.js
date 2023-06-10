import React from 'react'
import "./Cartitem.css";
import product from "./../assets/product.jpeg"

export const Cartitem = () => {
  return (
    <div className="cartproducts">
        <div className="cartproduct">
            <div className="im">
                 <img className='ig' src={product} alt="" />
            </div>
            <div className="cartprodes">
                <span className='cartprodesname'>
                    prodectname:
                </span>
                <div className="bus">
                <button className='b'>-</button>
                <input className='b' type="text" />
                <button className="b">+</button>
                </div>
            </div>
            <div className="pricing">
                <span>3</span>
                <span>X</span>
                <span>$ 1234</span>
            </div>
        </div>
    </div>
  )
}
export default Cartitem;