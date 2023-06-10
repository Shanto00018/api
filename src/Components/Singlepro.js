import React from 'react'
import "./Singlepro.css";
import product from "./../assets/product.jpeg"
import Product from './Product';
import { Relatedproducts } from './Relatedproducts';

export const Singlepro = () => {
    return (
        <div className='Singlepro'>
            <div className="singleprocontainer">

                <div className="upperportion">
                    <div className="imagecontainers">
                        <img className='productimage' src={product} alt="" />
                    </div>
                    <div className="productdes">
                        <h2 className="prodtitle">Smart Watch</h2>
                        <h4 className='prodprice'>$ 140.00</h4>
                        <p className="prodp">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ullam deleniti ipsum perferendis quaerat. Nostrum culpa eaque magnam aperiam recusandae, illum necessitatibus laboriosam illo nihil, quidem quisquam debitis excepturi quam.</p>
                        <div className="cartsystem">
                            <button className='b'>-</button>
                            <input className='b' type="text" />
                            <button className="b">+</button>
                            <button className="addtocart"><i class="fa-solid fa-cart-shopping" />ADD TO CART</button>
                        </div>
                        <div className="extrades">
                            <div className="part1">
                                <span className="extracat">Catagory : <span className="extracatdes">Watch</span></span>
                                <span className="extracat">Share with

                                    <span className="ic"><i class="fa-brands fa-facebook-f"></i></span>
                                    <span className="ic"><i class="fa-brands fa-instagram"></i></span>
                                    <span className="ic"><i class="fa-brands fa-twitter"></i></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="related">
                    <Relatedproducts/>
                </div>
            
        </div>
    )
}
export default Singlepro;