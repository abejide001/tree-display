import { useState, useEffect } from 'react';
import axios from "axios";

export const useFetch = (url) => {
    const [getTree, setGetTree] = useState([]);
    async function getTrees() {
        try {
            const response = await axios.get(url);
            setGetTree(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTrees();
    }, [url]);
    return {
        getTree
    }
};
