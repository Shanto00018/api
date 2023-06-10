import React from 'react'
import "./Search.css"
import product from "./../assets/watch2.webp";

export const Search = ({setshowsearch}) => {
  return (
    <div className="search">
        <div className="search-container">
            <div className="search-header">
               <input className='searchbar' type="text" 
               autoFocus
               placeholder='SEARCH PRODUCT'
               />
            </div>
            <div className="cross">
            <i class="fa-solid fa-close" onClick={()=>setshowsearch(false)}/> 
            </div>
            

           
        </div>
        <div className="relatedsearchcontainer">
            <div className="relatedsearch">
                <img className='searchprodimg' src={product} alt="" />
                <div className='searchprod'>
                    <span className="searchprodtitle">
                       Smart Watch
                    </span>
                    <span className='searchproddes'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, odio!
                    </span>
                </div>
            </div>
        </div>
    </div>

  )
}
export default Search;
