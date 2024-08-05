'use client';  
 
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

export default function App() {
  const [entries, setEntries] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/fetch');
        setEntries(response.data.data.entries || []);
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    fetchData();
    const intervalFetch = setInterval(fetchData, 2000);

    return () => clearInterval(intervalFetch);
  }, []);

   
  const options = entries.map(entry => ({
    value: entry.id,   
    label: entry.name
  }));

  return (
    <div className="App">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}
