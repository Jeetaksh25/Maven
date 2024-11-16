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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const [passIcon, setPassIcon] = useState("🙈");
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isRegister) {
            console.log('Registering...', { username, email, password });
        } else {
            login(username);
            navigate('/'); 
        }
    };

    function handlePassPeek(e) {
        e.preventDefault(); 
        setPasswordVisible(!passwordVisible);
        setPassIcon(passwordVisible ? "🙈" : "🫣"); 
    }

    return (
        <div className='container'>
            <div className='login-container'>
                <h2 className='title'>{isRegister ? 'Register' : 'Login'}</h2>
                <form onSubmit={handleSubmit} className='loginform' style={{ marginTop: "3rem", rowGap: "2rem" }}>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {isRegister && (
                        <>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                required
                            />
                        </>
                    )}
                    <div style={{ display: "flex", justifyContent: "space-between" }} className='pass'>
                        <input type={passwordVisible ? "text" : "password"} placeholder="Enter Password" className='passwordInput' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        <button onClick={handlePassPeek} className='passwordButton'>{passIcon}</button>
                    </div>
                    <button type="submit" className='login'>{isRegister ? 'Register' : 'Login'}</button>
                    <button
                        type="button"
                        onClick={() => setIsRegister(!isRegister)}
                        className='login'
                    >
                        {isRegister ? 'Already have an account? Login' : 'New user? Register'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
