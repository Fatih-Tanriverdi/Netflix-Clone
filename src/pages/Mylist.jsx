import React from 'react';
import SavedShows from '../components/SavedShows';

export default function Mylist() {
    return (
        <div>
            <div className='rounded w-full text-white'>
                <img className='w-full h-[250px] object-cover rounded' src='https://assets.nflxext.com/ffe/siteui/vlv3/f1c3c4eb-2fea-42c7-9ebd-1c093bd8a69d/120567a4-143d-40e9-b2ac-85713045f7ba/TR-tr-20230403-popsignuptwoweeks-perspective_alpha_website_large.jpg' />
                <div className='absolute top-[20%] p-4 md:p-8'>
                    <h1 className='text-3xl md:text-5xl font-bold'>Listem</h1>
                </div>
            </div>
            <SavedShows />
        </div>
    )
}