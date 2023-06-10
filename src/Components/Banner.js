import React from 'react'
import"./Banner.css"
import BannerImg from"../assets/bannerimg.png";
export const Banner = () => {
  return (
    <div className="bannercontainer">
        <div className="maincontainer">
            <div className="description">
                <h1 className="heading">
                       SALE
                </h1>
                <p className="paragraph">
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, quis minima a debitis doloremque maxime, dignissimos saepe quod autem voluptatum fuga explicabo fugit labore magnam eius recusandae deleniti corporis itaque.
                </p>
                <button className='button'>Read More</button>
                <button className='button v2'>Shop Now</button>



            </div>
           
                <img src={BannerImg} alt="" className="banner" />

            
        </div>

    </div>
  )
}
export default Banner;
