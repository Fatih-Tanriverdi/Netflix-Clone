import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='navbar bg-black flex items-center justify-between p-4  z-[100] w-full fixed'>
      <Link to='/'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>
          NETFLIX
        </h1>
      </Link>
      <div id='buttons' className='flex items-center pl-[175px] absolute'>
        <Link to='/'>
          <p className='text-white font-bold pr-4 cursor-pointer'>
            Ana Sayfa
          </p>
        </Link>
        <Link to='/series'>
          <p className='text-white font-bold pr-4 cursor-pointer'>
            Diziler
          </p>
        </Link>
        <Link to='/movies'>
          <p className='text-white font-bold pr-4 cursor-pointer'>
            Filmler
          </p>
        </Link>
        <Link to='/populer'>
          <p className='text-white font-bold pr-4 cursor-pointer'>
            Yeni ve Popüler
          </p>
        </Link>
        <Link to='/mylist'>
          <p className='text-white font-bold pr-4 cursor-pointer'>
            Listem
          </p>
        </Link>
      </div>
      {user?.email ? (
        <div>
          <Link to='/account'>
            <button className='text-white pr-4'>Hesap</button>
          </Link>
          <button
            onClick={handleLogout}
            className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white  hover:bg-white/40 transition-all'
          >
            Cıkış Yap
          </button>
        </div>
      ) : (
        <div>
          <Link to='/login'>
            <button className='text-white pr-4'>Giriş Yap</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white hover:bg-white/40 transition-all'>
              Kayıt Ol
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
