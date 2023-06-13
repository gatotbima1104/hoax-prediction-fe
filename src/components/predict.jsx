import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../lib/axios';

const Predict = () => {
  const [data, setData] = useState('');

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/');
      setData(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div>
      {/* <h1>Welcome to predict</h1> */}
      {/* <p>{data}</p> */}
    </div>
  );
};

export default Predict;
