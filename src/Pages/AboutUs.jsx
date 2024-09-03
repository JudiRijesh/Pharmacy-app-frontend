import React from 'react'
import img_aboutus from '../assets/img_aboutus.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'

import { Link } from 'react-router-dom'

function AboutUs() {
  return (
    <div className="about-us-container">
      
      <h4 className="section-title">About Us: More Than Just a Pharmacy</h4>
      <p>
        Welcome to MAD Pharmacy, where we're more than just a pharmacy – we're your trusted partner in health and wellness.
      </p>
      <div className="image-container">
          <img src={img_aboutus} alt="pills" className="aboutus-image"/>
       </div>

      <h5 className="subsection-title">Who We Are:</h5>
      <p>
        MAD Pharmacy is proud to be a subsidiary of Care Hospitals, a well-respected pharmacy chain in Holland. As the largest and first-ever Omni-Channel Pharmacy network in Europe, we operate over 5,500 outlets strategically positioned across the country. Our extensive delivery service reaches over 19,000+ pin codes, making essential medicines accessible to everyone, no matter where they are in Holland.
      </p>
      
      <h5 className="subsection-title">Our Commitment to Quality:</h5>
      <p>
        Accredited with an International Quality Certification, MAD Pharmacy is dedicated to delivering authentic and affordable medication, 24/7. Whether you visit one of our 24-hour pharmacies or use our home delivery service, we’re here to ensure your convenience and peace of mind. Our customer care team is always ready to assist, day or night.
      </p>
      
      <h5 className="subsection-title">Experience and Expertise:</h5>
      <p>
        With over two decades of experience in pharmacy operations management, we’ve honed our processes to offer the highest level of service. Our shelves are stocked with a comprehensive selection of medicines, over-the-counter (OTC) products, and fast-moving consumer goods (FMCG). Our qualified and experienced staff are always on hand to meet your needs.
      </p>
      
      <h5 className="subsection-title">MAD Pharmacy Online:</h5>
      <p>
        At MAD Pharmacy, we understand the importance of convenience. That’s why we’ve created <a href="https://mad-medicineatyourdoorstep.netlify.app">MADPharmacy.nl</a>, your one-stop online destination for health and wellness products. With over 70,000 items across various categories – from vitamins and supplements to baby care, personal care, and health foods – we've got you covered. We also offer 400+ exclusive Apollo Branded products, including vitamins, health foods, oral care, and skincare items.
      </p>
      
      <p>
        Thank you for trusting MAD Pharmacy. We're here for you, every step of the way, providing the care and convenience you deserve.
      </p>

      <footer className="footer-home">
        <div className="footer-contenthome">
          <div className="footer-left">
            <h5>About MAD Pharmacy</h5>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/book-lab-tests">Book Lab Tests at Home</Link></li>
              <li><Link to="/categories">Product Categories</Link></li>
            </ul>
          </div>
          <div className="footer-right">
            <h6>Find us on</h6>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" className="imagehp" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" className="imagehp" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" className="imagehp" />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default AboutUs