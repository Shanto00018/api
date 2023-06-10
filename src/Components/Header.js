import React from 'react'
import Cart from './Cart';
import "./Header.css";
import { useState } from 'react';
import Search from './Search';


export const Header = () => {
  const [showcart,setshowcart]=useState(false);
  const[showsearch,setshowsearch]=useState(false);
  return (
    <>
    <nav className="nav">
        <div className="container">
           <h1 className="title">E-SHOP</h1>
            <ul className='menulist'>
                <li className='link'>Home</li>
                <li className='link'>About</li>
                <li className='link'>Catagory</li>
            </ul>
            <ul className='iconlist'>
                <li className='link'><i class="fa-solid fa-magnifying-glass" onClick={()=>setshowsearch(true)}></i></li>
                <li className='link'><i class="fa-regular fa-heart"></i></li>
                <li className='link'><i class="fa-solid fa-cart-shopping" onClick={()=>setshowcart(true)}>
                    <div className="cartnumber">
                        5
                        </div></i></li>
            </ul>
        </div>
    </nav>
    {showcart && <Cart setshowcart={setshowcart}/>}
    {showsearch && <Search setshowsearch={setshowsearch}/>}
    </>
  )
}
export default Header;
