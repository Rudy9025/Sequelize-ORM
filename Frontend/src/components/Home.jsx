import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const location = useLocation();
  const [count, setCount] = useState(location.state ? location.state.logincount : 0);

  useEffect(() => {
    async function fetchCount() {
      try {
        const response = await axios.get('http://localhost:3005/logincount');
        setCount(response.data.count);
      } catch (error) {
        console.error('Error fetching count', error);
      }
    }

    // Fetch count periodically
    const intervalId = setInterval(fetchCount, 5000);  

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Login user count: {count}</p>
    </div>
  );
}

export default Home;
