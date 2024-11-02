import React, { useState } from 'react';
import { useAuth } from './Common/AuthContext';
import { useNavigate } from 'react-router-dom'; 
import './CSS/Login.css';
const Login = () => {
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
            <form onSubmit={handleSubmit} className='loginform' style={{marginTop: "8rem",rowGap: "3rem"}}>
                <input
                    type="text"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <button type="submit" className='login'>{isRegister ? 'Register' : 'Login'}</button>
            </form>
            <button onClick={() => setIsRegister(!isRegister)} className='login2'>
                {isRegister ? 'Already have an account? Login' : 'New user? Register'}
            </button>
          </div>
        </div>
    );
};

export default Login;
