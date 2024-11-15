import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { useAuth } from './AuthContext.jsx';

const Header = () => {
    const location = useLocation();
    const { user, logout } = useAuth();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        document.body.classList.toggle("sidebar-open", !isSidebarOpen);
    };

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)){
            setIsSidebarOpen(false);
            document.body.classList.remove("sidebar-open");
        }
    };
    
    useEffect(()=>{
        if (isSidebarOpen){
            document.addEventListener("click",handleClickOutside);
        }
        else{
            document.removeEventListener("click",handleClickOutside);
        }
        return () => document.removeEventListener("click",handleClickOutside);
    },[isSidebarOpen])

    return (
        <>
            <div className="menu-toggle" onClick={toggleSidebar} ref={sidebarRef}>
                <FaIcons.FaBars />
            </div>

            <header className={`headerC ${isSidebarOpen ? "open" : ""}`}>
                <nav>
                    <ul type="none" className='left-nav'>
                        <li><Link to="/" className={`headerIh ${location.pathname === "/" ? "active" : ""}`} onClick={toggleSidebar}><FaIcons.FaHome size={33}/></Link></li>
                        <li><Link to="/about" className={`headerI ${location.pathname === "/about" ? "active" : ""}`} onClick={toggleSidebar}><FaIcons.FaInfoCircle size={20}/>&nbsp;About</Link></li>
                        <li><Link to="/guide" className={`headerI ${location.pathname === "/guide" ? "active" : ""}`} onClick={toggleSidebar}><FaIcons.FaBook size={20}/>&nbsp;Guide</Link></li>
                        <li><Link to="/disorders" className={`headerI ${location.pathname === "/disorders" ? "active" : ""}`} onClick={toggleSidebar}><FaIcons.FaMedkit size={20}/>&nbsp;Disorders</Link></li>
                        <li><Link to="/booking" className={`headerI ${location.pathname === "/booking" ? "active" : ""}`} onClick={toggleSidebar}><FaIcons.FaConnectdevelop size={25}/>&nbsp;Connect</Link></li>
                    </ul>

                    <ul>
                        {user ? (
                            <>
                                <li><span className="headerI">{user.name}</span></li>
                                <li><button onClick={() => { logout(); toggleSidebar(); }} className="headerI" style={{cursor: "pointer", backgroundColor: "black", border: "none", color: "white"}}>Logout</button></li>
                            </>
                        ) : (
                            <li><Link to="/login" className={`headerI ${location.pathname === "/login" ? "active" : ""}`} onClick={toggleSidebar}><FaIcons.FaUserAlt size={20}/>&nbsp;Login/Register</Link></li>
                        )}
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
