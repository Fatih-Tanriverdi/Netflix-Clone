import Axios from 'axios';
import { useEffect, useState } from 'react';
import requests from '../Requests';
import React from 'react';

export default function Main() {


    const [movies, setMovies] = useState([]);
    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(() => {
        Axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results)
        })
    }, [])
    console.log(movie);


    return (
        <div className='w-full h-[650px] pt-[72px] text-white'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[650px] bg-gradient-to-b from-black/90'></div>
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}>
                </img>
                <div className='absolute w-full top-[20%] p-0 md:p-4'>
                    <h1 className='text-3xl md:text-5xl mb-5'>{movie?.title}</h1>
                    <div>
                        <button
                            className=' rounded bg-gray-300 text-black hover:bg-red-700 hover:text-white py-2 px-5 mb-5 transition-all'>Oynat
                        </button>
                        <button
                            className='border rounded text-white hover hover:bg-gray-300 hover:text-black hover:border-white border-gray-300 py-2 px-5 ml-4 mb-5 transition-all'>Daha Fazla Bilgi
                        </button>
                    </div>
                    <p className='text-gray-400 text-sm mb-5'>Yayın Tarihi: {movie?.release_date}</p>
                    <p className='w-full md:max-w-[50%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{(movie?.overview)}</p>
                </div>
            </div>
        </div>
    )
}

