import React,{ useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Button = (props) => {
  return (
    <button onClick={props.onClick} className={`button ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
