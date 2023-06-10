import React from 'react'
import "./Cart.css";
import { useState } from 'react';
import Cartitem from './Cartitem';


export const Cart = ({ setshowcart }) => {

  return (
    <div className='cart'>
      <div className="opacity">

      </div>
      <div className="cartcontent">
        <div className="carthead">
          <h4 className="cartTitle">Shopping cart</h4>
          <button onClick={() => setshowcart(false)} className='cros'><i class="fa-solid fa-close" /> Close</button>
        </div>
        {/* <div className="cartbody">
          <div className="cartic"><i className='cartic' class="fa-solid fa-cart-shopping"></i></div>
          <span className="cartdescription">
            No product in the cart
          </span>
          <button className="return">
            Return to shop
          </button>

        </div> */}
        <>
        <Cartitem/>

        <div className="cartfooter">
          <div className="subtotal">
            <span className='total'>Subtotal: </span>
            <span className="prices">$ 1234</span>
          </div>
          <div className="checkbutton">
            <button className="check">Check out</button>
          </div>

        </div>
        </>
      </div>
    </div>
  )
}
export default Cart;