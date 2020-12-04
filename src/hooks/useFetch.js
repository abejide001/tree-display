import { useState, useEffect } from 'react';
import axios from "axios";

export const useFetch = (url, initialValue) => {
    const [getTree, setGetTree] = useState(initialValue);
    async function getTrees() {
        try {
            const response = await axios.get(url);
            setGetTree(response.data);
        } catch (error) {
            throw error
        }
    }

    useEffect(() => {
        getTrees();
    }, []);
    return {
        getTree
    }
};
