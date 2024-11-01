import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

const Header = () => {

  const location = useLocation();

  return (
    <div className='headerC'>
        <nav>
            <ul type="none" className='left-nav'>
                <li><Link to="/" className={`headerIh ${location.pathname === "/" ? "active" : ""}`}><FaIcons.FaHome size={33}/></Link></li>
                <li><Link to="/about" className={`headerI ${location.pathname === "/about" ? "active" : ""}`}><FaIcons.FaInfoCircle size={20}/>&nbsp;About</Link></li>
                <li><Link to="/guide" className={`headerI ${location.pathname === "/guide" ? "active" : ""}`}><FaIcons.FaBook size={20}/>&nbsp;Guide</Link></li>
                <li><Link to="/disorders" className={`headerI ${location.pathname === "/disorders" ? "active" : ""}`}><FaIcons.FaMedkit size={20}/>&nbsp;Disorders</Link></li>
                <li><Link to="/booking" className={`headerI ${location.pathname === "/booking" ? "active" : ""}`}><FaIcons.FaConnectdevelop size={25}/>&nbsp;Connect</Link></li>
            </ul>

            <ul>
                <li><Link to="/login" className={`headerI ${location.pathname === "/login" ? "active" : ""}`}><FaIcons.FaUserAlt size={20}/>&nbsp;Login</Link></li>
                <li><Link to="/register" className={`headerI ${location.pathname === "/register" ? "active" : ""}`}><FaIcons.FaUserPlus size={25}/>&nbsp;Register</Link></li>
            </ul>
        </nav>
      
    </div>
  );
}

export default Header;
