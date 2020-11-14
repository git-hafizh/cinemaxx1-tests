import React from 'react';
import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';
import { apiKey } from '../components/api';

export default function useFetchMovie(page) {
    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        trackPromise(
            axios.get(`https://api.themoviedb.org/3/movie/upcoming?${apiKey}&language=en-US&page=${page}`).then((result) => {
                const newMovies = result.data.results;
                setMovies([...movies, ...newMovies]);
            })
                .catch((error) => {
                    console.log(error);
                })
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    return [movies, setMovies];
}