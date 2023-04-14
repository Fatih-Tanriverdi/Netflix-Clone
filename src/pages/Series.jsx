import React, { useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import requests from '../Requests';
import Axios from 'axios';

export default function Diziler({ item }) {


    const [like, setLike] = useState(false);
    const [saved, setSaved] = useState(false)
    const { user } = UserAuth();
    const [movies, setMovies] = useState([]);

    const movieID = doc(db, 'users', `${user?.email}`)

    const saveShow = async () => {
        if (user?.email) {
            setLike(!like)
            setSaved(true)
            await updateDoc(movieID, {
                savedShows: arrayUnion({
                    id: item.id,
                    title: item.title,
                    img: item.backdrop_path,
                }),
            })
        }
    }

    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(() => {
        Axios.get(requests.requestTrending).then((response) => {
            setMovies(response.data.results)
        })
    }, [])
    console.log(movie);

    return (
        <div className='pt-[100px]'>
            <h1 className='text-white text-5xl pl-7 pb-3'>Diziler</h1>
            {movies.map((movie) => (
                <div className='movie w-[200px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block curser-pointer relative p-2'>
                    <img className='rounded ml-5 w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt={movie?.title} />
                    <div className='absolute ml-5 top-0 left-0 w-full h-full text-white opacity-0 hover:opacity-100'>
                        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{movie?.title}
                        </p>
                        <p onClick={saveShow}>
                            {like ? <FaRegHeart className='absolute top-4 left-4 text-gray-300 hover:text-red-700' /> : <FaHeart className='absolute top-4 left-4 text-gray-300 hover:text-red-700' />}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

