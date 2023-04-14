import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase';

export default function Account() {

    const [user, setUser] = useState({});


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('User', currentUser)
        })
        return () => {
            unsubscribe();
        }
    })

    return (
        <>
            <div className='w-full h-screen'>
                <img className='hidden sm:block absolute w-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/f1c3c4eb-2fea-42c7-9ebd-1c093bd8a69d/120567a4-143d-40e9-b2ac-85713045f7ba/TR-tr-20230403-popsignuptwoweeks-perspective_alpha_website_large.jpg' />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
                <div className='fixed w-full px-4 py-24 z-50'>
                    <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-center text-bold text-4xl mb-5 border-b-2'>HESABIM</h1>
                            <h1 className='text-center text-bold text-2xl mb-3'>Hoşgeldin</h1>
                            <h1 className='text-center text-bold text-2xl mb-3'>{user.displayName}</h1>
                            <h1 className='text-center text-bold text-2xl mb-3'>{user.email}</h1>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

