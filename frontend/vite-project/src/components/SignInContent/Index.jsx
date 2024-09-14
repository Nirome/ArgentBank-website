import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToken, fetchUserProfile } from '../../Auth/authSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'; 


const SignInContent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email, 
          password,   
        }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      const token = data.body.token;

      dispatch(setToken(token));

      dispatch(fetchUserProfile());

      navigate('/user');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className='main bg-dark'>
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} className="fa fa-user-circle sign-in-icon"/>
        <h1>Sign In</h1>
        <form onSubmit={handleLogin}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input 
              type="text" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
      </section>  
    </div>
  );
};

export default SignInContent;
