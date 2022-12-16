
import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div id='footer' className='footer'>
      <div className='footer-menu'>
        <div>
          <Link to="/contact">Market</Link>
        </div>
        <div>
          <a href="/items">My Items</a>
        </div>
        <div>
          <a href="/link">Link</a>
        </div>
        <div>
          <a href="">Resources</a>
        </div>
      </div>
      <div>Delorean Codes &#169; 2022</div>
      <div className="third-footer-part">
      <div>
          <a href="/contact">Contact Us</a>
        </div>
        <div>
          <a href="">Get Codes</a>
        </div>
        <div>
          <a href="">Terms</a>
        </div>
        </div>
    </div>
  )
}

export default Footer