import {useEffect, useState} from 'react';

const useGetMovies = (API, element) => {

    const [movies, setMovies] = useState([]);

    useEffect( async() => {
      
        const response = await fetch(API);
        response.json().then(responseJson => setMovies(responseJson.results))
    }, [element]);

    return movies;
}

export default useGetMovies;