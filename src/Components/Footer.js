import React from 'react'
import "./Footer.css";

export const Footer = () => {
  return (

    <div className="footer">
      <div className="maincontaint">
        <div className="section">
          <h3 className='sectiontitle'>About</h3>
          <p className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto porro in soluta exercitationem aliquam doloremque, recusandae veniam voluptatem perspiciatis ratione</p>
        </div>
        <div className="section">
          <h3 className="sectiontitle">Contact</h3>
          <ul className='list'>
            <li className='details'><i class="fa-solid fa-paper-plane"></i><p className="d">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, dignissimos</p></li>
            <li className='details'><i class="fa-solid fa-mobile-screen-button"></i><p className="d">Mobile:**********</p></li>
            <li className='details'><i class="fa-solid fa-envelope"></i><p className="d">Email : something@gmail.com</p></li>
          </ul>
        </div>
        <div className="section">
          <h3 className="sectiontitle">Category</h3>
          <ul className='list'>
            <li className='details'>Headphones</li>
            <li className='details'>Wireless speaker</li>
            <li className='details'>Mouse</li>
            <li className='details'>Smart Watch</li>
            <li className='details'>Earbuds</li>
          </ul>
        </div>
        <div className="section">
          <h3 className="sectiontitle">Pages</h3>
          <ul className='list'>
            <li className='details'>Home</li>
            <li className='details'>Terms & Conditions</li>
            <li className='details'>Returns</li>
            <li className='details'>Privacy Policy</li>
            <li className='details'>About us</li>
          </ul>
        </div>
      </div>
      <div className="copyrightcontainer">
        <div className="copyright">
          Created by Shanto&copy; 2023 all right reserved
        </div>
      </div>
    </div>






  )
}
export default Footer;
