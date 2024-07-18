import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [ntid, setNtid] = useState('');
  const [role, setRole] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [logincount, setLogincount] = useState(0);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3005/logincount', { ntid, role });
      setResponseMessage(response.data.message);
      if (response.data.message === 'Proceed to login') {
        setLogincount(response.data.count);
        navigate('/home', { state: { logincount: response.data.count } });
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container" style={{ display: 'grid', gap: '25px' }}>
          <input type="text" placeholder="Enter ntid" onChange={(e) => setNtid(e.target.value)} value={ntid} />
          <input type="text" placeholder="Enter role" onChange={(e) => setRole(e.target.value)} value={role} />
          <button type="submit">Login</button>
        </div>
      </form>
      <div>Response: {responseMessage}</div>
      <div className="userCount">Login user count: {logincount}</div>
    </>
  );
}

export default Login;
