import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, initialValue) => {
  const [getTree, setGetTree] = useState(initialValue);
  const getTrees = async () => {
    try {
      const response = await axios.get(url);
      setGetTree(response.data);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    getTrees();
  }, []);
  return {
    getTree,
  };
};

export default useFetch;
