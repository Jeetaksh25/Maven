import React, { useState, useEffect } from 'react';
import { useAuth } from './Common/AuthContext';
import { useNavigate } from 'react-router-dom'; 
import './CSS/Login.css';
const Login = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const [isRegister, setIsRegister] = useState(false);
    const [username, setUsername] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();  

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username); 
        navigate('/'); 
    };

    return (
        <div className='container'>
          <div className='login-container'>
            <h2 className='title'>{isRegister ? 'Register' : 'Login'}</h2>
            <form onSubmit={handleSubmit} className='loginform' style={{marginTop: "3rem",rowGap: "2rem"}}>
                <input
                    type="text"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input type="email" placeholder="Enter Email" />
                <input type="password" placeholder="Enter Password" />
                <button type="submit" className='login'>{isRegister ? 'Register' : 'Login'}</button>
                <button onClick={() => setIsRegister(!isRegister)} className='login'>
                    {isRegister ? 'Already have an account? Login' : 'New user? Register'}
                </button>
            </form>

          </div>
        </div>
    );
};

export default Login;
