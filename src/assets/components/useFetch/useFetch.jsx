import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function useFetch(path,deps=[]) {
const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");
  
  const getData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BURL}/${path}`);

      setData(response.data);
    } catch (error) {
      setIsError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
    useEffect(() => {
      getData();
    }, deps);
    
  return { data, isLoading, isError };
   
}
