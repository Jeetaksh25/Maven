import React from 'react';
import { logoFacebook, logoTwitter, logoLinkedin, logoInstagram } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import { Link } from 'react-router-dom'; 

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social-icon">
          <li className="social-icon__item">
            <a className="social-icon__link" href="https://www.facebook.com/batman/" target='_blanck'>
              <IonIcon icon={logoFacebook} />
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="https://x.com/batman" target='_blanck'>
              <IonIcon icon={logoTwitter} />
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="https://www.linkedin.com/in/jeetaksh-luhaniwal-797843222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blanck'>
              <IonIcon icon={logoLinkedin} />
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="https://www.instagram.com/jeetaksh2506/profilecard/?igsh=MW9ndmNnYnVuMzd5YQ==" target='_blanck'>
              <IonIcon icon={logoInstagram} />
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li className="menu__item">
            <Link to="/" className="menu__link">Home</Link>
          </li>
          <li className="menu__item">
            <Link to="/about" className="menu__link">About</Link>
          </li>
          <li className="menu__item">
            <Link to="/guide" className="menu__link">Guide</Link>
          </li>
          <li className="menu__item">
            <Link to="/disorders" className="menu__link">Disorders</Link>
          </li>
          <li className="menu__item">
            <Link to="/booking" className="menu__link">Connect</Link>
          </li>
          <li className="menu__item">
            <Link to="/login" className="menu__link">Login</Link>
          </li>
          <li className="menu__item">
            <Link to="/login" className="menu__link">Register</Link>
          </li>
        </ul>
        <p>&copy;2023 Maven | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Footer;
