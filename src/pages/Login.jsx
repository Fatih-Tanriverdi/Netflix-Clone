import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';
import { GoogleButton } from 'react-google-button';

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { user, login } = UserAuth();
    const navigate = useNavigate();

    const { googleSignIn } = UserAuth();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn()
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await login(email, password)
            navigate('/')
        } catch (error) {
            console.log(error.message)
        };
    }

    return (
        <>
            <div className='w-full h-screen'>
                <img className='hidden sm:block absolute w-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/f1c3c4eb-2fea-42c7-9ebd-1c093bd8a69d/120567a4-143d-40e9-b2ac-85713045f7ba/TR-tr-20230403-popsignuptwoweeks-perspective_alpha_website_large.jpg' />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
                <div className='fixed w-full px-4 py-24 z-50'>
                    <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-4xl font-bold'>Giris Yap</h1>
                            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                                <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-600 rounded' type='email' placeholder='E-posta veya telefon numarası' />
                                <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-600 rounded' type='password' placeholder='Parola' />
                                <button className='bg-red-600 py-3 my-6 rounded font-bold'>Oturum Aç</button>
                                <div className='flex justify-between items-center text-sm text-gray-500'>
                                    <p><input className='mr-2' type='checkbox' />Beni Hatırla</p>
                                    <p>Yardım ister misiniz?</p>
                                </div>
                                <p id='buttons' className='py-8'>
                                    <span className='text-gray-500 '>
                                        Netflix'e katılmak ister misiniz?
                                    </span>{' '}
                                    <Link to='/signup'><p>Şimdi kaydolun.</p></Link>
                                    <div className='pt-10 pl-10'>
                                        <GoogleButton onClick={handleGoogleSignIn} />
                                    </div>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
