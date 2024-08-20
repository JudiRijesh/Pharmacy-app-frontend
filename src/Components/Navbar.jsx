import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'


function Navbar() {
    return (
      <div className="navbar-container">
        <img src={logo} alt="Home" className="logo" />
        <nav className="navbar">
          <h3><Link to="/">Home</Link></h3>
          <h3><Link to="/medicines">Medicines</Link></h3>
          <h3><Link to="/wellness">Wellness</Link></h3>
          <h3><Link to="/healthCare">HealthCare</Link></h3>
          <h3><Link to="/labtest">Lab-Test</Link></h3>
          <h3><Link to="/appointments">Appointments</Link></h3>
          <button className='cart-button'><Link to="/Cart"> Cart</Link></button>
        </nav>
      </div>
    );
  }
  
  export default Navbar;