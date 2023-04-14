import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

export default function Movie({ item }) {


    const [like, setLike] = useState(false);
    const [saved, setSaved] = useState(false)
    const { user } = UserAuth();

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

    return (
        <div className='movie w-[200px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block curser-pointer relative p-2'>
            <img className='rounded ml-5 w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
            <div className='absolute ml-5 top-0 left-0 w-full h-full text-white opacity-0 hover:opacity-100'>
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}
                </p>
                <p onClick={saveShow}>
                    {like ? <FaRegHeart className='absolute top-4 left-4 text-gray-300 hover:text-red-700' /> : <FaHeart className='absolute top-4 left-4 text-gray-300 hover:text-red-700' />}
                </p>
            </div>
        </div>
    )
}


