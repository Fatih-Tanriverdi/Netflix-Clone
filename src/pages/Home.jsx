import React from 'react'
import { Link } from 'react-router-dom'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

export default function Home() {
    return (
        <>
            <Main />
            <div>
                <Link to='/diziler'>
                    <div className='flex items-center' >
                        <h1 className='font-bold text-white text-3xl mt-5 ml-6 pt-[20px]'>
                            Yakında

                        </h1>
                        <p className='text-white pl-5 pt-[45px] hover:block hover:text-red-500 transition-all' >Daha Fazlası için Tıklayın</p>
                    </div>
                </Link>
                <Row rowID='1' fetchURL={requests.requestUpcoming} />
            </div>
            <div>
                <Link to='/populer'>
                    <div className='flex items-center' >
                        <h1 className='font-bold text-white text-3xl mt-5 ml-6 pt-[20px]'>
                            Yeni ve Popüler
                        </h1>
                        <p className='text-white pl-5 pt-[45px] hover:text-red-500 transition-all ' >Daha Fazlası için Tıklayın</p>
                    </div>
                </Link>
                <Row rowID='2' fetchURL={requests.requestPopular} />
            </div>
            <div>
                <Link to='filmler'>
                    <div className='flex items-center' >
                        <h1 className='font-bold text-white text-3xl mt-5 ml-6 pt-[20px]'>
                            Filmler
                        </h1>
                        <p className='text-white pl-5 pt-[45px] hover:text-red-500 transition-all ' >Daha Fazlası için Tıklayın</p>
                    </div>
                </Link>
                <Row rowID='3' fetchURL={requests.requestTrending} />
            </div>
            <div>
                <Link to='/diziler'>
                    <div className='flex items-center' >
                        <h1 className='font-bold text-white text-3xl mt-5 ml-6 pt-[20px]'>
                            Diziler
                        </h1>
                        <p className='text-white pl-5 pt-[45px] hover:text-red-500 transition-all ' >Daha Fazlası için Tıklayın</p>
                    </div>
                </Link>
                <Row rowID='4' fetchURL={requests.requestTopRated} />
            </div>
        </>
    )
}

