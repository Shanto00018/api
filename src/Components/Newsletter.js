import React from 'react'
import"./Newsletter.css"

export const Newsletter = () => {
  return (
    <div className="newcontainer">
        <div className="lettercontainer">
            <h6 className='smallheader'>NEWSLETTER</h6>
            <h3 className="biggertitle">Signup for latestupdates and offers</h3>
            <input className='form' type="text" placeholder=' Email Address' />
            <button className='subscribe_button'>Subscribe</button>
            <p className='followmessage'>Also can follow us</p>
            <ul className='media'>
                <li className="icon"><i class="fa-brands fa-facebook-f"></i></li>
                <li className="icon"><i class="fa-brands fa-twitter"></i></li>
                <li className="icon"><i class="fa-brands fa-instagram"></i></li>
            </ul>
        </div>
    </div>
  )
}
export default Newsletter;
