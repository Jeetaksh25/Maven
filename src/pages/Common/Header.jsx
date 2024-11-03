import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { useAuth } from './AuthContext.jsx';

const Header = () => {
    const location = useLocation();
    const { user, logout } = useAuth();

    return (
        <header className='headerC'>
            <nav>
                <ul type="none" className='left-nav'>
                    <li><Link to="/" className={`headerIh ${location.pathname === "/" ? "active" : ""}`}><FaIcons.FaHome size={33}/></Link></li>
                    <li><Link to="/about" className={`headerI ${location.pathname === "/about" ? "active" : ""}`}><FaIcons.FaInfoCircle size={20}/>&nbsp;About</Link></li>
                    <li><Link to="/guide" className={`headerI ${location.pathname === "/guide" ? "active" : ""}`}><FaIcons.FaBook size={20}/>&nbsp;Guide</Link></li>
                    <li><Link to="/disorders" className={`headerI ${location.pathname === "/disorders" ? "active" : ""}`}><FaIcons.FaMedkit size={20}/>&nbsp;Disorders</Link></li>
                    <li><Link to="/booking" className={`headerI ${location.pathname === "/booking" ? "active" : ""}`}><FaIcons.FaConnectdevelop size={25}/>&nbsp;Connect</Link></li>
                </ul>

                <ul>
                    {user ? (
                        <>
                            <li><span className="headerI">{user.name}</span></li>
                            <li><button onClick={logout} className="headerI" style={{cursor: "pointer", backgroundColor: "black", border: "none", color: "white"}}>Logout</button></li>
                        </>
                    ) : (
                        <li><Link to="/login" className={`headerI ${location.pathname === "/login" ? "active" : ""}`}><FaIcons.FaUserAlt size={20}/>&nbsp;Login/Register</Link></li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
