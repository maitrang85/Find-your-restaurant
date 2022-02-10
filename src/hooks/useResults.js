import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] =  useState('');

    const searchApi= async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 10,
                    term: searchTerm, 
                    location:'helsinki',
                    //locale: "fr_FR",
                    //latitude: 48.692054,
                    //longitude: 6.184417,
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    };

    // Call searchApi when component is first rendered
    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage]; 

};
