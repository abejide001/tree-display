import { useState, useEffect } from 'react';
import axios from "axios";

export const useFetch = (url) => {
    const [getTree, setGetTree] = useState([]);
    async function getTrees() {
        const response = await axios.get(url);
        setGetTree(response.data);
    }

    useEffect(() => {
        getTrees();
    }, [url]);
    return {
        getTree
    }
};
